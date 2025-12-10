'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

// Footer component - appears at bottom of every page
export default function Footer() {
  const footerTxt = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-primary-burgundy text-neutral-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About section */}
          <div>
            <h3 className="text-primary-peach text-xl font-bold mb-4">
              {footerTxt('about')}
            </h3>
            <p className="text-sm text-neutral-cream/80">
              Premium healthy food products with natural ingredients and authentic taste.
            </p>
          </div>

          {/* Products section */}
          <div>
            <h3 className="text-primary-peach text-xl font-bold mb-4">
              {footerTxt('products')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/products`}
                  className="text-sm hover:text-primary-peach transition-colors"
                >
                  Crunchy Peanut Butter
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/products`}
                  className="text-sm hover:text-primary-peach transition-colors"
                >
                  Coming Soon
                </Link>
              </li>
            </ul>
          </div>

          {/* Social media section */}
          <div>
            <h3 className="text-primary-peach text-xl font-bold mb-4">
              {footerTxt('social')}
            </h3>
            <ul className="space-y-2">
              <li>
                {/* These links don't go anywhere real yet */}
                {/* TODO: Add actual Zetter social media links */}
                 <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary-peach transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                 <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary-peach transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info section */}
          <div>
            <h3 className="text-primary-peach text-xl font-bold mb-4">
              {footerTxt('contact')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>info@zetter.se</li>
              <li>+46 70 123 4567</li>
              <li>Stockholm, Sweden</li>
            </ul>
          </div>
        </div>

        {/* Copyright section at bottom */}
        <div className="border-t border-primary-peach/30 mt-8 pt-8 text-center">
          <p className="text-sm text-neutral-cream/60">
            © 2024 {footerTxt('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}