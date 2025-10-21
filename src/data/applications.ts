import { LucideIcon, Share2, MessageCircle, Target, Mic } from 'lucide-react';
import postelmaImg from '@/assets/applications/postelma.jpg';
import supportHubImg from '@/assets/applications/support-hub.jpg';
import crmAiImg from '@/assets/applications/crm-ai.jpg';
import podcastAiImg from '@/assets/applications/podcast-ai.jpg';

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
  }
];
