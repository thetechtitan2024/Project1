import gmail from '../../assets/gmail.jpg'
import email from '../../assets/email.png'
import calling from '../../assets/calling.png'
import  location from '../../assets/location.png'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react';
function MobileForm() {
  const [contactinfo,setContactinfo] = useState({
        firstname:"",
        lastname:"",
        phone:"",
        email:"",
        message:""

  })

  const Contactinfodata = (e) =>{
    const {name,value} = e.target;
    setContactinfo((prev)=>({
      ...prev,
      [name]:value
    }))

  }

  const SubmitContactinfo = (event) =>{
       event.preventDefault();
       console.log(contactinfo)
  }

  return (
     <div>
         <section className="flex flex-wrap md:justify-between max-w-[900px] justify-center  mx-auto px-3 " > 
           <div className='text-black'>

                  <img src={gmail} alt="" />
                <div>
                <h1 className="text-3xl font-medium py-4 border-b-2 border-black">Get in Touch</h1>
                <ul className='pt-4'>
                <li className='py-1 flex items-center font-mmedium ' ><span > <img className='w-6 pr-3' src={calling} alt="" /> </span><span>+91 1234567890</span></li>
                <li className='py-1 flex items-center font-mmedium '> <span > <img className='w-6 pr-3' src={email} alt="" /> </span><span>Test@gmail.com</span></li>
                <li className='py-1 flex items-center font-mmedium '> <span > <img className='w-6 pr-3' src={location} alt="" /> </span><span>Omexe sec-49, Ludhiana Punjab</span></li>
                </ul>
                </div>
           </div>
          <form action="" className="bg-gray-100 border-2 w-[400px] text-black px-10 shadow-xl rounded-xl py-5  " onSubmit={SubmitContactinfo}>
               <div className="flex flex-col relative">
                  <label htmlFor="" className="top-1 left-3 text-black ">First Name <span className="text-red-800">*</span></label>
                  <div className="flex">
                  <input type="text" name="firstname" className="px-3 w-full bg-gray-100 h-10 rounded-xl border-2 border-black" value={contactinfo.firstname} onChange={Contactinfodata} required />
                  </div>
                </div>
                <div className="flex flex-col relative">
                  <label htmlFor="" className="top-1 left-3 text-black ">Last Name <span className="text-red-800">*</span></label>
                  <div className="flex">
                  <input type="text" name="lastname" className="px-3 w-full bg-gray-100 h-10 rounded-xl border-2 border-black" required value={contactinfo.lastname} onChange={Contactinfodata} />
                  </div>
                </div>
                <div className="flex flex-col relative">
                  <label htmlFor="" className="top-1 left-3 text-black ">Phone <span className="text-red-800">*</span></label>
                  <div className="flex">
                  <PhoneInput
                  placeholder="+91 1234567890"
                  inputStyle={{width:"100%",height:"44px",border:"none" ,borderRadius:"12px"}}
                  buttonStyle={{border:'none',borderRadius:"12px"}}
                  containerStyle={{border:'2px solid black',borderRadius:"12px"}}
                  dropdownStyle={{zIndex:'999'}}
                  searchStyle={{backgroundColor:'white',height:'40px',borderRadius:"12px"}}
                  country={"in"}
                  enableSearch={true}
                  inputProps={{
                    required:true
                  }}
                  value={contactinfo.phone}
                  onChange={(phone) => setContactinfo({...contactinfo,phone:phone})}
                  />
                  </div>
                </div>
                <div className="flex flex-col relative">
                  <label htmlFor="" className="top-1 left-3 text-black ">Email <span className="text-red-800">*</span></label>
                  <div className="flex">
                  <input type="email" name="email" className="px-3 w-full bg-gray-100 h-10 rounded-xl border-2 border-black" value={contactinfo.email} onChange={Contactinfodata} required/>
                  </div>
                </div>
                <div className="flex flex-col relative ">

                  <label htmlFor="" className="top-1 left-3 text-black ">Message <span className="text-red-800 ">*</span></label>
                  <div className="flex">
                  <textarea name="message" rows="5" id="" className="w-full px-3 py-2 bg-gray-100 rounded-xl border-2 border-black" required value={contactinfo.message} onChange={Contactinfodata}></textarea>
                  </div>
                </div>
                <div className="flex  py-3">
                <button className="px-3 py-2 bg-orange-300 w-full rounded-xl">Send Message</button>
                </div>
            </form>
         </section>
     </div>
      );
}

export default MobileForm;
