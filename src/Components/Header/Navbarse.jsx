import { Link, NavLink } from "react-router-dom"
import { useState } from "react";
import style from '../../CSS/Style.module.css'
import worldologo from '../../assets/worldoLogo.png'
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { BsCaretUpFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";
import './Navlink.css'
//flex  top-5 bg-gray-900 rounded-full h-[4vmax] py-7  px-11 z-50 items-center fixed  " :" h-[4vmax] w-full py-10 px-11 bg-transparent text-white flex items-center justify-between p-4 fixed z-50"

function Navbarse() {
  const [scroll,setScroll] = useState(false)
  const [position,setPosition] = useState(false);
  const [dropdownmenu,setDropdownmenu] = useState(true)
const changePosition=()=>{
   if(window.scrollY>=90){
     setPosition(true)    
    //  setScroll(false) 
  }else{
    setPosition(false);
   }
}
window.addEventListener('scroll',changePosition)
   
const dropdown =  <div className=" absolute hidden rounded w-auto px-5 justify-between  bg-white max-w-[500px] top-[3.4rem] gap-x-10 py-5 text-gray-800  " id={style.dropdown}>
<div>
  <h1 className="text-xl py-2 font-medium flex justify-between" onClick={()=>{setDropdownmenu(!dropdownmenu)}}><p>Writing</p> 
  <div className="lg:hidden">{
    dropdownmenu?<BsCaretUpFill/>:<BsCaretDownFill/>
  }</div>
  </h1>
  <ul className={dropdownmenu?"block":"lg:block hidden"}>
    <NavLink reloadDocument to={`/Services/writing_essay`}><li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Write my essay</li></NavLink>
    <NavLink reloadDocument to={`/Services/Dissertation`}><li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Dessertation</li></NavLink>
    <NavLink reloadDocument to={`/Services/Essay_Writers_for_Hiring`}><li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Essay writers for hiring</li></NavLink>
    <NavLink reloadDocument to={`/Services/Term_Papers`}><li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Term papers</li></NavLink>
    <NavLink reloadDocument to={`/Services/Research_Papers`}><li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Research papers</li></NavLink>
    <NavLink reloadDocument to={`/Services/Application_Essay`}><li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Application essay</li></NavLink>
    <NavLink reloadDocument to={`/Services/Scholarship_Essay`}><li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Scholarship essay</li></NavLink>
    <NavLink reloadDocument to={`/Services/Coursework`}><li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Coursework</li></NavLink>
  </ul>
</div>
<div >
   <h1 className="text-xl pb-2 font-medium flex justify-between" onClick={()=>{setDropdownmenu(!dropdownmenu)}}>Editing <div className="lg:hidden">{
    !dropdownmenu?<BsCaretUpFill/>:<BsCaretDownFill/>
  }</div></h1>
   <ul className={!dropdownmenu?"block":"lg:block hidden"}>
    <NavLink reloadDocument to={`/Services/Essay_Editing`}><li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg">Essay Editing</li></NavLink>
    <NavLink reloadDocument to={`/Services/Dissertation_Editing`}><li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg">Dissertation editing</li></NavLink>
    <NavLink reloadDocument to={`/Services/Research_Paper_Editing`}><li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg">Research Paper editing</li></NavLink>
    <NavLink reloadDocument to={`/Services/Humanize_AI_Text`}><li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg">Humanize Ai text</li></NavLink>
   </ul>
</div>
</div>



const sidebar = <aside className="lg:hidden top-0 left-0 right-0 text-black mx-0 mb-2 w-auto h-full bg-gray-300 py-3 relative rounded-xl  z-50 px-10  ">
 <div className="float-right cursor-pointer " onClick={()=>setScroll(!scroll)}> <IoCloseSharp className="text-4xl text-red-800"/> </div>
   <ul className="pt-10 z-50 gap-y-4 ">
      <NavLink reloadDocument to='/'>
    <li className=" cursor-pointer font medium text-lg">Home</li>
    </NavLink>
    <li className=" cursor-pointer font medium text-lg " id={style.mobileServices}>
    Services
 
    {dropdown}
   
    </li>
    {
    <NavLink reloadDocument to='/blogs' >
    <li className=" cursor-pointer font medium text-lg">Blogs</li>
    </NavLink>
    }
  <li className="pt-2">  <NavLink reloadDocument to='/contact-us'>
  <button className="py-2 px-3 bg-gradient-to-r from-orange-800 to-yellow-700 rounded-lg text-black text-sm  font-medium">Contact Us</button>
  </NavLink></li>
  <li className="pt-2">  <NavLink reloadDocument to='/order'>
  <button className="py-2 px-3 bg-gradient-to-r from-orange-800 to-yellow-700 rounded-lg text-black text-sm  font-medium">Hire writer</button>
  </NavLink></li>
   </ul>
</aside>


  return (
    <div className="w-full ">
     <div className="flex items-center flex-col">
  <header className={position?" z-50 h-16 fixed w-full top-5 max-w-[70%] transition-all duration-500 ease-out rounded-full bg-gray-100":"top-3 z-50 h-20 fixed w-full bg-transparent "}>
  <nav className={position?'flex justify-between px-4 items-center h-full text-black ':"flex justify-between max-w-[1300px] mx-auto items-center h-full px-10 text-black bg-transparent"}>
  <div className="flex">
  <Link to='/' className='flex  cursor-pointer flex-wrap'><img src={worldologo} alt="worldo Assignment" className="w-96" /></Link>
  <ul className='lg:flex w-full justify-center items-center hidden gap-x-5   '>
  <NavLink reloadDocument  to='/' >
  <li  className={" cursor-pointer font medium text-xl"}>Home</li>
  </NavLink>
  <li className={" cursor-pointer font medium text-xl"} id={style.navbaeServices}>

  Services
 
    {dropdown}
  </li>
  {

 
  // <NavLink reloadDocument to='/blogs'>
  // <li className={" cursor-pointer font medium text-xl"}>Blogs</li>
  // </NavLink>
}
    </ul>
  </div>
  <div>
    <ul className="lg:flex w-full hidden gap-x-4">
    <li><NavLink reloadDocument to='/contact-us'>
  <button className="py-3 px-5 bg-gradient-to-r from-orange-800 to-yellow-700   rounded-xl text-black text-sm  font-medium">Contact Us</button>
  </NavLink></li>
  <li> <NavLink reloadDocument to='/order'>
  <button className="py-3 px-5 bg-gradient-to-r from-orange-800 to-yellow-700   rounded-xl text-black text-sm  font-medium">Hire writer</button>
  </NavLink></li>
    </ul>
  </div>
    <div className="flex lg:hidden cursor-pointer" onClick={()=>setScroll(!scroll)}> <IoMenu className="text-gray-500 w-12 text-4xl"/></div>
    </nav>
    <div className="">
    {scroll&&sidebar}
    </div>
    </header>
    </div>
    </div>
)
}

export default Navbarse
