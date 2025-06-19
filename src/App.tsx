import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes';
import { UserAuthProvider } from './context/user/userAuthContext';

interface IAppProps {
}

const App: React.FC<IAppProps> = (props) => {
  return (
    <UserAuthProvider>
    <RouterProvider router={router}/>
    </UserAuthProvider>
  )
};

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