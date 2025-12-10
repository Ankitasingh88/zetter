'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

// Contact page with form
export default function ContactPage() {
  const t = useTranslations('contact');
  
  // Form state - tracks what user types
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle when user submits form
  // Right now it just shows a success message
  // TODO: Need to connect this to a real email service
  // Maybe use Formspree or EmailJS?
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form data:', formInfo); // for testing
    // console.log('Email would be sent here if backend was connected');
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset everything after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormInfo({ name: '', email: '', message: '' });
    }, 3000);
  };

  // Update form as user types
  const updateField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    
    setFormInfo({
      ...formInfo,
      [fieldName]: fieldValue
    });
  };

  return (
    <div className="min-h-screen bg-neutral-light">
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-burgundy to-primary-orange py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl sm:text-7xl font-bold text-neutral-cream text-center">
            {t('title')}
          </h1>
        </div>
      </section>

      {/* Contact form section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <p className="text-xl text-gray-600 text-center mb-12">
              {t('info')}
            </p>

            {/* Show either success message or form */}
            {isSubmitted ? (
              // Success message after submission
              <div className="bg-green-100 border border-green-400 text-green-700 px-8 py-6 rounded-2xl text-center">
                <p className="text-2xl font-bold mb-2">Thank you!</p>
                <p className="text-lg">We'll get back to you soon.</p>
              </div>
            ) : (
              // The actual form
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Name input */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-lg font-semibold text-primary-burgundy mb-2"
                  >
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formInfo.name}
                    onChange={updateField}
                    required
                    className="w-full px-6 py-4 rounded-xl border-2 border-neutral-beige focus:border-primary-orange focus:outline-none transition-colors text-lg"
                    placeholder="Your name"
                  />
                </div>

                {/* Email input */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-lg font-semibold text-primary-burgundy mb-2"
                  >
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formInfo.email}
                    onChange={updateField}
                    required
                    className="w-full px-6 py-4 rounded-xl border-2 border-neutral-beige focus:border-primary-orange focus:outline-none transition-colors text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message textarea */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-lg font-semibold text-primary-burgundy mb-2"
                  >
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formInfo.message}
                    onChange={updateField}
                    required
                    rows={6}
                    className="w-full px-6 py-4 rounded-xl border-2 border-neutral-beige focus:border-primary-orange focus:outline-none transition-colors text-lg resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-primary-orange text-white px-8 py-5 rounded-xl text-xl font-bold hover:bg-primary-burgundy transition-all duration-300 shadow-lg"
                >
                  {t('send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact info cards at bottom */}
      <section className="bg-neutral-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Email card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-primary-burgundy mb-3">Email</h3>
              <p className="text-gray-600">info@zetter.se</p>
            </div>

            {/* Phone card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-primary-burgundy mb-3">Phone</h3>
              <p className="text-gray-600">+46 70 123 4567</p>
            </div>

            {/* Location card */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-primary-burgundy mb-3">Location</h3>
              <p className="text-gray-600">Stockholm, Sweden</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}