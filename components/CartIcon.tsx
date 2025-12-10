'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

// Cart icon component - shows in navigation
// Displays number of items in cart
// Now using Lucide icon instead of emoji - looks more professional!
export default function CartIcon() {
  const { totalItems } = useCart();
  const locale = useLocale();

  return (
    <Link href={`/${locale}/cart`} className="relative">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        {/* Shopping cart icon from Lucide - way better than emoji! */}
        <ShoppingCart 
          className="text-neutral-cream w-8 h-8" 
          strokeWidth={2}
        />
        
        {/* Item count badge - only shows if there are items */}
        {totalItems > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-primary-orange text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
          >
            {totalItems}
          </motion.span>
        )}
      </motion.div>
    </Link>
  );
}