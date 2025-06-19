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

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    
    children: [
      {
        path: "/",
        element: <UserHome />,
        errorElement: <Error />,
      },
      {
        path: "/payment",
        element: <PaymentHome />,
        errorElement: <Error />,
      },
      {
        path: "/monthly-payment",
        element: <MonthlyPayment />,
        errorElement: <Error />,
      },
      {
        path: "/qr-code-payment",
        element: <QrCodePayment />,
        errorElement: <Error />,
      },
      {
        path: "/upi-payment",
        element: <UpiPayment />,
        errorElement: <Error />,
      },
      {
        path: "/my-certificates",
        element: <MyCertificates />,
        errorElement: <Error />,
      },
      {
        path: "/family-information",
        element: <FamilyInformation />,
        errorElement: <Error />,
      },
      {
        path: "/family-member",
        element: <FamilyMemberDetails />,
        errorElement: <Error />,
      },
      {
        path: "/settings",
        element: <Settings />,
        errorElement: <Error />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

export default router;
