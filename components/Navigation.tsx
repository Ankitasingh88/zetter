'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import CartIcon from './CartIcon';
import { ShoppingCart } from 'lucide-react';

// Main navigation component
// Took me forever to get the hamburger menu animation right lol
// Added cart icon today for shopping functionality
export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const txt = useTranslations('nav'); 
  const locale = useLocale();

  // My function to toggle the menu
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    // console.log('Menu toggled:', !menuOpen); // used this for debugging
  };

  // All my navigation links
  const links = [
    { href: `/${locale}`, label: txt('home') },
    { href: `/${locale}/products`, label: txt('products') },
    { href: `/${locale}/about`, label: txt('about') },
    { href: `/${locale}/contact`, label: txt('contact') },
  ];

  // Language switcher - this reloads the page which isn't ideal
  // TODO: figure out how to do this without full reload
  // Tried using Next router but it was complicated
  const changeLanguage = (newLang: string) => {
    const path = window.location.pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLang}${path}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-burgundy/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Zetter logo - just text for now, maybe add image later? */}
          <Link href={`/${locale}`} className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-primary-peach text-4xl font-bold"
            >
              <div className="text-center leading-tight">
                <div className="text-4xl font-bold">Zetter</div>
                <div className="text-sm font-normal tracking-wide">Because It's Better!</div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop menu - this one was easier */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-cream hover:text-primary-peach transition-colors duration-300 text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Shopping cart icon - shows item count */}
            {/* Added this for the cart functionality */}
            <CartIcon />
            
            {/* Language buttons EN/SV */}
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-md transition-all ${
                  locale === 'en'
                    ? 'bg-primary-peach text-primary-burgundy'
                    : 'text-neutral-cream hover:text-primary-peach'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('sv')}
                className={`px-3 py-1 rounded-md transition-all ${
                  locale === 'sv'
                    ? 'bg-primary-peach text-primary-burgundy'
                    : 'text-neutral-cream hover:text-primary-peach'
                }`}
              >
                SV
              </button>
            </div>
          </div>

          {/* Hamburger button - the hardest part! */}
          {/* Spent like 2 hours trying different animations */}
          <button
            onClick={handleMenuClick}
            className="md:hidden text-neutral-cream focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="space-y-2">
              {/* Top line */}
              <motion.div
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-8 h-0.5 bg-neutral-cream"
              />
              {/* Middle line - fades out when open */}
              <motion.div
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-8 h-0.5 bg-neutral-cream"
              />
              {/* Bottom line */}
              <motion.div
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-8 h-0.5 bg-neutral-cream"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {/* AnimatePresence makes it slide smoothly */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-burgundy"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {links.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }} // stagger effect
                >
                  <Link
                    href={link.href}
                    onClick={handleMenuClick} // close menu after click
                    className="block text-neutral-cream hover:text-primary-peach transition-colors duration-300 text-lg py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Cart link for mobile menu */}
              {/* Shows up in hamburger menu */}
              <div className="pt-2 border-t border-primary-peach/30">
                <Link
                  href={`/${locale}/cart`}
                  onClick={handleMenuClick}
                  className="flex items-center text-neutral-cream hover:text-primary-peach transition-colors py-2"
                >
                  <ShoppingCart className="w-6 h-6 mr-3" strokeWidth={2} />
                  <span className="text-lg">Shopping Cart</span>
                </Link>
              </div>
              
              {/* Language switcher for mobile */}
              <div className="flex items-center space-x-3 pt-4 border-t border-primary-peach/30">
                <span className="text-neutral-cream text-sm">Language:</span>
                <button
                  onClick={() => {
                    changeLanguage('en');
                    handleMenuClick(); // close menu
                  }}
                  className={`px-4 py-2 rounded-md transition-all ${
                    locale === 'en'
                      ? 'bg-primary-peach text-primary-burgundy'
                      : 'text-neutral-cream hover:text-primary-peach border border-neutral-cream'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    changeLanguage('sv');
                    handleMenuClick();
                  }}
                  className={`px-4 py-2 rounded-md transition-all ${
                    locale === 'sv'
                      ? 'bg-primary-peach text-primary-burgundy'
                      : 'text-neutral-cream hover:text-primary-peach border border-neutral-cream'
                  }`}
                >
                  Svenska
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}