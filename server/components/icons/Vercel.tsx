import { cn } from '@/lib/utils';

const Vercel = ({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={cn('', className)}
    >
      <path fill="gray" fill-rule="evenodd" d="M256,48,496,464H16Z" />
    </svg>
  );
};
export default Vercel;
