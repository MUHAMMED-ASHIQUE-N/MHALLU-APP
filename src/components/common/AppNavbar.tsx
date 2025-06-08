import React from 'react'
import HomeSvg from '../../assets/icons/home-2-svgrepo-com.svg'
import PaySvg from '../../assets/icons/paypal-140-svgrepo-com.svg'
import UserSvg from '../../assets/icons/user-svgrepo-com.svg'
import SettingSvg from '../../assets/icons/settings-svgrepo-com.svg'
function AppNavbar() {
  return (
    <div> <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200">
        <div className="flex justify-around py-3">
          <div className="flex flex-col items-center">
            <div className="  rounded-full p-2">
              <img src={HomeSvg} alt="Home" className="w-10 h-10 text-white" />
            </div>
          </div>
          <div className="flex flex-col items-center py-2">
            {/* <DollarSign className="w-6 h-6 text-gray-400" /> */}
            <div className="rounded-full p-2">
              <img src={PaySvg} alt="Payment" className="w-7 h-7 text-white" />
            </div>
          </div>
          <div className="flex flex-col items-center py-1">
            {/* <User className="w-6 h-6 text-gray-400" /> */}
            <div className="rounded-full p-2">
              <img src={UserSvg} alt="User" className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            {/* <Settings className="w-6 h-6 text-gray-400" /> */}
            <div className="rounded-full p-2.5">
              <img src={SettingSvg} alt="Settings" className="w-9 h-9 text-white" />
            </div>
          </div>
        </div>
      </div></div>
  )
}

export default AppNavbar