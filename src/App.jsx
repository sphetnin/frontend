import React, { useState, useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_LINK + "/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
        console.log(result);
      });
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} {user.name} {user.age} {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
