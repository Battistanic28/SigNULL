import Users from "./Users";
import "./styles.css";
import { UserType } from "../types/global";
import NewMessage from "./NewMessage";

const Dashboard = ({users}: {users:UserType[]}) => {

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
