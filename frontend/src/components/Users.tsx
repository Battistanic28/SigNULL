import { useState, useEffect } from "react"
import { fetchUsers } from "../api"
import { useAuth } from "../hooks/useAuth";

const Users = ({ setChatMembers }) => {
    const { currUser } = useAuth()
    const [ users, setUsers ] = useState([]);
    
    useEffect(() => {
        const getUsers = async () => {
            setUsers(await fetchUsers())
        }
        
        getUsers()        
    }, [])
    
    return (
        <div className="users-container">
            <ul>
                {users.map(user => {
                    if (user.id !== currUser.id) {
                        const participantIds = [currUser, user]
                        return (
                            <li className="users-item" key={user.id}>
                                <button
                                    className="users-btn"
                                    onClick={() => setChatMembers(participantIds)}
                                >
                                    {`${user.firstName} ${user.lastName}`}
                                </button>
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}

export default Users