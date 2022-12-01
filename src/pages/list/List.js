import React from 'react'
import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

// Sass
import "./list.scss"

const List = () => {
  return (
    <div className='Container'>
    <Sidebar/>
    <div className='ListContainer'>
    <Navbar/>     
    <Datatable/>
    </div>
    </div>
  )
}

export default List