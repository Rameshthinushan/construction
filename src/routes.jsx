import { Routes, Route } from "react-router";
import Login from "./pages/auth/login";
import Layout from "./pages/technical-officer/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/to" element={<Layout/>} />
    </Routes>
  );
};

export default AppRoutes;