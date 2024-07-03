import RedirectButton from '@/components/buttons/RedirectButton';
import ProjectCard from '@/components/cards/ProjectCard';
import { EN as en } from '@/constants';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

/**
 * Display all the projects cards.
 * @returns The Projects section component.
 */
const Projects = () => {
  return (
    <section className="p-side w-full space-y-[60px]">
      {/* //? PROJECT CARDS */}
      <div className="grid grid-cols-2 xl:grid-cols-3 min-[1426px]:grid-cols-4 gap-4 w-full">
        {en.projects.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>

      {/* //? REDIRECT BUTTON */}
      <div className="flex justify-center">
        <RedirectButton asChild>
          <Link
            href={en.buttons.viewAll.href}
            className="relative flex flex-col mx-auto overflow-hidden group sm:hover:scale-[95%] transition-transform duration-300"
          >
            {/* To set up the button width since absolute is used below */}
            <div className="invisible">
              <span className="inline">{en.buttons.viewAll.label}</span>
              <ArrowUpRight size={16} className=" inline" />
            </div>

            <div className="absolute translate-y-0 space-x-1 sm:group-hover:-translate-y-[200%] transition-transform duration-200">
              <span className="inline">{en.buttons.viewAll.label}</span>
              <ArrowUpRight size={16} className=" inline" />
            </div>

            <div className="absolute translate-y-[200%] space-x-1 sm:group-hover:translate-y-0 transition-transform duration-200">
              <span className="inline">{en.buttons.viewAll.label}</span>
              <ArrowUpRight size={16} className=" inline" />
            </div>
          </Link>
        </RedirectButton>
      </div>
    </section>
  );
};
export default Projects;
