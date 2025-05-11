import { useState, useEffect } from 'react';
import { CheckCircle, Upload, DollarSign } from 'lucide-react';

function HowItWorks() {
  const [animatedItems, setAnimatedItems] = useState([false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('how-it-works');
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        setAnimatedItems([true, true, true]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-blue-600 dark:text-blue-500" />,
      title: "Upload Your Licenses",
      description: "Simply upload your software license details through our secure portal. We'll verify all license information and confirm eligibility.",
      delay: 0
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-teal-600 dark:text-teal-500" />,
      title: "Receive Valuation",
      description: "Our proprietary algorithm analyzes current market demand and provides you with a competitive valuation within 24 hours.",
      delay: 0.2
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600 dark:text-green-500" />,
      title: "Get Paid Quickly",
      description: "Once you accept our offer, we handle all the transfer paperwork and you receive payment within 3-5 business days.",
      delay: 0.4
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white dark:bg-gray-900 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How It Works</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Our streamlined process makes it easy to turn unused software licenses into cash in just three simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connecting line between steps */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700" style={{ zIndex: 1 }}></div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative z-10 ${animatedItems[index] ? 'fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${step.delay}s` }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 h-full border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">{step.description}</p>
                <div className="absolute -right-4 top-24 hidden md:block">
                  {index < 2 && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 dark:text-blue-500">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn btn-primary">
            Start the Process
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;