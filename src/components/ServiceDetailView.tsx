import { useState, useEffect } from 'react';
import { ChevronLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, COMPANY_INFO } from '../data';
import { ServiceOption, Service } from '../types';

interface ServiceDetailViewProps {
  onBack: () => void;
  onSelectOption: (category: string, option: ServiceOption) => void;
  initialServiceId?: string | null;
  onClearInitialServiceId?: () => void;
}

export default function ServiceDetailView({ 
  onBack, 
  onSelectOption, 
  initialServiceId, 
  onClearInitialServiceId 
}: ServiceDetailViewProps) {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  // Sync to outer states (e.g. from Home page clicks)
  useEffect(() => {
    if (initialServiceId) {
      setActiveServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  // Find currently active service details if selected
  const activeServiceIndex = SERVICES.findIndex(s => s.id === activeServiceId);
  const activeService = activeServiceIndex !== -1 ? SERVICES[activeServiceIndex] : null;

  const SERVICE_PHOTOS: Record<string, string> = {
    soins_visage: '/gallery-soin-2.webp',
    extensions_cils: '/gallery-cils-1.jpg',
    lifting_colombien: '/gallery-lifting.webp',
    blanchiment: '/gallery-blanchiment.png',
    formules_signature: '/gallery-cils-2.webp',
  };

  const BG_COLORS: Record<string, string> = {
    soins_visage: '#E5E1DC',
    extensions_cils: '#EBDCD0',
    lifting_colombien: '#E2DCD3',
    blanchiment: '#EAEBED',
    formules_signature: '#EEEAE1',
  };

  function renderServiceIllustration(serviceId: string) {
    const photo = SERVICE_PHOTOS[serviceId];
    return (
      <div className="w-full h-52 overflow-hidden relative">
        {/* Fond flouté */}
        <img
          src={photo}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl opacity-70"
          aria-hidden
        />
        {/* Image principale */}
        <img
          src={photo}
          alt=""
          className="relative z-10 w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`${!activeServiceId ? 'bg-[#F9F9F8]' : 'bg-white'} min-h-screen pb-16`} id="service-detail-view-container">
      <AnimatePresence mode="wait">
        
        {/* LIST MODE (If no active category selected) */}
        {!activeServiceId ? (
          <motion.div
            key="category-directory"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-4 py-4 space-y-5"
          >
            {/* Vertical Cards list of categories from video */}
            <div className="space-y-5">
              {SERVICES.map((serv: Service) => (
                <div 
                  key={serv.id}
                  onClick={() => {
                    setActiveServiceId(serv.id);
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="bg-white border border-[#EBEAE6] rounded-2xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-all duration-200 group flex flex-col"
                  id={`card-directory-${serv.id}`}
                >
                  {/* Dynamic render of high precision matching illustrations */}
                  {renderServiceIllustration(serv.id)}

                  {/* Text details below illustration matching video perfectly */}
                  <div className="p-5 pb-6 text-left bg-white">
                    <h2 className="text-xl font-extrabold text-[#050505] tracking-tight leading-tight mb-1.5">
                      {serv.name}
                    </h2>
                    <p className="text-[13px] text-gray-500 font-normal mb-3.5 leading-relaxed">
                      {serv.description}
                    </p>
                    <div className="flex items-center text-[11px] font-extrabold uppercase tracking-widest text-black group-hover:translate-x-1 transition-transform duration-150">
                      <span>DÉCOUVRIR →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          
          /* DETAIL FORMULAS MODE (If a service is actively selected) */
          <motion.div
            key={`detail-${activeServiceId}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="py-4"
          >
            {/* Category horizontal scrolling selector pills for ultra quick tab selection */}
            <div className="px-4 flex gap-1.5 overflow-x-auto scrollbar-none border-b border-gray-100 pb-3 mb-4">
              {SERVICES.map((serv, idx) => (
                <button
                  key={serv.id}
                  onClick={() => {
                    setActiveServiceId(serv.id);
                    if (onClearInitialServiceId) onClearInitialServiceId();
                  }}
                  className={`py-1.5 px-3.5 text-[10px] uppercase font-bold tracking-wider rounded-full transition-all flex-shrink-0 cursor-pointer ${
                    activeServiceId === serv.id
                      ? 'bg-black text-white shadow-xs'
                      : 'bg-gray-50 text-gray-500 border border-gray-100 hover:bg-gray-100'
                  }`}
                  id={`btn-service-tab-${serv.id}`}
                >
                  {serv.name}
                </button>
              ))}
            </div>

            {/* Back to main prestations directory */}
            <div className="px-6 pb-2 flex flex-col align-start">
              <button 
                onClick={() => {
                  setActiveServiceId(null);
                  if (onClearInitialServiceId) onClearInitialServiceId();
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="flex items-center text-xs text-gray-400 hover:text-black gap-1 cursor-pointer w-fit uppercase font-semibold font-mono"
                id="btn-back-to-prestations"
              >
                <ChevronLeft className="w-4 h-4 text-gray-400" />
                <span className="underline">Prestations</span>
              </button>
              
              <h2 className="text-2xl font-black text-black uppercase tracking-tight mt-3 leading-none">
                {activeService?.name}
              </h2>
            </div>

            {/* Big Active Service Preview Illustration */}
            <section className="px-6 my-4">
              <div className="shadow-xs rounded-2xl overflow-hidden">
                {activeService && renderServiceIllustration(activeService.id)}
              </div>
            </section>

            {/* Service general description */}
            <section className="px-6 mb-8 text-left">
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                {activeService?.description}
              </p>
            </section>

            {/* Formulas pricing list items */}
            <section className="px-6">
              {(() => {
                if (!activeService) return null;
                const hasGroups = activeService.options.some(o => o.group);

                if (!hasGroups) {
                  return (
                    <div className="space-y-6">
                      {activeService.options.map((option) => (
                        <div
                          key={option.id}
                          className="border-b border-gray-100 pb-6 last:border-0 text-left"
                          id={`service-option-block-${option.id}`}
                        >
                          <div className="flex justify-between items-start mb-2.5">
                            <div>
                              <h3 className="font-extrabold text-black text-sm uppercase tracking-wider">
                                {option.name}
                              </h3>
                              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mt-0.5 font-mono">
                                {option.originalPrice
                                  ? `Prix de base ${option.originalPrice}€`
                                  : option.id.includes('complete') ? 'Rituel Complet'
                                  : option.id.includes('duo') ? 'Offre Partagée'
                                  : 'Traitement Expert'}
                              </span>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="font-mono font-bold text-base text-black bg-gray-50 px-2 py-0.5 rounded border border-gray-150">
                                {option.price}€
                              </span>
                              {activeServiceId === 'soins_visage' && (
                                <span className="text-[9px] font-mono text-gray-400 mt-1 uppercase font-semibold">
                                  Durée : {option.duration}
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-[11px] text-gray-500 leading-relaxed mb-4 text-justify">
                            {option.description}
                          </p>
                          <div className="flex justify-end">
                            <button
                              onClick={() => window.open(option.calendlyUrl || 'https://calendly.com/mygbeautyroom', '_blank', 'noopener,noreferrer')}
                              className="bg-black hover:bg-neutral-850 active:scale-95 text-white font-bold py-1.5 px-4 rounded-sm text-[10px] uppercase tracking-wider transition-all cursor-pointer font-mono"
                              id={`btn-book-formula-${option.id}`}
                            >
                              Réserver
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }

                // Grouped rendering (e.g. Lifting Colombien)
                const groupOrder: string[] = [];
                const groupMap: Record<string, typeof activeService.options> = {};
                for (const option of activeService.options) {
                  const g = option.group ?? 'Autres';
                  if (!groupMap[g]) { groupMap[g] = []; groupOrder.push(g); }
                  groupMap[g].push(option);
                }

                return (
                  <div className="space-y-6">
                    {groupOrder.map((groupName) => (
                      <div key={groupName}>
                        {/* Group header */}
                        <div className="bg-[#EDE8E3] rounded-xl px-4 py-2.5 mb-3 text-center">
                          <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-black">
                            {groupName}
                          </h3>
                        </div>
                        {/* Options in group */}
                        {groupMap[groupName].map((option) => (
                          <div
                            key={option.id}
                            className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0 gap-4"
                            id={`service-option-block-${option.id}`}
                          >
                            <div className="flex-1">
                              <span className="text-xs font-bold text-black uppercase tracking-wide block">
                                {option.name}
                              </span>
                              {option.description && groupName === "Séance à l'Unité" && (
                                <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                                  {option.description}
                                </p>
                              )}
                            </div>
                            <div className="flex items-center gap-3 flex-shrink-0">
                              <span className="font-mono font-bold text-sm text-black">
                                {option.price}€
                              </span>
                              <button
                                onClick={() => window.open(option.calendlyUrl || 'https://calendly.com/mygbeautyroom', '_blank', 'noopener,noreferrer')}
                                className="bg-black active:scale-95 text-white font-bold py-1 px-3 rounded-sm text-[9px] uppercase tracking-wider transition-all cursor-pointer font-mono"
                                id={`btn-book-formula-${option.id}`}
                              >
                                RDV
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                );
              })()}
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Internal Footer Elements */}
      <footer className="mt-14 px-6 border-t border-gray-100 pt-8 text-center bg-gray-50/50">
        <div className="flex justify-center space-x-6 text-gray-400 mb-6">
          <a href="https://www.instagram.com/mygbeautyroom/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" title="Instagram">
            <InstagramIcon className="w-4 h-4 text-gray-500" />
          </a>
          <a href="https://www.snapchat.com/add/mygbeautyroom" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" title="Snapchat">
            <SnapchatIcon className="w-4 h-4 text-gray-500" />
          </a>
          <a href="https://www.tiktok.com/@mygbeautyroom?_r=1&_t=ZS-97GB5ksLt1s" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" title="TikTok">
            <TikTokIcon className="w-4 h-4 text-gray-500" />
          </a>
        </div>
        <div className="text-[9px] text-gray-400 uppercase tracking-widest leading-loose pb-12 font-mono">
          {COMPANY_INFO.name.toUpperCase()} BEAUTY ROOM © 2026<br />
          TOUS DROITS RÉSERVÉS
        </div>
      </footer>
    </div>
  );
}

function InstagramIcon({ className }: { className: string }) {
  return (
    <svg fill="none" className={className} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  );
}

function SnapchatIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.065 2C9.273 2 7.566 3.766 7.566 6.498v.485c-.366.03-.723.117-.997.268a.327.327 0 00-.11.483c.057.108.17.174.29.181.3.023.573.086.824.19.218.088.302.23.278.384-.084.462-.504.777-1.026.777-.127 0-.251-.03-.376-.078-.163-.06-.325-.09-.486-.09-.276 0-.505.098-.672.265-.258.258-.292.566-.292.665.013.316.238.55.598.581.662.06 1.103.372 1.337.932.065.163.157.425.04.655-.252.505-1.069 1.013-1.843 1.013a.795.795 0 01-.204-.02c-.126-.022-.244.054-.266.18-.065.38.223 1.236 1.897 1.523.196.034.35.2.371.398.02.166.037.306.055.443.117.943.386 1.254.79 1.254.1 0 .202-.01.3-.027.22-.04.476-.062.772-.062.463 0 .835.084 1.19.244a3.77 3.77 0 001.684.41c.6 0 1.184-.149 1.686-.41.355-.16.726-.244 1.19-.244.296 0 .552.022.772.062.099.017.2.027.3.027.403 0 .673-.311.79-1.254.018-.137.035-.277.055-.443.02-.198.175-.364.37-.398 1.675-.287 1.963-1.143 1.897-1.522a.267.267 0 00-.266-.18 1.152 1.152 0 01-.204.019c-.774 0-1.591-.508-1.843-1.013-.117-.23-.025-.492.04-.655.234-.56.675-.872 1.337-.932.36-.031.585-.265.598-.581 0-.1-.034-.407-.292-.665a.946.946 0 00-.672-.265c-.161 0-.323.03-.486.09-.125.047-.249.078-.376.078-.522 0-.942-.315-1.026-.777-.024-.153.06-.296.278-.384.251-.104.524-.167.824-.19.12-.007.233-.073.29-.181a.327.327 0 00-.11-.483c-.274-.15-.63-.238-.997-.268v-.485C16.434 3.766 14.857 2 12.065 2z"/>
    </svg>
  );
}

function TikTokIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.94a8.16 8.16 0 004.78 1.52V7.01a4.85 4.85 0 01-1.01-.32z"/>
    </svg>
  );
}
