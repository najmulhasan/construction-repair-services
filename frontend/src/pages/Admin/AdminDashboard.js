import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import CreateCategory from "../../components/Admin/Category/CreateCategory";
import { ToastContainer } from "react-toastify";
import CreateService from "../../components/Admin/Service/CreateService";

const AdminDashboard = () => {
  const { user, logOut } = useAuth();

  const navigate = useNavigate();

  // if (!user || user.role !== 'admin') {
  //     return <h1>Unauthorized Access</h1>;
  // }

  useEffect(() => {
    user.role === "user" && navigate("/dashboard");
    user.role === "admin" && navigate("/admin");
    user.role === "staff" && navigate("/staff");
  }, [user.role, navigate]);

  return (
    <div>
      <div className="container mx-auto p-2">
        <div className="flex justify-between items-center mt-5">
          <h1>
            Welcome <span className="text-sky-500 capitalize">{user.name}</span>
          </h1>
          <button
            onClick={logOut}
            className="border p-2 rounded-md text-white bg-rose-500 hover:bg-rose-600"
          >
            Log Out
          </button>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 my-10">
          <div className="shadow rounded border border-blue-200 w-full">
            <h2 className="flex items-center justify-center bg-slate-600 text-white p-2">
              Categories
            </h2>
            <CreateCategory />
          </div>

          <div className="shadow rounded border border-blue-200 w-full">
            <h2 className="flex items-center justify-center bg-slate-600 text-white p-2">
              Services
            </h2>
            <CreateService />
          </div>
        </div>
      </div>
      <ToastContainer autoClose={5000} />
    </div>
  );
};

export default AdminDashboard;
