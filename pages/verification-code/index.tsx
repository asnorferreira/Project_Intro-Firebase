import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import React from 'react';
import LogoPandora from '../../public/SymbolText.svg';
import Image from 'next/image';
import router from 'next/router';

const VerificationCode = () => {
  const handleResetPass = () => {
    return router.push('/reset-pass');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#001726]">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-[#0D3451] p-8 text-center">
        <Image className="h-12" src={LogoPandora} alt={'Google Login Icon'} />
        <h2 className="text-xl font-semibold text-white">
          Verifique seu e-mail
        </h2>
        <p className="text-gray-400">
          Enviamos um código de 4 dígitos para <br /> luizbelipestre@gmail.com
        </p>
        <div className="flex justify-center space-x-4">
          <InputOTP maxLength={6}>
            <InputOTPGroup className="flex gap-2">
              <InputOTPSlot
                index={0}
                className="h-12 w-12 border-none bg-[#1C4F76] text-center text-white"
              />
              <InputOTPSlot
                index={1}
                className="h-12 w-12 border-none bg-[#1C4F76] text-center text-white"
              />
              <InputOTPSlot
                index={2}
                className="h-12 w-12 border-none bg-[#1C4F76] text-center text-white"
              />
              <InputOTPSlot
                index={3}
                className="h-12 w-12 border-none bg-[#1C4F76] text-center text-white"
              />
              <InputOTPSlot
                index={4}
                className="h-12 w-12 border-none bg-[#1C4F76] text-center text-white"
              />
              <InputOTPSlot
                index={5}
                className="h-12 w-12 border-none bg-[#1C4F76] text-center text-white"
              />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <button
          onClick={handleResetPass}
          className="mt-4 w-full rounded-md bg-gradient-to-r from-[#40B6FC] to-[#0089DB] py-4 text-white"
        >
          VERIFICAR
        </button>
        <p className="text-white">
          Não recebeu o e-mail?{' '}
          <a href="#" className="text-[#40B6FC]">
            Enviar novamente (12)
          </a>
        </p>
      </div>
    </div>
  );
};

export default VerificationCode;
