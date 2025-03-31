import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getConversation } from "../api";
import Message from "./Message";
import './styles.css'

const Chat = () => {
  const { senderId, recieverId, recieverName } = useParams();
  const [chat, setChat] = useState();

  useEffect(() => {
    const fetchConversation = async () => {
      setChat(await getConversation(senderId, recieverId));
    };

    fetchConversation();
  }, [recieverId, senderId]);

  return (
    <>
    {chat && chat.length > 0 ? (
      chat.map((message) => (
        <Message key={message.id} message={message} recieverName={recieverName}/>
      ))
    ) : (
      <p className="default-message">No messages yet. Start a conversation!</p>
    )}
    <button className="return-btn">
      <Link to="/">Back to Dashboard</Link>
    </button>
  </>
  );
};

export default Chat;
