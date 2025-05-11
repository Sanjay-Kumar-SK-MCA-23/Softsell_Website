import { useEffect, useState } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay for animation to work better
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`} style={{animationDelay: '0.1s'}}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
              Transform Unused Licenses Into <span className="text-blue-600 dark:text-blue-500">Cash</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
              SoftSell helps businesses recover value from unused software licenses through our secure, transparent marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn btn-primary">
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#how-it-works" className="btn btn-outline">
                How It Works
              </a>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900" />
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900" />
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=40" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Trusted by 500+ businesses</p>
              </div>
            </div>
          </div>
          
          <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-teal-600 dark:bg-teal-700 rounded-xl transform rotate-3"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-600 dark:bg-blue-700 rounded-xl transform -rotate-3"></div>
              <div className="relative z-10 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-500 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <h3 className="text-xl font-semibold">License Valuation</h3>
                  </div>
                  <div className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-medium">
                    Instant
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500 dark:text-gray-400">Adobe Creative Cloud</span>
                      <span className="font-semibold">5 licenses</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">$2,400 - $2,800</div>
                  </div>
                  
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500 dark:text-gray-400">Microsoft 365</span>
                      <span className="font-semibold">10 licenses</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">$1,800 - $2,100</div>
                  </div>
                  
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-800 dark:text-blue-300">Estimated Total</span>
                      <span className="font-semibold text-blue-800 dark:text-blue-300">15 licenses</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-500">$4,200 - $4,900</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
    </section>
  );
}

export default Hero;