import React from 'react';
import styled from '@emotion/styled';
import { FaWhatsapp } from 'react-icons/fa';

const ChatIcon = () => {
  const message = encodeURIComponent("Welcome to DevVerse!");
  const handleChat = () => {
    window.open(`https://wa.me/+923168704514?text=${message}`, '_blank');
  };

  return (
    <Wrapper onClick={handleChat}>
      <FaWhatsapp />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 45px;
  right: 47px;
  background-color: #25d366; /* WhatsApp green color */
  color: #fff;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  cursor: pointer;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
  z-index: 999;

  &:hover {
    background-color: #128c7e; /* Darker shade of WhatsApp green */
  }

  
`;

export default ChatIcon;
