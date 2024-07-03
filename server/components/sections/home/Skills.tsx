import { EN as en } from '@/constants';
import Image from 'next/image';

/**
 * Skills Section
 * @returns The Skills section component.
 */
const Skills = () => {
  return (
    <section className="p-side w-full space-y-8">
      <h2 className="text-2xl">Development Stack</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
        {en.skills.technologies.map((tech, index) => {
          return (
            <div key={index} className="relative rounded-md ">
              <Image
                src={tech.url}
                alt={tech.name}
                width={352}
                height={236}
                className="w-full h-full object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Skills;
