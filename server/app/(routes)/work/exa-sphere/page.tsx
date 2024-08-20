import ProjectWrapper from '@/components/wrappers/ProjectWrapper';

const stack = [
  'Figma',
  'Next.js',
  'Nest.js',
  'Zod',
  'Redux Toolkit',
  'TailwindCSS',
  'Shadcn',
  'OAuth',
  'Stripe',
  'aws',
  'Vercel',
];

const contributors = [
  {
    fullName: 'Nehemie Mombanga',
    linkedInUrl: 'https://www.linkedin.com/in/nehemie-mombanga',
    imageUrl:
      'https://utfs.io/f/35860e83-5268-44f8-bd9e-59e17129c36f-mib5ei.png',
  },
];

/**
 * The ExaSphere project page
 * @returns The ExaSphere project page component
 */
const ExaSphere = () => {
  return (
    <ProjectWrapper
      title="ExaSphere"
      stack={stack}
      creationDate="May 23, 2024"
      contributors={contributors}
      liveUrl="https://exa-sphere.vercel.app"
      imageUrl="https://utfs.io/f/4131d085-e2e3-4fa3-9306-b18ca2b3c893-jq6x79.png"
      githubUrl="https://github.com/NehemieMbg/exa-sphere"
      figmaUrl="https://www.figma.com/design/GluIauxVpVQ4xv037S9478/Exa-Sphere?t=HIjdl9YCLwol7zU1-1"
    >
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum
          quidem totam odit dolores voluptatem excepturi atque, expedita
          nesciunt aliquid fuga rem nulla laboriosam officiis sed delectus
          sequi! Debitis, deleniti!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum
          quidem totam odit dolores voluptatem excepturi atque, expedita
          nesciunt aliquid fuga rem nulla laboriosam officiis sed delectus
          sequi! Debitis, deleniti!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum
          quidem totam odit dolores voluptatem excepturi atque, expedita
          nesciunt aliquid fuga rem nulla laboriosam officiis sed delectus
          sequi! Debitis, deleniti!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum
          quidem totam odit dolores voluptatem excepturi atque, expedita
          nesciunt aliquid fuga rem nulla laboriosam officiis sed delectus
          sequi! Debitis, deleniti!
        </p>
      </div>
    </ProjectWrapper>
  );
};
export default ExaSphere;
