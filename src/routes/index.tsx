import { Route, Routes } from "react-router-dom";
import Cart from "../pages/cart";
import Dashboard from "../pages/dashboard";

const RoutesTree = () => {
  return (
    // animate presence
    <Routes>
      <Route path={"/dashboard"} element={<Dashboard />} />
      <Route path={"/cart"} element={<Cart />} />
    </Routes>
  );
};

export default RoutesTree;
