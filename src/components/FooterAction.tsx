import { Smartphone, Instagram, Send, Globe, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface FooterActionProps {
  onOpenBooking: () => void;
}

export default function FooterAction({ onOpenBooking }: FooterActionProps) {
  return (
    <footer className="px-6 pb-12 pt-8 flex flex-col items-center bg-white border-t border-gray-100" id="page-footer">
      {/* Humorous invite text matching wireframe 1 exactly */}
      <div className="text-center mb-6 max-w-xs">
        <p className="text-[10px] sm:text-xs leading-relaxed text-gray-700 tracking-wide font-medium">
          Voilà que tu as tout lu et je t'invite à
        </p>
      </div>

      {/* Main black CTA Block */}
      <button 
        onClick={onOpenBooking}
        className="w-full max-w-sm bg-black hover:bg-black/95 text-white py-4 rounded-sm text-xs font-bold uppercase tracking-[0.25em] transition-all active:scale-[0.98] duration-150 shadow-md cursor-pointer text-center"
        id="btn-footer-cta-prendre-rdv"
      >
        Prendre RDV
      </button>

      {/* Social anchors matching bottom page layout */}
      <div className="mt-8 flex gap-5 text-gray-400">
        <a 
          href={`https://instagram.com/${COMPANY_INFO.instagram.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors p-1"
          title="Nous suivre sur Instagram"
          id="footer-instagram"
        >
          <Instagram className="w-5 h-5 text-gray-600" />
        </a>
        
        <a 
          href={`https://snapchat.com`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors p-1"
          title="Nous ajouter sur Snapchat"
          id="footer-snapchat"
        >
          <Send className="w-5 h-5 text-gray-600" />
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
