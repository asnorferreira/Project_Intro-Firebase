import React from 'react';

interface CloseIconProps {
  onClick: () => void;
}

const CloseIcon: React.FC<CloseIconProps> = ({ onClick }) => (
  <button onClick={onClick} className="focus:outline-none">
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  </button>
);

export default CloseIcon;
