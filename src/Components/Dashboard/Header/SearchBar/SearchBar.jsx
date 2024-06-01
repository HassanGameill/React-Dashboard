import React from 'react'
import './search.css'
import Dialog from '@mui/material/Dialog';

import Filter from "../../Filter/Filter.jsx";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
import {Link, NavLink} from 'react-router-dom'
import { HiMiniBell } from "react-icons/hi2";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";



const SearchBar = () => {
  
  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  
  
  return (
    <div className="bg-[#202020]  flex justify-between items-center md:gap-3  p-2 py-6 ">
    
      <div className={` ${openSearch ? "hidden md:block" : "block"}`}>
        <h1 className="text-xl text-gray-100 border-l-2 pl-3  border-[#53ACFF]">AlLERTS</h1>
      </div>
      
      <div className={` md:w-full flex items-center gap-3 ${openSearch ? "w-full" : ""}`}>
      
       <div className={`search-box w-full  flex items-center ${openSearch ? "bg-[#2c2b2b] px-3 py-2 w-full " : ""}  md:bg-[#2c2b2b] md:py-[5px] px-2 md:rounded-sm  `}>
       
          <input className={`${openSearch ? "w-full" : "w-0 md:w-full"}`} type="text" placeholder="Search By..." />
          <span className="text-gray-100" 
          onClick={handleOpenSearch}>
           <HiOutlineMagnifyingGlass />
          </span>
       </div>
       
       <div className="md:hidden">
        <button className="bg-[#53ACFF] rounded-md text-[12px]  text-white px-5 py-[3px] " onClick={handleClickOpen}
        >Filter</button>
        
         <Dialog
       sx={{".MuiPaper-root": {background: "#181818"}}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="">
          <span className="flex justify-end p-2 text-xl text-gray-600" onClick={handleClose}>
            <IoMdClose />
          </span>
          
          <Filter />
        </div>
        
      </Dialog>
      
       </div>
      
      <div className=" flex items-center pr-2 hidden md:block">
          <div className="relative ">
          <NavLink  to='/alerts' className="text-3xl text-[#414040] hover:text-gray-300">
            <HiMiniBell />
          </NavLink>
          <span className={`cart_badge`}>21</span>
          </div>
      </div>
      </div>
      
     
      
    </div>
  )
}

export default SearchBar