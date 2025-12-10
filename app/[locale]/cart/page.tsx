'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ConfirmModal from '@/components/ConfirmModal';
import { ShoppingCart, Trash2 } from 'lucide-react';

// Shopping cart page
// Shows all items in cart with quantity controls
// Added custom confirmation modal - looks way better!
export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const locale = useLocale();
  
  // State for controlling the confirmation modal
  const [showClearModal, setShowClearModal] = useState(false);

  // If cart is empty, show empty state
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-neutral-light pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-3xl p-12 text-center shadow-xl">
          <div className="mb-6">
              <ShoppingCart className="w-32 h-32 text-primary-burgundy mx-auto" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl font-bold text-primary-burgundy mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Add some delicious products to get started!
            </p>
            <Link
              href={`/${locale}/products`}
              className="inline-block bg-primary-orange text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-primary-burgundy transition-all duration-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-light pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-primary-burgundy mb-2">
            Shopping Cart
          </h1>
          <p className="text-xl text-gray-600">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart items section */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-6">
                  
                  {/* Product image placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-peach to-primary-coral rounded-xl flex items-center justify-center flex-shrink-0">
                    <img
                      src="/images/peanutButter.jpg"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product details */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary-burgundy mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xl text-primary-orange font-semibold">
                      {item.price} SEK
                    </p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-10 h-10 bg-neutral-beige hover:bg-primary-peach rounded-full font-bold text-xl transition-colors"
                    >
                      −
                    </button>
                    
                    <span className="text-2xl font-bold text-primary-burgundy min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-10 h-10 bg-neutral-beige hover:bg-primary-peach rounded-full font-bold text-xl transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Item subtotal */}
                  <div className="text-right min-w-[6rem]">
                    <p className="text-sm text-gray-500">Subtotal</p>
                    <p className="text-2xl font-bold text-primary-burgundy">
                      {item.price * item.quantity} SEK
                    </p>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => {
                      console.log('Removing item:', item.id);
                      removeFromCart(item.id);
                    }}
                    className="text-red-500 hover:text-red-700 transition-colors p-2"
                    aria-label="Remove item"
                  >
                   <Trash2 className="w-5 h-5" strokeWidth={2} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order summary section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-xl sticky top-24">
              <h2 className="text-3xl font-bold text-primary-burgundy mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">{totalPrice} SEK</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
              </div>

              <div className="flex justify-between text-2xl font-bold text-primary-burgundy mb-8">
                <span>Total</span>
                <span>{totalPrice} SEK</span>
              </div>

              <button
                onClick={() => alert('Checkout coming soon! 🚀')}
                className="w-full bg-primary-orange text-white py-4 rounded-full text-xl font-bold hover:bg-primary-burgundy transition-all duration-300 mb-4"
              >
                Proceed to Checkout
              </button>

              <Link
                href={`/${locale}/products`}
                className="block text-center text-primary-orange hover:text-primary-burgundy font-semibold transition-colors"
              >
                ← Continue Shopping
              </Link>

              {/* Clear cart button - opens custom modal */}
              <button
                onClick={() => setShowClearModal(true)}
                className="w-full mt-6 text-gray-500 hover:text-red-600 text-sm transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Beautiful custom confirmation modal */}
      <ConfirmModal
        isOpen={showClearModal}
        onConfirm={() => {
          console.log('Clearing cart...');
          clearCart();
        }}
        onCancel={() => setShowClearModal(false)}
        title="Clear Your Cart?"
        message="Are you sure you want to remove all items? This can't be undone! 😢"
        confirmText="Yes, Clear Everything"
        cancelText="No, Keep Items"
        emoji="🗑️"
      />
    </div>
  );
}