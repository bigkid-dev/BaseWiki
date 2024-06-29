import { useState } from "react";
import axios from "axios";
import { productionUrl } from "../utils/index";
import MarkdownComponent from "../components/MarkdownComp";
import { useSelector } from "react-redux";
import { getInfoFromLocalStorage } from "../utils";

const ChatApp = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const messageHistory = useSelector((state) => state.historyState.userHistory);
  console.log("messageHistory", messageHistory);

  console.log(messages.length);
  console.log("getInfoFromLocalStorage", getInfoFromLocalStorage());
  const [body, setBody] = useState({
    data: {
      sessionId: getInfoFromLocalStorage(),
      question: input,
    },
  });
  const updateBody = (text) => {
    const dict = { question: text };
    setBody((prevValues) => ({
      data: {
        ...prevValues.data,
        ...dict,
      },
    }));
  };

  const handleSend = async () => {
    setInput("");
    try {
      setIsActive(true);
      setIsLoading(true);
      if (input.trim()) {
        setMessages([...messages, { text: input, sender: "user" }]);
        // setInput("");
        console.log(body);
        const response = await axios.post(productionUrl, body);
        console.log(response);
        if (response.status === 200) {
          const result = response.data.result;
          setMessages((prevMessages) => [...prevMessages, { text: result }]);
        }
      }
    } finally {
      setInput("");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 rounded-xl">
      {messages.length > 1 || isActive ? (
        <div className="flex flex-col flex-grow p-4 overflow-auto">
          <>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                {message.sender === "user" ? (
                  <div className="bg-blue-500 text-white p-4 rounded-lg max-w-xs md:max-w-md lg:max-w-lg">
                    {message.text}
                  </div>
                ) : (
                  <div className="bg-gray-300 text-gray-800 p-4 rounded-lg max-w-xs md:max-w-md lg:max-w-lg">
                    <MarkdownComponent content={message.text} />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-300 text-gray-800 p-4 rounded-lg max-w-xs md:max-w-md lg:max-w-lg">
                  <div className="h-20 flex items-center justify-center">
                    <span className="loading loading-ring loading-lg"></span>
                  </div>
                </div>
              </div>
            )}
          </>
        </div>
      ) : (
        <>
          {messageHistory.length > 1 ? (
            <>
              <div className="flex flex-col flex-grow p-4 overflow-auto">
                {messageHistory.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    } mb-4`}
                  >
                    {message.role === "user" ? (
                      <div className="bg-blue-500 text-white p-4 rounded-lg max-w-xs md:max-w-md lg:max-w-lg">
                        {message.content[0].text}
                      </div>
                    ) : (
                      <div className="bg-gray-300 text-gray-800 p-4 rounded-lg max-w-xs md:max-w-md lg:max-w-lg">
                        <MarkdownComponent content={message.content[0].text} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h1
                style={{
                  color: "rgb(44,45,56)",
                  position: "relative",
                  top: 50,
                }}
                className="text-center max-w-2xl text-2xl font-bold tracking-tight sm:text-4xl special-elite-regular self-center p-4"
              >
                Hello! How can I help today?
              </h1>
              <div className="flex flex-col sm:flex-row flex-grow p-4 justify-center sm:justify-around items-center space-y-4 sm:space-y-0">
                <button
                  onClick={() => {
                    setInput("What is Base Ecosystem");
                    updateBody("What is Base Ecosystem");
                  }}
                  className="btn btn-blue shadow hover:text-white hover:bg-gray-600 active:bg-gray-700 bg-gray-300 border-gray-300 text-gray-800 p-4 rounded-lg w-full sm:w-auto h-16"
                >
                  What is Base Ecosystem
                </button>
                <button
                  onClick={() => {
                    setInput("How does base support");
                    updateBody("How does base support");
                  }}
                  className="btn btn-blue shadow hover:text-white hover:bg-gray-600 active:bg-gray-700 bg-gray-300 border-gray-300 text-gray-800 p-4 rounded-lg w-full sm:w-auto h-16"
                >
                  How does base support
                </button>
                <button
                  onClick={() => {
                    setInput("Security and Scalability in base");
                    updateBody("Security and Scalability in base");
                  }}
                  className="btn btn-blue shadow hover:text-white hover:bg-gray-600 active:bg-gray-700 bg-gray-300 border-gray-300 text-gray-800 p-4 rounded-lg w-full sm:w-auto h-16"
                >
                  Security and Scalability in base
                </button>
              </div>
            </>
          )}
        </>
      )}
      <div className="flex p-4 bg-white border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            updateBody(e.target.value);
          }}
          className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask a question..."
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
