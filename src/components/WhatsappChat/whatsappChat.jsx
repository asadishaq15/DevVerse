import React from 'react';

const WhatsAppChat = ({ phoneNumber, message }) => {
  // Construct the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">

    </a>
  );
};

export default WhatsAppChat;
