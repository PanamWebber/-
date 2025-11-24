import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Sparkles, X, Loader2 } from 'lucide-react';
import { generateCuratorResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AICurator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: '您好，我是本次展览的AI策展人“艺境AI”。您可以问我关于泉州西湖、晋江紫帽山、莆田工艺美术城或囊山寺的文化特色，以及它们如何启发设计灵感。',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await generateCuratorResponse(inputValue);
      const aiMsg: ChatMessage = { role: 'model', text: responseText };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'model', text: '连接超时，请稍后再试。', isError: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 p-4 bg-orange-500 text-white rounded-full shadow-2xl hover:bg-orange-600 transition-all duration-300 ${
          isOpen ? 'hidden' : 'flex'
        } items-center gap-2 group`}
      >
        <Sparkles className="w-6 h-6 animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
          AI 策展人
        </span>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-0 right-0 sm:bottom-8 sm:right-8 z-50 w-full sm:w-96 bg-stone-50 sm:rounded-2xl shadow-2xl border border-stone-200 transition-transform duration-300 transform ${
          isOpen ? 'translate-y-0 scale-100' : 'translate-y-20 scale-90 opacity-0 pointer-events-none'
        } flex flex-col max-h-[80vh] h-[600px]`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-stone-900 text-white sm:rounded-t-2xl">
          <div className="flex items-center gap-2">
             <div className="bg-orange-500 p-1 rounded-md">
                <Sparkles className="w-4 h-4" />
             </div>
             <div>
               <h3 className="font-bold text-sm">艺境 AI 策展人</h3>
               <p className="text-xs text-stone-400">Powered by Gemini</p>
             </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-orange-500 text-white rounded-br-none'
                    : 'bg-white text-stone-800 border border-stone-100 rounded-bl-none'
                } ${msg.isError ? 'bg-red-50 text-red-500 border-red-200' : ''}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-lg rounded-bl-none border border-stone-100 shadow-sm">
                <Loader2 className="w-5 h-5 animate-spin text-orange-500" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-stone-200 sm:rounded-b-2xl">
          <div className="flex gap-2 items-end">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="询问关于紫帽山或囊山寺的设计元素..."
              className="flex-1 resize-none p-2 bg-stone-100 border-none rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm max-h-20 text-stone-800"
              rows={1}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="p-2 bg-stone-900 text-white rounded-lg hover:bg-stone-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICurator;
