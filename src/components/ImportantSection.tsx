import { Users, Info, Banknote, CalendarCheck, Clock } from 'lucide-react';

export default function ImportantSection() {
  return (
    <section className="bg-white py-12 border-b border-gray-50 text-center" id="section-important">
      <div className="bg-black text-white text-center py-2 px-8 mb-8 mx-auto w-fit shadow-xs">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em]">
          Important
        </h2>
      </div>

      <div className="px-6 grid grid-cols-2 gap-3.5 max-w-md mx-auto text-left">
        {/* Payment Policy Card */}
        <div className="p-4.5 border border-dashed border-gray-200 rounded-2xl bg-gray-50/80 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm font-mono select-none">
                €
              </div>
              <h3 className="text-[9px] md:text-[10px] font-extrabold uppercase tracking-wide md:tracking-widest text-black leading-tight min-w-0">
                Paiement
              </h3>
            </div>
            <p className="text-[10px] leading-relaxed text-gray-500">
              Le solde s'effectue en <span className="font-semibold text-black">espèces</span> ou par <span className="font-semibold text-black">virement immédiat</span> (Lydia, Paylib). Les chèques ne sont pas acceptés.
            </p>
          </div>
        </div>

        {/* Companion Policy Card */}
        <div className="p-4.5 border border-dashed border-gray-200 rounded-2xl bg-[#F9F9F8] flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                <Users className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-[9px] md:text-[10px] font-extrabold uppercase tracking-wide md:tracking-widest text-black leading-tight min-w-0">
                Accompagnateurs
              </h3>
            </div>
            <p className="text-[10px] leading-relaxed text-gray-500">
              <span className="font-semibold text-black">Aucun accompagnateur</span> (ami, enfant) n'est admis en cabine par mesure d'hygiène, hors formule Duo.
            </p>
          </div>
        </div>

        {/* Booking Policy Card */}
        <div className="p-4.5 border border-dashed border-gray-200 rounded-2xl bg-gray-50/80 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                <CalendarCheck className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-[9px] md:text-[10px] font-extrabold uppercase tracking-wide md:tracking-widest text-black leading-tight min-w-0">
                Prise de RDV
              </h3>
            </div>
            <p className="text-[10px] leading-relaxed text-gray-500">
              Pour confirmer votre RDV, un message doit être envoyé <span className="font-semibold text-black">24h avant</span>. Passé ce délai, toute réservation non confirmée sera automatiquement annulée, et l'acompte ne sera pas remboursé.
            </p>
          </div>
        </div>

        {/* Late Policy Card */}
        <div className="p-4.5 border border-dashed border-gray-200 rounded-2xl bg-[#F9F9F8] flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-[9px] md:text-[10px] font-extrabold uppercase tracking-wide md:tracking-widest text-black leading-tight min-w-0">
                Retards
              </h3>
            </div>
            <p className="text-[10px] leading-relaxed text-gray-500">
              Tout retard de plus de <span className="font-semibold text-black">10 min</span> peut entraîner l'annulation du RDV ou le raccourcissement du soin afin de respecter les clients suivants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
