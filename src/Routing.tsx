import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AppLayout from "./layouts/UnAuthLayout";
import Login from "./pages/Authentication/Login";
import Employees from "./pages/Employees";
import DashboardLayout from "./layouts/DashboardLayout";
import Logout from "./pages/Authentication/Logout";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <AppLayout>
              <Login />
            </AppLayout>
          }
        />

        <Route
          path="/login"
          element={
            <AppLayout>
              <Login />
            </AppLayout>
          }
        />

<Route
          path="/signout"
          element={
              <Logout />
          }
        />
<Route
          path="/employees"
          element={
            <DashboardLayout>
              <Employees />
            </DashboardLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
