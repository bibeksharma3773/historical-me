import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

// Define the structure of our timeline data
interface TimelineEvent {
  year: number;
  worldEvents: string[];
  topMovie: {
    title: string;
    posterUrl: string;
  } | null;
  topSong: {
    title: string;
    artist: string;
  } | null;
}

// Helper function to fetch and parse HTML from Wikipedia
async function fetchWikipediaContent(url: string) {
  try {
    const response = await fetch(url, { headers: { 'User-Agent': 'HistoricalMeApp/1.0' } });
    if (!response.ok) return null;
    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null;
  }
}

// Scrape world events from a Wikipedia year page
function scrapeWorldEvents(html: string): string[] {
  const $ = cheerio.load(html);
  const events: string[] = [];
  
  // Look for a section like "Events" and then list items
  // This is a best-effort scrape and might need adjustment if Wikipedia's structure changes
  $('h2:contains("Events")').nextUntil('h2').find('li').slice(0, 5).each((_, el) => {
    const text = $(el).text().replace(/\[\d+\]/g, '').trim(); // Clean up citation marks
    if (text) events.push(text);
  });

  // Fallback if the first method fails
  if (events.length < 3) {
    $('p').slice(1, 4).each((_, el) => {
        const text = $(el).text().replace(/\[\d+\]/g, '').trim();
        if (text) events.push(text.split('. ')[0] + '.'); // Take the first sentence
    });
  }

  return events.slice(0, 3); // Return max 3 events
}

// Scrape the #1 song from Billboard year-end chart pages
function scrapeTopSong(html: string): { title: string; artist: string } | null {
  const $ = cheerio.load(html);
  // Find the main table and get the first data row
  const firstRow = $('.wikitable tbody tr').eq(1);
  if (firstRow.length) {
    const title = firstRow.find('td').eq(1).text().replace(/"/g, '').trim();
    const artist = firstRow.find('td').eq(2).text().trim();
    if (title && artist) {
      return { title, artist };
    }
  }
  return null;
}

// Fetch the top movie from TMDb API
async function fetchTopMovie(year: number) {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    console.warn('TMDB_API_KEY is not set.');
    return null;
  }
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_year=${year}&sort_by=revenue.desc&language=en-US`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const movie = data.results[0];
      return {
        title: movie.title,
        posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching top movie for ${year}:`, error);
    return null;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const birthYearParam = searchParams.get('birthYear');

  if (!birthYearParam) {
    return NextResponse.json({ message: 'Birth year is required' }, { status: 400 });
  }

  const birthYear = parseInt(birthYearParam, 10);
  const currentYear = new Date().getFullYear();

  if (isNaN(birthYear) || birthYear < 1920 || birthYear > currentYear) {
    return NextResponse.json({ message: `Invalid year. Please provide a year between 1920 and ${currentYear}.` }, { status: 400 });
  }

  const years = Array.from({ length: currentYear - birthYear + 1 }, (_, i) => birthYear + i);

  // Process all years in parallel for better performance
  const promises = years.map(async (year) => {
    // Fetch all data sources concurrently for a single year
    const [worldEventsHtml, topSongHtml, topMovie] = await Promise.all([
      fetchWikipediaContent(`https://en.wikipedia.org/wiki/${year}`),
      fetchWikipediaContent(`https://en.wikipedia.org/wiki/Billboard_Year-End_Hot_100_singles_of_${year}`),
      fetchTopMovie(year),
    ]);

    const worldEvents = worldEventsHtml ? scrapeWorldEvents(worldEventsHtml) : [];
    const topSong = topSongHtml ? scrapeTopSong(topSongHtml) : null;

    return {
      year,
      worldEvents,
      topMovie,
      topSong,
    };
  });

  try {
    const results = await Promise.all(promises);
    return NextResponse.json(results);
  } catch (error) {
    console.error("Failed to generate timeline:", error);
    return NextResponse.json({ message: "Failed to generate timeline data." }, { status: 500 });
  }
}
