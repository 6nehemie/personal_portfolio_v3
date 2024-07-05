import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Logo component
 * @param className - The class name of the element
 * @param imgClassName - The class name of the image
 * @returns The Logo component
 */
const Logo = ({
  className,
  imgClassName,
}: {
  className?: string;
  imgClassName?: string;
}) => {
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
        className={cn('h-10 md:h-[56px] w-auto', {
          imgClassName: imgClassName,
        })}
      />
    </Link>
  );
};
export default Logo;
