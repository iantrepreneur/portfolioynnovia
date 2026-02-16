import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Code, Brain, Globe, Rocket, Users, Award, Calendar, Download, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import profilePhoto from '@/assets/profile-photo.png';
import { useRef, useCallback } from 'react';

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
    title: "Freelance — Dev IA & Automatisation no-code/low-code",
    period: "2024 — Présent",
    items: [
      "Conception et déploiement de solutions IA basées sur les LLM (RAG, agents IA) pour automatiser des workflows métiers (facturation, RH, CRM) → réduction de 20–30% de la charge administrative.",
      "Mise en place de CRM automatisés type HubSpot : intégration de pipelines IA (transcription d'appels, qualification leads, scoring, génération de réponses) dans des workflows n8n/Make.",
      "Développement d'agents IA multi-modèles (OpenAI, Claude, Mistral) orchestrés avec LangChain, ajout de logs/monitoring pour suivre la qualité, la latence et les coûts.",
      "Déploiement de micro-services IA (Docker + FastAPI / n8n) en environnement cloud, documentation et transfert de compétences aux équipes internes (20+ personnes formées).",
      "Expérimentations de fine-tuning (LLM Wolof) et de stacks IA open-source pour limiter la dépendance aux providers cloud.",
    ],
  },
  {
    title: "ASTEK – Développeur Full‑Stack (Client ORANGE)",
    period: "Sep 2021 – Juil 2024",
    items: [
      "Microservices Java 17 / Spring Boot 2.7 : conception et implémentation de 12+ services scalables (Spring Cloud, Eureka, Gateway), exposés via REST APIs (OpenAPI 3.0), intégrés dans Gat'Ape (plateforme API Orange).",
      "CI/CD Jenkins + GitLab CI : pipelines complets (Maven, SonarQube, JUnit 5, Testcontainers) pour 50+ déploiements/mois vers OpenShift, réduction temps release de 3j → 4h.",
      "API Reporting haute performance : 10k+ req/s, pagination Spring Data (offset/limit), cache Redis, optimisation MySQL 8 (index composites, query EXPLAIN) → -40% temps réponse (800ms → 480ms).",
      "Observabilité stack ELK : centralisation logs 12 microservices, dashboards Kibana (latence P95, error rate), alertes Slack via Logstash pipelines.",
      "Sécurité & conformité : OAuth2 + Keycloak, JWT validation, audit logs, respect PS93 (Orange).",
    ],
  },
  {
    title: "GCS SESAN – Développeur Java / Chef de projets jr e‑Santé",
    period: "Jan 2019 – Juin 2021",
    items: [
      "Architecture microservices Spring Boot 2.4 : 8 services backend (Spring Data JPA/Hibernate, PostgreSQL 12), authentification Spring Security OAuth2, exposition APIs via Spring REST Controllers.",
      "Monitoring production ELK Stack : Elasticsearch 7.10 indexation logs temps réel, Kibana dashboards (SLA 99.5%, error rate <0.5%), alertes via Logstash → PagerDuty.",
      "Référent technique e‑covid : coordination devs, suivi backlog Jira, rédaction specs technico-fonctionnelles, gestion des applications dans les stores Android et iOS, livraison 3 releases critiques/mois sous contrainte sanitaire.",
      "APIs REST haute dispo : contrats OpenAPI 3, Spring HATEOAS, gestion erreurs globales (@ControllerAdvice), Hystrix circuit breaker pour résilience.",
      "Gestion cycle de vie mobile : packaging AAB/APK, soumissions Google Play Console / App Store Connect, suivi crashlytics Firebase, correctifs OTA.",
      "Contexte réglementé : HDS hébergement, données de santé pseudonymisées, traçabilité complète (audit trails), réflexes de sécurité réutilisés pour data masking RGPD en IA.",
    ],
  },
  {
    title: "MEDIC MOBILE – Assistant déploiement de projets informatiques (Sénégal)",
    period: "Avril 2017 – Sep 2017",
    items: [
      "Rédaction de spécifications technico‑fonctionnelles pour de nouvelles fonctionnalités (formulaires, workflows de collecte, reporting) en lien avec les équipes produit et développement.",
      "Réalisation de campagnes de tests fonctionnels et tests utilisateurs sur les applications mobiles et web : détection d'anomalies, qualification, suivi des corrections.",
      "Contribution au déploiement des solutions sur le terrain : préparation des environnements, configuration initiale et support aux équipes locales lors des premières utilisations.",
      "Participation à la documentation (guides utilisateurs, procédures de déploiement) pour faciliter la prise en main par les équipes santé.",
    ],
  },
  {
    title: "HELEN KELLER INTERNATIONAL (HKI) – Responsable M‑Health (Sénégal)",
    period: "Mars 2014 – Jan 2016",
    items: [
      "Référent technique pour les projets de santé mobile (suivi nutritionnel, prévention, campagnes terrain) : interlocuteur principal entre équipes santé, partenaires techniques et terrain.",
      "Mise en place et gestion de plateformes de collecte de données (applications mobiles et back‑office web) : administration des comptes, gestion des formulaires, contrôle qualité des données remontées.",
      "Organisation et animation de sessions de formation pour les utilisateurs (agents de santé, superviseurs) : création de supports pédagogiques, accompagnement au changement, assistance de niveau 1 et 2.",
      "Encadrement d'équipe (techniciens, relais communautaires) : planification des activités, suivi des indicateurs d'utilisation, remontée des besoins d'évolutions.",
      "Contribution à la formalisation des processus métier (flux de données, procédures de saisie, validation) pour sécuriser la qualité et la fiabilité des informations collectées.",
    ],
  },
  {
    title: "INSTITUT DE RECHERCHE POUR LE DÉVELOPPEMENT (IRD) – Développeur Java / JEE (Sénégal)",
    period: "Déc 2012 – Fév 2014",
    items: [
      "Développement d'applications de simulation multi-agents d'expériences de recherche en biologie et en écologie, en Java / JEE (Eclipse, JSP/Servlets, frameworks MVC).",
      "Conception technique à partir de modèles UML (diagrammes de classes, séquences) et implémentation de web services pour l'échange de données entre systèmes.",
      "Conception et optimisation de bases de données relationnelles (SQL) : schémas, requêtes, procédures stockées, intégrité et performance.",
      "Participation aux phases de tests, validation et mise en production des applications, avec rédaction de la documentation technique associée.",
      "Auteur d'un article scientifique présenté au Colloque Africain de Recherche en Informatique et Mathématiques Appliquées (CARI'14), valorisant les résultats obtenus avec les outils développés.",
    ],
  },
];

