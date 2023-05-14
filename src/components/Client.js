import React, { useEffect, useState } from "react";

const Client = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch("http://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => console.log(data));
      setUsers(response.data);
    };
    loadUsers();
  }, []);

  console.log(users);
  return (
    <div>
      {" "}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Client;
