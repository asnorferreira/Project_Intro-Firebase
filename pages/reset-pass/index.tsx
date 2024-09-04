import EyeIcon from '@/components/atoms/eye-icon/eye-icon';
import EyeSlashIcon from '@/components/atoms/eye-slash-icon/eye-slash-icon';
import React, { useState } from 'react';
import Image from 'next/image';
import LogoPandora from '../../public/SymbolText.svg';
import router from 'next/router';

interface IResetPass {
  disableEye: boolean;
}

const ResetPass: React.FC<IResetPass> = ({ disableEye }) => {
  const [isEyeVisible, setIsEyeVisible] = useState(false);

  const showEye = () => {
    if (!disableEye) {
      setIsEyeVisible(!isEyeVisible);
    }
  };

  const handleLogin = () => {
    return router.push('/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#001726]">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-[#0D3451] p-8">
        <Image className="h-12" src={LogoPandora} alt={'Google Login Icon'} />
        <div className="flex justify-center">
          <h1 className="text-center text-2xl font-semibold text-white">
            Crie uma nova senha
          </h1>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-white"
            >
              Senha
            </label>
            <div className="relative">
              <input
                id="password"
                type={isEyeVisible ? 'text' : 'password'}
                placeholder="***************"
                className="w-full rounded-md border border-[#44B9FF] bg-[#0D3451] p-3 text-white"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#44B9FF]"
                onClick={showEye}
              >
                {isEyeVisible ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-white"
            >
              Confirmar Senha
            </label>
            <div className="relative">
              <input
                id="password"
                type={isEyeVisible ? 'text' : 'password'}
                placeholder="***************"
                className="w-full rounded-md border border-[#44B9FF] bg-[#0D3451] p-3 text-white"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#44B9FF]"
                onClick={showEye}
              >
                {isEyeVisible ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <button
            onClick={handleLogin}
            type="button"
            className="w-full rounded-md bg-gradient-to-r from-[#40B6FC] to-[#0089DB] py-4 text-white"
          >
            ENTRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
