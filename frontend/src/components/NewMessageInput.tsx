import { useState } from "react";

const NewMessageInput = ({ onSendMessage }: { onSendMessage: (message: string) => void }) => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (message.trim() !== "") {
            onSendMessage(message); // Send message to parent
            setMessage(""); // Clear input
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

export default NewMessageInput