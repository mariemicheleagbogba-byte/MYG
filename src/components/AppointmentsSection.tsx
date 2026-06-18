import { X, Calendar, Clock, MapPin, AlertCircle, Trash2, CheckCircle2, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Booking } from '../types';
import { COMPANY_INFO } from '../data';

interface AppointmentsSectionProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Booking[];
  onCancelBooking: (id: string) => void;
}

export default function AppointmentsSection({
  isOpen,
  onClose,
  bookings,
  onCancelBooking
}: AppointmentsSectionProps) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black"
        id="appointments-overlay"
      />

      {/* Main card panel */}
      <motion.div
        initial={{ scale: 0.95, y: 15, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 15, opacity: 0 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="relative bg-white text-black w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] z-50 border border-gray-100"
        id="appointments-container"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/80">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">ESPACE RESERVATION</span>
            <span className="text-sm font-extrabold text-black mt-1">Vos Rendez-vous ({bookings.length})</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-200 text-gray-400 hover:text-black rounded-lg transition-all"
            aria-label="Fermer"
            id="btn-close-appointments-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of bookings */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {bookings.length === 0 ? (
            <div className="text-center py-12 px-4 space-y-3">
              <Calendar className="w-12 h-12 text-gray-300 mx-auto" />
              <p className="text-sm font-bold text-gray-800">Aucun rendez-vous planifié</p>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                Réservez votre séance de blanchiment dentaire esthétique ou de soin du regard en cliquant sur le bouton principal.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">
                Prestations enregistrées dans ce navigateur
              </p>
              
              <AnimatePresence initial={false}>
                {bookings.map((book) => {
                  const isPending = book.status === 'pending_deposit';
                  return (
                    <motion.div
                      key={book.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border border-gray-200 rounded-2xl p-4 space-y-3 bg-gray-50 relative"
                      id={`appointment-card-${book.id}`}
                    >
                      {/* Booking status badge */}
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200/60">
                        <span className="font-mono text-xs font-bold text-black">{book.id}</span>
                        <div className="flex items-center gap-1.5">
                          {isPending ? (
                            <span className="flex items-center gap-1 text-[9px] uppercase font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                              <ShieldAlert className="w-3 h-3" /> Acompte Attendu
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-[9px] uppercase font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                              <CheckCircle2 className="w-3 h-3" /> Confirmé
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Info details */}
                      <div className="space-y-1.5 text-xs text-gray-600">
                        <div className="flex justify-between">
                          <span>Prestation :</span>
                          <strong className="text-black">{book.optionName}</strong>
                        </div>
                        <div className="flex justify-between font-mono">
                          <span>Date :</span>
                          <strong className="text-black">{book.date.split('-').reverse().join('/')}</strong>
                        </div>
                        <div className="flex justify-between font-mono">
                          <span>Heure :</span>
                          <strong className="text-black">{book.timeSlot}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Tarif :</span>
                          <strong className="text-black font-semibold">{book.optionPrice}€</strong>
                        </div>
                      </div>

                      {isPending && (
                        <div className="p-2.5 bg-amber-50/50 rounded-xl border border-amber-100 text-[10px] text-amber-900 leading-normal">
                          ⚠️ Pensez à verser votre acompte de 10€ par virement instantané (Lydia/Paylib au 06 23 45 67 89) avec le libellé <strong>"{book.id}"</strong> pour confirmer définitivement.
                        </div>
                      )}

                      {/* Cancel action trigger */}
                      <div className="flex justify-between items-center pt-2">
                        <div className="text-[10px] text-gray-400">
                          Créé le {new Date(book.createdAt).toLocaleDateString('fr-FR')}
                        </div>
                        <button
                          onClick={() => {
                            if (window.confirm("Voulez-vous vraiment annuler votre demande de réservation ? Cette action est irréversible.")) {
                              onCancelBooking(book.id);
                            }
                          }}
                          className="flex items-center gap-1 text-[10px] font-bold text-red-600 hover:text-red-700 focus:outline-none transition-colors"
                          id={`btn-cancel-appt-${book.id}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Annuler la demande</span>
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Footer info message */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 text-[10px] text-gray-400 text-center leading-normal">
          Pour modifier un rendez-vous à moins de 24h de la prestation, merci d'appeler directement Sabrina au {COMPANY_INFO.phone}.
        </div>
      </motion.div>
    </div>
  );
}
