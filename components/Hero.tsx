// --- FILE: components/Hero.tsx ---
const Hero = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark mb-4">
        Your Life in History
      </h1>
      <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
        Discover the world&apos;s story, woven with yours. Enter your birth year to generate a personalized timeline of historical and cultural events.
      </p>
    </div>
  );
};

export default Hero;
