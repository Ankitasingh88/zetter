'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

// Add to cart button component
// Used on product pages to add items to cart
// Tried different button styles before settling on this one

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image?: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  // Handle adding to cart
  // Shows a quick "Added!" message then resets
  const handleAddToCart = () => {
    console.log('Button clicked, adding:', product.name); // debugging
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1, // always start with 1
      image: product.image,
    });

    // Show "Added!" feedback
    setJustAdded(true);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setJustAdded(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={handleAddToCart}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-full px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 shadow-lg ${
        justAdded
          ? 'bg-green-500 text-white'
          : 'bg-primary-burgundy text-white hover:bg-primary-orange'
      }`}
    >
      {justAdded ? '✓ Added to Cart!' : 'Add to Cart'}
    </motion.button>
  );
}