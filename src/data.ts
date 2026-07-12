import { CompanyInfo, Service, Review, FAQItem } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "MYG",
  owner: "Sabrina",
  address: "100 avenue du Général Leclerc, 93500 Pantin",
  city: "Pantin",
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
        category: "soins_visage",
        calendlyUrl: "https://calendly.com/mygbeautyroom/soin-visage-seance-express"
      },
      {
        id: "seance_complete_visage",
        name: "Séance Complète Hydrafacial",
        duration: "1h",
        price: 50,
        description: "Soin complet alliant hydradermabrasion et vapeur pour nettoyer, exfolier, extraire les impuretés et hydrater intensément.",
        atHomeEligible: false,
        category: "soins_visage",
        calendlyUrl: "https://calendly.com/mygbeautyroom/soin-visage-seance-complete"
      },
      {
        id: "cure_3_seances_visage",
        name: "Cure 3 Séances",
        duration: "3 séances",
        price: 135,
        description: "Protocole de 3 séances espacées pour un résultat optimal et durable. La solution idéale pour une peau transformée en profondeur.",
        atHomeEligible: false,
        category: "soins_visage",
        calendlyUrl: "https://calendly.com/mygbeautyroom/soin-visage-cure-de-3-seances"
      },
      {
        id: "peeling_algues_roses",
        name: "Peeling aux algues/roses de mer",
        duration: "45min",
        price: 70,
        description: "Soin exfoliant doux aux extraits d'algues et de roses de mer pour illuminer le teint et affiner le grain de peau.",
        atHomeEligible: false,
        category: "soins_visage"
      },
      {
        id: "peeling_algues",
        name: "Peeling aux algues",
        duration: "1h",
        price: 80,
        description: "Soin exfoliant intensif aux algues marines pour purifier en profondeur, resserrer les pores et raviver l'éclat naturel.",
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
        name: "Volume Russe",
        duration: "2h",
        price: 55,
        description: "Pose d'une extension unique sur chaque cil naturel pour un résultat soigné, élégant et discret au quotidien.",
        atHomeEligible: false,
        category: "extensions_cils",
        calendlyUrl: "https://calendly.com/mygbeautyroom/extensions-de-cils-cil-a-cil"
      },
      {
        id: "pose_mixte",
        name: "Pose Mixte",
        duration: "2h",
        price: 55,
        description: "Association de techniques cil à cil et volume pour un regard intensifié et un effet naturel densifié sur mesure.",
        atHomeEligible: false,
        category: "extensions_cils",
        calendlyUrl: "https://calendly.com/mygbeautyroom/extensions-de-cils-pose-mixte"
      },
      {
        id: "volume_intense",
        name: "Volume Wispy",
        duration: "2h",
        price: 60,
        description: "Bouquets ultra-légers pour un effet de densité noire intense et un volume spectaculaire.",
        atHomeEligible: false,
        category: "extensions_cils",
        calendlyUrl: "https://calendly.com/mygbeautyroom/extensions-de-cils-volume-intense"
      },
      {
        id: "remplissage_2_semaines",
        name: "Remplissage 2 Semaines",
        duration: "30min",
        price: 30,
        description: "Retouche complète pour maintenir l'effet de vos extensions à 2 semaines de la pose initiale.",
        atHomeEligible: false,
        category: "extensions_cils",
        calendlyUrl: "https://calendly.com/mygbeautyroom/extensions-de-cils-remplissage-2-semaines"
      },
      {
        id: "remplissage_3_semaines",
        name: "Remplissage 3 Semaines",
        duration: "30min",
        price: 40,
        description: "Remplissage complet pour redonner volume et densité à vos extensions à 3 semaines de la pose initiale.",
        atHomeEligible: false,
        category: "extensions_cils",
        calendlyUrl: "https://calendly.com/mygbeautyroom/extensions-de-cils-remplissage-3-semaines"
      },
      {
        id: "depose_cils",
        name: "Dépose",
        duration: "10min",
        price: 15,
        description: "Retrait délicat de vos extensions sans endommager vos cils naturels.",
        atHomeEligible: false,
        category: "extensions_cils"
      },
      {
        id: "rehaussement_cils",
        name: "Rehaussement de cils",
        duration: "45min",
        price: 30,
        description: "Traitement courbant et rehaussant vos cils naturels pour un effet ouvert et lumineux sans extensions.",
        atHomeEligible: false,
        category: "extensions_cils"
      },
      {
        id: "browlift",
        name: "Browlift",
        duration: "45min",
        price: 30,
        description: "Soin restructurant des sourcils pour un galbe parfait et un regard encadré avec précision.",
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
        description: "Stimulez le galbe naturel de vos fessiers grâce à l'action ciblée des ventouses.",
        atHomeEligible: false,
        category: "lifting_colombien",
        group: "Séance à l'Unité",
        calendlyUrl: "https://calendly.com/mygbeautyroom/lifting-colombien-fessiers"
      },
      {
        id: "hanches_seance",
        name: "Hanches",
        duration: "30min",
        price: 30,
        description: "Redessinez vos courbes et harmonisez votre silhouette.",
        atHomeEligible: false,
        category: "lifting_colombien",
        group: "Séance à l'Unité",
        calendlyUrl: "https://calendly.com/mygbeautyroom/lifting-colombien-hanches"
      },
      {
        id: "fessiers_hanches_seance",
        name: "Fessiers + Hanches",
        duration: "45min",
        price: 50,
        description: "Associez nos deux soins clés pour démultiplier les résultats sur votre corps.",
        atHomeEligible: false,
        category: "lifting_colombien",
        group: "Séance à l'Unité",
        calendlyUrl: "https://calendly.com/mygbeautyroom/lifting-colombien-hanches-fessiers"
      },
      {
        id: "sculpt_hanches_3",
        name: "3 Séances",
        duration: "3 séances",
        price: 90,
        description: "Forfait de 3 séances Sculpt & Hanches pour amorcer un remodelage durable et visible de la silhouette.",
        atHomeEligible: false,
        category: "lifting_colombien",
        group: "Forfaits Sculpt & Hanches",
        calendlyUrl: "https://calendly.com/mygbeautyroom/lifting-colombien-forfaits-sculpt-fessiers-3-seances"
      },
      {
        id: "sculpt_hanches_5",
        name: "5 Séances",
        duration: "5 séances",
        price: 150,
        description: "Forfait de 5 séances Sculpt & Hanches pour un galbe renforcé et une tonification tissulaire progressive.",
        atHomeEligible: false,
        category: "lifting_colombien",
        group: "Forfaits Sculpt & Hanches",
        calendlyUrl: "https://calendly.com/mygbeautyroom/lifting-colombien-forfaits-sculpt-fessiers-5-seances"
      },
      {
        id: "sculpt_hanches_7",
        name: "7 Séances",
        duration: "7 séances",
        price: 210,
        description: "Forfait de 7 séances Sculpt & Hanches pour un résultat transformateur et durable sur la silhouette.",
        atHomeEligible: false,
        category: "lifting_colombien",
        group: "Forfaits Sculpt & Hanches",
        calendlyUrl: "https://calendly.com/mygbeautyroom/lifting-colombien-forfaits-sculpt-fessiers-7-seances"
      },
      {
        id: "sculpt_hanches_10",
        name: "10 Séances",
        duration: "10 séances",
        price: 250,
        description: "Forfait de 10 séances Sculpt & Hanches, le protocole intensif pour une transformation complète et pérenne.",
        atHomeEligible: false,
        category: "lifting_colombien",
        group: "Forfaits Sculpt & Hanches",
        calendlyUrl: "https://calendly.com/mygbeautyroom/lifting-colombien-forfaits-sculpt-fessiers-10-seances"
      },
      {
        id: "fessiers_hanches_3",
        name: "3 Séances",
        duration: "3 séances",
        price: 145,
        description: "Forfait de 3 séances ciblant fessiers et hanches simultanément pour une silhouette galbée et harmonisée.",
        atHomeEligible: false,
        category: "lifting_colombien",
        group: "Forfaits Fessiers & Hanches",
        calendlyUrl: "https://calendly.com/mygbeautyroom/lifting-colombien-forfaits-fessiers-hanches-3-seances"
      },
      {
        id: "fessiers_hanches_5",
        name: "5 Séances",
        duration: "5 séances",
        price: 240,
        description: "Forfait de 5 séances fessiers & hanches pour un remodelage ciblé et une tonification profonde et durable.",
        atHomeEligible: false,
        category: "lifting_colombien",
        group: "Forfaits Fessiers & Hanches",
        calendlyUrl: "https://calendly.com/mygbeautyroom/lifting-colombien-forfaits-fessiers-hanches-5-seances"
      },
      {
        id: "fessiers_hanches_7",
        name: "7 Séances",
        duration: "7 séances",
        price: 330,
        description: "Forfait de 7 séances fessiers & hanches pour une transformation visible et un galbe sculpté sur toute la zone.",
        atHomeEligible: false,
        category: "lifting_colombien",
        group: "Forfaits Fessiers & Hanches",
        calendlyUrl: "https://calendly.com/mygbeautyroom/lifting-colombien-forfaits-fessiers-hanches-7-seances"
      },
      {
        id: "fessiers_hanches_10",
        name: "10 Séances",
        duration: "10 séances",
        price: 350,
        description: "Forfait de 10 séances fessiers & hanches, le protocole complet pour une silhouette entièrement remodelée.",
        atHomeEligible: false,
        category: "lifting_colombien",
        group: "Forfaits Fessiers & Hanches",
        calendlyUrl: "https://calendly.com/mygbeautyroom/lifting-colombien-forfaits-fessiers-hanches-10-seances"
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
        category: "blanchiment",
        calendlyUrl: "https://calendly.com/mygbeautyroom/blanchimement-dentaire-seance-complete"
      },
      {
        id: "offre_duo",
        name: "Offre Duo",
        duration: "2h",
        price: 70,
        description: "70€ par personne — uniquement valable à deux. Venez accompagnée pour profiter d'un tarif préférentiel d'exception dans un univers cocooning.",
        atHomeEligible: true,
        category: "blanchiment",
        calendlyUrl: "https://calendly.com/mygbeautyroom/blanchiment-dentaire-offre-duo"
      },
      {
        id: "retouche",
        name: "Séance de Retouche",
        duration: "1h",
        price: 60,
        description: "Idéale dans les 6 mois pour entretenir la blancheur éclatante de votre émail et éliminer instantanément les tâches récentes de café, thé ou tabac.",
        atHomeEligible: true,
        category: "blanchiment",
        calendlyUrl: "https://calendly.com/mygbeautyroom/blanchiment-dentaire-seance-de-retouche"
      },
      {
        id: "detartrage",
        name: "Détartrage",
        duration: "45min",
        price: 30,
        description: "Soin d'élimination du tartre et des dépôts pour retrouver des dents saines, propres et une haleine fraîche.",
        atHomeEligible: false,
        category: "blanchiment",
        calendlyUrl: "https://calendly.com/mygbeautyroom/blanchiment-dentaire-detartrage"
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
        price: 120,
        originalPrice: 140,
        description: "Blanchiment dentaire + soin visage Hydrapure. Le duo éclat pour un sourire et un teint sublimés en une seule séance.",
        atHomeEligible: false,
        category: "formules_signature",
        calendlyUrl: "https://calendly.com/mygbeautyroom/nos-formules-signatures-formule-glow"
      },
      {
        id: "formule_regard_sourire",
        name: "Formule Regard et Sourire",
        duration: "2h",
        price: 115,
        originalPrice: 125,
        description: "Blanchiment dentaire + extensions de cils (cil à cil). Le combo star pour un regard intense et un sourire éclatant.",
        atHomeEligible: false,
        category: "formules_signature",
        calendlyUrl: "https://calendly.com/mygbeautyroom/nos-formules-signatures-formule-regard-et-sourire"
      },
      {
        id: "formule_sculpt_glow",
        name: "Formule Sculpt et Glow",
        duration: "2h",
        price: 85,
        originalPrice: 100,
        description: "Lifting colombien (fessiers + hanches) + soin visage Hydrapure. Corps sculpté et teint lumineux en une seule session.",
        atHomeEligible: false,
        category: "formules_signature",
        calendlyUrl: "https://calendly.com/mygbeautyroom/nos-formules-signatures-formule-sculpt-et-glow"
      },
      {
        id: "formule_signature_complete",
        name: "Formule Signature Complète",
        duration: "3h",
        price: 175,
        originalPrice: 185,
        description: "Blanchiment dentaire + extensions de cils + soin visage Hydrapure. La formule ultime pour une transformation beauté totale.",
        atHomeEligible: false,
        category: "formules_signature",
        calendlyUrl: "https://calendly.com/mygbeautyroom/nos-formules-signatures-formule-signature-compete"
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
    id: "faq_horaires_hors",
    question: "Peut-on prendre RDV en dehors des horaires d'ouverture ?",
    answer: "Oui, il est tout à fait possible de prendre rendez-vous en dehors des horaires d'ouverture habituels. Il suffit de m'envoyer un message privé. À noter que les rendez-vous en nocturne (à partir de 18h) sont majorés de 10€."
  },
  {
    id: "faq_domicile",
    question: "Proposez-vous des soins à domicile ?",
    answer: "Oui, il suffit de m'écrire en message privé avec le jour, l'heure, la prestation que vous désirez et votre ville."
  }
];
