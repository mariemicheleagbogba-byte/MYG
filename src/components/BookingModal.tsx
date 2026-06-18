import { useState, useMemo } from 'react';
import { 
  X, Calendar as CalendarIcon, Clock, User, Phone, Mail, 
  MapPin, CheckCircle, ChevronRight, ChevronLeft, CreditCard, ShieldAlert, Sparkles 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, COMPANY_INFO } from '../data';
import { ServiceOption, Booking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBooking: (booking: Omit<Booking, 'id' | 'status' | 'createdAt'>) => void;
}

export default function BookingModal({ isOpen, onClose, onAddBooking }: BookingModalProps) {
  const [step, setStep] = useState(1);
  
  // Selection States
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[0].id);
  const [selectedOption, setSelectedOption] = useState<ServiceOption | null>(SERVICES[0].options[0]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  
  // Client details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [homePrestation, setHomePrestation] = useState(false);
  const [notes, setNotes] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Success Confirmation State
  const [showVoucher, setShowVoucher] = useState(false);
  const [latestBooking, setLatestBooking] = useState<Booking | null>(null);

  // Computed Values
  const activeService = useMemo(() => {
    return SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];
  }, [selectedServiceId]);

  // Generate next 14 open days for appointment scheduling (skipping Sundays and Mondays)
  const availableDates = useMemo(() => {
    const dates = [];
    const today = new Date();
    // Start offering dates from tomorrow
    for (let i = 1; i <= 20; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      const dayOfWeek = nextDay.getDay(); // 0: Sun, 1: Mon, ...
      if (dayOfWeek !== 0 && dayOfWeek !== 1) { // Skip Sunday & Monday
        dates.push({
          rawDate: nextDay,
          formattedString: nextDay.toISOString().split('T')[0],
          dayName: nextDay.toLocaleDateString('fr-FR', { weekday: 'short' }),
          dayNum: nextDay.getDate(),
          monthName: nextDay.toLocaleDateString('fr-FR', { month: 'short' })
        });
      }
    }
    return dates;
  }, []);

  // Static time slots
  const timeSlots = ["09h30", "10h45", "12h00", "13h30", "14h45", "16h00", "17h15", "18h30"];

  const handleNextStep = () => {
    if (step === 1 && !selectedOption) return;
    if (step === 2 && (!selectedDate || !selectedTimeSlot)) return;
    if (step === 3 && (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim())) return;
    
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Trigger booking submission on step 4
      handleConfirmBooking();
    }
  };

  const handleBackStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleConfirmBooking = () => {
    if (!selectedOption || !acceptTerms) return;

    const bookingPayload = {
      clientName: `${firstName.trim()} ${lastName.trim()}`,
      clientEmail: email.trim(),
      clientPhone: phone.trim(),
      serviceName: activeService.name,
      optionName: selectedOption.name,
      optionPrice: selectedOption.price,
      optionDuration: selectedOption.duration,
      date: selectedDate,
      timeSlot: selectedTimeSlot
    };

    // Callback to parent to persist
    onAddBooking(bookingPayload);

    // Create a temporary mock booking for the success voucher
    const fakeBookingId = `MYG-${Math.floor(1000 + Math.random() * 9000)}`;
    const mockCreatedBooking: Booking = {
      id: fakeBookingId,
      ...bookingPayload,
      status: 'pending_deposit',
      createdAt: new Date().toISOString()
    };

    setLatestBooking(mockCreatedBooking);
    setShowVoucher(true);
  };

  const handleCloseAndReset = () => {
    // Reset steps & inputs
    setStep(1);
    setSelectedDate('');
    setSelectedTimeSlot('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setNotes('');
    setAcceptTerms(false);
    setShowVoucher(false);
    setLatestBooking(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        onClick={handleCloseAndReset}
        className="fixed inset-0 bg-black"
        id="booking-modal-overlay"
      />

      {/* Main Card */}
      <motion.div 
        initial={{ scale: 0.95, y: 15, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 15, opacity: 0 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="relative bg-white text-black w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-50 border border-gray-100"
        id="booking-modal-container"
      >
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/80 sticky top-0">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
              {showVoucher ? "FÉLICITATIONS" : `RESERVATION ETAPE ${step}/4`}
            </span>
            <span className="text-sm font-extrabold text-black mt-1">
              {showVoucher ? "Rendez-vous pré-enregistré" : "Prenez Votre RDV Beauté"}
            </span>
          </div>
          <button 
            onClick={handleCloseAndReset}
            className="p-1.5 hover:bg-gray-200 text-gray-400 hover:text-black rounded-lg transition-all"
            aria-label="Fermer la modal"
            id="btn-close-booking-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Container with scroll */}
        <div className="flex-1 overflow-y-auto p-6">
          {!showVoucher ? (
            <>
              {/* Step indicator visual dots */}
              <div className="flex items-center justify-center gap-1.5 mb-6">
                {[1, 2, 3, 4].map((s) => (
                  <div 
                    key={s} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      s === step 
                        ? 'w-8 bg-black' 
                        : s < step 
                          ? 'w-2 bg-gray-950/40' 
                          : 'w-2 bg-gray-200'
                    }`} 
                  />
                ))}
              </div>

              {/* STEP 1: SERVICE & FORMULA */}
              {step === 1 && (
                <motion.div 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                  id="step-1-service-selection"
                >
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      1. Sélectionnez une Prestation
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {SERVICES.map((serv) => (
                        <button
                          key={serv.id}
                          type="button"
                          onClick={() => {
                            setSelectedServiceId(serv.id);
                            setSelectedOption(serv.options[0]);
                          }}
                          className={`py-2 px-1 text-center rounded-xl border text-[10px] uppercase tracking-wider font-extrabold cursor-pointer transition-all flex flex-col items-center justify-center min-h-[50px] ${
                            selectedServiceId === serv.id
                              ? 'border-black bg-black text-white shadow-xs'
                              : 'border-gray-200 text-gray-600 hover:border-gray-400'
                          }`}
                        >
                          <span className="leading-none">{serv.name.split(' ')[0]}</span>
                          <span className="text-[7px] text-gray-400 font-medium lowercase block mt-0.5">
                            {serv.name.split(' ').slice(1).join(' ')}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      2. Choisissez votre Formule
                    </label>
                    <div className="space-y-2.5">
                      {activeService.options.map((option) => (
                        <div
                          key={option.id}
                          onClick={() => setSelectedOption(option)}
                          className={`p-3 border rounded-2xl cursor-pointer hover:border-black transition-all flex justify-between items-start gap-3 ${
                            selectedOption?.id === option.id
                              ? 'border-black bg-black/5 ring-1 ring-black'
                              : 'border-gray-200'
                          }`}
                        >
                          <div className="flex-1">
                            <h4 className="text-xs font-bold text-black flex items-center gap-1.5">
                              {option.name}
                              {option.atHomeEligible && (
                                <span className="text-[8px] bg-green-50 text-green-700 font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                                  A Domicile Opt.
                                </span>
                              )}
                            </h4>
                            <p className="text-[10px] text-gray-500 mt-1 leading-relaxed">
                              {option.description}
                            </p>
                            <span className="text-[10px] text-gray-400 font-mono mt-1.5 inline-block">
                              Durée : {option.duration}
                            </span>
                          </div>
                          <span className="text-sm font-bold text-black font-mono">
                            {option.price}€
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: DATE & TIME */}
              {step === 2 && (
                <motion.div 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                  id="step-2-datetime-selection"
                >
                  {/* Calendar slider */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      1. Sélectionnez un jour
                    </label>
                    <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-gray-200">
                      {availableDates.map((day) => {
                        const isDateSelected = selectedDate === day.formattedString;
                        return (
                          <button
                            key={day.formattedString}
                            type="button"
                            onClick={() => setSelectedDate(day.formattedString)}
                            className={`flex-shrink-0 w-[55px] py-2.5 text-center rounded-xl border flex flex-col items-center justify-center cursor-pointer transition-all ${
                              isDateSelected
                                ? 'border-black bg-black text-white shadow-xs'
                                : 'border-gray-200 bg-white text-black hover:border-gray-400'
                            }`}
                            id={`btn-date-slot-${day.formattedString}`}
                          >
                            <span className="text-[7.5px] uppercase font-bold tracking-tight opacity-75">
                              {day.dayName}
                            </span>
                            <span className="text-sm font-bold block my-0.5 leading-none">
                              {day.dayNum}
                            </span>
                            <span className="text-[7.5px] uppercase font-bold tracking-tight">
                              {day.monthName}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Hour slots */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      2. Choisissez un créneau horaire
                    </label>
                    {!selectedDate ? (
                      <div className="p-6 bg-gray-50 border rounded-xl text-center text-xs text-gray-400 font-medium">
                        Veuillez d'abord sélectionner un jour pour voir les créneaux disponibles.
                      </div>
                    ) : (
                      <div className="grid grid-cols-4 gap-2">
                        {timeSlots.map((slot) => {
                          const isSlotSelected = selectedTimeSlot === slot;
                          // Simulate 4 booked slots dynamically so it looks real
                          const isBooked = (parseInt(slot) % 3 === 0 && selectedDate.endsWith('2'));
                          return (
                            <button
                              key={slot}
                              type="button"
                              disabled={isBooked}
                              onClick={() => setSelectedTimeSlot(slot)}
                              className={`py-2 text-center rounded-lg border text-xs font-mono font-bold transition-all ${
                                isBooked
                                  ? 'bg-gray-100 border-gray-100 text-gray-300 cursor-not-allowed line-through'
                                  : isSlotSelected
                                    ? 'bg-black border-black text-white'
                                    : 'border-gray-200 text-black hover:border-gray-400'
                              }`}
                              id={`btn-time-slot-${slot}`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: CLIENT COORDINATES */}
              {step === 3 && (
                <motion.div 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                  id="step-3-coordinates"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-1" htmlFor="book-fname">
                        Prénom *
                      </label>
                      <input
                        id="book-fname"
                        type="text"
                        required
                        placeholder="Ex. Sarah"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md py-2 px-3 text-xs text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-1" htmlFor="book-lname">
                        Nom *
                      </label>
                      <input
                        id="book-lname"
                        type="text"
                        required
                        placeholder="Ex. Martin"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="block w-full border border-gray-300 rounded-md py-2 px-3 text-xs text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-1" htmlFor="book-phone">
                      Numéro de Portable *
                    </label>
                    <input
                      id="book-phone"
                      type="tel"
                      required
                      placeholder="Ex. 06 12 34 56 78"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="block w-full border border-gray-300 rounded-md py-2 px-3 text-xs text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-1" htmlFor="book-email">
                      Adresse Email *
                    </label>
                    <input
                      id="book-email"
                      type="email"
                      required
                      placeholder="Ex. sarah.martin@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full border border-gray-300 rounded-md py-2 px-3 text-xs text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                    />
                  </div>

                  {selectedOption?.atHomeEligible && (
                    <div className="bg-gray-50 border p-3 rounded-xl flex items-start gap-2.5">
                      <input
                        id="book-home-eligible"
                        type="checkbox"
                        checked={homePrestation}
                        onChange={(e) => setHomePrestation(e.target.checked)}
                        className="mt-1 h-3.5 w-3.5 rounded-sm border-gray-300 text-black focus:ring-black"
                      />
                      <div>
                        <label htmlFor="book-home-eligible" className="text-[11px] font-bold text-black uppercase tracking-wide cursor-pointer">
                          Soin à domicile ?
                        </label>
                        <p className="text-[10px] text-gray-500 leading-normal">
                          Cochez cette case si vous habitez à Marne-la-Vallée (10km rayon) et préférez que Sabrina se déplace chez vous.
                        </p>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-1" htmlFor="book-notes">
                      Note complémentaire (facultatif)
                    </label>
                    <textarea
                      id="book-notes"
                      rows={2}
                      placeholder="Détails, allergies ou besoin particulier..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="block w-full border border-gray-300 rounded-md py-2 px-3 text-xs text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
                    />
                  </div>
                </motion.div>
              )}

              {/* STEP 4: DEPOSIT CONFIRMATION */}
              {step === 4 && (
                <motion.div 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                  id="step-4-deposit-confirmation"
                >
                  <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                        Règle Strict de l'Acompte
                      </h4>
                      <p className="text-[10px] text-amber-800 leading-relaxed mt-1">
                        Pour valider définitivement votre créneau, un transfert d'acompte de <strong>10€</strong> est obligatoire dans les 12 heures suivant votre demande. Les références de virement vous seront indiquées à l'étape suivante.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border rounded-2xl p-4 text-xs space-y-2">
                    <span className="font-extrabold text-black uppercase tracking-wider text-[10px] block border-b border-gray-200 pb-1.5">
                      Recapitulatif de demande
                    </span>
                    <div className="flex justify-between items-center text-gray-600">
                      <span>Soin :</span>
                      <strong className="text-black">{selectedOption?.name}</strong>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span>Catégorie :</span>
                      <strong className="text-black">{activeService.name}</strong>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span>Date :</span>
                      <strong className="text-black font-mono">
                        {selectedDate.split('-').reverse().join('/')}
                      </strong>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span>Heure :</span>
                      <strong className="text-black font-mono">{selectedTimeSlot}</strong>
                    </div>
                    {homePrestation && (
                      <div className="flex justify-between items-center text-green-700">
                        <span>Format :</span>
                        <strong className="font-bold">À domicile (Marne-La-Vallée)</strong>
                      </div>
                    )}
                    <div className="border-t border-gray-200 pt-2 flex justify-between items-center text-sm">
                      <span className="font-bold text-black uppercase tracking-wider text-xs">Total Prestation :</span>
                      <span className="font-mono font-bold text-lg text-black">{selectedOption?.price}€</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2">
                    <input
                      id="book-terms"
                      type="checkbox"
                      required
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded-sm border-gray-300 text-black focus:ring-black cursor-pointer"
                    />
                    <label htmlFor="book-terms" className="text-[10px] text-gray-600 leading-relaxed cursor-pointer select-none">
                      Je m'engage à transférer l'acompte de 10€ dans les 12 heures afin de valider mon créneau, et je déclare accepter les conditions d'annulation (remboursement ou report sous condition de notification 24h à l'avance). *
                    </label>
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            /* SUCCESS TICKET VOUCHER VIEW */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6 text-center"
              id="booking-success-voucher"
            >
              <div className="flex flex-col items-center py-4 bg-green-50 border border-green-200 rounded-3xl">
                <CheckCircle className="w-12 h-12 text-green-600 mb-2 animate-bounce" />
                <h4 className="text-sm font-extrabold text-green-900 uppercase tracking-widest leading-none">
                  Demande Enregistrée !
                </h4>
                <p className="text-[10px] text-green-700 mt-1.5 font-medium">
                  Référence : {latestBooking?.id}
                </p>
              </div>

              {/* Mock RIB detail block */}
              <div className="bg-black text-white p-5 rounded-3xl text-left border border-gray-150 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-15">
                  <CreditCard className="w-24 h-24" />
                </div>
                
                <h5 className="text-[10px] uppercase font-bold text-yellow-400 tracking-widest mb-3">
                  Instructions d'Acompte (10€)
                </h5>
                <p className="text-[10px] text-gray-300 leading-relaxed mb-4">
                  Merci de faire un virement bancaire instantané de 10€ avec le libellé <strong>"{latestBooking?.id} - {lastName}"</strong> vers :
                </p>
                
                <div className="space-y-2 font-mono text-xs">
                  <div className="bg-white/10 p-2.5 rounded-lg border border-white/5">
                    <span className="text-[8px] uppercase tracking-wider text-gray-400 block leading-none mb-1">IBAN France (MYG Beauty Room)</span>
                    <span className="text-[11px] font-bold block whitespace-nowrap overflow-x-auto text-yellow-100">
                      FR76 1234 5678 9012 3456 7890 123
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300 text-[10px]">
                    <span>Titulaire : Sabrina MYG</span>
                    <span>Lydia/Paylib : 06 23 45 67 89</span>
                  </div>
                </div>
              </div>

              {/* Recipient summary Ticket */}
              <div className="border border-dashed border-gray-300 rounded-2xl p-4 text-xs space-y-2 text-left bg-gray-50">
                <span className="font-extrabold text-black uppercase tracking-wider text-[10px] block pb-2 border-b border-gray-200">
                  Votre rendez-vous beauté
                </span>
                <div className="flex justify-between">
                  <span className="text-gray-500">Prénom & Nom :</span>
                  <strong className="text-black">{latestBooking?.clientName}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Soin séléctionné :</span>
                  <strong className="text-black">{latestBooking?.optionName}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date prévue :</span>
                  <strong className="text-black font-mono">
                    {latestBooking?.date.split('-').reverse().join('/')}
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Heure :</span>
                  <strong className="text-black font-mono">{latestBooking?.timeSlot}</strong>
                </div>
                <p className="text-[9px] text-gray-400 leading-relaxed text-justify mt-3 pt-2 border-t border-gray-200/50">
                  💡 Pensez à enregistrer cette fiche ou copier la référence client. Un email récapitulatif a été simulé vers {latestBooking?.clientEmail}. Pour toute question, contactez Sabrina au {COMPANY_INFO.phone}.
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Modal Footer (Action buttons) */}
        {!showVoucher && (
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/80 flex items-center justify-between sticky bottom-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBackStep}
                className="flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-black py-2 px-3 border border-gray-200 bg-white rounded-lg transition-colors cursor-pointer"
                id="btn-prev-step"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Retour</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNextStep}
              disabled={
                (step === 1 && !selectedOption) ||
                (step === 2 && (!selectedDate || !selectedTimeSlot)) ||
                (step === 3 && (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim())) ||
                (step === 4 && !acceptTerms)
              }
              className={`flex items-center gap-1.5 text-xs font-bold py-2.5 px-6 rounded-lg uppercase tracking-wider transition-all cursor-pointer ${
                ((step === 1 && !selectedOption) ||
                (step === 2 && (!selectedDate || !selectedTimeSlot)) ||
                (step === 3 && (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim())) ||
                (step === 4 && !acceptTerms))
                  ? 'bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-black text-white hover:bg-black/90 active:scale-95'
              }`}
              id="btn-next-step"
            >
              <span>{step === 4 ? "Confirmer le RDV" : "Suivant"}</span>
              {step < 4 && <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        )}

        {showVoucher && (
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex justify-center sticky bottom-0">
            <button
              onClick={handleCloseAndReset}
              className="bg-black hover:bg-black/90 text-white font-bold text-xs uppercase tracking-widest py-3 px-8 rounded-xl transition-all active:scale-95 cursor-pointer"
              id="btn-booking-success-close"
            >
              Compris, Fermer
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
}
