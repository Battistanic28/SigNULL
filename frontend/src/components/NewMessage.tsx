import { UserType } from "../types/global";
import { sendMessage } from "../api";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import './styles.css'

const NewMessage = ({ users }: { users: UserType[] }) => {
    const { currUser } = useAuth()
    const [recipient, setRecipient] = useState(users.length > 0 ? users[0].id : "");
    const [message, setMessage] = useState("")

    const handleSend = async () => {
        if (!message.trim()) {
          alert("Please  enter a message.");
          return;
        }
    
        try {
          await sendMessage(currUser.id, { recieverId: recipient, content: message });
          setMessage("");
          alert("Message sent successfully!");
        } catch (error) {
          console.error("Error sending message:", error);
          alert("Failed to send message.");
        }
      };

  return (
      <div className="new-message-container">
        <h1>New Message</h1>
        <label htmlFor="cars">Choose a recipient:</label>

        <select
            name="users"
            id="users"
            value={recipient} 
            onChange={(e) => setRecipient(e.target.value)}
        >
          {users.map((user) => {
            const { firstName, lastName, email, id } = user;
            return (
              <option
                key={id}
                value={user.id}
                disabled={user.id === currUser.id}
              >{`${firstName} ${lastName} - ${email}`}</option>
            );
          })}
        </select>
        <textarea
            placeholder="Type a message..."
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
        />
        <button className="send-btn" onClick={handleSend}>Send</button>
      </div>
  );
};

export default NewMessage;
