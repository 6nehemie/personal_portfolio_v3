import React, { ReactNode } from 'react';
import {
  AWS,
  Figma,
  Nest,
  Next,
  OAuth,
  Redux,
  Shadcn,
  Stripe,
  TailwindCss,
  Vercel,
  Zod,
} from '@/components/icons';

const stack = [
  'Figma',
  'Next.js',
  'Nest.js',
  'Zod',
  'Redux Toolkit',
  'TailwindCSS',
  'Shadcn',
  'OAuth',
  'Stripe',
  'AWS',
  'Vercel',
];

/**
 * Returns the icon component of a given stack
 * @param stack - The stack to get the icon for
 * @returns The icon component
 */
const StackIcon = (stack: string): React.ReactNode => {
  const className = 'size-4';
  const iconSize = 18;

  const stackIcons: Record<string, ReactNode> = {
    figma: <Figma className={className} size={iconSize} />,
    nextjs: <Next className={className} size={iconSize} />,
    nestjs: <Nest className={className} size={iconSize} />,
    zod: <Zod className={className} size={iconSize} />,
    reduxtoolkit: <Redux className={className} size={iconSize} />,
    tailwindcss: <TailwindCss className={className} size={iconSize} />,
    shadcn: <Shadcn className={className} size={iconSize} />,
    oauth: <OAuth className={className} size={iconSize} />,
    stripe: <Stripe className={className} size={iconSize} />,
    vercel: <Vercel className={className} size={iconSize} />,
    aws: <AWS className={className} size={iconSize} />,
  };

  const sanitizedStack = stack.toLowerCase().replace(/[.\s]/g, ''); // Remove dots and spaces
  return stackIcons[sanitizedStack] || undefined;
};
export default StackIcon;