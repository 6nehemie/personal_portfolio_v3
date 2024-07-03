import VideoContainer from '@/components/videos/VideoContainer';
import { EN as en } from '@/constants';

/**
 * Presentation section component.
 * @returns The presentation section component.
 */
const Presentation: React.FC = () => {
  return (
    <section className="xl:p-side w-full">
      <VideoContainer src={en.owner.videoPresentation} />
    </section>
  );
};

export default Presentation;
