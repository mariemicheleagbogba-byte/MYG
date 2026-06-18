import { useState } from 'react';
import { Eye, ShieldAlert, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ConditionCard {
  title: string;
  short: string;
  detail: string;
  icon: any;
}

export default function PreAppointmentConditions() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const conditions: ConditionCard[] = [
    {
      title: "Soin Visage & Cils",
      short: "Sans maquillage ni produit",
      detail: "Pour les rendez-vous Cils et soins visage, merci de venir sans aucun maquillage ni produit sur le visage (crème, sérum, huile...)",
      icon: Eye
    },
    {
      title: "Contre-indications",
      short: "Sensibilités & Restrictions",
      detail: "Le blanchiment esthétique est déconseillé en cas de caries non traitées, gencives très irritées, port d'appareil orthodontique bagué, femmes enceintes ou allaitantes.",
      icon: ShieldAlert
    }
  ];

  return (
    <section className="bg-white py-10 border-b border-gray-50 flex flex-col items-center" id="section-pre-booking">
      <button className="bg-black text-white text-[11px] font-bold py-2.5 px-8 rounded-sm uppercase tracking-[0.2em] mb-4 hover:bg-black/90 active:scale-95 transition-all">
        Avant RDV
      </button>
      <p className="text-[10px] text-gray-400 font-medium mb-8 text-center px-4 max-w-sm">
        Cliquez sur une condition pour découvrir les consignes indispensables.
      </p>

      <div className="px-6 grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
        {conditions.map((cond, idx) => {
          const Icon = cond.icon;
          const isOpen = activeIdx === idx;
          return (
            <div key={idx} className="relative col-span-1">
              <button
                onClick={() => setActiveIdx(isOpen ? null : idx)}
                className={`w-full text-left bg-gray-50 border transition-all py-5 px-4 rounded-xl flex flex-col items-center text-center justify-between cursor-pointer min-h-[110px] ${
                  isOpen 
                    ? 'border-black bg-black/5 ring-1 ring-black' 
                    : 'border-gray-200 hover:border-gray-400'
                }`}
                id={`btn-condition-${idx}`}
              >
                <div className="flex flex-col items-center">
                  <Icon className={`w-5 h-5 mb-2 ${isOpen ? 'text-black' : 'text-gray-400'}`} />
                  <span className="text-[10px] font-bold text-black uppercase tracking-wider block">
                    {cond.title}
                  </span>
                  <span className="text-[9px] text-gray-400 mt-1 block leading-none">
                    {cond.short}
                  </span>
                </div>
                <div className="mt-2 text-gray-400">
                  {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </div>
              </button>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full max-w-md px-6 mt-4 overflow-hidden"
          >
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-xs text-left">
              <span className="font-bold text-black block mb-1 uppercase tracking-widest text-[9px]">
                Consigne complète : {conditions[activeIdx].title}
              </span>
              <p className="text-gray-600 leading-relaxed">
                {conditions[activeIdx].detail}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
