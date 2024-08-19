import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import ButtonArrowUpRight from '../buttons/ButtonArrowUpRight';

/**
 * This component displays the footer of the website.
 * @returns The Footer component.
 */
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="p-side py-10">
      <div className=" sm:hidden flex flex-col gap-4 justify-center items-center">
        {/* <Link href={'/'} className={cn('w-max mb-20', {})}>
          <Image
            src="/logo-2.png"
            alt="Logo"
            width={32}
            height={60}
            className={cn('h-40 w-auto', {})}
          />
        </Link> */}

        <ButtonArrowUpRight
          label="Let's Get In Touch"
          href="/contact"
          iconStyle="size-7"
          className="text-xl text-white sm:text-inherit sm:hover:text-white transition-colors duration-200"
        />

        <div className="uppercase text-nm-gray-200 text-sm space-x-2">
          <Link
            href={'https://www.linkedin.com/in/nehemie-mombanga'}
            target="_blank"
            className={cn('inline-block', {})}
          >
            LinkedIn
          </Link>

          <div className={cn('inline-block', {})}>/</div>

          <Link
            href={'https://github.com/NehemieMbg'}
            target="_blank"
            className={cn('inline-block', {})}
          >
            Github
          </Link>

          <div className={cn('inline-block', {})}>/</div>

          <Link
            href={'https://dribbble.com/6nehemie'}
            target="_blank"
            className={cn('inline-block', {})}
          >
            Dribbble
          </Link>
        </div>
      </div>

      <div className="flex max-sm:gap-2 max-sm:pt-10 sm:justify-between items-end h-max text-sm text-nm-gray-500">
        <div className="text-sm space-y-1 max-sm:mx-auto">
          <div className="text-sm">All rights reserved {year} © 6nehemie</div>
        </div>

        <div className="max-sm:hidden">
          <ButtonArrowUpRight
            label="Contact me"
            href="/contact"
            className="text-white sm:text-inherit sm:hover:text-white transition-colors duration-200"
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
