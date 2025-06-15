import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
// import { ThemeProvider } from "./context/ThemeContext";  // <-- import your ThemeProvider
import AppLayout from "./layout/AppLayout";
import './index.css';
import Dashboard from "./Pages/AdminPages/AdminHome";
import UsersPage from "./Pages/AdminPages/HeadofFamilies";



// Lazy load pages
const Login = lazy(() => import("./Pages/Login"));
const Home = lazy(() => import("./Pages/Home"));
const PaymentHome = lazy(() => import("./Pages/Payment/PaymentHome"));
const MonthlyPayment = lazy(() => import("./Pages/Payment/MonthlyPayment"));
const QrCodePayment = lazy(() => import("./Pages/Payment/QrCodePayment"));


function App() {
  return (
     
      <Router>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <span className="text-teal-600 font-bold text-lg">Loading...</span>
            </div>
          }
        >
          <Routes>
            
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/payment" element={<PaymentHome />} />
              <Route path="/monthly-payment" element={<MonthlyPayment />} />
              <Route path="/qr-code-payment" element={<QrCodePayment />} />
           
<Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UsersPage />} />
            {/* <Route path="/requests" element={<RequestsPages />} /> */}
            </Route>
          </Routes>
        </Suspense>
      </Router>
    
  );
}

export default App;
