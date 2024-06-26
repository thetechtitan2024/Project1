// import phone from "../../assets/calling.png";
// import email from "../../assets/email.png";
// import whatsapp from "../../assets/whatsapp.png";
// import applestore from '../../assets/applestore.png'
// import playstore from '../../assets/playstore.png'
import insta from "../../assets/insta.png";
import {NavLink} from 'react-router-dom'
import fb from "../../assets/fb.png";
import { useState } from "react";
import axios from 'axios'
import worldologo from '../../assets/worldoLogo.png'
// import paymentMethods from '../../assets/payment.png'

function Footer() {

   const [subscribe,setSubscribe] = useState({
    Name:"",
    Email:""
   })
  
   const handleData = (event) =>{
           const {name,value} = event.target;
           setSubscribe((prev)=>({
            ...prev,
            [name]:value
           }))
   }
   
   const Submitdata = async () =>{
         await axios.post('/api/SubscribeData',subscribe)
         .then((res)=>{
          if(res.status === 200){
            alert("Thanks For Subscribe")
          }
         }).catch((err)=>{
          alert(err)
         })
   }    

   const OnSubmit = (event) =>{
      event.preventDefault();

   }

  return (
    <div className="bg-black">
      <section className="py-12  overflow-visible max-w-[1100px] mx-auto md:px-4 px-5 ">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-5 pt-5 justify-center sm:justify-start xl:px-0 px- lg:px-3 gap-10  ">

        <div className="flex flex-col gap-x-3  ">
        <img
   src={worldologo}
   alt="facebook"
   className=" "
   />
   <div className="flex text-sm opacity-80   gap-x-3 py-2">
   Find expert academic writers for your assignments. Get 100% plagiarism-free work
   </div>
      </div>
        {
          // <div className="grid md:grid-cols-2 gap-y-5 justify-center">

        }
          <div className=" basis-[8rem] flex-grow md:pl-10">
            <h1 className="capitalize text-xl font-medium pb-1 underline  ">site map</h1>
            <ul className=" list-none ">
            
            <li className=" cursor-pointer hover:text-gray-800 text-sm opacity-80 "><NavLink reloadDocument to='/' > <button>Home</button> </NavLink></li>

            
            <li className="flex cursor-pointer hover:text-gray-800 text-sm opacity-80">
            <NavLink reloadDocument to='/services/writing_essay' > <button>Services</button> </NavLink>
            </li>
       
            
              <li className=" cursor-pointer hover:text-gray-800 text-sm opacity-80"><NavLink reloadDocument to='/blogs' > <button>Blogs</button> </NavLink></li>

              <li className=" cursor-pointer hover:text-gray-800 text-sm opacity-80">
              <NavLink reloadDocument to='/contact-us' > <button>Contact us</button> </NavLink>
              </li>
             

              <li className=" cursor-pointer hover:text-gray-800 text-sm opacity-80">
              <NavLink reloadDocument to='/order' > <button>HireWrite</button> </NavLink>
              </li>
             
           
            </ul>
          </div>
          <div className=" basis-[15rem] flex-grow">
            <h1 className="capitalize text-xl font-medium  underline pb-1">Contact Info</h1>
            <ul className=" list-none">
            <li className=" cursor-pointer flex">
            {  
            //  <span className="pr-3">
            // <img className="w-5" src={phone} alt="phone calls" />
            //  </span>
            }
            <span to="tel:+911234567890" className="text-sm opacity-80">IN: +91 1234567890</span>
          </li>
          <li className=" cursor-pointer flex">
          {
          //   <span className="pr-3">
          //   <img className="w-5" src={email} alt="phone calls" />
          // </span>
        }
          <span to="mailto:test@gmail.com" className="text-sm opacity-80">test@gmail.com</span>
        </li>
        <li className=" cursor-pointer flex">
      {  
        // <span className="pr-3">
        //   <img className="w-5" src={whatsapp} alt="whatsapp" />
        // </span>
        // <span to="tel:+911234567890">+91 1234567890</span>
      }
      </li>
              <li className="pt-1 capitalize text-xl font-medium  underline">Location</li>
              <li className=" text-sm cursor-pointer opacity-80">30 N, Gould STE R</li>
              <li className=" text-sm cursor-pointer opacity-80">Sheridan, WY 8201</li>
            </ul>
          </div>
          <div className="flex flex-col gap-x-3  ">
          <h1 className="capitalize  text-xl font-medium  underline pb-1">Follow Us</h1>
     <div className="flex  gap-x-3 py-2">
     <img
     src={fb}
     alt="facebook"
     className="w-8 h-8 bg-white rounded-lg"
     />
     <img
     src={insta}
     alt="instagram"
     className="w-8 h-8 bg-white rounded-lg"
     />
     </div>
        </div>
         <form className="flex "> 
          <div className="basis-[10rem] flex-grow">
            <h1 className="capitalize text-xl font-medium  underline pb-1">
              Subscribe 
            </h1>
            <ul className=" list-none">
              <li className=" cursor-pointer flex pb-1">
                <input
                  type="text"
                  className="h-10 text-lg text-black px-2 w-full rounded bg-white"
                  name="Name"
                  placeholder="Your Name"
                />
              </li>
              <li className=" cursor-pointer flex">
                <input
                  type="email"
                  className="h-10 text-lg text-black bg-white px-2 w-full rounded"
                  name="Email"
                  placeholder="Email"
                />
              </li>
              <li className=" cursor-pointer">
                <button className="text-lg py-1 h-9 bg-gradient-to-r from-orange-800 to-yellow-700   font-medium px-5 text-white   mt-3 rounded-xl  ">
                  Subscribe
                </button>
              </li>
            </ul>
          </div>
          </form>
          </div> 
      </section>
      <section className="py-7 border-t-2">
       <div>
         <ul className="flex justify-center">
          <li className="text-sm px-2 flex flex-wrap justify-center items-center cursor-pointer gap-x-2"> <p className=" "></p> Testimonials</li>
          <li className="text-sm px-2 flex flex-wrap justify-center items-center cursor-pointer gap-x-2"> <p className=" border-r-2 h-3"></p> Terms</li>
          <li className="text-sm px-2 flex flex-wrap justify-center items-center cursor-pointer gap-x-2"> <p className=" border-r-2 h-3"></p> Privacy Policy</li>
          <li className="text-sm px-2 flex flex-wrap justify-center items-center cursor-pointer gap-x-2"> <p className=" border-r-2 h-3"></p> Refund Policy</li>
         </ul>
         <p className="text-sm text-center pt-3">© 2024 All Rights Reserved.</p>
       </div>
       
      </section>

    </div>
  );
}

export default Footer;
