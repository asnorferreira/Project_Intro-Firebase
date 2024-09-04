import React, { useState } from 'react';
import {
  ArrowLeft,
  BadgeInfo,
  CircleFadingArrowUp,
  CirclePlus,
  Lightbulb,
  MessageCircleMore,
  Search,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import LogoPandora from '../../../../public/SymbolText.svg';
import Image from 'next/image';
import Badge from '@/components/atoms/badge/badge';
import SupportModal from '../support-modal/support-modal';
import UpgradeModal from '../upgrade-modal/upgrade-modal';

interface SideMenuProps {
  isExpanded: boolean;
}

export const SideMenu: React.FC<SideMenuProps> = ({ isExpanded }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Implementar lógica de pesquisa
  };

  return (
    <aside
      className={cn(
        'absolute left-0 top-0 h-full w-8/12 bg-[#0D3451] text-white transition-transform duration-300 ease-in-out lg:w-[16%]',
        isExpanded ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className="flex h-16 items-center justify-start"></div>
      <nav className="mt-8 flex flex-col items-start pl-4">
        {isSearchOpen ? (
          <div className="mb-4 flex items-center">
            <button onClick={toggleSearch} className="-ml-2 text-white">
              <ArrowLeft size={24} className="mr-2" />
            </button>
            <input
              type="text"
              placeholder="Pesquisar chats..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full rounded-md bg-[#1E4A6D] px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#40B6FC]"
            />
          </div>
        ) : (
          <>
            <div className="-ml-20 -mt-1 mb-8 lg:-ml-32">
              <Image className="h-12" src={LogoPandora} alt="Pandora Logo" />
            </div>

            <div>
              <ul className="flex flex-col gap-3 space-y-4">
                <li>
                  <button
                    onClick={toggleSearch}
                    className="flex w-full items-center gap-2 text-white transition-colors hover:text-[#40B6FC]"
                  >
                    <Search className="h-5 w-5" /> Pesquisa
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-white transition-colors hover:text-[#40B6FC]"
                  >
                    <CircleFadingArrowUp className="h-5 w-5" />
                    <UpgradeModal />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-white transition-colors hover:text-[#40B6FC]"
                  >
                    <BadgeInfo className="h-5 w-5" />
                    <SupportModal />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-white transition-colors hover:text-[#40B6FC]"
                  >
                    <Lightbulb className="h-5 w-5" /> Sugestões{' '}
                    <Badge text="Em Breve" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-16">
              <h2 className="mb-2 text-[#40B6FC]">Chat History</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-start gap-2 text-sm text-white transition-colors hover:text-[#40B6FC]"
                  >
                    <MessageCircleMore className="h-6 w-6" /> Estudo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-start gap-2 text-sm text-white transition-colors hover:text-[#40B6FC]"
                  >
                    <MessageCircleMore className="h-6 w-6" /> Projetos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-start gap-2 text-sm text-white transition-colors hover:text-[#40B6FC]"
                  >
                    <MessageCircleMore className="h-6 w-6" /> Favoritos
                  </a>
                </li>
              </ul>
            </div>

            <button className="mt-8 flex w-11/12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#40B6FC] to-[#0089DB] px-4 py-3 text-white transition hover:opacity-90 active:scale-95 active:bg-gradient-to-r active:from-[#0089DB] active:to-[#40B6FC] lg:w-10/12">
              <CirclePlus className="h-5 w-5" />
              Novo Chat
            </button>
          </>
        )}
      </nav>
    </aside>
  );
};
