import { useState, useEffect } from "react";
import { getConversation } from "../api";
import Message from "./Message";

const Chat = ({ chatMembers }) => {
  const [activeChat, setActiveChat] = useState();
  useEffect(() => {
    const sender = chatMembers[0];
    const reciever = chatMembers[1];
    const fetchConversation = async () => {
      const chat = await getConversation(sender.id, reciever.id);
      setActiveChat(chat);
    };
    fetchConversation();
  }, [chatMembers]);

  return (
    <div className="chat-container">
        {activeChat && activeChat.length !== 0 ? (
          activeChat.map((message) => (
              <Message message={message} chatMembers={chatMembers} />
          ))
        ) : (
          <p className="chat-empty">This is the beginning of your conversation! 🐣</p>
        )}
    </div>
  );
};

export default Chat;
