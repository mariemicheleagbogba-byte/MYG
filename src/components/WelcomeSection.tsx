import { useState, useEffect, useRef } from 'react';
import { MapPin, Clock, Instagram, Phone, Copy } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data';

const SnapchatIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.065 2C9.273 2 7.566 3.766 7.566 6.498v.485c-.366.03-.723.117-.997.268a.327.327 0 00-.11.483c.057.108.17.174.29.181.3.023.573.086.824.19.218.088.302.23.278.384-.084.462-.504.777-1.026.777-.127 0-.251-.03-.376-.078-.163-.06-.325-.09-.486-.09-.276 0-.505.098-.672.265-.258.258-.292.566-.292.665.013.316.238.55.598.581.662.06 1.103.372 1.337.932.065.163.157.425.04.655-.252.505-1.069 1.013-1.843 1.013a.795.795 0 01-.204-.02c-.126-.022-.244.054-.266.18-.065.38.223 1.236 1.897 1.523.196.034.35.2.371.398.02.166.037.306.055.443.117.943.386 1.254.79 1.254.1 0 .202-.01.3-.027.22-.04.476-.062.772-.062.463 0 .835.084 1.19.244a3.77 3.77 0 001.684.41c.6 0 1.184-.149 1.686-.41.355-.16.726-.244 1.19-.244.296 0 .552.022.772.062.099.017.2.027.3.027.403 0 .673-.311.79-1.254.018-.137.035-.277.055-.443.02-.198.175-.364.37-.398 1.675-.287 1.963-1.143 1.897-1.522a.267.267 0 00-.266-.18 1.152 1.152 0 01-.204.019c-.774 0-1.591-.508-1.843-1.013-.117-.23-.025-.492.04-.655.234-.56.675-.872 1.337-.932.36-.031.585-.265.598-.581 0-.1-.034-.407-.292-.665a.946.946 0 00-.672-.265c-.161 0-.323.03-.486.09-.125.047-.249.078-.376.078-.522 0-.942-.315-1.026-.777-.024-.153.06-.296.278-.384.251-.104.524-.167.824-.19.12-.007.233-.073.29-.181a.327.327 0 00-.11-.483c-.274-.15-.63-.238-.997-.268v-.485C16.434 3.766 14.857 2 12.065 2z"/>
  </svg>
);

const TikTokIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.94a8.16 8.16 0 004.78 1.52V7.01a4.85 4.85 0 01-1.01-.32z"/>
  </svg>
);

const GALLERY_PHOTOS = [
  '/gallery-cils-1.jpg',
  '/gallery-lifting.webp',
  '/gallery-cils-2.webp',
  '/gallery-soin-2.webp',
  '/gallery-cils-3.webp',
  '/gallery-soin-1.webp',
  '/gallery-rehaussement.webp',
  '/gallery-browlift.webp',
  '/gallery-blanchiment.png',
];

