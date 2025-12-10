'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import ImageSlider from '@/components/ImageSlider';

// Homepage component
// This is the main landing page for Zetter
export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

   // Homepage slider images
  const homeImages = [
    { src: '/images/home.JPG', alt: 'Satisfy Your Cravings' },
    { src: '/images/home2.PNG', alt: 'Zetter Nut Better' },
  ];

  return (
    <div>
      {/* Hero section - big gradient background */}
      {/* I wanted this to look really bold and professional */}
      <ImageSlider images={homeImages} height="h-[500px] md:h-[900px]" />
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-coral via-primary-orange to-primary-burgundy overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Main heading - HUGE text */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl sm:text-8xl lg:text-9xl font-bold text-neutral-cream mb-6 leading-none"
            >
              {t('hero.title').toUpperCase()}
            </motion.h1>
            
            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary-peach mb-8 leading-none"
            >
              {t('hero.subtitle').toUpperCase()}
            </motion.h2>

            {/* Description paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl sm:text-2xl text-neutral-cream mb-12 max-w-3xl leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link
                href={`/${locale}/products`}
                className="inline-block bg-neutral-cream text-primary-burgundy px-12 py-5 rounded-full text-xl font-bold hover:bg-primary-peach hover:text-primary-burgundy transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                {t('hero.cta')}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative blob - adds some visual interest */}
        {/* Got this idea from Dribbble designs */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-primary-peach/30 rounded-full blur-3xl"
        ></motion.div>
      </section>

      {/* Products preview section */}
      <section className="bg-neutral-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-bold text-primary-burgundy text-center mb-16"
          >
            {t('products.title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Main product card - peanut butter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }} // lifts up on hover
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Product image placeholder - using emoji for now */}
              {/* TODO: Replace with real product photos */}
              <div className="h-64 bg-gradient-to-br from-primary-peach to-primary-coral flex items-center justify-center">
                 <img
                  src="/images/peanutButter.JPG"
                  alt="Crunchy Peanut Butter"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary-burgundy mb-3">
                  {t('products.crunchyPeanutButter.name')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('products.crunchyPeanutButter.description')}
                </p>
                <p className="text-3xl font-bold text-primary-orange">
                  {t('products.crunchyPeanutButter.price')}
                </p>
              </div>
            </motion.div>

            {/* Coming soon cards - placeholders for future products */}
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (i + 1) }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="h-64 bg-gradient-to-br from-neutral-beige to-neutral-cream flex items-center justify-center">
                  <span className="text-primary-burgundy text-2xl font-bold">Coming Soon</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-burgundy mb-3">
                    New Product
                  </h3>
                  <p className="text-gray-600">
                    Exciting new healthy products coming to Zetter soon!
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View all products button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href={`/${locale}/products`}
              className="inline-block bg-primary-orange text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-primary-burgundy transition-all duration-300 transform hover:scale-105"
            >
              {t('products.viewAll')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission/About section */}
      {/* Wanted to include company mission on homepage */}
      <section className="bg-gradient-to-br from-primary-coral to-primary-orange py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary-burgundy mb-8"
          >
            {t('about.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-burgundy mb-8 leading-tight"
          >
            {t('about.description')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl text-primary-burgundy mb-12 leading-relaxed"
          >
            {t('about.subtitle')}
          </motion.p>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-neutral-cream rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-burgundy mb-4">
              {t('about.cta')}
            </h3>
            <Link
              href={`/${locale}/products`}
              className="inline-block text-primary-orange hover:text-primary-burgundy text-lg font-semibold underline transition-colors"
            >
              {t('about.readMore')} →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}