import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import './globals.css';

// Metadata for SEO
export const metadata = {
  title: 'Zetter - Healthy Food Products',
  description: 'Premium healthy food products with natural ingredients',
};

// Main layout wrapper
// Added CartProvider to give cart access to all pages
export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-neutral-light">
        <NextIntlClientProvider messages={messages}>
          {/* CartProvider wraps everything so cart works everywhere */}
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-1 pt-20">
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}