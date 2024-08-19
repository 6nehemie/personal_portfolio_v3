import { cn } from '@/lib/utils';

const Figma = ({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
      width={size}
      height={size}
      className={cn('size-10', className)}
    >
      <path
        fill="white"
        d="M25 2v14h-7c-3.855 0-7-3.145-7-7 0-3.855 3.145-7 7-7H25zM25 18v14h-7c-3.855 0-7-3.145-7-7 0-3.855 3.145-7 7-7H25zM25 34v7c0 3.855-3.145 7-7 7s-7-3.145-7-7c0-3.855 3.145-7 7-7H25zM41 9c0 3.855-3.145 7-7 7h-7V2h7C37.855 2 41 5.145 41 9zM34 18A7 7 0 1034 32 7 7 0 1034 18z"
      ></path>
    </svg>
  );
};
export default Figma;
