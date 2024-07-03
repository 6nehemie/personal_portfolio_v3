import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

/**
 * This component displays a button component.
 * @children The children of the component.
 * @asChild The boolean value to check if the button is a child.
 * @onClick The function to be called when the button is clicked.
 * @returns The RedirectButton component.
 */
const RedirectButton = ({
  children,
  asChild,
  onClick,
}: {
  children: ReactNode;
  asChild?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Button
      asChild={asChild}
      onClick={onClick}
      className="h-[50px] px-7 rounded-full bg-nm-gray-700 text-sm hover:bg-nm-gray-700"
    >
      {children}
    </Button>
  );
};
export default RedirectButton;
