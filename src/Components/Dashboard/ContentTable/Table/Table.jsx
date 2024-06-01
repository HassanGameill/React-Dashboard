import React from 'react'
import './table.css';
import {useState} from 'react'
import {Link} from 'react-router-dom'
import Data from './TableData.jsx'


import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';





const Tr = ({item}) => {
 const {id, AMZN, AMZNIcon, doc, docIcon, deg, degIcon , risk, riskIcon } = item;
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
   
    <tr className="w-full">
      <div className={`text-[#fff] text-[10px] flex items-center justify-between px-2 py-2 md:py-2 rounded-md my-2
      ${open ? "bg-[#53ACFF]" : "bg-[#2c2b2b]    "}`} 
      
      onClick={handleOpen}>
      
        <td className="flex items-center gap-3">
          
            <span>{AMZNIcon}</span>
            <span>{AMZN}</span>
            <span></span>
        
        </td>
        
        <td className="flex items-center gap-3">
          
            <span>{docIcon}</span>
            <span>{doc}</span>
            <span></span>
          
        </td>
        
        <td className="flex items-center gap-3">
          
            <span className="text-lg">{degIcon}</span>
            <span className={`${risk === 'High Risk' ? "text-[#118F4B]" : "text-[#D94111]"} ${open ? "text-red-700 font-semibold" : ""}`}>{deg}</span>
            <span></span>
        
        </td>
        
        <td className="flex items-center gap-3 ">
          
            <span>{riskIcon}</span>
            <span>{risk}</span>
            <span></span>
          
        </td>
        
      </div>
      
        <div className={`bg-[#181818] rounded-md  text-gray-300 text-[12px] ${open ? ' p-3' : 'hidden'}`}>
          <p className="">
            <span className="text-gray-100 font-semibold">$TSLA</span> just announced an acquisition of{" "}
            <span className="text-gray-100 font-semibold">$NFLX</span> at{" "}
            <span className="text-gray-100 font-semibold">$200 B</span>
          </p>
        
          <p className="pt-2">
              This is an <Link className="text-blue-400 border-b-[1px] border-b-blue-400 ">
                arbitrage opportunity
              </Link> , with the max gain being %X if the deal closes,<br /> but the possible risk is %Y if the deal fails, If the deal success is % and therefore the recommended play is {" "}
              <Link className="text-blue-400 border-b-[1px] border-b-blue-400">
               long/short
              </Link>  $ABC 
          </p>
        </div>
    
      </tr>
    
  )
}





const Tables = () => {
  return (
    <section className=" flex flex-col items-center overflow-hidden ">
      
      
      <div className="table_body w-[95%] overflow-auto py-3">
        <table className="w-[100%]">
          
          <tbody className="w-full">
            {
              Data.map((item) => (
                <Tr item={item} key={item.id}/>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Tables