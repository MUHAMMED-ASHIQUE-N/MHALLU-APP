import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import UserHome from "../Pages/user/UserHome";
import Error from "../Pages/error";
import Login from "../Pages/Login";
import PaymentHome from "../Pages/user/Payment/PaymentHome";
import MonthlyPayment from "../Pages/user/Payment/MonthlyPayment";
import QrCodePayment from "../Pages/user/Payment/QrCodePayment";
import UpiPayment from "../Pages/user/Payment/UpiPayment";
import MyCertificates from "../Pages/user/Certificates/MyCertificates";
import FamilyInformation from "../Pages/user/Profile/FamilyInformation";
import FamilyMemberDetails from "../Pages/user/Profile/FamilyMemberDetails";
import Settings from "../Pages/user/Settings";
import ProtectedRoute from "../components/protectedRoute";
import Dashboard from "../Pages/AdminPages/AdminHome";
import UsersPage from "../Pages/AdminPages/HeadofFamilies";
import AllUsersPage from "../Pages/AdminPages/AllUsers";
import RequestsPages from "../Pages/AdminPages/RequestPage";
import NotificationPage from "../Pages/AdminPages/NotificationPages";
import PaymentDashboard from "../Pages/AdminPages/PaymentDashboard";
import Paymenttable from "../Pages/AdminPages/Paymenttable";
import ComplaintsManagement from "../Pages/AdminPages/ComplaintsManagement";
import AdminLayout from "../Layout/user/AdminLayout";
import UserMainLayout from "../Layout/user/UserMainLayout";
import UserRoute from "../components/protectedRoute/UserRoute";
import AdminRoute from "../components/protectedRoute/AdminRoute";
import CreateFamily from "../Pages/AdminPages/CreateFamily";
import AppProviders from "../context/AppProviders";
import ComplaintBox from "../Pages/user/ComplaintBox";
import RequestHitory from "../Pages/user/Certificates/RequestHistory";
import CertificateDetails from "../Pages/user/Certificates/CertificateDetails";
// router.tsx
const router = createBrowserRouter([
    {
        element: _jsx(AppProviders, {}), // all routes are wrapped with providers
        children: [
            {
                element: _jsx(ProtectedRoute, {}),
                errorElement: _jsx(Error, {}),
                children: [
                    {
                        element: _jsx(UserRoute, {}),
                        children: [
                            {
                                // Layout for routes that need Header + AppNavbar
                                element: _jsx(UserMainLayout, {}),
                                children: [
                                    { path: "/", element: _jsx(UserHome, {}) },
                                    { path: "payment", element: _jsx(PaymentHome, {}) },
                                    { path: "family-information", element: _jsx(FamilyInformation, {}) },
                                    { path: "settings", element: _jsx(Settings, {}) },
                                ],
                            },
                            {
                                // Routes that use HeaderBar inside the component itself
                                path: "monthly-payment",
                                element: _jsx(MonthlyPayment, {}),
                            },
                            {
                                path: "qr-code-payment",
                                element: _jsx(QrCodePayment, {}),
                            },
                            {
                                path: "upi-payment",
                                element: _jsx(UpiPayment, {}),
                            },
                            {
                                path: "my-certificates",
                                element: _jsx(MyCertificates, {}),
                            },
                            {
                                path: "family-member/:id",
                                element: _jsx(FamilyMemberDetails, {}),
                            },
                            {
                                path: "complaints-box",
                                element: _jsx(ComplaintBox, {}),
                            },
                            {
                                path: "request-history",
                                element: _jsx(RequestHitory, {}),
                            },
                            {
                                path: "certificate/:id",
                                element: _jsx(CertificateDetails, {}),
                            },
                        ],
                    },
                    // Admin routes
                    {
                        path: "/admin",
                        element: _jsx(AdminRoute, {}),
                        children: [
                            {
                                element: _jsx(AdminLayout, {}),
                                children: [
                                    { path: "dashboard", element: _jsx(Dashboard, {}) },
                                    { path: "users", element: _jsx(UsersPage, {}) },
                                    { path: "all-users", element: _jsx(AllUsersPage, {}) },
                                    { path: "requests", element: _jsx(RequestsPages, {}) },
                                    { path: "family-creation", element: _jsx(CreateFamily, {}) },
                                    { path: "notifications", element: _jsx(NotificationPage, {}) },
                                    { path: "payments", element: _jsx(PaymentDashboard, {}) },
                                    { path: "payment-table", element: _jsx(Paymenttable, {}) },
                                    { path: "complaints", element: _jsx(ComplaintsManagement, {}) },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                path: "/login",
                element: _jsx(Login, {}),
                errorElement: _jsx(Error, {}),
            },
        ]
    },
]);
export default router;
