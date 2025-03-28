import Chat from "./Chat"
import Users from "./Users"
import './styles.css'
import { useState } from "react"

const Dashboard = () => {
    const [ chatMembers, setChatMembers] = useState([])

    return (
        <>
        <div className="dash-container">
            <Users setChatMembers={setChatMembers}/>
            <Chat chatMembers={chatMembers}/>
        </div>
        </>
    )
}

export default Dashboard