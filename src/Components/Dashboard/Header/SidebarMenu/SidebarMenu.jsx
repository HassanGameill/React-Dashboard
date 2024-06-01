import React from 'react'

import './style.css'
import logo3 from '../../../../Assets/Images/logo3.jpg'
import { useState } from "react";
import {Link, NavLink} from 'react-router-dom'

//import { IoCashSharp } from "react-icons/io5";
//import { IoCashOutline } from "react-icons/io5";


import { HiAcademicCap } from "react-icons/hi2";
import { HiMiniBell } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa6";

import { BiTrendingUp } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";

import { HiChevronLeft } from "react-icons/hi2";
import Profile_image from "../../../../Assets/Images/profile.png";


const menuLinks = [
  {
    name: 'Alerts',
    icon:  <HiMiniBell />,
    path: '/alerts',
  },
  
  {
    name: 'Training',
    icon: <HiAcademicCap />,
    path: '/training',
  },
  
  {
    name: 'Automation',
    icon: <IoSettings />,
    path: '/automation',
  },
  
  {
    name: 'Portflio',
    icon: <FaFolderOpen />,
    path: '/portflio',
  },
  
  {
    name: 'Trading',
    icon: <AiOutlineLineChart />,
    path: '/trading',
  },
  
]



const SidebarMenu = () => {
  return (
    <div className={`w-12  md:w-[14.4rem] lg:w-[13rem] bg-[#181818] h-screen pt-5 relative duration-300 flex flex-col justify-between `}>
        
      <div className="flex flex-col gap-10 ">
      
        <div className="image px-1 md:px-12 lg:px-16 md:pl-14 ">
          <img src={logo3} alt="logo" className={`w-10 md:w-[40rem] text-white `} />
        </div>
  
       
        
        <ul className="flex flex-col gap-5 md:gap-8 px-3">
          {
            menuLinks.map((item, index) => (
              <li key={index} className="text-[#414040] hover:text-gray-300 ">
                <NavLink to={item.path} className="flex items-center  gap-6">
                
                  <span className="text-2xl md:text-4xl">
                    {item.icon}
                  </span>
                  
                  <span className="text-2xl hidden md:block md:text-2xl">
                    {item.name}
                  </span>
                  
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
      
      
      <div className="px-3 flex items-center flex-col gap-3 mb-14 md:mb-16 md:flex-row ">
      
        <div className="relative md:hidden">
          <NavLink  to='/alerts' className="text-3xl text-[#414040] hover:text-gray-300">
            <HiMiniBell />
          </NavLink>
        <span className={`cart_badge`}>21</span>
        </div>
        
        <div className="profile_img w-[35px] h-[35px] bg-[#53ACFF] rounded-full md:w-[3rem] md:h-[3rem] ">
          
          <img src={Profile_image} alt="" className="w-[80%] m-auto"/>
        </div>
        
        <div className="hidden md:block md:px-1 ">
          <h1 className="text-3xl text-gray-100 font-semibold ">Moni Roy</h1>
          <p className="text-2xl font-semibold text-[#414040] space-2">
          Beginner
          </p>
        </div>
      </div>
    </div>
  )
}

export default SidebarMenu