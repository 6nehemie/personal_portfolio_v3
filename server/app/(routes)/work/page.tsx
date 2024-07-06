import ProjectsContainer from '@/components/sections/projects/ProjectsContainer';

/**
 * The Work page
 * @returns The Work page component.
 */
const Work = () => {
  return (
    <div className="p-side space-y-[160px]">
      <div className="space-y-20">
        <div className="space-y-10">
          <div className="space-y-5">
            <h1 className="text-2xl">Work</h1>
            <p className="text-nm-gray-200 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              praesentium quasi adipisci repellendus nam maxime consectetur quo
              nisi nulla rerum? Asperiores iste quibusdam incidunt molestias
              fugit, accusantium facere odit consectetur!
            </p>
          </div>

          <div className="w-full h-[1px] bg-nm-gray-700"></div>
        </div>
        <ProjectsContainer />
      </div>
    </div>
  );
};
export default Work;
