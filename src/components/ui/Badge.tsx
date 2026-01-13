import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'featured' | 'editors-pick';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-gray-900 text-white',
    featured: 'bg-blue-600 text-white',
    'editors-pick': 'bg-amber-500 text-white',
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
