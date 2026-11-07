import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight } from 'lucide-react';

export const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Default WhatsApp link with pre-filled message (number can be configured via VITE_WHATSAPP_NUMBER or updated here)
  const whatsappNumber = (import.meta as any).env?.VITE_WHATSAPP_NUMBER || '';
  const prefilledMessage = encodeURIComponent("Hello Kuvuna team, I'd like to discuss a project for my business.");
  const whatsappUrl = whatsappNumber 
    ? `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`
    : `https://wa.me/?text=${prefilledMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Popover preview card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-kuvuna-navy/10 p-5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-kuvuna-navy/5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-kuvuna-navy">Kuvuna Direct Chat</h4>
                <p className="text-[10px] text-kuvuna-slate">Usually replies quickly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-kuvuna-slate hover:text-kuvuna-navy p-1 rounded-md"
              aria-label="Close chat prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-kuvuna-navy py-3 leading-relaxed">
            Have a question or looking to solve a bottleneck? Chat directly with our team on WhatsApp.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold transition-colors shadow-sm"
          >
            <span>Start WhatsApp Chat</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Main floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-kuvuna-navy hover:bg-kuvuna-navy-light text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white focus:outline-none focus:ring-4 focus:ring-kuvuna-amber/40 group relative"
        aria-label="Open WhatsApp conversation"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-white"></span>
        <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform" />
      </button>

    </div>
  );
};
