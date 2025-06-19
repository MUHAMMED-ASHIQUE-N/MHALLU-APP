import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { AppNavbar } from "./AppNavbar";

const UserMainLayout: FC = () => {
  return (
    <div className="bg-white min-h-dvh">
      <Header />
      <Outlet />
      <AppNavbar />
    </div>
  );
};

export default UserMainLayout;
