import { useState } from 'react';
import { MapPin, Calendar, Clock, Instagram, Send, Mail, Phone, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data';

export default function WelcomeSection() {
  const [activeTab, setActiveTab] = useState<'horaires' | 'contact'>('horaires');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const dayOrder = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
  const sortedHours = [...COMPANY_INFO.workingHours].sort(
    (a, b) => dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day)
  );

  return (
    <section className="px-6 py-8 flex flex-col items-center text-center bg-white border-b border-gray-50">
      <div className="inline-block px-3 py-1 bg-gray-50 rounded-full mb-3">
        <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
          Message de bienvenue
        </p>
      </div>

      {/* Profile Image with high-end style */}
      <div className="relative mb-6">
        <div className="w-[124px] h-[124px] rounded-full bg-gray-100 flex items-center justify-center p-1 border border-gray-200 shadow-sm overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
            alt="Sabrina - Praticienne MYG" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full"
            id="img-practitioner"
          />
        </div>
        <span className="absolute bottom-1 right-1 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-white animate-pulse" title="Praticienne disponible" />
      </div>

      <div className="max-w-md">
        <h3 className="text-lg font-bold font-sans tracking-tight mb-2 text-black">
          MYG par Sabrina
        </h3>
        <p className="text-xs leading-relaxed text-gray-600 max-w-sm mx-auto">
          Bienvenue dans mon cocon dédié à la beauté de votre sourire et de votre regard. 
          Située à Marne-la-Vallée, je vous propose des prestations de blanchiment dentaire esthétique haut de gamme, 
          de réhaussement de cils et de soins du visage pour révéler votre éclat naturel en toute sécurité.
        </p>
      </div>

      {/* Interactive Location Link */}
      <a 
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Marne-la-Vallée, France")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center gap-2 text-[10px] font-bold text-gray-500 hover:text-black transition-colors bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer"
        id="link-location-maps"
      >
        <MapPin className="w-3.5 h-3.5 text-black" />
        <span>Nous sommes situés à Marne-la-Vallée</span>
      </a>

      {/* Horaires & Contact Switcheable Segment */}
      <div className="w-full max-w-sm mt-10" id="section-quick-info">
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={() => setActiveTab('horaires')}
            className={`py-2.5 text-[11px] uppercase font-bold rounded-sm tracking-widest transition-all ${
              activeTab === 'horaires'
                ? 'bg-black text-white shadow-sm'
                : 'bg-gray-50 text-gray-500 hover:text-black border border-gray-100'
            }`}
            id="btn-tab-horaires"
          >
            Horaires
          </button>
          
          <button
            onClick={() => setActiveTab('contact')}
            className={`py-2.5 text-[11px] uppercase font-bold rounded-sm tracking-widest transition-all ${
              activeTab === 'contact'
                ? 'bg-black text-white shadow-sm'
                : 'bg-gray-50 text-gray-500 hover:text-black border border-gray-100'
            }`}
            id="btn-tab-contact"
          >
            Contact
          </button>
        </div>

        {/* Dynamic Display area */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-left min-h-[170px]" id="tab-content">
          {activeTab === 'horaires' ? (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 text-xs"
            >
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                <Clock className="w-4 h-4 text-black" />
                <span className="font-bold text-black uppercase tracking-wider text-[10px]">Heures d'Ouverture</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {sortedHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center py-0.5">
                    <span className="font-semibold text-gray-600">{schedule.day}</span>
                    <span className={`font-mono text-xs ${schedule.hours === 'Fermé' ? 'text-red-500 font-semibold' : 'text-black'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-3.5 text-xs text-black"
            >
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-200">
                <Instagram className="w-4 h-4 text-black" />
                <span className="font-bold text-black uppercase tracking-wider text-[10px]">Prendre contact</span>
              </div>
              
              <div className="space-y-2.5">
                {/* Instagram Row */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-600 flex items-center gap-1.5">
                    <Instagram className="w-3.5 h-3.5 text-pink-600" />
                    Instagram
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono bg-white border border-gray-200 px-2 py-0.5 rounded text-[11px] text-black">
                      {COMPANY_INFO.instagram}
                    </span>
                    <button 
                      onClick={() => handleCopy(COMPANY_INFO.instagram, 'instagram')}
                      className="p-1 hover:bg-gray-200 rounded text-gray-500 transition-colors"
                      title="Copier le pseudonyme"
                      id="btn-copy-instagram"
                    >
                      {copiedText === 'instagram' ? <span className="text-[10px] text-green-600 font-bold">Copié!</span> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Snapchat Row */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-600 flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5 text-yellow-600" />
                    Snapchat
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono bg-white border border-gray-200 px-2 py-0.5 rounded text-[11px] text-black">
                      {COMPANY_INFO.snapchat}
                    </span>
                    <button 
                      onClick={() => handleCopy(COMPANY_INFO.snapchat, 'snapchat')}
                      className="p-1 hover:bg-gray-200 rounded text-gray-500 transition-colors"
                      title="Copier le pseudonyme"
                      id="btn-copy-snapchat"
                    >
                      {copiedText === 'snapchat' ? <span className="text-[10px] text-green-600 font-bold">Copié!</span> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Email Row */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-600 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    Email
                  </span>
                  <div className="flex items-center gap-1.5">
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-mono text-[11px] text-black underline hover:text-black/80">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Telephone Row */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-600 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-green-600" />
                    Numéro (SMS)
                  </span>
                  <div className="flex items-center gap-1.5">
                    <a href={`tel:${COMPANY_INFO.phone}`} className="font-mono text-[11px] text-black font-semibold underline hover:text-black/80">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
