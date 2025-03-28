import { useState } from "react";
import { sendMessage } from "../api";
import { User } from "../types/global";

const NewMessageInput = ({ chatMembers }: { chatMembers: User[] }) => {
  const sender = chatMembers[0];
  const recipient = chatMembers[1];

  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      sendMessage(sender.id, { recieverId: recipient.id, content: message });
      setMessage("");
    }
  };

  return (
    <div className="message-input-container">
      <input
        type="text"
        className="message-input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button className="send-btn" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default NewMessageInput;
