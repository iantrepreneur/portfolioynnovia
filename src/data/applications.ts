import { LucideIcon, Share2, MessageCircle, Target, Mic, Shield, Layers, BookHeart, Phone } from 'lucide-react';
import postelmaImg from '@/assets/applications/postelma.jpg';
import supportHubImg from '@/assets/applications/support-hub.jpg';
import crmAiImg from '@/assets/applications/crm-ai.jpg';
import podcastAiImg from '@/assets/applications/podcast-ai.jpg';
import adiaImg from '@/assets/applications/adia.jpg';
import erpiaImg from '@/assets/applications/erpia.jpg';
import miniheroesImg from '@/assets/applications/miniheroes.jpg';
import saviaImg from '@/assets/applications/savia.jpg';

export interface Application {
  id: number;
  name: string;
  category: string;
  description: string;
  stack: string[];
  metrics: string[];
  icon: LucideIcon;
  iconColor: string;
  categoryColor: string;
  buttonText: string;
  image: string;
}

export const applications: Application[] = [
  {
    id: 1,
    name: "Postelma - Plateforme Marketing Media IA",
    category: "Marketing",
    description: "Plateforme complète de gestion et automatisation des médias sociaux. Publication multi-plateformes (Facebook, X, LinkedIn), génération d'assets visuels par IA (images, vidéos), lead generation avec scraping et enrichissement GPT-4.",
    stack: ["N8N (80+ workflows)", "PostgreSQL", "S3", "Redis", "Stable Diffusion"],
    metrics: ["200+ posts/mois automatisés", "-70% temps de production", "15+ clients actifs"],
    icon: Share2,
    iconColor: "text-blue-500",
    categoryColor: "bg-blue-500/10",
    buttonText: "Voir le projet",
    image: postelmaImg
  },
  {
    id: 2,
    name: "Hub Support Omnicanal IA",
    category: "Communication",
    description: "Plateforme centralisée de gestion du support client. Agrégation multi-canaux (WhatsApp, Messenger, email, chat web), routage intelligent par IA, réponses automatiques avec RAG sur base documentaire vectorisée.",
    stack: ["FastAPI", "Redis", "WebSocket", "Pinecone (1000+ docs)", "React"],
    metrics: ["-50% temps de réponse", "60% d'auto-résolution", "Support 24/7"],
    icon: MessageCircle,
    iconColor: "text-green-500",
    categoryColor: "bg-green-500/10",
    buttonText: "Voir le projet",
    image: supportHubImg
  },
  {
    id: 3,
    name: "CRM IA Automatisé (HubSpot/TwentyCRM)",
    category: "CRM & Marketing",
    description: "Solution CRM complète avec automatisation du cycle de vie client/étudiant. Gestion automatisée des documents (devis, contrats, attestations), scoring intelligent des leads, enrichissement de données par IA, workflows personnalisés.",
    stack: ["HubSpot API", "TwentyCRM", "N8N", "PostgreSQL", "GPT-4"],
    metrics: ["-30% charge administrative", "+60% taux de conversion", "Formation 20+ utilisateurs"],
    icon: Target,
    iconColor: "text-purple-500",
    categoryColor: "bg-purple-500/10",
    buttonText: "Voir le projet",
    image: crmAiImg
  },
  {
    id: 4,
    name: "Clone NotebookLM - Podcast IA",
    category: "Intelligence Artificielle",
    description: "Plateforme de génération de podcasts IA. Analyse automatique de documents (PDF, web, vidéos), création de scripts conversationnels, synthèse vocale multi-voix naturelle, interface de discussion interactive avec les contenus.",
    stack: ["LangChain", "React", "FastAPI", "ElevenLabs TTS", "Whisper", "Docker CI/CD"],
    metrics: ["Génération de podcasts en 5 min", "Support 10+ formats", "Multi-langues"],
    icon: Mic,
    iconColor: "text-cyan-500",
    categoryColor: "bg-cyan-500/10",
    buttonText: "Voir le projet",
    image: podcastAiImg
  },
  {
    id: 5,
    name: "ADIA - Plateforme de Création d'Agents IA",
    category: "Intelligence Artificielle",
    description: "Plateforme de création d'agents IA en local (RH, Marketing, Support…) garantissant la confidentialité totale des données. Toutes vos données restent chez vous, aucune fuite vers des serveurs tiers. Déploiement on-premise avec modèles open source.",
    stack: ["Llama", "FastAPI", "React", "Docker", "ChromaDB", "RAG"],
    metrics: ["100% données locales", "5+ types d'agents", "Confidentialité garantie"],
    icon: Shield,
    iconColor: "text-emerald-500",
    categoryColor: "bg-emerald-500/10",
    buttonText: "Voir le projet",
    image: adiaImg
  },
  {
    id: 6,
    name: "ERPIA - ERP Intelligent Modulaire",
    category: "ERP & Gestion",
    description: "Continuité de Postelma qui devient le module Marketing, avec ajout de modules Comptabilité, Stock, Vente et plus encore. Solution ERP complète intégrant l'IA pour automatiser les processus métiers et centraliser la gestion d'entreprise.",
    stack: ["React", "FastAPI", "PostgreSQL", "N8N", "GPT-4", "Redis"],
    metrics: ["6+ modules intégrés", "-40% temps de gestion", "Automatisation complète"],
    icon: Layers,
    iconColor: "text-violet-500",
    categoryColor: "bg-violet-500/10",
    buttonText: "Voir le projet",
    image: erpiaImg
  },
  {
    id: 7,
    name: "MiniHeroes - Contenu Éducatif pour Enfants",
    category: "Éducation",
    description: "Plateforme de création de contenu éducatif pour enfants où l'enfant est l'acteur principal de ses histoires. Apprentissage ludique : se brosser les dents, faire ses devoirs, ranger sa chambre… L'enfant se voit dans des aventures personnalisées.",
    stack: ["React", "Stable Diffusion", "ElevenLabs TTS", "FastAPI", "GPT-4"],
    metrics: ["10+ scénarios éducatifs", "Personnalisation IA", "Multi-langues"],
    icon: BookHeart,
    iconColor: "text-pink-500",
    categoryColor: "bg-pink-500/10",
    buttonText: "Voir le projet",
    image: miniheroesImg
  },
  {
    id: 8,
    name: "SAVIA - Agent Vocal IA Service Client",
    category: "Communication",
    description: "Clone de VAPI : plateforme de service client pour configurer un agent IA qui répond aux appels clients. L'agent renseigne les utilisateurs, qualifie les demandes et route vers le bon service. Configuration no-code de scénarios conversationnels vocaux.",
    stack: ["WebRTC", "Whisper", "GPT-4", "ElevenLabs", "FastAPI", "React"],
    metrics: ["Support vocal 24/7", "-60% appels manuels", "Configuration no-code"],
    icon: Phone,
    iconColor: "text-amber-500",
    categoryColor: "bg-amber-500/10",
    buttonText: "Voir le projet",
    image: saviaImg
  }
];
