import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import ynnoviaLogo from '@/assets/ynnovia-logo.png';

interface NavLink {
  label: string;
  href: string;
  isAnchor?: boolean;
}

const navLinks: NavLink[] = [
  { label: 'Solutions', href: '/#solutions', isAnchor: true },
  { label: 'Projets Clients', href: '/projets-clients' },
  { label: 'Intégration', href: '/#integration', isAnchor: true },
  { label: 'Processus', href: '/#processus', isAnchor: true },
  { label: 'FAQ', href: '/#faq', isAnchor: true },
  { label: 'CV', href: '/cv' },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (link: NavLink) => {
    setMobileOpen(false);
    if (link.isAnchor && location.pathname === '/') {
      const id = link.href.replace('/#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderLink = (link: NavLink, className: string) => {
    if (link.isAnchor) {
      if (location.pathname === '/') {
        return (
          <a
            key={link.label}
            href={link.href.replace('/', '')}
            className={className}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link);
            }}
          >
            {link.label}
          </a>
        );
      }
      return (
        <Link key={link.label} to={link.href.replace('#', '')} className={className} onClick={() => setMobileOpen(false)}>
          {link.label}
        </Link>
      );
    }
    return (
      <Link key={link.label} to={link.href} className={className} onClick={() => setMobileOpen(false)}>
        {link.label}
      </Link>
    );
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Link to="/" className="flex items-center gap-3">
              <motion.img
                src={ynnoviaLogo}
                alt="Ynnovia"
                className="h-10 w-10 object-contain rounded-lg"
                whileHover={{ scale: 1.05, rotateY: 10, transition: { duration: 0.3 } }}
              />
              <span className="text-lg font-bold tracking-wide bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                YNNOVIA
              </span>
            </Link>
          </motion.div>

          {/* Desktop */}
          <motion.div
            className="hidden md:flex items-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {navLinks.map((link) =>
              renderLink(link, 'text-sm font-medium hover:text-primary transition-colors')
            )}
            <ThemeToggle />
          </motion.div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) =>
                renderLink(link, 'text-sm font-medium py-2 hover:text-primary transition-colors')
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
