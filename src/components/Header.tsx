import { useState } from 'react';
import { Menu, X, Calendar, MessageSquare, HelpCircle, Phone, Home, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_INFO } from '../data';

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
  onOpenBooking: () => void;
  onOpenAppointments: () => void;
  bookingCount: number;
}

export default function Header({
  currentView,
  setView,
  onOpenBooking,
  onOpenAppointments,
  bookingCount
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Accueil", value: "home", icon: Home },
    { label: "Nos Prestations", value: "services", icon: Heart },
    { label: "Avis Clients", value: "reviews", icon: MessageSquare },
    { label: "Contact & FAQ", value: "contact", icon: HelpCircle },
  ];

  const handleNavClick = (view: string) => {
    setView(view);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        {/* Barre principale nav */}
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-1.5 hover:bg-gray-50 rounded-md transition-colors text-black focus:outline-none"
              aria-label="Ouvrir le menu"
              id="btn-menu-toggle"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="cursor-pointer" onClick={() => handleNavClick("home")}>
              <img
                src="/logo.png"
                alt="MYG Beauty Room"
                className="h-14 w-auto object-contain drop-shadow-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {bookingCount > 0 && (
              <button
                onClick={onOpenAppointments}
                className="relative p-2 text-black hover:bg-gray-50 rounded-full transition-colors focus:outline-none"
                title="Mes rendez-vous"
                id="btn-view-appointments"
              >
                <Calendar className="w-5 h-5 text-gray-800" />
                <span className="absolute top-0 right-0 bg-black text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                  {bookingCount}
                </span>
              </button>
            )}
            <button
              onClick={onOpenBooking}
              className="bg-black hover:bg-black/90 text-white text-[10px] sm:text-[11px] font-bold py-2 px-3 sm:px-4 rounded-sm uppercase tracking-wider transition-colors active:scale-95 duration-150"
              id="btn-cta-prendre-rdv"
            >
              Prendre RDV
            </button>
          </div>
        </div>

        {/* Bandeau promo — visible uniquement sur la page d'accueil */}
        {currentView === 'home' && (
          <div className="w-full bg-gradient-to-r from-rose-500 to-pink-500 py-2 px-4 flex items-center justify-center text-center">
            <p className="text-[9.5px] font-extrabold uppercase tracking-[0.12em] text-white">
              Promo · Blanchiment Dentaire · Offre Spéciale en cours
            </p>
          </div>
        )}
      </header>

      {/* Navigation Drawer Sidebar Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black"
            />
            
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-white text-black p-6 flex flex-col justify-between shadow-2xl border-r border-gray-100"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <div>
                    <img
                      src="/logo.png"
                      alt="MYG Beauty Room"
                      className="h-20 w-auto object-contain drop-shadow-sm"
                    />
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1 text-gray-400 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
                    aria-label="Fermer le menu"
                    id="btn-close-menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="mt-8 space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentView === item.value;
                    return (
                      <button
                        key={item.value}
                        onClick={() => handleNavClick(item.value)}
                        className={`w-full flex items-center gap-4 px-4 py-3 text-sm font-semibold rounded-md transition-all text-left ${
                          isActive 
                            ? 'bg-black text-white' 
                            : 'text-gray-600 hover:text-black hover:bg-gray-50'
                        }`}
                        id={`nav-item-${item.value}`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Sidebar Footer */}
              <div className="pt-6 border-t border-gray-100 space-y-4">
                {bookingCount > 0 && (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOpenAppointments();
                    }}
                    className="w-full flex items-center justify-between px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors text-xs font-semibold text-gray-800"
                    id="btn-menu-my-bookings"
                  >
                    <span className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gray-600" />
                      Mes réservations
                    </span>
                    <span className="bg-black text-white font-bold px-1.5 py-0.5 rounded text-[10px]">
                      {bookingCount}
                    </span>
                  </button>
                )}
                <div className="text-center text-[10px] text-gray-400">
                  <p className="font-semibold text-black">{COMPANY_INFO.name} Beauty Room</p>
                  <p>{COMPANY_INFO.city} - France</p>
                  <p className="mt-2 text-[9px]">© 2026 Tous droits réservés</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
