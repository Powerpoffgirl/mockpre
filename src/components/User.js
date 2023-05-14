import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };
    loadUsers();
  }, []);

  console.log(users);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
