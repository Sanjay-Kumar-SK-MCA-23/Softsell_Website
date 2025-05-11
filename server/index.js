// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.static(join(__dirname, '../dist')));

// // Mock database for leads
// const leads = [];

// // Routes
// app.post('/api/contact', (req, res) => {
//   try {
//     const lead = {
//       id: Date.now(),
//       ...req.body,
//       createdAt: new Date()
//     };
//     leads.push(lead);
//     res.status(201).json({ message: 'Lead created successfully', lead });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating lead', error: error.message });
//   }
// });

// // Mock chat responses
// const chatResponses = {
//   process: "Our process is simple! 1) Upload your license details, 2) Receive a valuation within 24 hours, 3) Accept our offer and get paid within 3-5 business days.",
//   licenses: "We accept most major software licenses including Microsoft, Adobe, Autodesk, Oracle, SAP, VMware, and many others.",
//   value: "License values vary based on several factors: software type, version, remaining term, and current market demand.",
//   fees: "We operate on a simple commission model - we only make money when you do. Our standard commission is 15% of the final sale price."
// };

// app.post('/api/chat', (req, res) => {
//   try {
//     const { message } = req.body;
//     const lowerMessage = message.toLowerCase();
    
//     let response = "Thank you for your message. How else can I help you today?";
    
//     if (lowerMessage.includes('process') || lowerMessage.includes('how')) {
//       response = chatResponses.process;
//     } else if (lowerMessage.includes('license') || lowerMessage.includes('accept')) {
//       response = chatResponses.licenses;
//     } else if (lowerMessage.includes('value') || lowerMessage.includes('worth')) {
//       response = chatResponses.value;
//     } else if (lowerMessage.includes('fee') || lowerMessage.includes('cost')) {
//       response = chatResponses.fees;
//     }
    
//     res.json({ message: response });
//   } catch (error) {
//     res.status(500).json({ message: 'Error processing chat', error: error.message });
//   }
// });

// // Catch-all route for SPA
// app.get('*', (req, res) => {
//   res.sendFile(join(__dirname, '../dist/index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
dotenv.config();

// Handle path utilities for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, '../dist')));

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
  console.error('❌ MONGODB_URI not found in .env');
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// Mongoose schema and model
const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Lead = mongoose.model('Lead', leadSchema);

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json({ message: 'Lead saved', lead });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save lead', error: error.message });
  }
});

const chatResponses = {
  process: "Our process is simple! 1) Upload your license details, 2) Receive a valuation within 24 hours, 3) Accept our offer and get paid within 3-5 business days.",
  licenses: "We accept most major software licenses including Microsoft, Adobe, Autodesk, Oracle, SAP, VMware, and many others.",
  value: "License values vary based on several factors: software type, version, remaining term, and current market demand.",
  fees: "We operate on a simple commission model - we only make money when you do. Our standard commission is 15% of the final sale price."
};

app.post('/api/chat', (req, res) => {
  try {
    const { message } = req.body;
    const lowerMessage = message?.toLowerCase() || '';
    let response = "Thank you for your message. How else can I help you today?";

    if (lowerMessage.includes('process') || lowerMessage.includes('how')) {
      response = chatResponses.process;
    } else if (lowerMessage.includes('license') || lowerMessage.includes('accept')) {
      response = chatResponses.licenses;
    } else if (lowerMessage.includes('value') || lowerMessage.includes('worth')) {
      response = chatResponses.value;
    } else if (lowerMessage.includes('fee') || lowerMessage.includes('cost')) {
      response = chatResponses.fees;
    }

    res.json({ message: response });
  } catch (error) {
    res.status(500).json({ message: 'Error processing chat', error: error.message });
  }
});

// Fallback to frontend SPA
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
