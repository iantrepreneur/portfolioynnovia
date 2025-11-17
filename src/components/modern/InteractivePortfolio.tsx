import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AutomationCard } from '@/components/AutomationCard';
import { ApplicationCard } from '@/components/ApplicationCard';
import { automations } from '@/data/automations';
import { applications } from '@/data/applications';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type FilterType = 'all' | 'applications' | 'automations';
type CategoryType = 'all' | 'Communication' | 'Marketing' | 'Finance' | 'CRM & Marketing' | 'Intelligence Artificielle';

export const InteractivePortfolio = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Get all unique categories
  const allCategories: CategoryType[] = ['all', ...Array.from(new Set([
    ...automations.map(a => a.category),
    ...applications.map(a => a.category)
  ]))] as CategoryType[];

  // Filter items based on active filters
  const filteredItems = () => {
    let items: Array<{type: 'automation' | 'application', data: any}> = [];

    if (activeFilter === 'all' || activeFilter === 'automations') {
      items = [...items, ...automations.map(a => ({ type: 'automation' as const, data: a }))];
    }
    if (activeFilter === 'all' || activeFilter === 'applications') {
      items = [...items, ...applications.map(a => ({ type: 'application' as const, data: a }))];
    }

    if (activeCategory !== 'all') {
      items = items.filter(item => item.data.category === activeCategory);
    }

    return items;
  };

  const items = filteredItems();

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6"
          >
            Notre Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--ai-blue))] to-[hsl(var(--ai-purple))] bg-clip-text text-transparent">
            Projets & Automatisations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos réalisations et les automatisations que nous avons créées pour nos clients
          </p>
        </motion.div>

        {/* Type Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {(['all', 'applications', 'automations'] as FilterType[]).map((filter) => (
            <motion.button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setActiveCategory('all');
              }}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[hsl(var(--ai-blue))] to-[hsl(var(--ai-purple))] text-white shadow-[var(--shadow-glow)]'
                  : 'bg-card text-foreground hover:bg-accent border border-border'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter === 'all' ? 'Tout' : filter === 'applications' ? 'Applications' : 'Automatisations'}
            </motion.button>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {allCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'Toutes catégories' : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Results count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8"
        >
          <p className="text-muted-foreground">
            {items.length} résultat{items.length > 1 ? 's' : ''} trouvé{items.length > 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${activeCategory}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {items.map((item, index) => (
              <motion.div
                key={`${item.type}-${item.data.id || item.data.name}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -10 }}
              >
                {item.type === 'automation' ? (
                  <AutomationCard {...item.data} />
                ) : (
                  <ApplicationCard {...item.data} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {items.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Aucun résultat</h3>
            <p className="text-muted-foreground mb-6">
              Essayez de modifier vos filtres pour voir plus de résultats
            </p>
            <motion.button
              onClick={() => {
                setActiveFilter('all');
                setActiveCategory('all');
              }}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Réinitialiser les filtres
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
