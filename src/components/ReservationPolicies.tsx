import { PiggyBank, CalendarRange, Clock4, ShieldX } from 'lucide-react';

export default function ReservationPolicies() {
  const policies = [
    {
      title: "Acomptes",
      description: "Un acompte de 10€ par virement bancaire, Lydia ou Paylib est obligatoire pour réserver et bloquer définitivement votre rendez-vous.",
      icon: PiggyBank,
      color: "text-amber-600 bg-amber-50"
    },
    {
      title: "Prise de RDV",
      description: "Pour confirmer le RDV, un message rapide doit être envoyé 24h avant. Les réservations non confirmées à ce délai peuvent être libérées.",
      icon: CalendarRange,
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      title: "Retards",
      description: "Tout retard de plus de 10 min peut entrainer l'annulation du RDV ou le raccourcissement du soin afin de respecter les clientes suivantes.",
      icon: Clock4,
      color: "text-rose-600 bg-rose-50"
    },
    {
      title: "Annulation",
      description: "Toute annulation doit se faire 24h à l'avance. Passé ce délai, l'acompte de 10€ sera conservé et perdu pour couvrir la préparation.",
      icon: ShieldX,
      color: "text-red-500 bg-red-50"
    }
  ];

  return (
    <section className="bg-white py-10 border-b border-gray-50" id="section-policies">
      <div className="bg-black text-white text-center py-3 mb-8 shadow-sm">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em]">
          Politiques de Réservation
        </h2>
      </div>

      <div className="px-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 max-w-md sm:max-w-2xl mx-auto">
        {policies.map((policy, idx) => {
          const IconComponent = policy.icon;
          return (
            <div 
              key={idx} 
              className="group p-5 bg-white border border-gray-100 hover:border-black/20 hover:shadow-md transition-all rounded-xl flex flex-col items-center text-center"
            >
              <div className={`p-3 rounded-full ${policy.color} mb-3 group-hover:scale-110 transition-transform duration-200`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-black mb-1.5">
                {policy.title}
              </h3>
              <p className="text-[11px] leading-relaxed text-gray-500">
                {policy.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
