import { useAuth } from "../hooks/useAuth"

const Dashboard = () => {
    // const { currUser } = useAuth();
    // const { firstName, lastName } = currUser;
    return (
        <>
        <h1>Dashboard</h1>
        {/* <p>{`${firstName} ${lastName}`}</p> */}
        <button>New Conversation</button>
        </>
    )
}

export default Dashboard