"use client";

import { useVoice } from "@humeai/voice-react";
import React from "react";

const CreateReport = () => {
  const { messages } = useVoice();

  return (
    <div className="p-4">
      {messages.length > 0 ? (
        <div className="space-y-4">
          {messages.map((msg, index) => {
            // Check if the message has a 'message' property and if it's an object
            if (
              "message" in msg &&
              typeof msg.message !== "string" &&
              msg.message
            ) {
              return (
                <div
                  key={`${msg.type}-${index}`}
                  className={`p-4 rounded border ${
                    msg.type === "user_message"
                      ? "bg-rose-100 border-rose-200"
                      : "bg-teal-100 border-teal-200"
                  }`}
                >
                  <div className="text-sm text-gray-500 capitalize font-medium">
                    {msg.message.role}
                  </div>
                  <div className="text-base text-black mt-2">
                    {msg.message.content}
                  </div>
                </div>
              );
            }
            return null; // Skip messages that don't meet the criteria
          })}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No messages to display.</p>
      )}
    </div>
  );
};

export default CreateReport;
