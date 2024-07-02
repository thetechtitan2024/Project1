// import Form from "./Forms/Form"
// import mark from "../assets/mark.png"
import { NavLink } from 'react-router-dom'
import home from '../assets/home.jpg'
function Hero() {   
 

  return (
    <div className="  bg-no-repeat bg-cover text-white"   >
    <section className="  flex  flex-col-reverse justify-center relative w-full     " >
   
    <div className="px-4 flex flex-col justify-center relative 2xl:max-w-[1350px] xl:max-w-[1191px] lg:max-w-[95%] max-w-[95%] mx-auto md:pb-[390px]  md:pt-64 pt-44">
    
    <div className=" md:w-4/6  relative z-10 md:pb-0 pb-44  ">
    <p className=" font-bold md:text-6xl text-[3.5vmax]   break-words  leading-tight pb-3 ">#1 Assignment Help Services ! </p>
    <h1 className="text-lg md:leading-9 text-gray-50  ">Find expert academic writers for your assignments. Get 100% plagiarism-free work. WorldoAssignment offers 24/7 study help at affordable prices!</h1>
      
    <div className="text-xl pt-5  ">
    <NavLink to='order'>
    <button className="py-5 bg-gradient-to-r from-orange-800 to-yellow-700 px-10  cursor-pointer font-bold rounded-lg " > Hire Writer</button>
    </NavLink>
    </div>
    </div>
        </div>
       
    { 
      
         <section className="relative">
       {
        //  <ul className="md:flex justify-between    lg:px-4 md:px-3">
        //   <div className="flex flex-col gap-y-3 ">
        //     <li className="flex items-center gap-x-2"><img src={mark} alt="" className=" w-5 h-5"/><p>Plagiarism-Free</p></li>
        //     <li className="flex  items-center gap-x-2 "><img src={mark} alt="" className=" w-5 h-5"/><p>Expert Writers</p></li>
        //     <li className="flex items-center gap-x-2"><img src={mark} alt="" className=" w-5 h-5"/><p>Timely Delivery</p></li>
        
        //   </div>
        //   <div className="flex flex-col gap-y-3 nd:py-0 py-2">
        //   <li className="flex items-center gap-x-2"><img src={mark} alt="" className=" w-5 h-5"/><p>Affordable Pricing</p></li>
        //     <li className="flex  items-center gap-x-2 "><img src={mark} alt="" className=" w-5 h-5"/><p>High-Quality Papers</p></li>
        //     <li className="flex items-center gap-x-2"><img src={mark} alt="" className=" w-5 h-5"/><p>24/7 Support</p></li>
        //   </div>
        
        // </ul>
      }
      
    </section>
  }
  
    
  
         
           <div className=" flex flex-wrap ">
           <img src={home} alt="" className="-z-10 absolute top-0 bottom-0  left-0 right-0 object-cover  w-full h-full "  />
        {/*<Form/>*/}
        </div> 
           
        </section>
    </div>
  )
}

export default Hero
