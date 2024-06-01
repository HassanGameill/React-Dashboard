import React from 'react'
import SelcetItems from './SelectItems.jsx'

import Sliders from './Sliders.jsx'
import './filter.css'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { Input } from '@headlessui/react'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'






import { IoCaretDown } from "react-icons/io5";

import { IoFitnessOutline } from "react-icons/io5";

import { BsCommand } from "react-icons/bs";

import { SlEnergy } from "react-icons/sl";

 import { HiCreditCard } from "react-icons/hi2";

 import { IoCartOutline } from "react-icons/io5";
 import { BsHouseGear } from "react-icons/bs";
 
//  (FIRST TABLE) import { AiOutlineTag } from "react-icons/ai";
 import { BsFillHddNetworkFill } from "react-icons/bs";
 
 import { LuMessagesSquare } from "react-icons/lu";
 
 import { HiColorSwatch } from "react-icons/hi";
 
 import { HiCog } from "react-icons/hi2";
 
 import { HiCurrencyDollar } from "react-icons/hi2";
 
 
 

const OneIndestryData = [
    {id: 1, name: "Health Care", icon: <IoFitnessOutline />},
    {id: 2, name: "Matrials", icon: <BsCommand />},
    {id: 3, name: "Energy", icon: <SlEnergy />},
    {id: 4, name: "Customer Cyclicals", icon: <HiCreditCard />},
    {id: 5, name: "Customer staples", icon: <IoCartOutline />},
    
    {id: 6, name: "Real estate", icon: <BsHouseGear />},
]

const TwoIndestryData = [
  {id: 1, name: "IT", icon: <BsFillHddNetworkFill />},
    {id: 2, name: "Networks", icon: <LuMessagesSquare />},
    {id: 3, name: "Industrials", icon: <HiColorSwatch />},
    {id: 4, name: "Utilities", icon: <HiCog />},
    {id: 5, name: "Financial", icon: <HiCurrencyDollar />},
    {id: 5, name: "Financial", icon: <HiCurrencyDollar />},
]



const Filter = () => {
  
  return (
    <section className="bg-[#181818] md:py-[1.5rem] px-5  md:mt-6 rounded-md ">
      <div className="Header text-center">
        <h1 className="text-2xl text-gray-300 font-bold">
          Filters
        </h1>
      </div>
      
      <section className="select_search">
        <div className="text-sm flex items-center justify-between pb-2">
          <p className=" text-gray-600">Filters Applied</p>
          <button className="text-gray-300">
          Clear All
          </button>
        </div>
        
        <div className="bg-[#202020] rounded-md ">
          <SelcetItems />
        </div>
        
      </section>
      
      <section className="MAIN bg-[#202020] ">
        <section className="STOCK_SEARCH py-2 px-3 bg-[#202020] mt-4 flex flex-col  gap-3">
        
        <div className="">
          <h1 className="text-1xl text-gray-300 ">Stock</h1>
        </div>
        
        <div className={`search flex items-center gap-2  `}>
          
            <div className="bg-[#2c2b2b] flex items-center  justify-between px-3 py-1 rounded-md ">
              <input  className={`text-[13px] placeholder:text-[#666]`} type="text" placeholder="$ TICKER"/>
          
            <span className={`text-1xl text-gray-100 bg-[] `} >
              <HiOutlineMagnifyingGlass />
            </span>
            </div>
            
            <button className="bg-[#53ACFF] rounded-md text-[10px] text-white px-5 py-1 hidden md:block ">My.Filters</button>
            
          </div>
          
      </section>
      
      <section className="Indestry_Icons py-4 px-3 ">
        <div className="flex items-center gap-1">
          <span className="text-[#777] text-sm hidden md:block">
            <IoCaretDown />
          </span>
          <h1 className="text-sm text-[#cccaca] font-bold">
            Indestry
          </h1>
        </div>
        
        <div className="flex items-center justify-between  ">
          
          <div className="text-[#cacaca] text-[12px] md:text-sm flex flex-col gap-1 md:border-l-[1px] md:border-[#cccaca] md:px-2 mx-[6px] ">
          {
            OneIndestryData.map((item) => (
                <div className="flex items-center gap-1 " key={item.id}>
                  <span className="">{item.icon}</span>
                  <span className="">{item.name}</span>
                </div>
              ))
          }
          </div>
          
          <div className="text-[#cacaca] text-[12px] md:text-sm flex flex-col gap-1 md:border-l-[1px] md:border-[#cccaca] md:px-2 mx-[6px] ">
          {
            TwoIndestryData.map((item) => (
                <div className="flex items-center gap-1 " key={item.id}>
                  <span className="">{item.icon}</span>
                  <span className="">{item.name}</span>
                </div>
              ))
          }
          </div>
          
          
        </div>
      </section>
      
      <section className="CHECK flex justify-between items-center py-4 px-4 pt-2 ">
        <form action="">
          <div className="flex items-center gap-1">
          <span className="text-[#777] text-sm hidden md:block">
            <IoCaretDown />
          </span>
          <h1 className="text-[14px] text-[#cccaca] font-bold">Market Cap</h1>
          </div>
          
          <div className="flex items-center gap-1 cursor-pointer">
            <input id="mic"  type="radio" name="mic"  />
            <label for="micro" >Micro</label>
          </div>
          
          <div className="flex items-center gap-1 cursor-pointer">
            <input id="sm"  type="radio" name="sm" />
            <label for="small" >Small</label>
          </div>
          
          <div className="flex items-center gap-1 cursor-pointer">
            <input id="lg"  type="radio" name="lg" />
            <label for="large"  >Large</label>
          </div>
          
        </form>
        
        
        <form action="">
          <div className="flex items-center gap-1">
          <span className="text-[#777] text-sm hidden md:block">
            <IoCaretDown />
          </span>
          <h1 className="text-[14px] text-[#cccaca] font-bold">Risk Level</h1>
          </div>
          
          <div className="flex items-center gap-1 cursor-pointer">
            <input id="low"  type="radio" name="low"  />
            <label for="low" >Low Risk</label>
          </div>
          
          <div className="flex items-center gap-1 cursor-pointer">
            <input id="md"  type="radio" name="md" />
            <label for="md" >Mid Risk</label>
          </div>
          
          <div className="flex items-center gap-1 cursor-pointer">
            <input id="high"  type="radio" name="high" />
            <label for="high"  >High Risk</label>
          </div>
        </form>
      </section>
      
      <section className="hidden Whell py-4 px-5 flex items-center justify-between">
        <div className="text-center">
          <h1>Stratgy</h1>
          <div className="">
            <Sliders />
          </div>
        </div>
        
        <div className="">
          <h1>Assets</h1>
          <div className="">
            <Sliders />
          </div>
          
        </div>
      </section>
      
      
      </section>
      
      
      <section className="buttons py-4 px-3 text-center">
        <div className="flex justify-center items-center gap-2">
          <button className="border-2 border-[#cccaca] text-[#fff] text-[12px] px-5 py-1 cursor-pointer rounded-sm ">
            Save Filter
          </button>
          <button className="bg-[#53ACFF] text-[#fff] text-[12px] px-6 py-1.5 cursor-pointer rounded-sm">
            Apply
          </button>
        </div>
      </section>
      
    </section>
  )
}



export default Filter