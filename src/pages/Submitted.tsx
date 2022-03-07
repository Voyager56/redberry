import "./Submitted.css";
import { useState, useEffect } from "react";
import Card from "../user-cards/Card";

const fetchUsers = async () => {
  const res =
    await fetch(`https://bootcamp-2022.devtest.ge/api/applications?token=32401a85-2695-4abe-88e6-3607e5677ea4
    `);
  const data = await res.json();
  return data;
};

function Submitted() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  users.map((user, index) => {
    console.log(user, index);
  });

  return (
    <div className='submittion'>
      <h1 className='submitted-applications'>Submitted Applications</h1>
      {users.map((user, index) => (
        <Card user={user} index={index} />
      ))}
    </div>
  );
}

export default Submitted;
