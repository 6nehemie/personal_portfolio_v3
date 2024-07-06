import ProjectCard from '@/components/cards/ProjectCard';
import { EN as en } from '@/constants';

/**
 * Display all the projects cards.
 * @returns The ProjectsContainer section component.
 */
const ProjectsContainer = () => {
  return (
    <div className="w-full space-y-[60px]">
      {/* //? PROJECT CARDS */}
      <div className="grid grid-cols-2 xl:grid-cols-3 min-[1426px]:grid-cols-4 gap-2.5 sm:gap-4 w-full">
        {en.projects.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
    </div>
  );
};
export default ProjectsContainer;
