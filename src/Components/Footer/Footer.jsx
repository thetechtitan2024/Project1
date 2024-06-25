// import phone from "../../assets/calling.png";
// import email from "../../assets/email.png";
// import whatsapp from "../../assets/whatsapp.png";
// import applestore from '../../assets/applestore.png'
// import playstore from '../../assets/playstore.png'
import insta from "../../assets/insta.png";
import {NavLink} from 'react-router-dom'
import fb from "../../assets/fb.png";
// import paymentMethods from '../../assets/payment.png'

function Footer() {
  return (
    <div className="bg-orange-500">
      <section className="py-12  overflow-visible max-w-[1300px] mx-auto md:px-4 px-5 ">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 pt-5 justify-center sm:justify-start xl:px-0 px- lg:px-3 gap-10  ">
        {
          // <div className="grid md:grid-cols-2 gap-y-5 justify-center">

        }
          <div className=" basis-[8rem] flex-grow">
            <h1 className="capitalize text-xl font-medium pb-1 underline ">site map</h1>
            <ul className=" list-none ">
            <NavLink reloadDocument to='/' className='flex'>
            <li className=" cursor-pointer hover:text-gray-800">Home</li>
            </NavLink>
            <NavLink to='/services' className='flex'>
            <li className="flex cursor-pointer hover:text-gray-800">
            Services
            </li>
            </NavLink>
              <NavLink reloadDocument to='/blogs' className='flex'>
              <li className=" cursor-pointer hover:text-gray-800">Blogs</li>
              </NavLink>
              <NavLink reloadDocument to='/contact-us' className='flex'>
              <li className=" cursor-pointer hover:text-gray-800">
              Contact Us
              </li>
              </NavLink>
              <NavLink reloadDocument to='/order' className='flex'>
              <li className=" cursor-pointer hover:text-gray-800">
              Hire Writer
              </li>
              </NavLink>
           
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
            <span to="tel:+911234567890">IN: +91 1234567890</span>
          </li>
          <li className=" cursor-pointer flex">
          {
          //   <span className="pr-3">
          //   <img className="w-5" src={email} alt="phone calls" />
          // </span>
        }
          <span to="mailto:test@gmail.com">test@gmail.com</span>
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
              <li className=" cursor-pointer">30 N, Gould STE R</li>
              <li className=" cursor-pointer">Sheridan, WY 8201</li>
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
         <div className="flex "> 
          <div className="basis-[10rem] flex-grow">
            <h1 className="capitalize text-xl font-medium  underline pb-1">
              Subscribe To Newsletter
            </h1>
            <ul className=" list-none">
              <li className=" cursor-pointer flex pb-1">
                <input
                  type="text"
                  className="h-11 text-xl text-black px-2 w-full rounded bg-white"
                  name="Name"
                  placeholder="Your Name"
                />
              </li>
              <li className=" cursor-pointer flex">
                <input
                  type="email"
                  className="h-11 text-xl text-black bg-white px-2 w-full rounded"
                  name="Email"
                  placeholder="Email"
                />
              </li>
              <li className=" cursor-pointer">
                <button className="text-xl py-1 h-11 font-bold px-5 text-white  border-2 mt-3 rounded  ">
                  Subscribe
                </button>
              </li>
            </ul>
          </div>
          </div>
          </div> 
      </section>
    </div>
  );
}

export default Footer;
