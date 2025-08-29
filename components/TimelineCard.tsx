// --- FILE: components/TimelineCard.tsx ---
import Image from 'next/image';
import { TimelineData } from '../types';
import { FilmIcon, MusicalNoteIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/solid';

interface TimelineCardProps {
  item: TimelineData;
}

const TimelineCard = ({ item }: TimelineCardProps) => {
  return (
    <div>
      <h3 className="vertical-timeline-element-title text-2xl font-bold text-brand-dark">{item.year}</h3>
      
      {/* World Events Section */}
      {item.worldEvents && item.worldEvents.length > 0 && (
        <div className="mt-4">
          <h4 className="flex items-center text-lg font-semibold text-slate-700 mb-2">
            <GlobeEuropeAfricaIcon className="h-5 w-5 mr-2 text-brand-secondary" />
            World Events
          </h4>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            {item.worldEvents.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Top Movie Section */}
      {item.topMovie && (
        <div className="mt-4 pt-4 border-t border-slate-200">
          <h4 className="flex items-center text-lg font-semibold text-slate-700 mb-2">
            <FilmIcon className="h-5 w-5 mr-2 text-brand-secondary" />
            #1 Movie of the Year
          </h4>
          <div className="flex items-center gap-4">
            {item.topMovie.posterUrl.includes('null') ? (
                 <div className="w-24 h-36 bg-slate-200 flex items-center justify-center text-center text-xs text-slate-500 rounded">No Poster Available</div>
            ) : (
                <Image
                    src={item.topMovie.posterUrl}
                    alt={`Poster for ${item.topMovie.title}`}
                    width={96}
                    height={144}
                    className="rounded-md shadow-md"
                />
            )}
            <p className="font-medium text-slate-800">{item.topMovie.title}</p>
          </div>
        </div>
      )}

      {/* Top Song Section */}
      {item.topSong && (
        <div className="mt-4 pt-4 border-t border-slate-200">
          <h4 className="flex items-center text-lg font-semibold text-slate-700 mb-2">
            <MusicalNoteIcon className="h-5 w-5 mr-2 text-brand-secondary" />
            #1 Song of the Year
          </h4>
          <p className="text-slate-600">
            <span className="font-medium text-slate-800">&quot;{item.topSong.title}&quot;</span> by {item.topSong.artist}
          </p>
        </div>
      )}

      {/* Fallback for no data */}
      {!item.worldEvents?.length && !item.topMovie && !item.topSong && (
        <p className="text-slate-500 mt-4">No specific data highlights available for this year.</p>
      )}
    </div>
  );
};

export default TimelineCard;
