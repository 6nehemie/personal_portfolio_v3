import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Logo component
 * @param className - The class name of the element
 * @returns The Logo component
 */
const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href={'/'}
      className={cn('w-max', {
        className: className,
      })}
    >
      <Image
        src="/logo.png"
        alt="Logo"
        width={32}
        height={60}
        className="w-max"
      />
    </Link>
  );
};
export default Logo;
