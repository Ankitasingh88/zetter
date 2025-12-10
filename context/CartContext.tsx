'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Cart context - manages shopping cart globally
// Learned about Context API from React docs
// This way I don't have to pass cart data through every component
// which would be annoying

// Define what a cart item looks like
// Had to figure out the TypeScript types
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string; // optional for now
}

// Cart context type
interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart provider component
// Wraps the whole app to provide cart functionality everywhere
export function CartProvider({ children }: { children: React.ReactNode }) {
  // State for cart items - this is where everything is stored
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage when component mounts
  // This way cart persists even after refresh
  // Took me a while to get this working properly
  useEffect(() => {
    const savedCart = localStorage.getItem('zetter-cart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        setItems(parsed);
        // console.log('Loaded cart from storage:', parsed); // debugging
      } catch (error) {
        console.error('Error loading cart:', error);
        // If something goes wrong, just start with empty cart
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  // This runs every time items array updates
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('zetter-cart', JSON.stringify(items));
      // console.log('Saved cart to storage:', items); // for testing
    } else {
      // Clear storage if cart is empty
      localStorage.removeItem('zetter-cart');
    }
  }, [items]);

  // Add item to cart function
  // This was tricky - had to handle both new items and existing items
  const addToCart = (product: CartItem) => {
    console.log('Adding to cart:', product.name); // debugging log
    
    // Check if item already exists in cart
    const existingItem = items.find(item => item.id === product.id);
    
    if (existingItem) {
      // Item already in cart - just increase quantity
      // Spent some time figuring out this map approach
      setItems(items.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // New item - add it with quantity 1
      setItems([...items, { ...product, quantity: 1 }]);
    }
    
    // TODO: Maybe add a toast notification here?
    // Would be nice to show "Added to cart!" message
  };

  // Remove item completely from cart
  const removeFromCart = (id: string) => {
    console.log('Removing item:', id);
    setItems(items.filter(item => item.id !== id));
  };

  // Update quantity of existing item
  // Used by the +/- buttons on cart page
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      // If quantity goes below 1, just remove the item
      removeFromCart(id);
      return;
    }
    
    setItems(items.map(item =>
      item.id === id
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  // Clear entire cart
  // Useful for "checkout" later or if user wants to start over
  const clearCart = () => {
    console.log('Clearing cart');
    setItems([]);
    localStorage.removeItem('zetter-cart');
  };

  // Calculate total number of items in cart
  // This shows in the cart icon badge
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate total price
  // Used on cart page to show total cost
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Provide all cart functionality to children components
  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart context
// Makes it easier to access cart in any component
// Just call: const cart = useCart();
export function useCart() {
  const context = useContext(CartContext);
  
  if (!context) {
    // This error means CartProvider is missing somewhere
    // Shouldn't happen but good to check
    throw new Error('useCart must be used within CartProvider');
  }
  
  return context;
}