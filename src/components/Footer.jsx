import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Github, Instagram } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="text-blue-500"
              >
                <path 
                  d="M16 8V5C16 4.44772 15.5523 4 15 4H5C4.44772 4 4 4.44772 4 5V15C4 15.5523 4.44772 16 5 16H8M19 20H9C8.44772 20 8 19.5523 8 19V9C8 8.44772 8.44772 8 9 8H19C19.5523 8 20 8.44772 20 9V19C20 19.5523 19.5523 20 19 20Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-bold text-blue-500">SoftSell</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming unused software licenses into liquid assets for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/sanjay-kumar-m-092169227/" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Sanjay-Kumar-SK-MCA-23" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.instagram.com/_im_sanjay_sk_/" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Press Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">License Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-blue-500" />
                <a href="mailto:info@softsell.com" className="text-gray-400 hover:text-blue-500 transition-colors">info@softsell.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-blue-500" />
                <a href="tel:+18005551234" className="text-gray-400 hover:text-blue-500 transition-colors">+1 (800) 555-1234</a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-blue-500 mt-1" />
                <span className="text-gray-400">1234 Tech Lane, Suite 567<br />San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} SoftSell. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-blue-500 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-blue-500 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-blue-500 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;