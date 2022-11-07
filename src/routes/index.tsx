import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "../pages/cart";
import Dashboard from "../pages/dashboard";
import Homepage from "../pages/Homepage";

const RoutesTree = () => {
  return (
    // animate presence
    <Routes>
      <Route path={"/dashboard"} element={<Dashboard />} />
      <Route path={"/homepage"} element={<Homepage />} />
      <Route path={"/cart"} element={<Cart />} />
      <Route path="*" element={<Navigate replace to="/dashboard" />} />
    </Routes>
  );
};

export default RoutesTree;
