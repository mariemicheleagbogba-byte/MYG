import { useState, useMemo, FormEvent } from 'react';
import { Star, MessageSquarePlus, MessageSquare, CheckCircle, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Review } from '../types';

interface ReviewsSectionProps {
  reviews: Review[];
  onAddReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

export default function ReviewsSection({ reviews, onAddReview }: ReviewsSectionProps) {
  // Local form state
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Blanchiment Dentaire');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  // Compute dynamic average rating
  const averageRating = useMemo(() => {
    if (reviews.length === 0) return '5.0';
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / reviews.length).toFixed(1);
  }, [reviews]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !email.trim() || !content.trim()) return;

    // Trigger parent callback
    onAddReview({
      author: author.trim(),
      service,
      content: content.trim(),
      rating
    });

    // Reset Form & show success state
    setAuthor('');
    setEmail('');
    setContent('');
    setRating(5);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="bg-white py-8" id="section-reviews">
      <div className="max-w-md mx-auto px-6">
        
        {/* Rating Summary Card matching wireframe 3 exactly */}
        <div className="bg-black text-white rounded-3xl p-6 flex flex-col items-center justify-center shadow-md text-center mb-8">
          <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Note Globale</span>
          <span className="text-5xl font-mono font-bold text-white mb-2 tracking-tight">
            {averageRating}
          </span>
          <div className="flex space-x-1.5 justify-center mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.7)]"
              />
            ))}
          </div>
          <p className="text-[10px] text-gray-400 mt-1 font-medium">
            Moyenne basée sur {reviews.length} avis sincères
          </p>
        </div>

        {/* Dynamic List header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm font-extrabold text-black uppercase tracking-wider">
            + de {reviews.length * 30}+ Commentaires clients
          </h3>
          <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
            <Smile className="w-3 h-3" /> Certifiés
          </span>
        </div>

        {/* Reviews scrolling feed */}
        <div className="space-y-4 max-h-[460px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-200">
          <AnimatePresence initial={false}>
            {reviews.map((rev) => (
              <motion.article 
                key={rev.id} 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="pb-4 border-b border-gray-100 last:border-0 review-card"
              >
                <div className="flex justify-between items-start mb-1.5">
                  <div>
                    <h4 className="font-bold text-xs text-black">
                      {rev.author}, <span className="text-gray-500 font-normal">{rev.service}</span>
                    </h4>
                    <div className="flex space-x-0.5 mt-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_2px_rgba(251,191,36,0.6)]' : 'fill-gray-200 text-gray-200'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">{rev.date}</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed text-justify">
                  {rev.content}
                </p>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Leave a review Form block */}
        <div className="bg-gray-50 p-6 rounded-3xl mt-12 border border-gray-200" id="form-lassez-commentaire">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquarePlus className="w-4 h-4 text-black" />
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-black">
              Laissez un commentaire
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name input */}
            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-1" htmlFor="rev-name">
                Nom + Prénom *
              </label>
              <input 
                id="rev-name"
                name="name"
                type="text" 
                placeholder="Ex. Anaïs G."
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="block w-full border border-gray-300 bg-white rounded-md shadow-xs focus:ring-1 focus:ring-black focus:border-black text-xs py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none"
              />
            </div>

            {/* Email input */}
            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-1" htmlFor="rev-email">
                Email *
              </label>
              <input 
                id="rev-email"
                name="email"
                type="email" 
                placeholder="votre@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full border border-gray-300 bg-white rounded-md shadow-xs focus:ring-1 focus:ring-black focus:border-black text-xs py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-1" htmlFor="rev-service">
                Soin effectué
              </label>
              <select 
                id="rev-service"
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="block w-full border border-gray-300 bg-white rounded-md shadow-xs focus:ring-1 focus:ring-black focus:border-black text-xs py-2 px-2.5 text-black focus:outline-none"
              >
                <option value="Blanchiment Dentaire">Blanchiment Dentaire</option>
                <option value="Soin Visage Hydralift">Soin Visage Hydralift</option>
                <option value="Beauté du Regard">Beauté du Regard</option>
              </select>
            </div>

            {/* Rating Selector */}
            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                Votre Note
              </label>
              <div className="flex items-center gap-1 py-1">
                {[1, 2, 3, 4, 5].map((starIdx) => {
                  const isActive = hoverRating !== null ? starIdx <= hoverRating : starIdx <= rating;
                  return (
                    <button
                      key={starIdx}
                      type="button"
                      onClick={() => setRating(starIdx)}
                      onMouseEnter={() => setHoverRating(starIdx)}
                      onMouseLeave={() => setHoverRating(null)}
                      className="p-1 focus:outline-none transition-transform active:scale-125"
                      id={`btn-star-rating-${starIdx}`}
                    >
                      <Star 
                        className={`w-5 h-5 ${
                          isActive ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`} 
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Comment Body */}
            <div>
              <label className="block text-[10px] font-bold text-gray-700 uppercase tracking-wider mb-1" htmlFor="rev-comment">
                Commentaire *
              </label>
              <textarea 
                id="rev-comment"
                name="comment"
                rows={3} 
                placeholder="Partagez votre expérience réelle avec Sabrina..."
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="block w-full border border-gray-300 bg-white rounded-md shadow-xs focus:ring-1 focus:ring-black focus:border-black text-xs py-2 px-3 text-black placeholder:text-gray-400 focus:outline-none"
              />
            </div>

            {/* Submit Block */}
            <div className="pt-2 text-center">
              <button 
                type="submit"
                className="bg-black hover:bg-black/95 text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest w-full transition-all active:scale-95 duration-100"
                id="btn-submit-review"
              >
                ENVOYÉ
              </button>
            </div>
          </form>

          {/* Toast Notification of Success */}
          <AnimatePresence>
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-xs flex items-center gap-2"
                id="alert-review-success"
              >
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Merci ! Votre avis a été enregistré avec succès et s'affiche désormais sur notre page.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
