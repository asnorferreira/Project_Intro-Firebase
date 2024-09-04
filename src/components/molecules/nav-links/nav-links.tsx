import React from 'react';

interface NavLinksProps {
  isOpen: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isOpen }) => {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} space-y-4`}>
      <a href="/home" className="block text-white">
        Home
      </a>
      <a href="/profile" className="block text-white">
        Meu Perfil
      </a>
      <a href="/settings" className="block text-white">
        Configurações
      </a>
      <a href="/support" className="block text-white">
        Suporte
      </a>
    </div>
  );
};

export default NavLinks;
