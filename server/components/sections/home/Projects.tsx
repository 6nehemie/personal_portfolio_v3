import ProjectCard from '@/components/cards/ProjectCard';
import { EN as en } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Display all the projects cards.
 * @returns The Projects section component.
 */
const Projects = () => {
  return (
    <section className="grid grid-cols-2 xl:grid-cols-3 min-[1426px]:grid-cols-4 gap-4 lex w-full">
      {en.projects.map((project, index) => {
        return <ProjectCard project={project} key={index} />;
      })}
    </section>
  );
};
export default Projects;
