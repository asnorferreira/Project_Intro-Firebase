import React from 'react';

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <span className="inline-block rounded-full bg-blue-300/30 px-2 py-1 text-xs font-bold text-white">
      {text}
    </span>
  );
};

export default Badge;