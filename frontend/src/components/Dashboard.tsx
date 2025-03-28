import Chat from "./Chat";
import NewMessageInput from "./NewMessageInput";
import Users from "./Users";
import "./styles.css";
import { useState } from "react";
import { User } from "../types/global";

const Dashboard = () => {
  const [chatMembers, setChatMembers] = useState<User[]>([]);
  /**
   * BUGS:
   *
   * - Redirect from / to /login if no active user.
   * - Somewhere currUser and user are getting mixed up confusing the sender and reciever.
   * - Upon registration of new user, logged in user shows in users list.
   * - New message should display in chat without needing to refresh page (perhaps store chats in state?).
   */

  return (
    <>
      <div className="dash-container">
        <Users setChatMembers={setChatMembers} />
        <Chat chatMembers={chatMembers} />
        <NewMessageInput chatMembers={chatMembers} />
      </div>
    </>
  );
};

export default Dashboard;
