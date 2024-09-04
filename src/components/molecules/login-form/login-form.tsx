import EyeIcon from '@/components/atoms/eye-icon/eye-icon';
import EyeSlashIcon from '@/components/atoms/eye-slash-icon/eye-slash-icon';
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword } from '../../../db/firebase';
import React, { useState } from 'react';
import Image from 'next/image';
import googleIcon from '../../../../public/google-icon.svg';
import LogoPandora from '../../../../public/SymbolText.svg';
import router from 'next/router';

interface ILoginForm {
  disableEye: boolean;
}

const LoginForm: React.FC<ILoginForm> = ({ disableEye }) => {
  const [isEyeVisible, setIsEyeVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const showEye = () => {
    if (!disableEye) {
      setIsEyeVisible(!isEyeVisible);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/home');
    } catch (error) {
      if (error instanceof Error) {
        setError('Falha ao fazer login');
      } else {
        setError('Ocorreu um erro desconhecido');
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/home');
    } catch (error) {
      if (error instanceof Error) {
        setError('Falha ao fazer login com Google: ' + error.message);
      } else {
        setError('Ocorreu um erro desconhecido');
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#001726]">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-[#0D3451] p-8">
        <h1 className="text-center text-2xl font-semibold text-white">
          Bem-vindo de volta!
        </h1>
        <div className="flex justify-center">
          <Image className="h-12" src={LogoPandora} alt={'Pandora Logo'} />
        </div>
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Endereço de e-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="seuemail@forexample.com"
              className="w-full rounded-md border border-[#44B9FF] bg-[#0D3451] p-3 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          {error && <div className="text-sm text-red-500">{error}</div>}
          <div className="flex justify-end">
            <a href="/forgot-password" className="text-sm text-[#44B9FF]">
              Esqueci minha senha
            </a>
          </div>
          <button
            onClick={handleLogin}
            type="button"
            className="w-full rounded-md bg-gradient-to-r from-[#40B6FC] to-[#0089DB] py-4 text-white"
          >
            ENTRAR
          </button>
          <div className="flex items-center justify-center space-x-2">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-sm text-gray-300">OU</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex w-full items-center justify-center space-x-2 rounded-md border bg-white py-4"
          >
            <Image
              className="h-5 w-5 text-black"
              src={googleIcon}
              alt={'Google Login Icon'}
            />
            <span className="text-black">Continuar com Google</span>
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          <a href="/register" className="text-sm text-white">
            Não possui uma conta?{' '}
            <span className="text-[#44B9FF]">Cadastre-se</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
