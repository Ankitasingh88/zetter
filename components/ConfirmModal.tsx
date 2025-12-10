'use client';

import { motion, AnimatePresence } from 'framer-motion';

// Custom confirmation modal
// Much better than the ugly browser confirm() popup!
// Made this to look nice and match our design

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  emoji?: string;
}

export default function ConfirmModal({
  isOpen,
  onConfirm,
  onCancel,
  title,
  message,
  confirmText = 'Yes, Clear Cart',
  cancelText = 'Cancel',
  emoji = '🗑️',
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay - darkens background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCancel}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            {/* Modal card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            >
              {/* Emoji icon */}
              <div className="text-6xl text-center mb-4">
                {emoji}
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-primary-burgundy text-center mb-4">
                {title}
              </h2>

              {/* Message */}
              <p className="text-lg text-gray-600 text-center mb-8">
                {message}
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                {/* Cancel button */}
                <button
                  onClick={onCancel}
                  className="flex-1 px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  {cancelText}
                </button>

                {/* Confirm button */}
                <button
                  onClick={() => {
                    onConfirm();
                    onCancel(); // close modal after confirming
                  }}
                  className="flex-1 px-6 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition-all duration-300"
                >
                  {confirmText}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}