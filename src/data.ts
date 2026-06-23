import { CompanyInfo, Service, Review, FAQItem } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "MYG",
  owner: "Sabrina",
  address: "Aubervilliers",
  city: "Aubervilliers",
  instagram: "@mygbeautyroom",
  snapchat: "mygbeautyroom",
  email: "contact@mygbeautyroom.fr",
  phone: "07 87 04 11 88",
  tiktok: "@mygbeautyroom",
  workingHours: [
    { day: "Lundi", hours: "09h00 - 19h00" },
    { day: "Mardi", hours: "09h00 - 19h00" },
    { day: "Mercredi", hours: "09h00 - 19h00" },
    { day: "Jeudi", hours: "09h00 - 19h00" },
    { day: "Vendredi", hours: "09h00 - 19h00" },
    { day: "Samedi", hours: "09h00 - 19h00" },
    { day: "Dimanche", hours: "09h00 - 19h00" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: "soins_visage",
    name: "Soin Visage",
    description: "Soin profond alliant technologie d'hydradermabrasion et vapeur pour : Nettoyer, Exfolier, Extraire les impuretés et Hydrater intensément.",
    imageAddress: "",
    options: [
      {
        id: "hydra_clean",
        name: "Soin Purifiant Profond (1h)",
        duration: "1h",
        price: 65,
        description: "Exfoliation, extraction minutieuse des comédons, bain de vapeur vapozone et masque purifiant intense adapté à votre épiderme.",
        atHomeEligible: false,
        category: "soins_visage"
      },
      {
        id: "hydra_premium",
        name: "Soin Signature Glow Premium (1h20)",
        duration: "1h20",
        price: 95,
        description: "Soint complet d'hydra-dermabrasion combiné à une radiofréquence raffermissante, infusion d'actifs botaniques et masque d'hydrogel de luxe.",
        atHomeEligible: false,
        category: "soins_visage"
      },
      {
        id: "miracle_face",
        name: "Soin Miracle Face Drainant (50min)",
        duration: "50min",
        price: 70,
        description: "Modelage tonique des fascias qui dessine l'ovale du visage, draine les toxines et réactive instantanément la microcirculation pour un effet lifté immédiat.",
        atHomeEligible: true,
        category: "soins_visage"
      }
    ]
  },
  {
    id: "extensions_cils",
    name: "Extensions de Cils",
    description: "Pose sur-mesure pour intensifier et structurer le regard avec élégance.",
    imageAddress: "",
    options: [
      {
        id: "lash_lift",
        name: "Lash Lift + Teinture (1h)",
        duration: "1h",
        price: 55,
        description: "Rehaussement de cils à la racine pour un effet mascara semi-permanent durable, incluant un soin fortifiant hautement concentré en kératine.",
        atHomeEligible: true,
        category: "extensions_cils"
      },
      {
        id: "brow_lift",
        name: "Brow Lift Intense + Soin (45min)",
        duration: "45min",
        price: 45,
        description: "Discipline, rehausse et restructure vos sourcils pour un effet dense, fourni et symétrique ultra-tendance.",
        atHomeEligible: true,
        category: "extensions_cils"
      },
      {
        id: "pose_cil_a_cil",
        name: "Pose Complète - Cil à Cil (1h15)",
        duration: "1h15",
        price: 65,
        description: "Fixation d'une extension unique sur chaque cil naturel. Idéal pour un fini soigné, élégant et discret au quotidien.",
        atHomeEligible: false,
        category: "extensions_cils"
      },
      {
        id: "pose_volume_russe",
        name: "Pose Complète - Volume Russe (1h45)",
        duration: "1h45",
        price: 85,
        description: "Création de bouquets ultra-légers pour un effet de densité noire intense et un volume aérien spectaculaire de star.",
        atHomeEligible: false,
        category: "extensions_cils"
      }
    ]
  },
  {
    id: "lifting_colombien",
    name: "Lifting Colombien",
    description: "Technique de galbe naturel pour redessiner et sublimer les courbes.",
    imageAddress: "",
    options: [
      {
        id: "seance_unique_lifting",
        name: "Séance Unique Galbe (45min)",
        duration: "45min",
        price: 50,
        description: "Stimulation sanguine locale profonde par système de ventouses pour pulper les tissus, activer la circulation lymphatique et lisser la cellulite.",
        atHomeEligible: false,
        category: "lifting_colombien"
      },
      {
        id: "cure_silhouette_5",
        name: "Cure Silhouette 5 Séances",
        duration: "5 séances",
        price: 220,
        description: "Protocole intensif de 5 séances espacées pour un galbe durable, une tonification tissulaire pérenne et un remodelage ciblé des fessiers ou des cuisses.",
        atHomeEligible: false,
        category: "lifting_colombien"
      }
    ]
  },
  {
    id: "blanchiment",
    name: "Blanchiment Dentaire",
    description: "Soin éclaircissant pour un sourire plus lumineux et uniforme.",
    imageAddress: "",
    options: [
      {
        id: "seance_complete",
        name: "Séance complète (1h)",
        duration: "1h",
        price: 80,
        description: "Soin d'une heure pour un sourire éclatant de blancheur, avec application d'un gel protecteur de fabrication française conforme aux exigences européennes et lampe LED de haute technologie.",
        atHomeEligible: true,
        category: "blanchiment"
      },
      {
        id: "offre_duo",
        name: "Offre Duo (2h15)",
        duration: "2h15",
        price: 140,
        description: "Venez accompagnée pour profiter d'un tarif préférentiel d'exception ! Les soins sont réalisés l'un après l'autre ou simultanément dans un univers cocooning.",
        atHomeEligible: true,
        category: "blanchiment"
      },
      {
        id: "retouche",
        name: "Séance de retouche (1h)",
        duration: "1h",
        price: 60,
        description: "Idéale dans les 6 mois pour entretenir la blancheur éclatante de votre émail et éliminer instantanément les tâches récentes de café, thé ou tabac.",
        atHomeEligible: true,
        category: "blanchiment"
      }
    ]
  },
  {
    id: "formules_signature",
    name: "Nos Formules Signature",
    description: "Combinaisons beauté complètes. Les meilleures associations de soins à un prix réduit.",
    imageAddress: "",
    options: [
      {
        id: "formule_regard_sourire",
        name: "Formule Dentaire & Regard (2h)",
        duration: "2h",
        price: 120,
        description: "Le combo star : une séance complète de blanchiment dentaire esthétique (1h) couplée à un Lash Lift complet de vos cils avec teinture noire intense.",
        atHomeEligible: false,
        category: "formules_signature"
      },
      {
        id: "formule_glow_total",
        name: "Formule Visage Glow & Sourire (2h15)",
        duration: "2h15",
        price: 135,
        description: "Soin visage Miracle Face drainant combiné à un traitement complet de blanchiment dentaire esthétique pour un coup d'éclat total.",
        atHomeEligible: false,
        category: "formules_signature"
      }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    author: "Anaïs",
    service: "Blanchiment Dentaire",
    content: "Une praticienne incroyable et d'une douceur extraordinaire ! Mes dents ont gagné 4 teintes en une seule séance complète, je suis choquée du résultat. Absolument aucune douleur ou sensibilité après le soin. Je reviendrai tous les 6 mois !",
    date: "14 Mai 2026",
    rating: 5
  },
  {
    id: "2",
    author: "Mélody",
    service: "Blanchiment Dentaire",
    content: "J'ai testé l'offre Duo avec mon mari et on a adoré l'expérience. Sabrina nous met tout de suite à l'aise dans son joli cocon à Marne-la-Vallée. Les explications sont très claires et le résultat est juste magnifique pour nous deux.",
    date: "02 Mai 2026",
    rating: 5
  },
  {
    id: "3",
    author: "Inès",
    service: "Soin Hydralift",
    content: "Ma peau revit enfin ! Le soin purifiant profond m'a complètement débarrassée de mes imperfections et mon teint est super frais. Sabrina est aux petits soins et donne d'excellents conseils de routine beauté. À faire absolument !",
    date: "24 Avril 2026",
    rating: 5
  },
  {
    id: "4",
    author: "Léa",
    service: "Beauté du Regard",
    content: "Le Lash Lift est tout simplement parfait. Mes cils sont super bien courbés et bien noirs, plus besoin de mascara le matin c'est un gain de temps magique. Le salon est hyper propre et l'ambiance est relaxante.",
    date: "11 Avril 2026",
    rating: 5
  },
  {
    id: "5",
    author: "Sarah",
    service: "Blanchiment Dentaire",
    content: "Super séance de retouche aujourd'hui pour garder mon sourire au top. Sabrina est réactive par message, arrangeante et d'un professionnalisme impeccable. Je vous la recommande les yeux fermés !",
    date: "28 Mars 2026",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq_rdv",
    question: "Comment prendre RDV ?",
    answer: "Vous pouvez réserver directement sur cette application en cliquant sur 'Prendre RDV'. Après avoir choisi votre soin, la formule et votre créneau, vous recevrez les instructions de dépôt de l'acompte de 10€ pour confirmer votre réservation définitive."
  },
  {
    id: "faq_horaires",
    question: "Quels sont les horaires ?",
    answer: "Le salon est ouvert du mardi au vendredi de 10h00 à 19h00 (nocturne le jeudi jusqu'à 20h00) et le samedi de 09h00 à 18h00. Nous sommes fermés les lundis et dimanches."
  },
  {
    id: "faq_douleur",
    question: "Le soin est-il douloureux ?",
    answer: "Le blanchiment dentaire esthétique MYG utilise des formules douces qui conviennent même aux dents sensibles. La quasi-totalité de nos clients ne ressent aucune douleur. Une très légère sensibilité temporaire peut survenir dans les quelques heures suivant le soin, mais s'estompe très vite."
  },
  {
    id: "faq_annulation",
    question: "Comment annuler un RDV ?",
    answer: "Toute modification ou annulation doit être communiquée au moins 24 heures avant l'heure prévue de votre rendez-vous. Vous pouvez l'effectuer via nos réseaux ou par SMS. L'acompte sera conservé pour un prochain rendez-vous s'il est reporté à temps. En deçà des 24 heures, l'acompte sera perdu."
  },
  {
    id: "faq_acompte",
    question: "Pourquoi un acompte est-il obligatoire ?",
    answer: "Un acompte de 10€ par virement bancaire ou l'application Lydia/Paylib est demandé afin de valider et bloquer définitivement votre créneau horaire. Cela évite les rendez-vous non honorés et garantit que Sabrina puisse vous préparer le meilleur accueil personnalisé."
  },
  {
    id: "faq_retards",
    question: "Comment sont gérés les retards ?",
    answer: "Pour le respect de toutes nos clientes, tout retard de plus de 10 minutes pourra entraîner un raccourcissement de votre soin ou l'annulation du rendez-vous, l'acompte restant dû. Merci de nous envoyer un message le plus tôt possible en cas d'imprévu."
  },
  {
    id: "faq_domicile",
    question: "Proposez-vous les soins à domicile ?",
    answer: "Oui ! Les prestations de blanchiment dentaire et de rehaussement de cils sont éligibles au déplacement à domicile à Marne-la-Vallée et dans les communes limitrophes dans un rayon de 10 km (avec un léger supplément à définir lors de notre contact)."
  },
  {
    id: "faq_accompagnateur",
    question: "Puis-je venir accompagnée ?",
    answer: "Par mesure d'hygiène et de concentration pour vos soins, nous demandons à ce que vous veniez seule à votre rendez-vous, sauf dans le cadre d'une prestation programmée 'Offre Duo' où vous êtes toutes deux conviées."
  }
];
