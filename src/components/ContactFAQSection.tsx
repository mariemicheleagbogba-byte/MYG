import { useState } from 'react';
import { ChevronDown, Instagram, PhoneCall, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS, COMPANY_INFO } from '../data';

const SnapchatIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.065 2C9.273 2 7.566 3.766 7.566 6.498v.485c-.366.03-.723.117-.997.268a.327.327 0 00-.11.483c.057.108.17.174.29.181.3.023.573.086.824.19.218.088.302.23.278.384-.084.462-.504.777-1.026.777-.127 0-.251-.03-.376-.078-.163-.06-.325-.09-.486-.09-.276 0-.505.098-.672.265-.258.258-.292.566-.292.665.013.316.238.55.598.581.662.06 1.103.372 1.337.932.065.163.157.425.04.655-.252.505-1.069 1.013-1.843 1.013a.795.795 0 01-.204-.02c-.126-.022-.244.054-.266.18-.065.38.223 1.236 1.897 1.523.196.034.35.2.371.398.02.166.037.306.055.443.117.943.386 1.254.79 1.254.1 0 .202-.01.3-.027.22-.04.476-.062.772-.062.463 0 .835.084 1.19.244a3.77 3.77 0 001.684.41c.6 0 1.184-.149 1.686-.41.355-.16.726-.244 1.19-.244.296 0 .552.022.772.062.099.017.2.027.3.027.403 0 .673-.311.79-1.254.018-.137.035-.277.055-.443.02-.198.175-.364.37-.398 1.675-.287 1.963-1.143 1.897-1.522a.267.267 0 00-.266-.18 1.152 1.152 0 01-.204.019c-.774 0-1.591-.508-1.843-1.013-.117-.23-.025-.492.04-.655.234-.56.675-.872 1.337-.932.36-.031.585-.265.598-.581 0-.1-.034-.407-.292-.665a.946.946 0 00-.672-.265c-.161 0-.323.03-.486.09-.125.047-.249.078-.376.078-.522 0-.942-.315-1.026-.777-.024-.153.06-.296.278-.384.251-.104.524-.167.824-.19.12-.007.233-.073.29-.181a.327.327 0 00-.11-.483c-.274-.15-.63-.238-.997-.268v-.485C16.434 3.766 14.857 2 12.065 2z"/>
  </svg>
);

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.94a8.16 8.16 0 004.78 1.52V7.01a4.85 4.85 0 01-1.01-.32z"/>
  </svg>
);

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
              <a
                href="https://www.snapchat.com/add/mygbeautyroom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-bold text-gray-800"
                id="anchor-snapchat"
              >
                <div className="p-2 bg-yellow-50 text-yellow-500 rounded-lg">
                  <SnapchatIcon className="w-4 h-4" />
                </div>
                <span>Compte Snapchat</span>
              </a>
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

            {/* TikTok */}
            <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100/80 rounded-xl border border-gray-150 transition-colors group">
              <a
                href={`https://www.tiktok.com/${COMPANY_INFO.tiktok}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-bold text-gray-800"
                id="anchor-tiktok"
              >
                <div className="p-2 bg-gray-100 text-black rounded-lg">
                  <TikTokIcon className="w-4 h-4" />
                </div>
                <span>Compte TikTok</span>
              </a>
              <button
                onClick={() => handleCopy(COMPANY_INFO.tiktok, 'tiktok')}
                className="text-xs px-2 py-1 text-gray-400 hover:text-black font-semibold flex items-center gap-1 active:scale-95 transition-all"
                id="btn-copy-tiktok-contact"
              >
                {copiedSocial === 'tiktok' ? (
                  <span className="text-green-600 font-bold">Copié</span>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{COMPANY_INFO.tiktok}</span>
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
