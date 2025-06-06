import Blogs from '@/components/sections/home/Blogs';
import Description from '@/components/sections/home/Description';
import Presentation from '@/components/sections/home/Presentation';
import Projects from '@/components/sections/home/Projects';
import Skills from '@/components/sections/home/Skills';

/**
 * Home page of the application.
 * @returns The Home page component.
 */
export default function Home() {
  return (
    <div className="relative w-full space-y-[160px] py-10">
      <Description/>

      <Projects count={4}/>

      <Presentation/>

      <Skills/>

      <Blogs/>
    </div>
  );
}
