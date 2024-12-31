import { Routes, Route } from "react-router";
import Login from "./pages/auth/login";
import Layout from "./pages/layout";
import DashboardNew from "./pages/dashboardSanja";
import AddStaff from "./pages/add_staff";
import AddExpense from "./pages/add_expense";
import AddSiteInventory from "./pages/add_site_inventory";
import AddShift from "./pages/add_shift";
import AddDailyLog from "./pages/add_daily_log";
import MealTracker from "./pages/meal_tracker";
import CookingSupplies from "./pages/cooking_supplies";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout/>} />
      <Route path="/new" element={<DashboardNew/>} />
      <Route path="/add-staff" element={<AddStaff/>} />
      <Route path="/add-shift" element={<AddShift/>} />
      <Route path="/add-expense" element={<AddExpense/>} />
      <Route path="/add-site-inventory" element={<AddSiteInventory/>} />
      <Route path="/add-daily-log" element={<AddDailyLog/>} />
      <Route path="/meal-tracker" element={<MealTracker/>} />
      <Route path="/cooking-supplies" element={<CookingSupplies/>} />
    </Routes>
  );
};

export default AppRoutes;