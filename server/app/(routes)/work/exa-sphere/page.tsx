import MarkdownWrapper from '@/components/wrappers/MarkdownWrapper';
import ProjectWrapper from '@/components/wrappers/ProjectWrapper';
import { loadMarkdown } from '@/utils/functions';

const stack = [
  'Figma',
  'Java',
  'TypeScript',
  'Spring Boot',
  'Resend',
  'Open Ai',
  'Railway',
  'Next.js',
  'Zod',
  'aws',
  'OAuth',
  'Shadcn',
  'TailwindCSS',
  'Redux Toolkit',
  'Vercel',
  'Upstach',
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
const ExaSphere = async () => {
  const markdownContent = await loadMarkdown('docs/exa-sphere.md');

  return (
    <ProjectWrapper
      title="ExaSphere"
      stack={stack}
      creationDate="Apr 7, 2024"
      contributors={contributors}
      liveUrl="https://exa-sphere.vercel.app"
      imageUrl="https://utfs.io/f/4131d085-e2e3-4fa3-9306-b18ca2b3c893-jq6x79.png"
      githubUrl="https://github.com/NehemieMbg/exa-sphere"
      figmaUrl="https://www.figma.com/design/GluIauxVpVQ4xv037S9478/Exa-Sphere?t=HIjdl9YCLwol7zU1-1"
    >
      <MarkdownWrapper content={markdownContent} />
    </ProjectWrapper>
  );
};
export default ExaSphere;
