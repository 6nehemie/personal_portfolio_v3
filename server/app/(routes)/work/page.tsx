import ProjectsContainer from '@/components/sections/projects/ProjectsContainer';
import PageHeader from '@/components/sections/reutilisable/PageHeader';

/**
 * The Work page
 * @returns The Work page component.
 */
const Work = () => {
  return (
    <div className="p-side space-y-[160px] py-10">
      <div className="space-y-20">
        <PageHeader
          title="Work"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              praesentium quasi adipisci repellendus nam maxime consectetur quo
              nisi nulla rerum? Asperiores iste quibusdam incidunt molestias
              fugit, accusantium facere odit consectetur!"
        />

        <ProjectsContainer />
      </div>
    </div>
  );
};
export default Work;
