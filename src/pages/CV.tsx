import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Code, Brain, Globe, Rocket, Users, Award, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Navbar } from '@/components/Navbar';
import profilePhoto from '@/assets/profile-photo.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const experiences = [
  {
    title: "Freelance — IA et Automatisation No-code/Low-code",
    period: "Depuis Septembre 2024",
    items: [
      "Déploiement de +5 plateformes IA (marketing, Cloud, support, CRM…) pour +8 clients",
      "15+ automatisations métier (facturation, qualification leads) → -20-30% charge admin",
      "Mise en place d'une infrastructure IA 100% open source chez 4 clients",
      "Formation/accompagnement de 50+ collaborateurs sur adoption workflows IA",
      "Documentation technique et maintenance d'infrastructures IA open-source",
    ],
  },
  {
    title: "ASTEK — Développeur Fullstack / Chef de Projets",
    period: "2021 — 2024",
    items: [
      "Migration legacy → microservices (Java/Spring Boot, Angular) → +40% performance, -60% dette technique",
      "Développement API pour Orange Gat'Ape → traitement 10M+ requêtes/jour",
      "DevOps CI/CD : GitLab CI, optimisation BDD PostgreSQL → -40% temps requêtes",
      "Pilotage Agile : planification sprints, rétrospectives et amélioration continue",
    ],
  },
  {
    title: "GCS SESAN — Développeur JAVA / Chef de Projet Jr",
    period: "2019 — 2021",
    items: [
      "Référent technique e-covid (Terr-eSanté) → coordination 5 devs en Agile",
      "Microservices Spring Boot : APIs RESTful haute disponibilité → 99.9% uptime, OAuth2",
      "Représentant client : éditeur Parsys → déploiement app TéléSanté (10K+ utilisateurs)",
      "Solutions e-santé : architecture micro-frontend (Angular) + backend Java",
    ],
  },
  {
    title: "HELEN KELLER INTERNATIONAL (HKI) — Responsable IT Santé",
    period: "2014 — 2017",
    items: [
      "Gestion infrastructure IT : projets PROMIS, ARCH, VAS (50+ utilisateurs)",
      "Déploiement plateforme suivi nutritionnel : collecte mobile + dashboard → données temps réel",
    ],
  },
];

const projects = [
  "15+ automatisations métier déployées : facturation, RH, CRM → -30% charge admin, 85% adoption",
  "Infrastructures IA open-source : Llama 2, ChromaDB, Supabase + RAG custom (1000+ docs vectorisés)",
  "Intégration APIs génératives : GPT-4, Claude 3.5, agents IA autonomes avec RAG (LangChain)",
  "CRM école : automatisation génération documents, suivi étudiants → 100% automatisation admin",
  "Pipeline marketing IA end-to-end : Whisper → GPT-4 → CRM → +60% conversion, -80% temps admin",
  "Hub support omnicanal IA : WhatsApp/Messenger/Email + routage intelligent → -50% temps réponse",
  "Postelma : Publication multi-plateformes + génération assets IA → 200+ posts/mois, -70% temps",
  "Clone NotebookLM : Podcast IA avec TTS multi-voix (ElevenLabs) + analyse docs",
  "Samacloud : plateforme privée auto-hébergée pour fichiers, collaboration et réunions",
  "Fine-tuning LLM Wolof (en cours) : Dataset 50K+ phrases, Llama 2 7B via LoRA",
];

const skillsIA = [
  "GPT-4", "Claude 3.5", "Llama", "Mistral", "LangChain", "RAG", "MCP", "Agents IA",
  "OpenAI API", "Anthropic API", "HuggingFace", "Pinecone", "ChromaDB", "Qdrant",
  "N8N", "Make", "Notion", "Airtable", "Claude Code", "Cursor", "Bolt", "Lovable", "v0.dev",
  "Fine-tuning", "Prompt Engineering", "Machine Learning", "IA Générative",
];

const skillsDev = [
  "Python", "Java (Spring Boot)", "React", "Next.js", "Angular",
  "REST", "GraphQL", "WebSocket", "PostgreSQL", "MongoDB", "Redis",
  "Selenium", "Playwright", "Apify", "Docker", "Kubernetes", "GitHub Actions",
  "AWS", "DigitalOcean", "Vercel", "Prometheus", "Grafana", "ELK",
];

const skillsGestion = [
  "Agile (Scrum, Kanban)", "Jira", "Asana", "Confluence",
  "Specs techniques", "Documentation", "Formation",
];

const education = [
  {
    title: "Master Projet Digital (Développement d'applications)",
    school: "Global Knowledge — CFA AFIA | Paris",
    period: "2018 — 2019",
  },
  {
    title: "Ingénieur en Bio-Informatique",
    school: "UCAD | Sénégal",
    period: "2009 — 2014",
  },
];

