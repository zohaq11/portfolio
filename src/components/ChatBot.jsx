import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import zohaInfo from '../zohaInfo.json';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! 👋 I'm ZohaBot — ask me anything about Zoha!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://zoha-chatbot-server.vercel.app/api/chat',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { 
              role: 'system', 
              content: `You are Zoha’s personal assistant chatbot. Keep responses concise and friendly. Use the following info: ${JSON.stringify(zohaInfo)} ONLY Answer questions about Zoha. If asked unrelated questions, politely decline.` 
            },
            { role: 'user', content: input }
          ],
          max_tokens: 500, // Limit response length to control costs
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      const botReply = response.data.choices[0].message.content;
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    } catch (error) {
      console.error('API Error:', error);
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: "Sorry, I couldn’t process that. Please try again!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        className="fixed bottom-6 right-6 bg-pink-500 text-white rounded-full p-4 shadow-lg hover:bg-pink-600 transition-colors"
        onClick={handleToggle}
        aria-label="Toggle chat"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-[400px] bg-white rounded-lg shadow-lg flex flex-col border border-gray-200">
          {/* Header */}
          <div className="p-4 border-b bg-pink-500 text-white font-bold flex justify-between items-center">
            <span>ZohaBot 🤖</span>
            <button 
              onClick={handleToggle}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg max-w-[80%] ${
                  msg.sender === 'bot' 
                    ? 'bg-pink-100 text-black self-start' 
                    : 'bg-pink-500 text-white self-end'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="p-3 rounded-lg bg-pink-100 text-black self-start">
                Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t flex items-center">
            <input
              type="text"
              className="flex-1 border rounded-lg p-2 mr-2 text-black focus:outline-none focus:ring-1 focus:ring-pink-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              disabled={isLoading}
            />
            <button
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 disabled:opacity-50"
              onClick={handleSend}
              disabled={isLoading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;

