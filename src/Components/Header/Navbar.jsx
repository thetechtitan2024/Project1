import { NavLink } from "react-router-dom"
import { useState } from "react";
import menu from '../../assets/menu.png'
import close from '../../assets/close.png'
import style from '../../CSS/Style.module.css'
import './Navlink.css'
//flex  top-5 bg-gray-900 rounded-full h-[4vmax] py-7  px-11 z-50 items-center fixed  " :" h-[4vmax] w-full py-10 px-11 bg-transparent text-white flex items-center justify-between p-4 fixed z-50"

function Navbar() {
  const [scroll,setScroll] = useState(false)
  const [position,setPosition] = useState(false);
const changePosition=()=>{
   if(window.scrollY>=90){
     setPosition(true)    
     setScroll(false) 
  }else{
    setPosition(false);
   }
}
window.addEventListener('scroll',changePosition)
   
const dropdown =  <div className=" absolute hidden rounded w-auto px-5 justify-between  bg-white max-w-[500px] top-[3.4rem] gap-x-10 py-5  " id={style.dropdown}>
<div>
  <h1 className="text-xl py-4 font-medium">Writing</h1>
  <ul className="">
    <li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Write my essay</li>
    <li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Dessertation</li>
    <li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Essay writers for hiring</li>
    <li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Term papers</li>
    <li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Pay for essay</li>
    <li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Research papers</li>
    <li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Application essay</li>
    <li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Scholarship essay</li>
    <li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg ">Coursework</li>
  </ul>
</div>
<div>
   <h1 className="text-xl py-4 font-medium">Editing</h1>
   <ul>
    <li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg">Essay Editing</li>
    <li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg">Dissertation editing</li>
    <li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg">Research Paper editing</li>
    <li className=" hover:text-orange-500 pb-2 whitespace-nowrap text-lg">Humanize Ai text</li>
   </ul>
</div>
</div>



const sidebar = <aside className="lg:hidden top-0 left-0 right-0 text-black mx-0 mb-2 w-auto h-full bg-gray-300 py-3 fixed  z-50 px-10  ">
 <div className="float-right cursor-pointer " onClick={()=>setScroll(!scroll)}> <img src={close} alt="close" className="w-10 h-10"/> </div>
   <ul className="pt-10 z-50 gap-y-4 ">
      <NavLink reloadDocument to='/'>
    <li className=" cursor-pointer font medium text-lg">Home</li>
    </NavLink>
    <li className=" cursor-pointer font medium text-lg" id={style.mobileServices}>Services
    {dropdown}
    </li>
    <NavLink reloadDocument to='blogs' >
    <li className=" cursor-pointer font medium text-lg">Blogs</li>
    </NavLink>
  <li className="pt-2">  <NavLink reloadDocument to='/contact-us'>
  <button className="py-2 px-3 bg-orange-400 rounded-lg text-black text-sm  font-medium">Contact Us</button>
  </NavLink></li>
  <li className="pt-2">  <NavLink reloadDocument to='/order'>
  <button className="py-2 px-3 bg-orange-400 rounded-lg text-black text-sm  font-medium">Hire writer</button>
  </NavLink></li>
   </ul>
</aside>


  return (
    <div className="w-full ">
     <div className="flex items-center flex-col">
  <header className={position?"shadow-xl z-50 h-20 fixed w-full top-5 max-w-[70%] transition-all duration-500 ease-out rounded-full bg-gray-100":"shadow-xl z-50 h-20 fixed w-full bg-white "}>
  <nav className={position?'flex justify-between px-10 items-center h-full text-black ':"flex justify-between max-w-[1300px] mx-auto items-center h-full px-10 text-black"}>
  <div className="flex md:gap-x-12">
  <div className=''><h1 className="font-bold text-2xl">Logos</h1></div>
  <ul className='lg:flex w-full justify-center items-center hidden gap-x-10'>
  <NavLink reloadDocument  to='/' >
  <li  className=" cursor-pointer font medium text-xl">Home</li>
  </NavLink>
  <li className=" cursor-pointer font medium text-xl " id={style.navbaeServices}>
  <NavLink to='/Services'>
  Services
  </NavLink>
    {dropdown}
  </li>
  <NavLink reloadDocument to='blogs'>
  <li className=" cursor-pointer font medium text-xl">Blogs</li>
  </NavLink>
    </ul>
  </div>
  <div>
    <ul className="lg:flex w-full hidden gap-x-6">
    <li><NavLink reloadDocument to='/contact-us'>
  <button className="py-3 px-5 bg-orange-400 rounded-xl text-black text-sm  font-medium">Contact Us</button>
  </NavLink></li>
  <li> <NavLink reloadDocument to='/order'>
  <button className="py-3 px-5 bg-orange-400 rounded-xl text-black text-sm  font-medium">Hire writer</button>
  </NavLink></li>
    </ul>
  </div>
    <div className="flex lg:hidden cursor-pointer" onClick={()=>setScroll(!scroll)}> <img src={menu} alt="menu" className="w-8 h-8"/></div>
    </nav>
    <div className="">
    {scroll&&sidebar}
    </div>
    </header>
    </div>
    </div>
)
}

export default Navbar