const SectionTitle = ({ icon: Icon, title, index }: { icon: React.ElementType; title: string; index: number }) => (
  <motion.div
    className="flex items-center gap-3 mb-6"
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
      <Icon className="w-5 h-5" />
    </div>
    <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">{title}</h2>
  </motion.div>
);

const CV = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-28 pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">

          {/* Header Card */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 md:p-10 mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
            <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-start">
              <motion.div
                className="shrink-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <div className="w-36 h-36 rounded-2xl overflow-hidden ring-4 ring-primary/20 shadow-lg">
                  <img src={profilePhoto} alt="Malick Diakhate" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <div className="text-center md:text-left flex-1">
                <motion.h1
                  className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Diakhate Malick
                </motion.h1>
                <motion.p
                  className="text-primary font-semibold text-lg mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Expert IA & Automatisation | Chef de Projet & Formateur
                </motion.p>
                <motion.p
                  className="text-muted-foreground text-sm mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                >
                  CEO de Ynnovia — Agence d'IA et d'Automatisation
                </motion.p>

                <motion.div
                  className="flex flex-wrap justify-center md:justify-start gap-4 mt-5 text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-primary" /> +33 7 69 68 34 68</span>
                  <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-primary" /> diakhatemalick00@gmail.com</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Cergy, France</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Presentation */}
          <motion.div
            className="rounded-2xl border border-border/50 bg-card p-8 mb-10"
            style={{ boxShadow: 'var(--shadow-card)' }}
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle icon={Users} title="Présentation" index={0} />
            <p className="text-muted-foreground leading-relaxed">
              Expert en transformation digitale avec 5+ ans d'expérience en développement fullstack et gestion de projets agiles, 
              spécialisé dans l'IA générative, l'automatisation no-code/low-code et l'intégration d'agents autonomes. 
              Forte appétence technique, capacité à piloter des projets au carrefour métier/IT, et expérience confirmée 
              en formation d'équipes (20+ personnes) et accompagnement au changement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Skills - IA */}
            <motion.div
              className="rounded-2xl border border-border/50 bg-card p-6"
              style={{ boxShadow: 'var(--shadow-card)' }}
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionTitle icon={Brain} title="IA & Automatisation" index={1} />
              <div className="flex flex-wrap gap-1.5">
                {skillsIA.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs font-normal">{s}</Badge>
                ))}
              </div>
            </motion.div>

            {/* Skills - Dev */}
            <motion.div
              className="rounded-2xl border border-border/50 bg-card p-6"
              style={{ boxShadow: 'var(--shadow-card)' }}
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionTitle icon={Code} title="Développement & DevOps" index={2} />
              <div className="flex flex-wrap gap-1.5">
                {skillsDev.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs font-normal">{s}</Badge>
                ))}
              </div>
            </motion.div>

            {/* Skills - Gestion */}
            <motion.div
              className="rounded-2xl border border-border/50 bg-card p-6"
              style={{ boxShadow: 'var(--shadow-card)' }}
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionTitle icon={Award} title="Gestion de Projet" index={3} />
              <div className="flex flex-wrap gap-1.5">
                {skillsGestion.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs font-normal">{s}</Badge>
                ))}
              </div>
              <Separator className="my-4" />
              <SectionTitle icon={Globe} title="Langues" index={4} />
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between"><span>Français</span><span className="text-foreground font-medium">Courant</span></div>
                <div className="flex justify-between"><span>Anglais</span><span className="text-foreground font-medium">Intermédiaire</span></div>
              </div>
            </motion.div>
          </div>

          {/* Projects */}
          <motion.div
            className="rounded-2xl border border-border/50 bg-card p-8 mb-10"
            style={{ boxShadow: 'var(--shadow-card)' }}
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle icon={Rocket} title="Projets Clients" index={4} />
            <div className="grid md:grid-cols-2 gap-3">
              {projects.map((p, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{p}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            className="rounded-2xl border border-border/50 bg-card p-8 mb-10"
            style={{ boxShadow: 'var(--shadow-card)' }}
            custom={5}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle icon={Briefcase} title="Expériences Professionnelles" index={5} />
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  className="relative pl-6 border-l-2 border-primary/20"
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-xs text-primary font-medium flex items-center gap-1 mt-1 sm:mt-0">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.items.map((item, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-muted-foreground/50 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            className="rounded-2xl border border-border/50 bg-card p-8"
            style={{ boxShadow: 'var(--shadow-card)' }}
            custom={6}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionTitle icon={GraduationCap} title="Éducation" index={6} />
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="relative pl-6 border-l-2 border-primary/20"
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <h3 className="font-semibold text-foreground">{edu.title}</h3>
                  <p className="text-sm text-muted-foreground">{edu.school}</p>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 mt-1">
                    <Calendar className="w-3 h-3" /> {edu.period}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default CV;
