import { cn } from '@/lib/utils';
import StackIcon from '@/utils/stackIcons/StackIcon';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import ButtonArrowUpRight from '../buttons/ButtonArrowUpRight';
import ContributorCard from '../cards/ContributorCard';
import { Button } from '../ui/button';

interface Contributors {
  imageUrl: string;
  fullName: string;
  linkedInUrl: string;
}

/**
 * Display a project wrapper with the project image, title, description, stack, and team members
 * @imageUrl - the image of the project
 * @title - the title of the project
 * @children - the description of the project
 * @githubUrl - the github url of the project
 * @figmaUrl - the figma url of the project
 * @liveUrl - the live url of the project
 * @stack - the stack of the project
 * @contributors - the team members of the project
 * @creationDate - the creation date of the project
 * @returns The project wrapper component.
 */
const ProjectWrapper = ({
  imageUrl,
  title,
  children,
  githubUrl,
  figmaUrl,
  liveUrl,
  stack,
  contributors,
  creationDate,
}: {
  imageUrl: string;
  title: string;
  children: React.ReactNode;
  githubUrl?: string;
  figmaUrl?: string;
  liveUrl?: string;
  stack?: string[];
  contributors?: Contributors[];
  creationDate?: string;
}) => {
  return (
    <div className="xl:p-side xl:pt-10 pb-10 space-y-10">
      <Image
        src={imageUrl}
        alt={title}
        width={1728}
        height={1117}
        priority
        className="w-full max-[537px]:h-[34%] object-cover xl:rounded-md overflow-hidden"
      />

      <div className="flex gap-14 w-full mx-auto max-xl:p-side">
        <div className="space-y-5 max-xl:space-y-8 w-full">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-medium">{title}</h1>

              {liveUrl && (
                <Button asChild className="bg-inherit hover:bg-inherit p-0">
                  <Link
                    href={liveUrl}
                    target="_blank"
                    className={cn(
                      'relative flex gap-2 group overflow-hidden text-base xl:text-lg h-5'
                    )}
                  >
                    <div className="invisible">
                      <span>Preview</span>
                    </div>

                    <div className="absolute left-0 translate-y-0 space-x-1 sm:group-hover:-translate-y-[200%] transition-transform duration-200">
                      <span>Preview</span>
                    </div>

                    <div className="absolute left-0 translate-y-[200%] space-x-1 sm:group-hover:translate-y-0 transition-transform duration-200">
                      <span>Preview</span>
                    </div>
                  </Link>
                </Button>
              )}
            </div>

            <div className="space-x-5">
              {githubUrl && (
                <ButtonArrowUpRight
                  href={githubUrl}
                  target="_blank"
                  label={'Github'}
                  // iconStyle='hidden'
                  className="block w-max text-nm-gray-200 hover:text-white transition-colors duration-200"
                />
              )}

              {figmaUrl && (
                <ButtonArrowUpRight
                  href={figmaUrl}
                  target="_blank"
                  label={'Figma'}
                  // iconStyle='hidden'
                  className="block w-max text-nm-gray-200 hover:text-white transition-colors duration-200"
                />
              )}

              {/* {liveUrl && (
                <ButtonArrowUpRight
                  href={liveUrl}
                  target="_blank"
                  label={'Preview'}
                  // iconStyle='hidden'
                  className="block w-max text-nm-gray-200 hover:text-white transition-colors duration-200"
                />
              )} */}
            </div>
          </div>

          <div className="flex flex-auto flex-wrap gap-2.5 text-sm xl:hidden">
            {stack?.map((stackItem) => {
              const stackIcon: ReactNode = StackIcon(stackItem);

              return (
                <div
                  key={stackItem}
                  className="flex items-center gap-1.5 py-1 px-2 rounded-md bg-nm-gray-700"
                >
                  {stackIcon}
                  <span className="text-nm-gray-200 whitespace-nowrap font-medium">
                    {stackItem}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="text-nm-gray-200 space-y-5">{children}</div>

          <div className="xl:hidden w-full text-sm space-y-10">
            <div className="space-y-5">
              <h3 className="text-sm font-medium text-nm-gray-200">Team</h3>

              <div className="space-y-5">
                {contributors?.map((contributor) => {
                  return (
                    <ContributorCard
                      key={contributor.fullName}
                      imageUrl={contributor.imageUrl}
                      fullName={contributor.fullName}
                      linkedInUrl={contributor.linkedInUrl}
                    />
                  );
                })}
              </div>
            </div>

            <div>
              {creationDate && (
                <p className="text-nm-gray-200 font-medium">
                  Created on <span>{creationDate}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="max-xl:hidden max-w-[348px] w-full text-sm space-y-10">
          <div className="space-y-5">
            <h3 className="text-lg text-nm-gray-200 mt-0.5">Stack</h3>

            <div className="flex flex-auto flex-wrap gap-2.5">
              {stack?.map((stackItem) => {
                const stackIcon: ReactNode = StackIcon(stackItem);

                return (
                  <div
                    key={stackItem}
                    className="flex items-center gap-1.5 py-1 px-2 rounded-md bg-nm-gray-700"
                  >
                    {stackIcon}
                    <span className="text-nm-gray-200 whitespace-nowrap font-medium">
                      {stackItem}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg text-nm-gray-200">Team</h3>

            <div className="space-y-5">
              {contributors?.map((contributor) => {
                return (
                  <ContributorCard
                    key={contributor.fullName}
                    imageUrl={contributor.imageUrl}
                    fullName={contributor.fullName}
                    linkedInUrl={contributor.linkedInUrl}
                  />
                );
              })}
            </div>
          </div>

          <div>
            {creationDate && (
              <p className="text-nm-gray-200 font-medium">
                Created on <span>{creationDate}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectWrapper;
