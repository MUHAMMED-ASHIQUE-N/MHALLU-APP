import { type FC } from "react";
import { Outlet } from "react-router-dom";
import Header  from "./HeaderBar";
import  AppNavbar  from "./AppNavbar";

const UserMainLayout: FC = () => {
  return (
    <div>
      <Header title={null} />
      <Outlet />
      <AppNavbar />
    </div>
  );
};

export default UserMainLayout;
