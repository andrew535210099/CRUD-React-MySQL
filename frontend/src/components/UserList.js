import React, { useState, useEffect } from "react";
// Berinteraksi dengan API
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  // Membuat state baru
  const [users, setUser] = useState([]);

  // Use effect hook
  useEffect(() => {
    getUsers();
  }, []);
  // empty array
  // Use effect ini running disaat mount ke dock

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/users");
      setUser(response.data);
      // Di sini, setUsers(response.data) bisa ditempatkan jika Anda ingin memperbarui state dengan data dari API.
    } catch (error) {
      console.error("Error fetching data:", error);
      // Lakukan penanganan kesalahan sesuai kebutuhan, misalnya menampilkan pesan kesalahan kepada pengguna.
    }
  };

  const deleteUser = async (id) => {
    try {
      console.log("Deleting user with ID:", id);
      await axios.delete(`http://localhost:4000/users/${id}`);
      console.log("User deleted successfully");
      getUsers();
    } catch (error) {
      console.log("Error deleting user");
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) &&
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    <Link
                      to={`edit/${user.id}`}
                      className="button is-small is-info"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="button is-small is-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
