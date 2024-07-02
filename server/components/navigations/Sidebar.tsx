'use client';

import Link from 'next/link';
import Logo from '../logo/Logo';
import { EN as en } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

/**
 * Sidebar component
 * @returns The Sidebar component
 */
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 max-md:hidden flex flex-col justify-between w-[420px] h-screen p-side py-10">
      <div className="space-y-10 text-sm">
        <div className="w-max">
          <Logo />
        </div>

        <div className="">
          <div className="font-medium">
            {en.owner.name.firstName} {en.owner.name.lastName}
          </div>
          <div>{en.owner.title}</div>
        </div>

        <p className="max-w-[230px] text-nm-gray-200">
          Specialized in <span className="text-white">web development</span>.
          Dedicated to redefining{' '}
          <span className="text-white">technological limits</span>.
        </p>
      </div>

      <div className="space-y-10">
        <div className="space-y-4 text-xl">
          {en.navigation.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                href={link.href}
                key={link.label}
                className={cn(
                  'block text-nm-gray-500 hover:text-white transition-colors duration-200 w-max space-x-4',
                  {
                    'text-white': isActive,
                  }
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="relative text-sm space-y-2.5">
          {en.externalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              className={cn(
                'block w-max text-nm-gray-500 hover:text-white transition-colors duration-200',
                {}
              )}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={16} className="inline-block ml-1" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
