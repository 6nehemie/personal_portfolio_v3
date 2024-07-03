import { cn } from '@/lib/utils';
import { Project } from '@/utils/types/project-type';
import { PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

/**
 * This component displays a project card.
 * @project the object that contains the project details
 * @returns The project card component.
 */
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      href={project.href}
      className="relative w-full rounded-[4px] overflow-hidden group"
    >
      <Image
        src={project.image}
        alt="project"
        width={290}
        height={412}
        className="w-full aspect-auto sm:group-hover:scale-[1.08] transition-transform duration-300"
      />

      <div className="absolute top-0 right-0 left-0 bottom-0 bg-nm-gray-900 bg-opacity-0 sm:group-hover:bg-opacity-20 transition-colors duration-300"></div>

      {/* Plus button that shows only on hover */}
      <div
        className={cn(
          'absolute z-[10] flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full bg-white opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300',
          {}
        )}
      >
        <PlusIcon className="size-4 text-black" strokeWidth={1.8} />
      </div>
    </Link>
  );
};
export default ProjectCard;
