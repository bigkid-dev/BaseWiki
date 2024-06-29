// import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy } from "react-icons/fa6";
import { copyToClipboard } from "../utils";
import { useState } from "react";

const MarkdownComponent = ({ content }) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <ReactMarkdown
      //   children={content}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <>
              <div
                style={{ top: 10, position: "relative" }}
                className="bg-gray-800 h-10 p-3 flex flex-row justify-end"
              >
                <p
                  onClick={() => {
                    setIsCopied(!isCopied);
                    copyToClipboard(String(children).replace(/\n$/, ""));
                  }}
                  className="p-0 hover:underline"
                  style={{ color: "#fff" }}
                >
                  {isCopied ? "copied" : <FaRegCopy />}
                </p>
              </div>
              <SyntaxHighlighter
                //   children={String(children).replace(/\n$/, "")}
                style={tomorrow}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            </>
          ) : (
            <>
              <code className={className} {...props}>
                {children}
              </code>
            </>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownComponent;
