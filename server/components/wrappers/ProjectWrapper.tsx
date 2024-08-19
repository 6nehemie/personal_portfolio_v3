import Image from 'next/image';
import ButtonArrowUpRight from '../buttons/ButtonArrowUpRight';
import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import StackIcon from '@/utils/stackIcons/StackIcon';

const ProjectWrapper = ({
  imageUrl,
  title,
  children,
  githubUrl,
  figmaUrl,
  liveUrl,
  stack,
}: {
  imageUrl: string;
  title: string;
  children: React.ReactNode;
  githubUrl?: string;
  figmaUrl?: string;
  liveUrl?: string;
  stack?: string[];
}) => {
  return (
    <div className="xl:p-side xl:pt-10 pb-10 space-y-10">
      <Image
        src={imageUrl}
        alt={title}
        width={1728}
        height={1117}
        priority
        className="w-full max-xl:h-1/2 object-cover xl:rounded-md overflow-hidden"
      />

      <div className="flex gap-14 w-full mx-auto max-xl:p-side">
        <div className="space-y-10">
          <div className="space-y-2.5">
            <div className="flex justify-between">
              <h1 className="text-3xl font-medium">{title}</h1>

              {/* {liveUrl && (
                <Button asChild className="bg-inherit hover:bg-inherit p-0">
                  <Link
                    href={liveUrl}
                    target="_blank"
                    className={cn(
                      'relative flex gap-2 group overflow-hidden text-sm h-5'
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
              )} */}
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

              {liveUrl && (
                <ButtonArrowUpRight
                  href={liveUrl}
                  target="_blank"
                  label={'Preview'}
                  // iconStyle='hidden'
                  className="block w-max text-nm-gray-200 hover:text-white transition-colors duration-200"
                />
              )}
            </div>
          </div>

          <div className="text-nm-gray-200">{children}</div>
        </div>

        <div className="max-w-[348px] w-full text-sm space-y-5">
          <h3 className="text-sm font-medium">Stack</h3>
          <div className="flex flex-auto flex-wrap gap-2.5">
            {stack?.map((stackItem) => {
              const stackIcon: ReactNode = StackIcon(stackItem);

              return (
                <div key={stackItem} className="flex items-center gap-2">
                  {stackIcon}
                  <span className="fill-white whitespace-nowrap">
                    {stackItem}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectWrapper;
