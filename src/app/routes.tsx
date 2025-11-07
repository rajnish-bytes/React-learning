import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

{/* Layouts Imports */ }
import { DefaultLayout, DashboardLayout } from "../layout/index.tsx";
import PrivateRouteHandler from "../layout/PrivateRouteHandler.tsx";
import SigninPage from "../pages/signin";
import SignupPage from "../pages/signup";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */ }
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />   {/* Home route */}
        <Route path="/about" element={<About />} />   {/* About route */}
        <Route path="/signin" element={<SigninPage />} />   {/* Signin route */}
        <Route path="/signup" element={<SignupPage />} />   {/* Signup route */}
      </Route>

      {/* Private and Admin routes can be added here in the future */ }
      <Route element={
        <PrivateRouteHandler>
          <DashboardLayout />
        </PrivateRouteHandler>
      }>
        <Route path="/Dashboard" element={<DashboardLayout />} />   {/* Dashboard route */}
      </Route>
    </Routes>
  )
}