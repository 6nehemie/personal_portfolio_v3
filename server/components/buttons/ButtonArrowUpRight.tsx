import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * This component displays a button with an arrow pointing up and right.
 * @label The label of the button.
 * @href The href of the button.
 * @className The class name of the button.
 * @target The target of the button.
 * @returns The ButtonArrowUpRight component.
 */
const ButtonArrowUpRight = ({
  label,
  href,
  className,
  target,
  iconStyle,
}: {
  label: string;
  href: string;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  iconStyle?: string;
}) => {
  return (
    <Button asChild className="bg-inherit hover:bg-inherit p-0">
      <Link
        href={href}
        target={target}
        className={cn('relative flex gap-2 group overflow-hidden text-sm h-5', {
          [`${className}`]: className,
        })}
      >
        <div className="invisible">
          <span>{label}</span>
        </div>

        <div className="absolute left-0 translate-y-0 space-x-1 sm:group-hover:-translate-y-[200%] transition-transform duration-200">
          <span>{label}</span>
        </div>

        <div className="absolute left-0 translate-y-[200%] space-x-1 sm:group-hover:translate-y-0 transition-transform duration-200">
          <span>{label}</span>
        </div>

        <ArrowUpRight
          className={cn('inline size-4', {
            [`${iconStyle}`]: iconStyle,
          })}
        />
      </Link>
    </Button>
  );
};
export default ButtonArrowUpRight;
