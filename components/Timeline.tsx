// --- FILE: components/Timeline.tsx ---
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineData } from '../types';
import TimelineCard from './TimelineCard';

interface TimelineProps {
  data: TimelineData[];
  birthYear: number;
}

const Timeline = ({ data, birthYear }: TimelineProps) => {
  return (
    <div className="mt-12">
      <VerticalTimeline>
        {data.map((item) => (
          <VerticalTimelineElement
            key={item.year}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fff', color: '#334155' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date={`${item.year} (Age: ${item.year - birthYear})`}
            iconStyle={{ background: '#3b82f6', color: '#fff' }}
            icon={<div className="flex justify-center items-center w-full h-full font-bold">{String(item.year).slice(-2)}</div>}
          >
            <TimelineCard item={item} />
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
            iconStyle={{ background: '#1e40af', color: '#fff' }}
            icon={<div className="flex justify-center items-center w-full h-full font-bold">...</div>}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
