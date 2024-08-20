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
 * The Evoke Estate project page
 * @returns The Evoke Estate project page component
 */
const EvokeEstate = () => {
  return (
    <ProjectWrapper
      imageUrl="https://utfs.io/f/f5623a6f-89be-4a35-bfae-f1b24268539c-mulkwc.png"
      title="Evoke Estate"
      stack={stack}
      creationDate="March 26, 2024"
      contributors={contributors}
      // liveUrl="https://evoke-estate.vercel.app/"
      githubUrl="https://github.com/NehemieMbg/evoke-estate"
      figmaUrl="https://www.figma.com/design/AOlNtIWl5P0ZvTz0rtsyIw/Evoke-Estate?node-id=0-1&t=s1102OL8Izh3zT8L-0"
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
export default EvokeEstate;
