"use client"
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import WhatsAppChatBox from './WhatsAppChatBox';
import styles from '../../../styles/WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const [isChatBoxVisible, setChatBoxVisible] = useState(false);
  const [isLogoVisible, setLogoVisible] = useState(true);

  const toggleChatBox = () => {
    setChatBoxVisible(!isChatBoxVisible);
    setLogoVisible(isChatBoxVisible);
  };

  return (
    <div className={styles.whatsAppContainer}>
      {isLogoVisible && (
        <div className={`${styles.whatsAppButton} ${styles.logoAnimation}`} onClick={toggleChatBox}>
          <FaWhatsapp />
        </div>
      )}
      {isChatBoxVisible && <WhatsAppChatBox toggleChatBox={toggleChatBox} />}
    </div>
  );
};

export default WhatsAppButton;
