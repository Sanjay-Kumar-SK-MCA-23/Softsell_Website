import { useState, useEffect } from 'react';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      quote: "SoftSell helped us recover over $45,000 from unused enterprise software licenses after our company downsized. The process was seamless and their valuation was higher than we expected.",
      author: "Jennifer Roberts",
      role: "IT Director",
      company: "Meridian Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "As a growing startup, we needed to optimize our software spending. SoftSell's platform allowed us to purchase legitimate pre-owned licenses at a 40% discount compared to retail prices.",
      author: "Michael Chen",
      role: "CTO",
      company: "NexGen Analytics",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "I was concerned about compliance risks when reselling our unused Adobe licenses, but SoftSell's legal team handled everything. The transfer was compliant and we received payment within 4 days.",
      author: "Sarah Williams",
      role: "Finance Manager",
      company: "Vertex Media",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('testimonials');
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Auto rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Our Clients Say</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how businesses of all sizes are maximizing their IT investments with SoftSell.
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto relative ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="absolute -top-6 -left-6 text-6xl text-blue-300 dark:text-blue-700 opacity-30">"</div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10 border border-gray-100 dark:border-gray-700">
            <div className="relative min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                    index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-8">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-blue-200 dark:border-blue-800"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-blue-600 dark:bg-blue-500 w-6' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;