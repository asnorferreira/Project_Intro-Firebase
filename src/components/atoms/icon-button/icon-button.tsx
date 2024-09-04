import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  onClick: () => void;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
  className = '',
}) => (
  <button onClick={onClick} className={`focus:outline-none ${className}`}>
    <Icon size={24} />
  </button>
);
