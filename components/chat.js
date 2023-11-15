'use client';
import autosize from 'autosize';
import React, { useEffect, useRef, useMemo } from 'react';
import { useChat } from 'ai/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { UserIcon, SparklesIcon, PaperAirplaneIcon, TrashIcon, ArrowPathIcon, EllipsisHorizontalIcon, StopIcon } from '@heroicons/react/24/outline';
import { EmptyScreen } from './empty-screen';
export default function Chat() {
  const { messages, input, isLoading, setMessages, handleInputChange, handleSubmit, error, stop, setInput, reload, append } = useChat({
    api: '/api/chat',
  });
  const textareaRef = useRef(null);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, []);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (input.trim() && !isLoading) {
        handleSubmit(event);
      }
    }
  };
  const renderedMessages = useMemo(() => (
    messages.filter(m => m.role !== "system").map((m) => (
      <div key={m.id} className="my-2 flex items-start space-x-3 border-b border-gray-300 pb-8">
        <div className="flex-shrink-0">
          {(m.role === "user") ? <UserIcon className="text-emerald bg-indigo-950 rounded-md p-1 h-7 w-7 mt-1" /> : <SparklesIcon className='text-fuchsia-400 border border-emerald-500 rounded-md p-1 h-7 w-7 mt-1' />}
        </div>
        <article className="prose prose-emerald flex-1">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" />
            }}
          >
            {m.content}
          </ReactMarkdown>
        </article>
      </div>
    ))
  ), [messages]);
  const clearMessages = () => {
    setMessages([]);
    // append({'role': 'system', 'content': 'continue'}) 
  };
  return (
    <div className="mx-auto max-w-3xl sm:px-6 lg:px-8 bg-indigo-950 bg-opacity-75 text-emerald-300">
      <div className="flex flex-col-reverse min-h-[80vh]">
        {/* Chat input form */}
        <div className="flex flex-col p-2">
          {(messages.length > 0) && (
          isLoading ?
            <button
            onClick={stop}
            className="self-end text-sm mb-2 p-2 border border-gray-200 text-gray-200 rounded-md flex"
            aria-label="Stop generating"
          >
            <StopIcon className="h-4 w-4 m-auto" />
            Stop generating
          </button>
          : <div className="flex space-x-2 justify-end">
              <button
                onClick={clearMessages}
                className="self-end text-sm mb-2 p-2 border border-gray-200 text-gray-200 rounded-md flex"
                aria-label="Clear messages"
              >
                <TrashIcon className="h-4 w-4 m-auto" />
                Clear Chat
              </button>
              <button
                onClick={reload}
                className="self-end text-sm mb-2 p-2 border border-gray-200 text-gray-200 rounded-md flex"
                aria-label="Reload"
              >
                <ArrowPathIcon className="h-4 w-4 m-auto"/>
                Regenerate
              </button>
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex gap-3">
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                id="prompt-textarea"
                rows="2"
                placeholder="Skriv ett meddelande"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="w-full resize-none border border-gray-400 p-2 shadow-lg rounded-md text-black"
                aria-label="Chat message input"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className={`absolute bottom-3 right-2 p-1 rounded-md ${!input.trim() ? 'text-gray-300 bg-white' : 'bg-indigo-500 text-white'}`}
                aria-label="Skicka meddelande"
              >
                {isLoading ? <EllipsisHorizontalIcon className="h-5 w-5 animate-pulse"/> : <PaperAirplaneIcon className="h-5 w-5" />}
              </button>
            </div>
          </form>
          <p className="text-xs italic m-auto text-gray-500">Chatbotten kan begå misstag. Dubbelkolla gärna viktig information.</p>
        </div>
        {/* Messages display section */}
        <div className="flex-1 overflow-y-auto p-2">
          {renderedMessages}
          <div ref={messagesEndRef} />
          {messages.length > 0 && messages[messages.length - 1].role === 'user' && (
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0">
                <SparklesIcon className='rounded-md p-1 h-7 w-7 mt-1 text-fuchsia-400' />
              </div>
              <div className="h-4 w-4 bg-gray-300 rounded-full animate-pulse mt-3"></div>
            </div>
          )}
        </div>
        {(error) && <div className="mx-auto">
          <p>Ooops something went wrong...</p>
          <button
              onClick={reload}
              className="self-end text-sm mb-2 p-2 border border-gray-400 text-gray-400 rounded-md flex"
              aria-label="Reload"
            >
              <ArrowPathIcon className="h-4 w-4 m-auto"/>
              Regenerate
            </button>
          </div>}
        {(messages.length == 0) && <EmptyScreen setInput={setInput} />}
      </div>
    </div>
  );
}