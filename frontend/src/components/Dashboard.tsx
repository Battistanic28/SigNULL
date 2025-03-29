import Users from "./Users";
import "./styles.css";
import { User } from "../types/global";
import NewMessage from "./NewMessage";

const Dashboard = ({users}: {users:User[]}) => {

  return (
    <>
      <div className="dash-container">
        <Users users={users} />
        <NewMessage users={users}/>
      </div>
    </>
  );
};

export default Dashboard;
