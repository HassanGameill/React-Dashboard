import React from 'react'
import SidebarMenu from '../Components/Dashboard/Header/SidebarMenu/SidebarMenu.jsx'
import SearchBar from '../Components/Dashboard/Header/SearchBar/SearchBar.jsx'
import Filter from '../Components/Dashboard/Filter/Filter.jsx'
import Sliders from '../Components/Dashboard/Filter/Sliders.jsx'

import Table from '../Components/Dashboard/ContentTable/Table/Table.jsx'







const MainLayout = () => {
  return (
    <div className="flex">
    
      <div className="">
        <SidebarMenu />
      </div>
      
      <div className="flex flex-col flex-1 relative">
        <SearchBar />
        <Table />
      
      </div>
      
      <div className="hidden md:block">
        <Filter />
      </div>
      
    </div>
  )
}

export default MainLayout