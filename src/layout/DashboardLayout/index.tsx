import { Outlet } from "react-router-dom";

export default function DashboardPrivate() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* child routes render here */}
    </div>
  );
}
