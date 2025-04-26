import React from "react";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <h1>
        Welcome {user.name} - {user.role}
      </h1>
      <button onClick={logOut}>Logout</button>
    </>
  );
};

export default Dashboard;
