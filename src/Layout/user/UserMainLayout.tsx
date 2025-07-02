import { type FC } from "react";
import { Outlet } from "react-router-dom";
import Header  from "./Header";
import  AppNavbar  from "./AppNavbar";

const UserMainLayout: FC = () => {
  return (
    <div className="min-h-dvh flex flex-col bg-gray-50">
      <Header />
      <Outlet />
      <AppNavbar />
    </div>
  );
};

export default UserMainLayout;
