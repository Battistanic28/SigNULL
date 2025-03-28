import { useAuth } from "../hooks/useAuth";
import './styles.css'

const Message = ({ message, chatMembers }) => {
    const me = chatMembers[0]
    const you = chatMembers[1]

    const { content, senderId, recieverId, createdAt } = message;
    const isCurrentUser = senderId == me.id
    const messageOwnerName = isCurrentUser ? 'Me:' : `${you.firstName}:`


    return (
        <div className={`chat-bubble ${isCurrentUser ? "sent" : "received"}`}>
            <p className="chat-bubble-name">{messageOwnerName}</p>
            <p>{content}</p>
            <p></p>
        </div>
    )
}

export default Message