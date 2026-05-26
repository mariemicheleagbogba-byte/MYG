import { useState, useEffect } from 'react';
import { Sparkles, Heart, Star, HelpCircle, MessageSquare, Calendar, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Components
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import ReservationPolicies from './components/ReservationPolicies';
import PreAppointmentConditions from './components/PreAppointmentConditions';
import ImportantSection from './components/ImportantSection';
import ReviewsSection from './components/ReviewsSection';
import ContactFAQSection from './components/ContactFAQSection';
import ServiceDetailView from './components/ServiceDetailView';
import BookingModal from './components/BookingModal';
import AppointmentsSection from './components/AppointmentsSection';
import FooterAction from './components/FooterAction';

// Data & Types
import { SERVICES, REVIEWS as DEFAULT_REVIEWS, COMPANY_INFO } from './data';
import { Booking, Review, ServiceOption, Service } from './types';

export default function App() {
  const [currentView, setView] = useState<string>('home');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedPrestationId, setSelectedPrestationId] = useState<string | null>(null);
  
  // Modals
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAppointmentsModalOpen, setIsAppointmentsModalOpen] = useState(false);
  
  // Preselected option when booking is opened
  const [preselectedOption, setPreselectedOption] = useState<ServiceOption | null>(null);

  // Load bookings and reviews from localStorage on mount
  useEffect(() => {
    try {
      const storedBookings = localStorage.getItem('myg_bookings');
      if (storedBookings) {
        setBookings(JSON.parse(storedBookings));
      }

      const storedReviews = localStorage.getItem('myg_reviews');
      if (storedReviews) {
        setReviews(JSON.parse(storedReviews));
      } else {
        setReviews(DEFAULT_REVIEWS);
      }
    } catch (e) {
      console.error("Failed to load local storage state:", e);
      setReviews(DEFAULT_REVIEWS);
    }
  }, []);

  // Save bookings to localStorage when they change
  const saveBookings = (newBookings: Booking[]) => {
    setBookings(newBookings);
    try {
      localStorage.setItem('myg_bookings', JSON.stringify(newBookings));
    } catch (e) {
      console.error("Failed to save bookings locally:", e);
    }
  };

  // Add a new booking
  const handleAddBooking = (newBookingPayload: Omit<Booking, 'id' | 'status' | 'createdAt'>) => {
    const freshBooking: Booking = {
      id: `MYG-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'pending_deposit',
      createdAt: new Date().toISOString(),
      ...newBookingPayload
    };

    const updated = [freshBooking, ...bookings];
    saveBookings(updated);
  };

  // Cancel an appointment
  const handleCancelBooking = (bookingId: string) => {
    const updated = bookings.filter(b => b.id !== bookingId);
    saveBookings(updated);
  };

  // Add a custom review
  const handleAddReview = (newReviewPayload: Omit<Review, 'id' | 'date'>) => {
    const freshReview: Review = {
      id: `rev-${Date.now()}`,
      date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
      ...newReviewPayload
    };

    const updatedReviews = [freshReview, ...reviews];
    setReviews(updatedReviews);
    try {
      localStorage.setItem('myg_reviews', JSON.stringify(updatedReviews));
    } catch (e) {
      console.error("Failed to store custom reviews locally:", e);
    }
  };

  // Navigate to book specific item from catalog
  const handleSelectOptionToBook = (category: string, option: ServiceOption) => {
    setPreselectedOption(option);
    setIsBookingModalOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setPreselectedOption(null);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen text-black flex justify-center selection:bg-black selection:text-white pb-6">
      {/* Simulation frame of mobile width for absolute wireframe fidelity on desktop, fluid responsive bounds */}
      <div className="w-full max-w-md bg-white min-h-screen flex flex-col justify-between shadow-2xl relative overflow-x-hidden border-x border-gray-150">
        
        {/* Navigation Sticky Top bar */}
        <Header 
          currentView={currentView}
          setView={setView}
          onOpenBooking={handleOpenGeneralBooking}
          onOpenAppointments={() => setIsAppointmentsModalOpen(true)}
          bookingCount={bookings.length}
        />

        {/* Dynamic view router switches */}
        <main className="flex-1 bg-white">
          <AnimatePresence mode="wait">
            {currentView === 'home' && (
              <motion.div
                key="home-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* 1. Welcoming segment */}
                <WelcomeSection />

                {/* 2. Policies */}

                {/* 3. Pre Appointment Instructions */}
                <PreAppointmentConditions />

                {/* 4. Payment Currency instructions */}
                <ImportantSection />

                {/* 5. Direct navigation tabs preview panels */}
                <section className="px-6 py-8 text-center bg-white border-b border-gray-50">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2 block">QUELQUES QUESTIONS ?</span>
                  <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                    <button
                      onClick={() => { setView("reviews"); window.scrollTo({ top:0, behavior: 'smooth'}); }}
                      className="p-4 bg-gray-50 hover:bg-gray-100 rounded-2xl border border-gray-150 text-center flex flex-col items-center cursor-pointer transition-colors"
                      id="btn-goto-reviews"
                    >
                      <Star className="w-5 h-5 text-yellow-500 fill-current mb-1.5" />
                      <span className="text-[10px] uppercase font-extrabold tracking-wider text-black">Lire les Avis</span>
                      <span className="text-[8px] text-gray-400 mt-0.5 leading-none">Note Globale 5/5</span>
                    </button>
                    
                    <button
                      onClick={() => { setView("contact"); window.scrollTo({ top:0, behavior: 'smooth'}); }}
                      className="p-4 bg-gray-50 hover:bg-gray-100 rounded-2xl border border-gray-150 text-center flex flex-col items-center cursor-pointer transition-colors"
                      id="btn-goto-faq"
                    >
                      <HelpCircle className="w-5 h-5 text-blue-500 mb-1.5" />
                      <span className="text-[10px] uppercase font-extrabold tracking-wider text-black">FAQ & Contact</span>
                      <span className="text-[8px] text-gray-400 mt-0.5 leading-none">{SERVICES.length * 2}+ Thèmes abordés</span>
                    </button>
                  </div>
                </section>

                {/* 6. Footer call to action booking trigger */}
                <FooterAction onOpenBooking={handleOpenGeneralBooking} />
              </motion.div>
            )}

            {currentView === 'services' && (
              <motion.div
                key="services-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="bg-white min-h-screen"
              >
                <ServiceDetailView 
                  onBack={() => {
                    setView('home');
                    setSelectedPrestationId(null);
                  }}
                  onSelectOption={handleSelectOptionToBook}
                  initialServiceId={selectedPrestationId}
                  onClearInitialServiceId={() => setSelectedPrestationId(null)}
                />
              </motion.div>
            )}

            {currentView === 'reviews' && (
              <motion.div
                key="reviews-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="bg-white min-h-screen"
              >
                {/* Visual navigation header */}
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <button 
                    onClick={() => { setView('home'); window.scrollTo({ top:0 }); }}
                    className="text-xs text-gray-500 hover:text-black underline cursor-pointer"
                    id="btn-back-from-reviews"
                  >
                    Retour
                  </button>
                  <h2 className="text-sm font-extrabold uppercase tracking-widest text-black">
                    Avis Certifiés
                  </h2>
                  <div className="w-10" />
                </div>
                
                <ReviewsSection 
                  reviews={reviews}
                  onAddReview={handleAddReview}
                />
              </motion.div>
            )}

            {currentView === 'contact' && (
              <motion.div
                key="contact-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="bg-white min-h-screen"
              >
                {/* Visual navigation header */}
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <button 
                    onClick={() => { setView('home'); window.scrollTo({ top:0 }); }}
                    className="text-xs text-gray-500 hover:text-black underline cursor-pointer"
                    id="btn-back-from-contact"
                  >
                    Retour
                  </button>
                  <h2 className="text-sm font-extrabold uppercase tracking-widest text-black">
                    Contact & FAQ
                  </h2>
                  <div className="w-10" />
                </div>

                <ContactFAQSection />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Quick bottom visual highlight bar for simulating iOS layout */}
        <div className="h-2 bg-gray-50/10 w-full" />
      </div>

      {/* MODALS */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <BookingModal 
            isOpen={isBookingModalOpen}
            onClose={() => setIsBookingModalOpen(false)}
            onAddBooking={handleAddBooking}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isAppointmentsModalOpen && (
          <AppointmentsSection 
            isOpen={isAppointmentsModalOpen}
            onClose={() => setIsAppointmentsModalOpen(false)}
            bookings={bookings}
            onCancelBooking={handleCancelBooking}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
