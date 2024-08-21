import ProjectWrapper from '@/components/wrappers/ProjectWrapper';

const stack = [
  'Vite',
  'React',
  'TypeScript',
  'TailwindCSS',
  'Node.js',
  'Express',
  'jwt',
  // 'aws',
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
 * The CareerCompass project page
 * @returns The CareerCompass project page component
 */
const CareerCompass = async () => {
  return (
    <ProjectWrapper
      imageUrl="https://utfs.io/f/d3cb9692-d33b-424f-8364-4c47b06da09d-z58s10.png"
      title="Career Compass"
      stack={stack}
      creationDate="Sep 23, 2023"
      contributors={contributors}
      liveUrl="https://career-compass.ch/"
      githubUrl="https://github.com/NehemieMbg/nehemie_fullstack-app"
    >
      <div>test</div>
    </ProjectWrapper>
  );
};
export default CareerCompass;