export default function WelcomeSection() {
  const [activeTab, setActiveTab] = useState<'horaires' | 'contact'>('horaires');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % GALLERY_PHOTOS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => setCurrentSlide((idx + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);

  const dayOrder = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
  const sortedHours = [...COMPANY_INFO.workingHours].sort(
    (a, b) => dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day)
  );

  return (
    <section className="flex flex-col items-center text-center bg-white border-b border-gray-50">
      {/* Carousel */}
      <div
        className="w-full overflow-hidden mb-6 h-80 md:h-[500px] relative select-none"
        onTouchStart={e => { touchStartX.current = e.targetTouches[0].clientX; }}
        onTouchEnd={e => {
          if (touchStartX.current === null) return;
          const diff = touchStartX.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50) goTo(currentSlide + (diff > 0 ? 1 : -1));
          touchStartX.current = null;
        }}
      >
        {/* Slides */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {GALLERY_PHOTOS.map((src, idx) => (
            <div key={idx} className="w-full h-full flex-shrink-0">
              <img
                src={src}
                alt={`MYG Beauty Room ${idx + 1}`}
                className="w-full h-full object-cover object-center"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
          {GALLERY_PHOTOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`rounded-full transition-all duration-300 pointer-events-auto ${
                idx === currentSlide ? 'bg-white w-5 h-1.5' : 'bg-white/50 w-1.5 h-1.5'
              }`}
            />
          ))}
        </div>

        {/* Subtle gradient bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>

      <div className="px-6 max-w-md">
        <h3 className="text-lg font-bold font-sans tracking-tight mb-2 text-black">
          MYG Beauty Room
        </h3>
        <p className="text-xs leading-relaxed text-gray-600 max-w-sm mx-auto">
          Bienvenue dans notre salon, parce que vous méritez le meilleur, je vous propose une large gamme de soins
          pour prendre soin de vous avec des produits de qualité et une attention toute particulière portée à votre confort.
        </p>
      </div>

      {/* Interactive Location Link */}
      <a 
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("100 avenue du Général Leclerc, 93500 Pantin, France")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center gap-2 text-[10px] font-bold text-gray-500 hover:text-black transition-colors bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer"
        id="link-location-maps"
      >
        <MapPin className="w-3.5 h-3.5 text-black" />
        <span>Nous sommes situés à Pantin</span>
      </a>

      {/* Horaires & Contact Switcheable Segment */}
      <div className="w-full max-w-sm mt-10 px-6 pb-8" id="section-quick-info">
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
              className="flex flex-col items-center justify-center h-full py-6 gap-3"
            >
              <Clock className="w-6 h-6 text-black" />
              <p className="font-extrabold text-black uppercase tracking-widest text-center text-sm">
                OUVERT 7J/7 DE 9H À 20H
              </p>
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
                <span className="font-bold text-black uppercase tracking-wider text-[10px]">Contact</span>
              </div>
              
              <div className="space-y-2.5">
                {/* Instagram Row */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-600 flex items-center gap-1.5">
                    <Instagram className="w-3.5 h-3.5 text-pink-600" />
                    Instagram
                  </span>
                  <div className="flex items-center gap-1.5">
                    <a href={`https://www.instagram.com/${COMPANY_INFO.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer"
                      className="font-mono bg-white border border-gray-200 px-2 py-0.5 rounded text-[11px] text-black underline hover:text-black/80">
                      {COMPANY_INFO.instagram}
                    </a>
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
                    <SnapchatIcon className="w-3.5 h-3.5 text-yellow-500" />
                    Snapchat
                  </span>
                  <div className="flex items-center gap-1.5">
                    <a href="https://www.snapchat.com/add/mygbeautyroom" target="_blank" rel="noopener noreferrer"
                      className="font-mono bg-white border border-gray-200 px-2 py-0.5 rounded text-[11px] text-black underline hover:text-black/80">
                      {COMPANY_INFO.snapchat}
                    </a>
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

                {/* TikTok Row */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-600 flex items-center gap-1.5">
                    <TikTokIcon className="w-3.5 h-3.5 text-black" />
                    TikTok
                  </span>
                  <div className="flex items-center gap-1.5">
                    <a href={`https://www.tiktok.com/${COMPANY_INFO.tiktok}`} target="_blank" rel="noopener noreferrer"
                      className="font-mono bg-white border border-gray-200 px-2 py-0.5 rounded text-[11px] text-black underline hover:text-black/80">
                      {COMPANY_INFO.tiktok}
                    </a>
                    <button
                      onClick={() => handleCopy(COMPANY_INFO.tiktok, 'tiktok')}
                      className="p-1 hover:bg-gray-200 rounded text-gray-500 transition-colors"
                      title="Copier le pseudonyme"
                      id="btn-copy-tiktok"
                    >
                      {copiedText === 'tiktok' ? <span className="text-[10px] text-green-600 font-bold">Copié!</span> : <Copy className="w-3.5 h-3.5" />}
                    </button>
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
