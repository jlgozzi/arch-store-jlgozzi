import { Navigate, Route, Routes } from "react-router-dom";
import AccessoryPage from "../pages/accessoryPage";
import BookPage from "../pages/bookPage";
import CartPage from "../pages/cartPage";
import Dashboard from "../pages/dashboard";
import Homepage from "../pages/homepage";
import ShirtPage from "../pages/shirtPage";

const RoutesTree = () => {
  return (
    // animate presence
    <Routes>
      <Route path={"/dashboard"} element={<Dashboard />} />
      <Route path={"/homepage"} element={<Homepage />} />
      <Route path={"/cart"} element={<CartPage />} />
      <Route path={"/bookpage"} element={<BookPage />} />
      <Route path={"/shirtpage"} element={<ShirtPage />} />
      <Route path={"/accessorypage"} element={<AccessoryPage />} />
      <Route path="*" element={<Navigate replace to="/dashboard" />} />
    </Routes>
  );
};

export default RoutesTree;
