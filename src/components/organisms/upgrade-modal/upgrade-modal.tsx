import * as React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { X } from 'lucide-react';

export default function Component() {
  const [isAnnual, setIsAnnual] = React.useState(true);

  const plans = [
    {
      type: isAnnual ? 'Anual Plus+' : 'Mensal Plus+',
      price: isAnnual ? '69,00' : '97,00',
      originalPrice: '79,99',
      link: isAnnual ? '#anual-plus' : '#mensal-plus',
      description: 'Para quem quer elevar o nível',
      recommended: true,
      showOriginalPrice: isAnnual || false, // Set to true to show original price for monthly plan
      bonuses: isAnnual
        ? [
            'Mensagens, interações e histórico ilimitados',
            'Mensagens, interações e histórico ilimitados',
            'Mensagens, interações e histórico ilimitados',
            'Mensagens, interações e histórico ilimitados',
            'Mensagens, interações e histórico ilimitados',
            'Mensagens, interações e histórico ilimitados',
          ]
        : [
            'Mensagens1, interações1 e histórico2 ilimitados3',
            'Mensagens1, interações1 e histórico2 ilimitados4',
            'Mensagens1, interações1 e histórico3 ilimitados5',
            'Mensagens1, interações1 e histórico4 ilimitados6',
            'Mensagens1, interações1 e histórico5 ilimitados7',
            'Mensagens1, interações1 e histórico6 ilimitados8',
          ],
    },
    {
      type: isAnnual ? 'Anual Vip+' : 'Mensal Vip+',
      price: isAnnual ? '69,00' : '97,00',
      originalPrice: '79,99',
      link: isAnnual ? '#anual-vip' : '#mensal-vip',
      description: 'Para quem está começando agora',
      showOriginalPrice: isAnnual || false, // Set to true to show original price for monthly plan
      bonuses: isAnnual
        ? [
            'Mensagens, interações e histórico ilimitados',
            'Mensagens, interações e histórico ilimitados',
            'Mensagens, interações e histórico ilimitados',
            'Mensagens, interações e histórico ilimitados',
            'Mensagens, interações e histórico ilimitados',
            'Mensagens, interações e histórico ilimitados',
          ]
        : [
            'Mensagens1, interações1 e histórico2 ilimitados3',
            'Mensagens1, interações1 e histórico2 ilimitados4',
            'Mensagens1, interações1 e histórico3 ilimitados5',
            'Mensagens1, interações1 e histórico4 ilimitados6',
            'Mensagens1, interações1 e histórico5 ilimitados7',
            'Mensagens1, interações1 e histórico6 ilimitados8',
          ],
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="bg-transparent hover:bg-transparent">Upgrade</p>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-6xl overflow-auto border-none p-0 outline-none ring-0 focus:border-none focus:outline-none focus:ring-0 active:outline-none lg:flex lg:max-h-[95vh] lg:items-center lg:justify-center">
        <div className="h-full bg-[#0c1824] p-10 text-white lg:flex lg:h-screen lg:flex-col lg:items-center lg:justify-center">
          <div className="mb-6 flex w-full items-center justify-center">
            <h2 className="text-2xl font-bold">Seu plano</h2>
          </div>
          <div className="mb-6 flex items-center justify-center space-x-4">
            <span
              className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}
            >
              Mensal
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="bg-gray-600 from-[#40B6FC] to-[#0089DB] data-[state=checked]:bg-gradient-to-r"
            />
            <span
              className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}
            >
              Anual{' '}
              <span className="bg-gradient-to-r from-[#40B6FC] to-[#0089DB] bg-clip-text font-bold text-transparent">
                (33% OFF)
              </span>
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.type}
                className="relative rounded-lg bg-[#0D3451] p-6"
              >
                {plan.recommended && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform rounded bg-[#40B6FC] px-2 py-2 text-xs font-semibold text-white">
                    MAIS INDICADO
                  </span>
                )}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {plan.type}
                    </h3>
                    <p className="text-sm text-gray-400">{plan.description}</p>
                  </div>
                  <div className="text-right">
                    {plan.showOriginalPrice && (
                      <>
                        <p className="text-xs text-gray-400">
                          de {plan.originalPrice}
                        </p>
                        <p className="text-xs text-gray-400">por apenas</p>
                      </>
                    )}
                    <p className="bg-gradient-to-r from-[#40B6FC] to-[#0089DB] bg-clip-text text-4xl font-bold text-transparent">
                      {plan.price}
                    </p>
                    <p className="text-xs text-gray-400">por mês</p>
                    {isAnnual && (
                      <p className="text-xs text-gray-400">
                        cobrado anualmente
                      </p>
                    )}
                  </div>
                </div>
                <div className="my-4 border-b border-gray-600"></div>
                <ul className="mb-6 grid grid-cols-2 gap-2">
                  {plan.bonuses.map((bonus, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-[#40B6FC]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-sm text-gray-400">{bonus}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.link}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#40B6FC] to-[#0089DB] px-4 py-3 text-white transition hover:opacity-90 active:scale-95 active:bg-gradient-to-r active:from-[#0089DB] active:to-[#40B6FC]"
                >
                  SELECIONAR PLANO
                </a>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
