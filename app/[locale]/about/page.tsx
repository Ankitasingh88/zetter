'use client';

import { useTranslations } from 'next-intl';

// About page - company mission and values
export default function AboutPage() {
  const aboutText = useTranslations('about');

  return (
    <div className="min-h-screen bg-neutral-light">

      {/* About banner image - shows brand logo */}
      <div className="w-full h-[400px] md:h-[600px] overflow-hidden">
        <img
          src="/images/about.JPG"
          alt="Zetter - Because It's Better"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Header section */}
      <section className="bg-gradient-to-br from-primary-coral to-primary-orange py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl sm:text-7xl font-bold text-neutral-cream text-center">
            {aboutText('title')}
          </h1>
        </div>
      </section>

      {/* Mission statement section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            {/* Main mission text */}
            <p className="text-3xl sm:text-4xl font-bold text-primary-burgundy mb-8 leading-tight">
              {aboutText('description')}
            </p>
            
            {/* Secondary text */}
            <p className="text-2xl sm:text-3xl text-primary-burgundy leading-relaxed">
              {aboutText('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Company values section */}
      {/* I added these manually - not in translations */}
      <section className="bg-neutral-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-primary-burgundy text-center mb-16">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Value card 1 - Natural ingredients */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-primary-burgundy mb-4">
                Natural Ingredients
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We use only the finest natural ingredients, no artificial additives or preservatives.
              </p>
            </div>

            {/* Value card 2 - Health first */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-6xl mb-4">💪</div>
              <h3 className="text-2xl font-bold text-primary-burgundy mb-4">
                Health First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every product is designed to support your healthy lifestyle and fitness goals.
              </p>
            </div>

            {/* Value card 3 - Quality */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-primary-burgundy mb-4">
                Quality Assured
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Premium quality products that meet the highest standards of taste and nutrition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section at bottom */}
      <section className="bg-gradient-to-r from-primary-orange to-primary-burgundy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-cream mb-6">
            {aboutText('cta')}
          </h2>
          <p className="text-xl text-neutral-cream/90 mb-8">
            {aboutText('readMore')}
          </p>
          {/* Link to products page */}
           <a
            href="/en/products"
            className="inline-block bg-neutral-cream text-primary-burgundy px-12 py-5 rounded-full text-xl font-bold hover:bg-primary-peach transition-all duration-300 transform hover:scale-105"
          >
            Explore Products
          </a>
        </div>
      </section>
    </div>
  );
}