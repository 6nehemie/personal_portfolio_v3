import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * This component displays a button with an arrow pointing up and right.
 * @label The label of the button.
 * @href The href of the button.
 * @returns The ButtonArrowUpRight component.
 */
const ButtonArrowUpRight = ({
  label,
  href,
  className,
}: {
  label: string;
  href: string;
  className?: string;
}) => {
  return (
    <Button asChild className="bg-inherit hover:bg-inherit p-0">
      <Link
        href={href}
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

        <ArrowUpRight size={16} className="inline" />
      </Link>
    </Button>
  );
};
export default ButtonArrowUpRight;
