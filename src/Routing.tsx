import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AppLayout from "./layouts/UnAuthLayout";
import Signup from "./pages/Authentication/Signup";
import Login from "./pages/Authentication/Login";
import CarOwners from "./pages/CarOwners";
import DashboardLayout from "./layouts/DashboardLayout";
import Vehicles from "./pages/Vehicles";
import Logout from "./pages/Authentication/Logout";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signup"
          element={
            <AppLayout>
              <Signup />
            </AppLayout>
          }
        />

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
          path="/carowners"
          element={
            <DashboardLayout>
              <CarOwners />
            </DashboardLayout>
          }
        />

<Route
          path="/vehicles"
          element={
            <DashboardLayout>
              <Vehicles />
            </DashboardLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
