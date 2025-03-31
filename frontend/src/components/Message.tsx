import { useAuth } from '../hooks/useAuth'
import './styles.css'

const Message = ({ message, recieverName }) => {
    const { currUser } = useAuth()
    const isCurrentUserMessage = currUser.id === message.senderId;
    const messageOwnerName = isCurrentUserMessage ? "Me:" : `${recieverName}:`

    return (
        <div className={`chat-bubble ${isCurrentUserMessage ? "sent" : "received"}`}>
            <p className="chat-bubble-meta">{messageOwnerName}</p>
            <p>{message.content}</p>
            <p className="chat-bubble-meta">Sent at: {message.createdAt}</p>
        </div>
    )
}

export default Message