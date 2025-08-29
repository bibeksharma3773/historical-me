import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Historical Me',
  description: 'Learn about the mission and purpose of Historical Me.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-brand-dark mb-6">About Historical Me</h1>
      <div className="prose lg:prose-xl text-slate-700">
        <p>
          Welcome to Historical Me, a digital time capsule designed to connect your personal story with the grand narrative of world history. Our mission is to provide a unique and engaging way for you to see how your life has unfolded against the backdrop of major global events, cultural milestones, and scientific breakthroughs.
        </p>
        <p>
          We believe that understanding our past—both personal and collective—gives us a richer perspective on our present. By simply entering your birth year, you unlock a personalized timeline that weaves together the moments that shaped the world with the years that shaped you.
        </p>
        <h2 className="text-2xl font-bold text-brand-dark mt-8">How It Works</h2>
        <p>
          Our application leverages powerful APIs from trusted sources like Wikipedia and The Movie Database (TMDb) to gather a vast amount of information. Our backend then intelligently curates this data to present you with the most significant highlights for each year of your life, including:
        </p>
        <ul>
          <li>Pivotal world events that defined the year.</li>
          <li>The number one movie at the box office that captured the world's imagination.</li>
          <li>The chart-topping song that became the soundtrack of that year.</li>
        </ul>
        <p>
          We are passionate about history, technology, and storytelling. Historical Me is a project born from the desire to make history more accessible, personal, and relatable for everyone.
        </p>
        <p>
          Thank you for visiting. We hope you enjoy your journey through time!
        </p>
      </div>
    </div>
  );
}

