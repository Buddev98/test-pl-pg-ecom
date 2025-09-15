import React, { useState } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }
    
    // Simulate API call
    setStatus('loading');
    
    setTimeout(() => {
      // Simulate success (in a real app, this would be based on API response)
      setStatus('success');
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-8 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">Stay Updated</h2>
          <p className="text-indigo-100 max-w-md">
            Subscribe to our newsletter for exclusive deals, new arrivals, and more. 
            Get 10% off your first order when you sign up!
          </p>
        </div>
        
        <div className="w-full md:w-1/2 max-w-md">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                disabled={status === 'loading' || status === 'success'}
                className={`w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                  status === 'error' 
                    ? 'border-2 border-red-500 focus:ring-red-500' 
                    : 'focus:ring-white'
                }`}
              />
            </div>
            
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`mt-3 w-full bg-white text-indigo-600 font-medium py-3 px-4 rounded-lg hover:bg-indigo-50 transition-colors flex items-center justify-center ${
                status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
              } ${status === 'success' ? 'bg-green-500 hover:bg-green-500 text-white' : ''}`}
            >
              {status === 'loading' && (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              
              {status === 'success' && <Check className="h-5 w-5 mr-1" />}
              
              {status === 'loading' ? 'Subscribing...' : 
               status === 'success' ? 'Subscribed!' : 
               'Subscribe Now'}
            </button>
            
            {status === 'error' && (
              <div className="mt-2 flex items-center text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errorMessage}
              </div>
            )}
            
            <p className="mt-2 text-xs text-indigo-100 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
