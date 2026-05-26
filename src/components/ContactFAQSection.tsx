import { useState } from 'react';
import { ChevronDown, Instagram, Milestone, PhoneCall, Copy, Check, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS, COMPANY_INFO } from '../data';

export default function ContactFAQSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const [copiedSocial, setCopiedSocial] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSocial(label);
    setTimeout(() => setCopiedSocial(null), 2000);
  };

  return (
    <section className="bg-white py-8" id="section-contact-faq">
      <div className="max-w-md mx-auto px-6">
        
        {/* Contact Links Box */}
        <div className="mb-12" id="contact-quick-hooks">
          <h2 className="text-2xl font-extrabold text-black tracking-tight mb-8">
            Contact
          </h2>
          
          <div className="space-y-4">
            {/* Instagram */}
            <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100/80 rounded-xl border border-gray-150 transition-colors group">
              <a 
                href={`https://instagram.com/${COMPANY_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-bold text-gray-800"
                id="anchor-instagram"
              >
                <div className="p-2 bg-pink-50 text-pink-600 rounded-lg">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>Compte Instagram</span>
              </a>
              <button 
                onClick={() => handleCopy(COMPANY_INFO.instagram, 'instagram')}
                className="text-xs px-2 py-1 text-gray-400 hover:text-black font-semibold flex items-center gap-1 active:scale-95 transition-all"
                id="btn-copy-instagram-contact"
              >
                {copiedSocial === 'instagram' ? (
                  <span className="text-green-600 font-bold">Copié</span>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{COMPANY_INFO.instagram}</span>
                  </>
                )}
              </button>
            </div>

            {/* Snapchat */}
            <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100/80 rounded-xl border border-gray-150 transition-colors group">
              <div 
                className="flex items-center gap-3 text-sm font-bold text-gray-800 cursor-pointer"
                onClick={() => handleCopy(COMPANY_INFO.snapchat, 'snapchat')}
              >
                <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span>Compte Snapchat</span>
              </div>
              <button 
                onClick={() => handleCopy(COMPANY_INFO.snapchat, 'snapchat')}
                className="text-xs px-2 py-1 text-gray-400 hover:text-black font-semibold flex items-center gap-1 active:scale-95 transition-all"
                id="btn-copy-snapchat-contact"
              >
                {copiedSocial === 'snapchat' ? (
                  <span className="text-green-600 font-bold">Copié</span>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{COMPANY_INFO.snapchat}</span>
                  </>
                )}
              </button>
            </div>

            {/* Telephone dialer */}
            <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100/80 rounded-xl border border-gray-150 transition-colors group">
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-3 text-sm font-bold text-gray-800"
                id="anchor-phone"
              >
                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span>Numéro de Téléphone</span>
              </a>
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-xs font-mono font-bold text-gray-500 hover:text-black underline decoration-dotted"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Accordion FAQ Section */}
        <div id="contact-faq-accordions">
          <h2 className="text-2xl font-extrabold text-black tracking-tight mb-6">
            FAQ
          </h2>
          
          <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
            {FAQS.map((faq) => {
              const isExpanded = openFaqId === faq.id;
              return (
                <div key={faq.id} className="py-2.5">
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full flex justify-between items-center py-3 text-left font-bold text-gray-800 hover:text-black focus:outline-none cursor-pointer"
                    id={`btn-faq-question-${faq.id}`}
                  >
                    <span className="text-sm tracking-tight pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-400 flex-shrink-0"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 text-xs text-gray-500 leading-relaxed text-left text-justify pr-2">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
