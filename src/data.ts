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
        id: "seance_express_visage",
        name: "Séance Express",
        duration: "45min",
        price: 40,
        description: "Soin express pour purifier, nettoyer et hydrater votre peau en profondeur. Idéal pour un coup d'éclat rapide.",
        atHomeEligible: false,
        category: "soins_visage"
      },
      {
        id: "seance_complete_visage",
        name: "Séance Complète",
        duration: "1h",
        price: 50,
        description: "Soin complet alliant hydradermabrasion et vapeur pour nettoyer, exfolier, extraire les impuretés et hydrater intensément.",
        atHomeEligible: false,
        category: "soins_visage"
      },
      {
        id: "cure_3_seances_visage",
        name: "Cure 3 Séances",
        duration: "3 séances",
        price: 135,
        description: "Protocole de 3 séances espacées pour un résultat optimal et durable. La solution idéale pour une peau transformée en profondeur.",
        atHomeEligible: false,
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
        id: "cil_a_cil",
        name: "Cil à Cil",
        duration: "1h30",
        price: 45,
        description: "Pose d'une extension unique sur chaque cil naturel pour un résultat soigné, élégant et discret au quotidien.",
        atHomeEligible: false,
        category: "extensions_cils"
      },
      {
        id: "pose_mixte",
        name: "Pose Mixte",
        duration: "1h30",
        price: 55,
        description: "Association de techniques cil à cil et volume pour un regard intensifié et un effet naturel densifié sur mesure.",
        atHomeEligible: false,
        category: "extensions_cils"
      },
      {
        id: "volume_intense",
        name: "Volume Intense",
        duration: "2h",
        price: 60,
        description: "Bouquets ultra-légers pour un effet de densité noire intense et un volume spectaculaire.",
        atHomeEligible: false,
        category: "extensions_cils"
      },
      {
        id: "remplissage_2_semaines",
        name: "Remplissage 2 Semaines",
        duration: "45min",
        price: 30,
        description: "Retouche complète pour maintenir l'effet de vos extensions à 2 semaines de la pose initiale.",
        atHomeEligible: false,
        category: "extensions_cils"
      },
      {
        id: "remplissage_3_semaines",
        name: "Remplissage 3 Semaines",
        duration: "1h",
        price: 40,
        description: "Remplissage complet pour redonner volume et densité à vos extensions à 3 semaines de la pose initiale.",
        atHomeEligible: false,
        category: "extensions_cils"
      }
    ]
  },
  {
    id: "lifting_colombien",
    name: "Lifting Colombien",
    description: "Sculpture corporelle par ventouses pour galber, tonifier et redessiner fessiers et hanches.",
    imageAddress: "",
    options: [
      {
        id: "fessiers_seance",
        name: "Fessiers",
        duration: "30min",
        price: 30,
        description: "Séance à l'unité ciblant les fessiers par stimulation profonde par ventouses pour pulper et tonifier.",
        atHomeEligible: false,
        category: "lifting_colombien"
      },
      {
        id: "hanches_seance",
        name: "Hanches",
        duration: "30min",
        price: 30,
        description: "Séance à l'unité ciblant les hanches pour lisser, drainer et redessiner la silhouette.",
        atHomeEligible: false,
        category: "lifting_colombien"
      },
      {
        id: "fessiers_hanches_seance",
        name: "Fessiers + Hanches",
        duration: "45min",
        price: 50,
        description: "Séance à l'unité combinée ciblant fessiers et hanches pour un résultat global et harmonieux.",
        atHomeEligible: false,
        category: "lifting_colombien"
      },
      {
        id: "sculpt_hanches_3",
        name: "Sculpt & Hanches · 3 Séances",
        duration: "3 séances",
        price: 90,
        description: "Forfait de 3 séances Sculpt & Hanches pour amorcer un remodelage durable et visible de la silhouette.",
        atHomeEligible: false,
        category: "lifting_colombien"
      },
      {
        id: "sculpt_hanches_5",
        name: "Sculpt & Hanches · 5 Séances",
        duration: "5 séances",
        price: 150,
        description: "Forfait de 5 séances Sculpt & Hanches pour un galbe renforcé et une tonification tissulaire progressive.",
        atHomeEligible: false,
        category: "lifting_colombien"
      },
      {
        id: "sculpt_hanches_7",
        name: "Sculpt & Hanches · 7 Séances",
        duration: "7 séances",
        price: 210,
        description: "Forfait de 7 séances Sculpt & Hanches pour un résultat transformateur et durable sur la silhouette.",
        atHomeEligible: false,
        category: "lifting_colombien"
      },
      {
        id: "sculpt_hanches_10",
        name: "Sculpt & Hanches · 10 Séances",
        duration: "10 séances",
        price: 250,
        description: "Forfait de 10 séances Sculpt & Hanches, le protocole intensif pour une transformation complète et pérenne.",
        atHomeEligible: false,
        category: "lifting_colombien"
      },
      {
        id: "fessiers_hanches_3",
        name: "Fessiers & Hanches · 3 Séances",
        duration: "3 séances",
        price: 145,
        description: "Forfait de 3 séances ciblant fessiers et hanches simultanément pour une silhouette galbée et harmonisée.",
        atHomeEligible: false,
        category: "lifting_colombien"
      },
      {
        id: "fessiers_hanches_5",
        name: "Fessiers & Hanches · 5 Séances",
        duration: "5 séances",
        price: 240,
        description: "Forfait de 5 séances fessiers & hanches pour un remodelage ciblé et une tonification profonde et durable.",
        atHomeEligible: false,
        category: "lifting_colombien"
      },
      {
        id: "fessiers_hanches_7",
        name: "Fessiers & Hanches · 7 Séances",
        duration: "7 séances",
        price: 330,
        description: "Forfait de 7 séances fessiers & hanches pour une transformation visible et un galbe sculpté sur toute la zone.",
        atHomeEligible: false,
        category: "lifting_colombien"
      },
      {
        id: "fessiers_hanches_10",
        name: "Fessiers & Hanches · 10 Séances",
        duration: "10 séances",
        price: 350,
        description: "Forfait de 10 séances fessiers & hanches, le protocole complet pour une silhouette entièrement remodelée.",
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
        name: "Séance Complète",
        duration: "1h",
        price: 80,
        description: "Soin d'une heure pour un sourire éclatant de blancheur, avec application d'un gel protecteur de fabrication française conforme aux exigences européennes et lampe LED de haute technologie.",
        atHomeEligible: true,
        category: "blanchiment"
      },
      {
        id: "offre_duo",
        name: "Offre Duo",
        duration: "2h",
        price: 70,
        description: "70€ par personne — uniquement valable à deux. Venez accompagnée pour profiter d'un tarif préférentiel d'exception dans un univers cocooning.",
        atHomeEligible: true,
        category: "blanchiment"
      },
      {
        id: "retouche",
        name: "Séance de Retouche",
        duration: "1h",
        price: 60,
        description: "Idéale dans les 6 mois pour entretenir la blancheur éclatante de votre émail et éliminer instantanément les tâches récentes de café, thé ou tabac.",
        atHomeEligible: true,
        category: "blanchiment"
      },
      {
        id: "detartrage",
        name: "Détartrage",
        duration: "45min",
        price: 50,
        description: "Soin d'élimination du tartre et des dépôts pour retrouver des dents saines, propres et une haleine fraîche.",
        atHomeEligible: false,
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
        id: "formule_glow",
        name: "Formule Glow",
        duration: "2h",
        price: 100,
        description: "Blanchiment dentaire + soin visage Hydrapure. Au lieu de 120€. Le duo éclat pour un sourire et un teint sublimés en une seule séance.",
        atHomeEligible: false,
        category: "formules_signature"
      },
      {
        id: "formule_regard_sourire",
        name: "Formule Regard et Sourire",
        duration: "2h",
        price: 115,
        description: "Blanchiment dentaire + extensions de cils (cil à cil). Au lieu de 125€. Le combo star pour un regard intense et un sourire éclatant.",
        atHomeEligible: false,
        category: "formules_signature"
      },
      {
        id: "formule_sculpt_glow",
        name: "Formule Sculpt et Glow",
        duration: "2h",
        price: 85,
        description: "Lifting colombien (fessiers + hanches) + soin visage Hydrapure. Au lieu de 100€. Corps sculpté et teint lumineux en une seule session.",
        atHomeEligible: false,
        category: "formules_signature"
      },
      {
        id: "formule_signature_complete",
        name: "Formule Signature Complète",
        duration: "3h",
        price: 160,
        description: "Blanchiment dentaire + extensions de cils + soin visage Hydrapure. Au lieu de 175€. La formule ultime pour une transformation beauté totale.",
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
