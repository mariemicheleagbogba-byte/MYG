import { Instagram, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface FooterActionProps {
  onOpenBooking: () => void;
}

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

export default function FooterAction({ onOpenBooking }: FooterActionProps) {
  return (
    <footer className="px-6 pb-12 pt-8 flex flex-col items-center bg-white border-t border-gray-100" id="page-footer">
      <div className="text-center mb-6 max-w-xs">
        <p className="text-[10px] sm:text-xs leading-relaxed text-gray-700 tracking-wide font-medium">
          Voilà que tu as tout lu et je t'invite à
        </p>
      </div>

      <button
        onClick={onOpenBooking}
        className="w-full max-w-sm bg-black hover:bg-black/95 text-white py-4 rounded-sm text-xs font-bold uppercase tracking-[0.25em] transition-all active:scale-[0.98] duration-150 shadow-md cursor-pointer text-center"
        id="btn-footer-cta-prendre-rdv"
      >
        Prendre RDV
      </button>

      {/* Social anchors */}
      <div className="mt-8 flex gap-5 text-gray-400">
        <a
          href="https://www.instagram.com/mygbeautyroom/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors p-1"
          title="Instagram"
          id="footer-instagram"
        >
          <Instagram className="w-5 h-5 text-gray-600" />
        </a>

        <a
          href="https://www.snapchat.com/add/mygbeautyroom"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors p-1"
          title="Snapchat"
          id="footer-snapchat"
        >
          <SnapchatIcon className="w-5 h-5 text-gray-600" />
        </a>

        <a
          href="https://www.tiktok.com/@mygbeautyroom?_r=1&_t=ZS-97GB5ksLt1s"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors p-1"
          title="TikTok"
          id="footer-tiktok"
        >
          <TikTokIcon className="w-5 h-5 text-gray-600" />
        </a>
      </div>

      {/* Copyright branding */}
      <div className="mt-8 text-center" id="footer-branding">
        <div className="flex items-center justify-center gap-1.5 text-black font-bold tracking-widest text-[10px]">
          <Award className="w-3.5 h-3.5" />
          <span>{COMPANY_INFO.name.toUpperCase()} BEAUTY ROOM</span>
        </div>
      </div>
    </footer>
  );
}
