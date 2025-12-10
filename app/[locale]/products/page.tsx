'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import AddToCartButton from '@/components/AddToCartButton';
import ImageSlider from '@/components/ImageSlider';

// Products page - shows all our products
// For now just the peanut butter, will add more later
// Added cart functionality today!
export default function ProductsPage() {
  const txt = useTranslations('products');

  // Get all the features from translations
  const productFeatures = [
    txt('crunchyPeanutButter.features.0'),
    txt('crunchyPeanutButter.features.1'),
    txt('crunchyPeanutButter.features.2'),
    txt('crunchyPeanutButter.features.3'),
  ];

  // Product slider images
  const productImages = [
    { src: '/images/product.JPG', alt: 'Zetter Product Collection' },
    { src: '/images/product2.JPG', alt: 'Zetter Nut Better Range' },
  ];

  return (
    <div className="min-h-screen bg-neutral-light">
       {/* Product slider - shows our full range */}
      <ImageSlider
        images={productImages}
        height="h-[500px] md:h-[900px]"
        autoScrollDelay={4000}
        showCounter={false}
      />
      
      {/* Page header with gradient */}
      <section className="bg-gradient-to-r from-primary-orange to-primary-burgundy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl sm:text-7xl font-bold text-neutral-cream text-center"
          >
            {txt('title')}
          </motion.h1>
        </div>
      </section>

      {/* Main product section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Product image - still using emoji, need real photo */}
            {/* TODO: Get actual product photography from Zetter */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary-peach to-primary-coral rounded-3xl h-[500px] flex items-center justify-center shadow-2xl"
            >
               <img
                src="/images/peanutButter.JPG"
                alt="Crunchy Peanut Butter"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Product details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-primary-burgundy mb-6">
                {txt('crunchyPeanutButter.name')}
              </h2>
              
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                {txt('crunchyPeanutButter.description')}
              </p>

              {/* Features box */}
              <div className="bg-primary-orange/10 rounded-2xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-primary-burgundy mb-4">
                  Features
                </h3>
                <ul className="space-y-3">
                  {productFeatures.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center text-lg text-gray-700"
                    >
                      <span className="text-primary-orange mr-3 text-2xl">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Price and add to cart section */}
              {/* Finally got the cart working! */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl font-bold text-primary-orange">
                    {txt('crunchyPeanutButter.price')}
                  </span>
                </div>
                
                {/* Add to cart button - connected to cart context */}
                {/* Shows "Added!" feedback when clicked */}
                <AddToCartButton
                  product={{
                    id: 'peanut-butter-crunchy',
                    name: txt('crunchyPeanutButter.name'),
                    price: 129, // SEK - Swedish currency
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming soon section - placeholders for future products */}
      <section className="bg-neutral-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary-burgundy text-center mb-12">
            Coming Soon
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Map through 3 placeholder cards */}
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * num }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-neutral-beige to-neutral-cream rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl">🎁</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-burgundy mb-3">
                  New Product {num}
                </h3>
                <p className="text-gray-600">
                  Exciting healthy products coming soon to Zetter!
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}