import { Routes, Route } from "react-router";
import Login from "./pages/auth/login";
import Layout from "./pages/layout";
import DashboardNew from "./pages/dashboardSanja";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout/>} />
      <Route path="/new" element={<DashboardNew/>} />
    </Routes>
  );
};

export default AppRoutes;