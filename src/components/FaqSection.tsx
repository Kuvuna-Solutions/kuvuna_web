import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Do we have to commit to all three areas (Marketing, Tech, Growth)?',
    answer: 'No. You can start with just a single area—such as building a high-converting website or launching a targeted marketing campaign. We tackle the immediate bottleneck holding you back first, and connect other areas only as your business needs them.'
  },
  {
    question: 'What industries do you work with?',
    answer: 'Kuvuna is not restricted to one industry, location, or business size. If your business wants to win more customers, cut wasted repetitive work, or understand what is actually generating revenue, our growth loop applies.'
  },
  {
    question: 'How does your pricing work?',
    answer: 'We don’t do surprise invoices or hidden charges. Once we talk and understand your goals, we give you a clear, honest number before any work begins, with well-defined deliverables and next steps.'
  },
  {
    question: 'How fast can we get started?',
    answer: 'Very quickly. Reach out to us through the contact page with a short note about your challenge. We will schedule a direct conversation, review what is holding you back, and outline clear next steps.'
  },
  {
    question: 'Who will actually work on our project?',
    answer: 'You work directly with our dedicated 4-person team. No junior account reps, no outsourcing to strangers. The people you talk to are the people building your solutions.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-kuvuna-cloud">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-kuvuna-amber uppercase tracking-spaced-label block mb-2">
            Questions &amp; Clarity
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-kuvuna-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-kuvuna-slate text-sm sm:text-base">
            Honest, straightforward answers about how we partner with businesses.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-kuvuna-navy/10 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-kuvuna-navy pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-kuvuna-slate flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-kuvuna-amber' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 text-sm sm:text-base text-kuvuna-slate leading-relaxed border-t border-kuvuna-navy/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
