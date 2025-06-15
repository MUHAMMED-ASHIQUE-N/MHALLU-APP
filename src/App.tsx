import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MonthlyPayment from "./Pages/user/Payment/MonthlyPayment";
import QrCodePayment from "./Pages/user/Payment/QrCodePayment";
import UpiPayment from "./Pages/user/Payment/UpiPayment";
import MyCertificates from "./Pages/user/Certificates/MyCertificates";
import FamilyInformation from "./Pages/user/Profile/FamilyInformation";
import FamilyMemberDetails from "./Pages/user/Profile/FamilyMemberDetails";
import Settings from "./Pages/user/Settings";

// Lazy load components
const Login = lazy(() => import("./Pages/Login"));
const Home = lazy(() => import("./Pages/user/UserHome"));
const PaymentHome = lazy(() => import("./Pages/user/Payment/PaymentHome"));

function App() {
  return (
    <Router>
      <Suspense fallback={
        <div className="flex justify-center items-center h-screen">
          <span className="text-teal-600 font-bold text-lg">Loading...</span>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/payment" element={<PaymentHome />} />
          <Route path="/monthly-payment" element={<MonthlyPayment />} />
          <Route path="/qr-code-payment" element={<QrCodePayment />} />
          <Route path="/upi-payment" element={<UpiPayment />} />
          <Route path="/my-certificates" element={<MyCertificates />} />
          <Route path="/family-information" element={<FamilyInformation />} />
          <Route path="/family-member" element={<FamilyMemberDetails />} />
          <Route path="/settings" element={<Settings />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

// import React from 'react'

// function App() {
//   return (
//    <div className="w-full px-4 bg-primary py-4">
//   <div className="flex items-center justify-between">
//     {/* Back Button */}
//     <button
//       onClick={() => navigate(-1)}
//       aria-label="Go back"
//       className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/30 shadow-md hover:bg-white/20 transition duration-300"
//     >
//       <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
//         <path
//           d="M15 18l-6-6 6-6"
//           stroke="#ffffff"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </button>

//     {/* Title */}
//     <h1 className="text-white text-lg font-semibold text-center flex-1 -ml-10">
//       Monthly Payment
//     </h1>

//     {/* Right side spacer (for layout balance) */}
//     <div className="w-10 h-10" />
//   </div>
// </div>

//   )
// }

// export default App