const projects = [
  {
    title: "Support omnicanal augmenté par IA",
    period: "Freelance (2024–2025)",
    description: "Centralisation des messages (email, réseaux sociaux, WhatsApp, chat) et mise en place d'agents IA spécialisés (support, marketing) alimentés par un RAG sur la base de connaissances client. Orchestration LangChain + OpenAI/Claude, vector DB Chroma/Pinecone, intégration dans HubSpot et workflows n8n. Réduction du temps de réponse et du volume de tickets manuels.",
  },
  {
    title: "Pipeline marketing automatisé avec IA",
    period: "Freelance (2024–2025)",
    description: "Transcription automatique des appels (API speech-to-text), extraction d'informations clés, qualification/score des leads dans HubSpot et génération de messages de suivi personnalisés (LLM). Orchestration via Make/n8n et scripts Python, monitoring des taux de conversion et itérations sur les prompts.",
  },
  {
    title: "Plateforme podcast IA – clone NotebookLM",
    period: "Freelance (2024–2025)",
    description: "Développement d'une plateforme permettant de créer des podcasts à partir de contenus textuels/vidéo : ingestion, segmentation, génération de scripts, résumés et titres via LLM, puis diffusion multicanal. Stack : Python/FastAPI, APIs LLM, stockage cloud.",
  },
  {
    title: "Stack IA open-source & Fine-tuning LLM Wolof",
    period: "Freelance (2024–2025)",
    description: "Mise en place d'une stack IA open-source (Ollama / modèles HF + Chroma) pour expérimenter des solutions RAG et des agents IA indépendants du cloud public. Préparation de corpus en Wolof, nettoyage / étiquetage et expérimentation de fine-tuning LoRA sur un modèle open-source, avec évaluation qualitative sur des cas d'usage locaux.",
  },
  {
    title: "CRM école automatisé",
    period: "Freelance (2024)",
    description: "Automatisation complète de la génération de documents et du suivi étudiants via agents IA et workflows n8n → 100% automatisation admin. Stack : n8n, OpenAI API, PostgreSQL.",
  },
  {
    title: "Postelma – Publication multi-plateformes IA",
    period: "Freelance (2024)",
    description: "Génération automatique d'assets visuels et textuels par IA, publication multi-plateformes orchestrée par agents IA → 200+ posts/mois, -70% temps de production. Stack : LangChain, OpenAI, n8n, Make.",
  },
];

