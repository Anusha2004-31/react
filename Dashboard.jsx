import { UserList } from "../Features/CRUD/UserList";

const Dashboard = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Dashboard</h1>
            <UserList />
        </div>
    );
};

export default Dashboard;
