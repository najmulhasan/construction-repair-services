import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/NotFound";
import PrivateOutlet from "./components/PrivateOutlet";
import Service from "./pages/Services/Service";
import Staff from "./pages/Staffs/Staff";
import SignUp from "./pages/SignUp/SignUp";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ServiceDetails from "./pages/Services/ServiceDetails";
import Plumbing from "./pages/Services/Plumbing";
import ElectricalService from "./pages/Services/ElectricalService";
import AcMaintenance from "./pages/Services/AcMaintenance";
import Painting from "./pages/Services/Painting";
import ConstructionWork from "./pages/Services/ConstructionWork";
import Contact from "./components/Contact/Contact";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import Layout from "./components/Layout";

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/service" element={<Service />} />
            <Route path="/services/plumbing-service" element={<Plumbing />} />
            <Route
              path="/services/electrical-service"
              element={<ElectricalService />}
            />
            <Route path="/services/ac-repairing" element={<AcMaintenance />} />
            <Route path="/services/painting-service" element={<Painting />} />
            <Route
              path="/services/construction-work"
              element={<ConstructionWork />}
            />
            <Route path="/service/:id" element={<ServiceDetails />} />
            <Route path="/staffs" element={<Staff />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/" element={<PrivateOutlet />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
