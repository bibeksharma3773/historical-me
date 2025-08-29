'use client';

import { useState } from 'react';
import Head from 'next/head';
import Timeline from '../components/Timeline';
import { TimelineData } from '../types';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import SocialShare from '../components/SocialShare';

export default function Home() {
  const [birthYear, setBirthYear] = useState<string>('');
  const [timelineData, setTimelineData] = useState<TimelineData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedYear, setSubmittedYear] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const year = parseInt(birthYear, 10);
    const currentYear = new Date().getFullYear();

    if (isNaN(year) || year < 1920 || year > currentYear) {
      setError(`Please enter a valid year between 1920 and ${currentYear}.`);
      return;
    }

    setIsLoading(true);
    setError(null);
    setTimelineData(null);
    setSubmittedYear(birthYear);

    try {
      const response = await fetch(`/api/timeline?birthYear=${birthYear}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong.');
      }
      const data: TimelineData[] = await response.json();
      setTimelineData(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  const pageTitle = submittedYear 
    ? `My Historical Timeline: ${submittedYear} - ${new Date().getFullYear()}` 
    : "Historical Me - Your Life in History";
  
  const pageDescription = submittedYear
    ? `A personalized timeline of historical and cultural events from ${submittedYear} to the present day.`
    : "Discover the world's story, woven with yours. Enter your birth year to generate a personalized timeline.";

  return (
    <>
      <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:type" content="website" />
      </Head>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <Hero />

        <div id="generator" className="max-w-2xl mx-auto my-12 p-6 bg-white rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <label htmlFor="birthYear" className="block text-lg font-medium text-slate-700 mb-2">
              Enter Your Birth Year
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                id="birthYear"
                type="number"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                placeholder="e.g., 1995"
                className="flex-grow w-full px-4 py-3 text-lg border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary transition"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto bg-brand-primary hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Generating...' : 'Generate My Timeline'}
              </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>

        {isLoading && (
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-brand-secondary"></div>
                <p className="mt-4 text-lg text-slate-600">Building your personal history... this may take a moment.</p>
            </div>
        )}

        {timelineData && (
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your Life in History: {submittedYear} - {new Date().getFullYear()}</h2>
            <p className="text-center text-slate-600 mb-8 max-w-3xl mx-auto">
              Scroll down to explore the major historical events, top movies, and hit songs that defined each year of your life.
            </p>
            <SocialShare birthYear={submittedYear!} />
            <Timeline data={timelineData} birthYear={parseInt(submittedYear!, 10)} />
          </div>
        )}
        
        {!timelineData && !isLoading && <HowItWorks />}
      </div>
    </>
  );
}
