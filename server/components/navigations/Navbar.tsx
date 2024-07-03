'use client';

import { cn } from '@/lib/utils';
import Logo from '../logo/Logo';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { EN as en } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

/**
 * Navbar component.
 * @returns The Navbar component.
 */
const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* //? Shadow to be able to differentiate the text from the logo */}
      <div className="md:hidden fixed z-[50] top-0 gradient-shadow pointer-events-none"></div>

      <nav
        className={cn(
          'sticky z-[100] top-0 md:hidden h-[80px] px-[15px] w-screen flex justify-between items-center',
          {}
        )}
      >
        <div className="px-[15px]">
          <Logo className="" />
        </div>

        <div
          className="p-[15px]"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {!isMenuOpen && <Bars2Icon className="size-7" strokeWidth={1} />}
          {isMenuOpen && <XMarkIcon className="size-7" strokeWidth={1} />}
        </div>
      </nav>

      {/* //? DROPDOWN MENU */}
      <div
        className={cn(
          'fixed top-0 w-screen h-screen bg-nm-gray-700 z-[99] px-6 pb-6 pt-[120px] transition-transform duration-500 ease-in',
          {
            '-translate-y-[100%]': !isMenuOpen,
            'translate-y-0': isMenuOpen,
          }
        )}
      >
        <div className="space-y-10">
          <div className="space-y-4">
            {en.navigation.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  href={link.href}
                  key={link.label}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'block text-3xl font-medium text-nm-gray-500 hover:text-white transition-colors duration-200 w-max space-x-4',
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

          <div className="relative text-2xl space-y-2.5">
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
      </div>
    </>
  );
};
export default Navbar;
