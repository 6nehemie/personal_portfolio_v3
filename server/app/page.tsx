import Description from '@/components/sections/home/Description';
import Presentation from '@/components/sections/home/Presentation';
import Projects from '@/components/sections/home/Projects';

/**
 * Home page of the application.
 * @returns The Home page component.
 */
export default function Home() {
  return (
    <div className="relative w-full space-y-[160px]">
      <Description />
      <Projects />

      <Presentation />
    </div>
  );
}
