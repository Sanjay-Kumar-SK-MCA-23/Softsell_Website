import { useState, useEffect, useRef } from 'react';
import { X, Send, User, Bot } from 'lucide-react';

function ChatWidget({ onClose }) {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      type: 'bot', 
      text: "👋 Hi there! I'm the SoftSell AI assistant. How can I help you with software license reselling today?",
      options: ["How does the process work?", "What licenses do you accept?", "How much is my license worth?", "What fees do you charge?"]
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;
    
    // Add user message
    const newUserMessage = { id: Date.now(), type: 'user', text };
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Prepare bot response based on user query
    setTimeout(() => {
      setIsTyping(false);
      
      let botResponse;
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes('process') || lowerText.includes('work') || lowerText.includes('how')) {
        botResponse = {
          id: Date.now() + 1,
          type: 'bot',
          text: "Our process is simple! 1) Upload your license details, 2) Receive a valuation within 24 hours, 3) Accept our offer and get paid within 3-5 business days. Would you like to know more about a specific step?",
          options: ["License eligibility", "Valuation process", "Payment methods", "Start the process"]
        };
      } 
      else if (lowerText.includes('license') || lowerText.includes('accept') || lowerText.includes('eligible')) {
        botResponse = {
          id: Date.now() + 1,
          type: 'bot',
          text: "We accept most major software licenses including Microsoft, Adobe, Autodesk, Oracle, SAP, VMware, and many others. The licenses must be transferable according to the vendor's terms. Would you like to check if your specific license is eligible?",
          options: ["Check my license", "Get a quote", "License transfer process"]
        };
      }
      else if (lowerText.includes('worth') || lowerText.includes('value') || lowerText.includes('price')) {
        botResponse = {
          id: Date.now() + 1,
          type: 'bot',
          text: "License values vary based on several factors: software type, version, remaining term, and current market demand. For example, enterprise Microsoft licenses typically recover 30-60% of original value. Adobe Creative Cloud licenses can fetch 40-70% of retail. Would you like a free valuation?",
          options: ["Get a free valuation", "Value factors", "Speak to a specialist"]
        };
      }
      else if (lowerText.includes('fee') || lowerText.includes('cost') || lowerText.includes('charge')) {
        botResponse = {
          id: Date.now() + 1,
          type: 'bot',
          text: "We operate on a simple commission model - we only make money when you do. Our standard commission is 15% of the final sale price, with no upfront fees or hidden charges. For high-value enterprise packages, we offer volume discounts.",
          options: ["Fee structure details", "Commission calculator", "Speak with sales team"]
        };
      }
      else {
        botResponse = {
          id: Date.now() + 1,
          type: 'bot',
          text: "Thank you for your question. To provide you with the most accurate information, one of our license specialists would be happy to assist. Would you like to speak with a specialist or get more information about our services?",
          options: ["Speak to a specialist", "Learn more about SoftSell", "Contact sales team"]
        };
      }
      
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const handleOptionClick = (option) => {
    handleSendMessage(option);
  };
  
  return (
    <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col max-h-[500px] border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="bg-blue-600 dark:bg-blue-700 p-4 text-white flex justify-between items-center">
        <div className="flex items-center">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="mr-2"
          >
            <path 
              d="M16 8V5C16 4.44772 15.5523 4 15 4H5C4.44772 4 4 4.44772 4 5V15C4 15.5523 4.44772 16 5 16H8M19 20H9C8.44772 20 8 19.5523 8 19V9C8 8.44772 8.44772 8 9 8H19C19.5523 8 20 8.44772 20 9V19C20 19.5523 19.5523 20 19 20Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-medium">SoftSell Assistant</span>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Close chat"
        >
          <X size={18} />
        </button>
      </div>
      
      {/* Messages area */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <div className="space-y-4">
          {messages.map(message => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`
                max-w-[80%] rounded-lg p-3 
                ${message.type === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-700 rounded-tl-none'
                }
              `}>
                <div className="flex items-start">
                  {message.type === 'bot' && (
                    <div className="mr-2 bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full">
                      <Bot size={14} className="text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                  <div>
                    <p className={message.type === 'user' ? 'text-white' : 'text-gray-700 dark:text-gray-300'}>
                      {message.text}
                    </p>
                  </div>
                  {message.type === 'user' && (
                    <div className="ml-2 bg-blue-500 p-1 rounded-full">
                      <User size={14} className="text-white" />
                    </div>
                  )}
                </div>
                
                {message.options && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg p-3 rounded-tl-none shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Input area */}
      <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <button
            onClick={() => handleSendMessage()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
            disabled={!inputValue.trim()}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatWidget;