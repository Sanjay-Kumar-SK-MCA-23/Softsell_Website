import { useState, useEffect } from 'react';
import { Shield, TrendingUp, Clock, BadgeCheck } from 'lucide-react';

function WhyChooseUs() {
  const [animatedItems, setAnimatedItems] = useState([false, false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('why-choose-us');
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        setAnimatedItems([true, true, true, true]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const benefits = [
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-600 dark:text-blue-500" />,
      title: "Maximum Value",
      description: "Our marketplace analytics ensure you get the highest possible value for your unused licenses based on real-time market demand.",
      delay: 0
    },
    {
      icon: <Shield className="w-10 h-10 text-teal-600 dark:text-teal-500" />,
      title: "Secure Transactions",
      description: "End-to-end encryption and compliance-focused processes protect both sellers and buyers throughout the entire transaction.",
      delay: 0.1
    },
    {
      icon: <Clock className="w-10 h-10 text-purple-600 dark:text-purple-500" />,
      title: "Fast Processing",
      description: "Our streamlined process means most transactions complete within 5 business days from initial submission to payment.",
      delay: 0.2
    },
    {
      icon: <BadgeCheck className="w-10 h-10 text-green-600 dark:text-green-500" />,
      title: "Compliance Guarantee",
      description: "Our legal team ensures all transfers are compliant with software licensing terms, protecting your business from potential liability.",
      delay: 0.3
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose SoftSell</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            At SoftSell, we've built a platform that prioritizes security, value, and efficiency for software license resellers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`${animatedItems[index] ? 'fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${benefit.delay}s` }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 h-full border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-600 dark:bg-blue-700 rounded-xl p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$12M+</div>
              <p>Recovered for businesses</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <p>Successfully transferred licenses</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p>Client satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;