import React from 'react'
import LargeScreenUi from '../components/common/LargeScreenUi';
import useIsSmallScreen from '../hooks/useIsSmallScreen';
import Header from '../components/common/Header';
import AppNavbar from '../components/common/AppNavbar';
import CardSvg from '../assets/icons/card-svgrepo-com.svg';
import MessSvg from '../assets/icons/kitchen-cooker-utensils-svgrepo-com.svg';
import NOCScvg from '../assets/icons/memo-svgrepo-com.svg';
import cmplntSvg from '../assets/icons/comment-2-svgrepo-com.svg';

function Home() {
  const isSmallScreen = useIsSmallScreen(); // Adjust breakpoint as needed

     if (isSmallScreen){
  return(
  <>  <LargeScreenUi/></>
  )}

  return (
     <div className="  bg-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Image */}
      <div className="p-4">
        <div className="bg-black rounded-2xl overflow-hidden h-48">
          <img 
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=300&fit=crop" 
            alt="Mosque at night" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="px-4  mt-10">
        <div className="grid grid-cols-2 gap-6">
          {/* Monthly Payment */}
          <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="rounded-lg  ">
              {/* <CreditCard className="w-6 h-6 text-white" /> */}
                <img src={CardSvg} alt="Credit Card" className="w-17 h-17 text-white" />
            </div>
            <span className="text-gray-800 font-medium text-sm">monthly</span>
            <span className="text-gray-800 font-medium text-sm">Payment</span>
          </div>

          {/* MESS Payment */}
          <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center">
            <div className=" rounded-lg  mb-3 ">
              {/* <ChefHat className="w-6 h-6 text-gray-700" /> */}
                <img src={MessSvg} alt="Mess" className="w-13 h-13 text-gray-700" />
            </div>
            <span className="text-gray-800 font-medium text-sm">MESS</span>
            <span className="text-gray-800 font-medium text-sm">Payment</span>
          </div>

          {/* NOC Request */}
          <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="bg-white rounded-lg  mb-4 ">
              {/* <FileText className="w-6 h-6 text-gray-700" /> */}
                <img src={NOCScvg} alt="NOC Request" className="w-13 h-13 text-gray-700" />
            </div>
            <span className="text-gray-800 font-medium text-sm">NOC</span>
            <span className="text-gray-800 font-medium text-sm">Request</span>
          </div>

          {/* Complaints / Suggestions */}
          <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="bg-white rounded-lg mb-3 ">
              {/* <MessageSquare className="w-6 h-6 text-teal-600" /> */}
                <img src={cmplntSvg} alt="Complaints" className="w-13 h-13 text-teal-600" />
            </div>
            <span className="text-gray-800 font-medium text-sm">Complaints /</span>
            <span className="text-gray-800 font-medium text-sm">Suggestions</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
     <AppNavbar/>

      {/* Spacer for bottom navigation */}
      <div className="h-16"></div>
    </div>
  )
}

export default Home