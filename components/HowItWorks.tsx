// --- FILE: components/HowItWorks.tsx ---
import { GlobeAltIcon, CalendarDaysIcon, ShareIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    icon: CalendarDaysIcon,
    title: 'Enter Your Birth Year',
    description: 'Provide the year you were born to begin your personalized journey through time.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Discover Your Past',
    description: 'We generate a unique timeline of world events, top movies, and hit songs for each year of your life.',
  },
  {
    icon: ShareIcon,
    title: 'Share Your Story',
    description: 'Easily share your fascinating personal timeline with friends and family on social media.',
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-white py-12 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-brand-dark mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div className="bg-brand-secondary text-white rounded-full p-4 mb-4">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
