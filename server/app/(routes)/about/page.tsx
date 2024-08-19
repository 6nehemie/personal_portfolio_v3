import Description from '@/components/sections/home/Description';
import Presentation from '@/components/sections/home/Presentation';
import Skills from '@/components/sections/home/Skills';
import PageHeader from '@/components/sections/reutilisable/PageHeader';
import Separator from '@/components/sections/reutilisable/Separator';
import { about } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';

/**
 * About page
 * @returns The About page component.
 */
const About = () => {
  return (
    <div className="py-10">
      <div className="p-side">
        <PageHeader title="About" />
      </div>

      <div className="space-y-[160px]">
        <Description />

        <Presentation />

        <div className="p-side space-y-[160px]">
          <p className="text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* <Separator /> */}
        </div>

        <div className="xl:p-side relative lg:grid grid-cols-2 gap-2.5">
          {about.images.map((image, index) => (
            <Image
              key={index}
              src={image.url!}
              alt={image.name}
              className={cn('w-auto object-contain', {
                'max-lg:hidden': index === 1,
              })}
              width={1153}
              height={1440}
            />
          ))}
        </div>

        <Skills />
      </div>
    </div>
  );
};
export default About;