const skillsIA = {
  "LLM": ["OpenAI (GPT-4.x)", "Anthropic (Claude)", "Mistral", "Modèles open-source (HuggingFace)"],
  "RAG": ["Ingestion de données", "Chunking", "Embeddings (OpenAI/HF)", "Pinecone", "Chroma", "PGVector", "Recherche sémantique"],
  "Agents IA": ["LangChain / LangGraph", "Orchestration multi-agents", "Tools calling", "Mémoire", "Routage workflows n8n/Make"],
  "Prompt Engineering": ["Prompts structurés", "Few-shot", "Chain-of-thought", "Guardrails métier", "Évaluations automatiques"],
  "Fine-tuning": ["LoRA/QLoRA", "Modèles open-source", "Projet LLM Wolof"],
  "Outils": ["n8n", "Make", "HubSpot", "Notion", "Airtable", "TwentyCRM", "Cursor", "Claude Code"],
};

const skillsDev = {
  "Backend": ["Python (FastAPI)", "Java (Spring Boot)", "APIs REST/webhooks", "Microservices"],
  "Frontend": ["Angular", "React", "Next.js", "Interfaces copilotes & dashboards IA"],
  "Data": ["MySQL", "PostgreSQL", "MongoDB", "Pandas", "NumPy", "Préparation données IA"],
  "DevOps / MLOps": ["Docker", "Kubernetes (bases)", "CI/CD (GitLab, GitHub Actions)", "Logs & métriques (latence, coûts LLM)"],
  "Sécurité": ["OAuth2", "JWT", "Spring Security", "Keycloak", "Gestion de secrets", "Bonnes pratiques RGPD"],
};

