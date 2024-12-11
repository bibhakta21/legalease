import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message to chat
    const newMessage = { sender: "user", text: inputValue };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Simulate ChatGPT response
    const chatGPTResponse = { sender: "bot", text: "This feature is in development." };
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
    }, 500); // Delay for ChatGPT response simulation

    // Clear the input field
    setInputValue("");
  };

  return (
    <div className="flex min-h-screen bg-[#f7f7f7] p-6">
      {/* Sidebar */}
      <div className="bg-[#ffffff] w-2/12 flex flex-col justify-between rounded-lg shadow-lg py-4 px-2">
        {/* Top Section */}
        <div>
          <button className="w-full py-2 px-4 border-[#e5e5e5] border rounded-md flex justify-start items-center hover:bg-[#f0f0f0]">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-primary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span className="text-gray-800 ml-2">New Chat</span>
          </button>
        </div>

        {/* Bottom Section */}
        <div className="mt-4">
          <button className="w-full py-2 px-4 border-[#e5e5e5] border rounded-md flex justify-start items-center hover:bg-[#f0f0f0]">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 12H3m12 0l-3-3m3 3l-3 3m6 6a9 9 0 1 0-9-9" />
            </svg>
            <span className="text-gray-800 ml-2">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-10/12 flex flex-col ml-6 bg-[#ffffff] rounded-lg shadow-lg">
        {/* Chat History */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`${
                  message.sender === "user" ? "bg-blue-500" : "bg-gray-300"
                } text-white p-4 rounded-lg max-w-xs`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="input w-full text-center my-8 flex items-center justify-center flex-col px-6">
          <div className="buttonsvg pl-16 w-full max-w-2xl flex">
            <input
              className="w-full p-4 bg-gray-100 rounded-md focus:outline-none border border-gray-300"
              placeholder="Send a Message"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              id="sendButton"
              className="relative -left-10 pl-10"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
