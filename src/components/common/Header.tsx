import React from 'react'
import  Bell  from '../../assets/icons/bell-svgrepo-com.svg'

function Header() {
  return (
    <div> <div className="bg-teal-600 px-4 py-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">LOGO</h1>
        {/* <Bell className="text-yellow-400 w-6 h-6" /> */}
        <img src={Bell} alt="Notification Bell" className="w-6 h-6 text-yellow-400 cursor-pointer" />
      </div></div>
  )
}

export default Header