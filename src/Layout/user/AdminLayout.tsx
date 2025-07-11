        import {SidebarProvider,useSidebar } from "../../context/admin/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";
// import { ThemeProvider } from "../context/ThemeContext";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />
        <div className="mx-auto  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AdminLayout: React.FC = () => {
  return (
  // <ThemeProvider>
      <SidebarProvider>
        <LayoutContent />
      </SidebarProvider>
    // </ThemeProvider>
  );
};

export default AdminLayout;
