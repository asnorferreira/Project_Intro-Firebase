import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function SupportModal() {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqItems = [
    {
      question: 'Não consigo entrar na minha conta, como prosseguir?',
      answer:
        'Ao não conseguir acessar sua conta, realize o passo a passo a seguir, caso não consiga entre em contato conosco através do suporte.\n\nAcesse a tela de login e clique em "esqueci minha senha", e verifique as instruções enviadas para seu e-mail cadastrado.',
    },
    {
      question: 'Não consigo entrar na minha conta, como prosseguir?',
      answer:
        'Esta é uma resposta de exemplo para a segunda pergunta frequente.',
    },
    // Adicione mais itens FAQ conforme necessário
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="bg-transparent hover:bg-transparent">Abrir Suporte</p>
      </DialogTrigger>
      <DialogContent className="max-w-4xl border-none p-0 outline-none ring-0 focus:border-none focus:outline-none focus:ring-0 active:outline-none">
        <div className="max-h-[90vh] overflow-y-auto bg-[#0c1824] p-6 text-white">
          <h1 className="mb-6 text-4xl font-bold">Precisa de ajuda?</h1>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">
              Perguntas frequentes
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border border-[#1e3a5f]"
                >
                  <button
                    className="flex w-full items-center justify-between bg-[#0f2132] p-4 text-left transition-colors hover:bg-[#132639]"
                    onClick={() =>
                      setOpenQuestion(openQuestion === index ? -1 : index)
                    }
                  >
                    <span>{item.question}</span>
                    {openQuestion === index ? (
                      <ChevronUp className="flex-shrink-0" />
                    ) : (
                      <ChevronDown className="flex-shrink-0" />
                    )}
                  </button>
                  {openQuestion === index && (
                    <div className="bg-[#0c1824] p-4">
                      <p className="whitespace-pre-line">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="">
            <h2 className="mb-4 text-2xl font-semibold">Entrar em contato</h2>
            <p className="mb-6 text-sm text-gray-400">
              Entre em contato através do endereço de e-mail, ou pelo nosso
              número do whatsapp para uma resposta mais imediata
            </p>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium"
                >
                  Assunto relacionado
                </label>
                <Input
                  id="subject"
                  className="w-full border-none bg-[#0f2132] text-white"
                  placeholder="Escreva o assunto da mensagem"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  className="min-h-[200px] w-full border-none bg-[#0f2132] text-white"
                  placeholder="Escreva aqui sua mensagem..."
                />
              </div>
              <div className="flex justify-end space-x-4">
                <DialogClose>
                  <Button className="border-none text-white bg-[#132639] hover:bg-[#1b3b5c]">
                  Cancelar
                  </Button>
                </DialogClose>
                <Button className="bg-[#0095ff] text-white hover:bg-[#0077cc]">
                  Enviar
                </Button>
              </div>
            </form>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}