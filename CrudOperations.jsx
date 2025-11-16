
import { useEffect, useState } from "react";
import axios from "axios";

export const CrudOperations = () => {
    let [users, setUsers] = useState([]);
    let [search, setSearch] = useState("");
    let [editUser, setEditUser] = useState(null);
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");

    useEffect(() => {
        async function userApi() {
            let { data } = await axios.get("https://dummyjson.com/users");
            setUsers(data.users);
        }
        userApi();
    }, []);
    const filteredUsers = users.filter((u) =>
        u.firstName.toLowerCase().includes(search.toLowerCase()) ||
        u.lastName.toLowerCase().includes(search.toLowerCase()) ||
        u.gender.toLowerCase().includes(search.toLowerCase())
    );
    const deleteUser = (id) => {
        setUsers(users.filter((u) => u.id !== id));
    };
    const handleEdit = (user) => {
        setEditUser(user);
        setFirstName(user.firstName);
        setLastName(user.lastName);
    };
    const saveUpdate = () => {
        setUsers(
            users.map((u) =>
                u.id === editUser.id
                    ? { ...u, firstName, lastName }
                    : u
            )
        );
        setEditUser(null);
    };

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-10 mx-auto">

                    { }
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form-control mb-3"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <table className="table table-light hover table-striped">
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Gender</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredUsers.map((person, index) => (
                                <tr key={person.id}>
                                    <td>{index + 1}</td>
                                    <td>{person.firstName}</td>
                                    <td>{person.lastName}</td>
                                    <td>{person.gender}</td>
                                    <td>
                                        <button
                                            className="btn btn-warning"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#editCanvas"
                                            onClick={() => handleEdit(person)}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteUser(person.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="editCanvas"
                    >
                        <div className="offcanvas-header">
                            <h5>Edit User</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                            ></button>
                        </div>

                        <div className="offcanvas-body">

                            <label>First Name</label>
                            <input
                                className="form-control mb-2"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />

                            <label>Last Name</label>
                            <input
                                className="form-control mb-3"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />

                            <button
                                className="btn btn-primary w-100"
                                data-bs-dismiss="offcanvas"
                                onClick={saveUpdate}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
