import { useState, useEffect } from 'react';
import { ChevronLeft, Sparkles, Send } from 'lucide-react';
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

  // Custom premium illustrative vectors matching the video strictly
  function renderServiceIllustration(serviceId: string) {
    switch (serviceId) {
      case 'soins_visage':
        return (
          <div className="w-full h-52 bg-[#E5E1DC] rounded-t-2xl relative flex items-center justify-center overflow-hidden">
            {/* Signature grey control lens dot on upper-right */}
            <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-neutral-600/30 backdrop-blur-md shadow-xs" />
            
            {/* Central futuristic cosmetic lens plate illustration */}
            <div className="relative w-20 h-20 rounded-full bg-[#CCC4B9] shadow-md flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#E5E1DC] shadow-inner flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#B9AE9F] shadow-md" />
              </div>
            </div>
            
            {/* Subtle light reflect line */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FFF]/10 to-transparent pointer-events-none" />
          </div>
        );
      case 'extensions_cils':
        return (
          <div className="w-full h-52 bg-[#EBDCD0] rounded-t-2xl relative flex items-center justify-center overflow-hidden">
            {/* Signature grey control lens dot on upper-right */}
            <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-neutral-600/30 backdrop-blur-md shadow-xs" />
            
            {/* Minimalist eyeball and long lashes graphics */}
            <div className="relative flex items-center justify-center">
              <svg className="w-24 h-24 text-stone-700/90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Eye contour */}
                <path d="M22 53 C 35 28, 65 28, 78 53" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M22 53 C 35 34, 65 34, 78 53" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" strokeLinecap="round"/>
                {/* Eyelashes */}
                <path d="M30 46 L 23 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M40 40 L 35 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M50 38 L 50 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M60 40 L 65 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M70 46 L 77 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                {/* Pupil/Iris circle */}
                <circle cx="50" cy="53" r="11" stroke="currentColor" strokeWidth="2" fill="#FAF5EF"/>
                <circle cx="50" cy="53" r="4.5" fill="currentColor"/>
              </svg>
            </div>
            
            {/* Light glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FFF]/10 to-transparent pointer-events-none" />
          </div>
        );
      case 'lifting_colombien':
        return (
          <div className="w-full h-52 bg-[#E2DCD3] rounded-t-2xl relative flex items-center justify-center overflow-hidden">
            {/* Signature grey control lens dot on upper-right */}
            <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-neutral-600/30 backdrop-blur-md shadow-xs" />
            
            {/* Stylized contour design of standard sculpture body */}
            <div className="relative">
              <svg className="w-20 h-20 text-stone-700/90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Aesthetic body curves of skin remodeling */}
                <path d="M37 15 C 39 28, 42 38, 45 48 C 39 58, 30 73, 32 87 C 44 87, 56 87, 68 87 C 70 73, 61 58, 55 48 C 58 38, 61 28, 63 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="50" cy="22" r="3.5" fill="currentColor"/>
                <path d="M45 48 C 48 52, 52 52, 55 48" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            
            {/* Subtle glow highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FFF]/15 to-transparent pointer-events-none" />
          </div>
        );
      case 'formules_signature':
        return (
          <div className="w-full h-52 bg-[#EEEAE1] rounded-t-2xl relative flex items-center justify-center overflow-hidden">
            {/* Signature grey control lens dot on upper-right */}
            <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-neutral-600/30 backdrop-blur-md shadow-xs" />
            
            {/* Beautiful radiant cosmic star shape representing complete formula option */}
            <div className="relative">
              <svg className="w-24 h-24 text-amber-700/50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 15 C 50 35, 35 50, 15 50 C 35 50, 50 65, 50 85 C 50 65, 65 50, 85 50 C 65 50, 50 35, 50 15 Z" fill="currentColor"/>
                {/* Secondary starlet */}
                <path d="M74 26 Q 74 32 80 32 Q 74 32 74 38 Q 74 32 68 32 Q 74 32 74 26 Z" fill="currentColor" opacity="0.8"/>
                {/* Small supportive stars */}
                <circle cx="25" cy="72" r="2" fill="currentColor"/>
                <circle cx="32" cy="78" r="1" fill="currentColor"/>
              </svg>
            </div>
          </div>
        );
      case 'blanchiment':
      default:
        return (
          <div className="w-full h-52 bg-[#EAEBED] rounded-t-2xl relative flex items-center justify-center overflow-hidden">
            {/* Signature grey control lens dot on upper-right */}
            <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-neutral-600/30 backdrop-blur-md shadow-xs" />
            
            {/* Radiant clean minimal smile/tooth */}
            <div className="relative">
              <svg className="w-20 h-20 text-stone-700/90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 30 C 35 22, 45 22, 50 26 C 55 22, 65 22, 68 30 C 72 45, 68 70, 62 80 C 58 83, 52 75, 50 72 C 48 75, 42 83, 38 80 C 32 70, 28 45, 32 30 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                {/* Glinting star */}
                <path d="M72 17 Q 72 25 80 25 Q 72 25 72 33 Q 72 25 64 25 Q 72 25 72 17 Z" fill="currentColor"/>
                <path d="M38 48 C 45 52, 55 52, 62 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        );
    }
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
                              onClick={() => onSelectOption(activeService.id, option)}
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
                            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                            id={`service-option-block-${option.id}`}
                          >
                            <span className="text-xs font-bold text-black uppercase tracking-wide">
                              {option.name}
                            </span>
                            <div className="flex items-center gap-3">
                              <span className="font-mono font-bold text-sm text-black">
                                {option.price}€
                              </span>
                              <button
                                onClick={() => onSelectOption(activeService.id, option)}
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
          <a href="#" className="hover:text-black transition-colors" title="Snapchat">
            <Send className="w-4 h-4 text-gray-500" />
          </a>
          <a href="#" className="hover:text-black transition-colors" title="Instagram">
            <InstagramIcon className="w-4 h-4 text-gray-500" />
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

// Inline helper for instagram icon
function InstagramIcon({ className }: { className: string }) {
  return (
    <svg fill="none" className={className} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  );
}
