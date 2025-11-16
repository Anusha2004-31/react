
import { CrudOperations } from "./CrudOperations";

export const UserList = () => {
    return (
        <div className="container bg-light mt-5 p-4 rounded">
            <h2 className="text-center mb-3">User List</h2>
            <CrudOperations />
        </div>
    );
};