const skillsGestion = [
  "Pilotage de projets IA & automatisation (roadmap, backlog, sprints, KPIs)",
  "Cadrage de cas d'usage IA avec les métiers (support, marketing, opérations, e-santé)",
  "Rédaction de spécifications technico-fonctionnelles orientées LLM / RAG",
  "Formation et accompagnement d'équipes non techniques à l'usage d'outils IA",
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

const formations = [
  {
    title: "Associate AI Engineer pour développeurs",
    period: "2026",
  },
  {
    title: "Google AI Essentials – Formation IA et IA générative",
    period: "2026",
  },
  {
    title: "ML Crash Course – Google (Introduction au machine learning, Python & TensorFlow)",
    period: "2025",
  },
  {
    title: "Formations Python orienté IA (complètes)",
    period: "2025",
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

const SkillCategory = ({ category, skills }: { category: string; skills: string[] }) => (
  <div className="mb-3">
    <p className="text-xs font-semibold text-primary mb-1.5">{category}</p>
    <div className="flex flex-wrap gap-1.5">
      {skills.map((s) => (
        <Badge key={s} variant="secondary" className="text-xs font-normal">{s}</Badge>
      ))}
    </div>
  </div>
);

const CV = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = useCallback(async () => {
    const element = cvRef.current;
    if (!element) return;

    const html2pdf = (await import('html2pdf.js')).default;

    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'CV_Diakhate_Malick_Dev_IA.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, logging: false, scrollY: 0, windowWidth: element.scrollWidth },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
      pagebreak: { mode: ['css', 'legacy'], avoid: '.rounded-2xl' },
    };

    html2pdf().set(opt).from(element).save();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-28 pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">

          {/* Download Button */}
          <motion.div
            className="flex justify-end mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button onClick={handleDownloadPDF} variant="premium" className="gap-2">
              <Download className="w-4 h-4" />
              Télécharger en PDF
            </Button>
          </motion.div>

          <div ref={cvRef}>

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
                    Développeur IA & LLM | Chef de projet IA & Automatisation
                  </motion.p>
                  <motion.p
                    className="text-muted-foreground text-sm mt-2 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                  >
                    Conception et déploiement de solutions basées sur les LLM (RAG, agents IA, automatisation) – du prototype à la mise en production.
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
                Expert en transformation digitale avec 5+ ans d'expérience (ex‑développeur full‑stack Java/Angular), 
                je conçois et déploie des solutions basées sur les LLM pour automatiser les workflows métiers 
                (support, marketing, CRM, e‑santé). Je travaille de bout en bout : cadrage avec les équipes métiers, 
                design d'architectures RAG et d'agents IA, intégration d'APIs LLM (OpenAI, Anthropic, Mistral) et 
                mise en production via CI/CD, Docker et monitoring (latence, coûts, qualité). Habitué aux environnements 
                exigeants (Orange, e‑santé), je documente, forme les équipes et industrialise les cas d'usage IA pour 
                qu'ils soient réellement utilisés.
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
                {Object.entries(skillsIA).map(([category, skills]) => (
                  <SkillCategory key={category} category={category} skills={skills} />
                ))}
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
                {Object.entries(skillsDev).map(([category, skills]) => (
                  <SkillCategory key={category} category={category} skills={skills} />
                ))}
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
                <div className="space-y-2 mb-4">
                  {skillsGestion.map((s) => (
                    <div key={s} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-sm text-muted-foreground">{s}</p>
                    </div>
                  ))}
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
              <div className="grid md:grid-cols-2 gap-4">
                {projects.map((p, i) => (
                  <motion.div
                    key={i}
                    className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors border border-border/30"
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-sm text-foreground">{p.title}</h3>
                      <span className="text-xs text-primary font-medium shrink-0 ml-2">{p.period}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
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

            {/* Formations & Certifications IA */}
            <motion.div
              className="rounded-2xl border border-border/50 bg-card p-8 mb-10"
              style={{ boxShadow: 'var(--shadow-card)' }}
              custom={6}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionTitle icon={Award} title="Formations & Certifications IA" index={6} />
              <div className="space-y-6">
                {formations.map((f, i) => (
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
                    <h3 className="font-semibold text-foreground">{f.title}</h3>
                    <span className="text-xs text-primary font-medium flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3" /> {f.period}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="rounded-2xl border border-border/50 bg-card p-8 mb-10"
              style={{ boxShadow: 'var(--shadow-card)' }}
              custom={7}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionTitle icon={GraduationCap} title="Éducation" index={7} />
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

            {/* Langues */}
            <motion.div
              className="rounded-2xl border border-border/50 bg-card p-8"
              style={{ boxShadow: 'var(--shadow-card)' }}
              custom={8}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionTitle icon={Globe} title="Langues" index={8} />
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between"><span>Français</span><span className="text-foreground font-medium">Courant</span></div>
                <div className="flex justify-between"><span>Anglais</span><span className="text-foreground font-medium">Intermédiaire</span></div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
