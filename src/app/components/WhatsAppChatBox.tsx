"use client";
import React, { useState } from "react";
import { FaSmile } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import Image from "next/image";
import styles from "./../../../styles/WhatsAppButton.module.css";

interface WhatsAppChatBoxProps {
  toggleChatBox: () => void;
}

const WhatsAppChatBox: React.FC<WhatsAppChatBoxProps> = ({ toggleChatBox }) => {
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/03464365890?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className={`${styles.chatBox} `}>
      <div className={styles.header}>
        <div className={styles.profilePicture}>
          {/* Add your profile picture here */}
        </div>
        <div className={styles.body}>
          <h1 className="text-3xl font-base mb-2">Hi there 👋</h1>
          <p className="text-sm">Welcome to Social Chat and Share. Ask us anything 🎉</p>

          <div className="divider my-2"></div>
          <p className="text-xs">We typically reply within a few minutes</p>
        </div>

        <button
          className={`${styles.closeButton} absolute top-3 right-3`}
          onClick={toggleChatBox}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="pb-10">
        <div className="flex gap-2 m-5 mt-6 mb-20">
          <div>
            <Image
              src="/images/shafiq.jpeg"
              alt="Support Team"
              className="rounded-full"
              width={40}
              height={40}
            />
          </div>
          <div className="w-[80%] rounded-xl bg-gray-100 p-1 font-base text-xs flex items-center justify-center text-center">
            <p className="text-xs font-base">Hello! I&apos;m from Robiz Support team.</p>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.footer}>
        <input
          type="text"
          placeholder="Send a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.messageInput}
        />
        <FaSmile className={styles.emojiIcon} />
        <button className={styles.sendButton} onClick={handleSendMessage}>
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppChatBox;
