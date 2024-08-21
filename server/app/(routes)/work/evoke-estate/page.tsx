import MarkdownWrapper from '@/components/wrappers/MarkdownWrapper';
import ProjectWrapper from '@/components/wrappers/ProjectWrapper';
import { loadMarkdown } from '@/utils/functions';

const stack = [
  'Figma',
  'Java',
  'TypeScript',
  'Spring Boot',
  'Railway',
  'Next.js',
  'Zod',
  'aws',
  'Shadcn',
  'TailwindCSS',
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
const EvokeEstate = async () => {
  const markdownContent = await loadMarkdown('docs/evoke-estate/main.md');

  return (
    <ProjectWrapper
      imageUrl="https://utfs.io/f/f5623a6f-89be-4a35-bfae-f1b24268539c-mulkwc.png"
      title="Evoke Estate"
      stack={stack}
      creationDate="Mar 26, 2024"
      contributors={contributors}
      // liveUrl="https://evoke-estate.vercel.app/"
      githubUrl="https://github.com/NehemieMbg/evoke-estate"
      figmaUrl="https://www.figma.com/design/AOlNtIWl5P0ZvTz0rtsyIw/Evoke-Estate?node-id=0-1&t=s1102OL8Izh3zT8L-0"
    >
      <MarkdownWrapper content={markdownContent} />
    </ProjectWrapper>
  );
};
export default EvokeEstate;
