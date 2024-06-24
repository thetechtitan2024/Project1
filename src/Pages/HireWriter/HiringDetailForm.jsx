import 'react-phone-input-2/lib/style.css'
import PhoneInput from "react-phone-input-2";
import countryList from 'react-select-country-list'
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HiringDetailForm() {
      const navigate = useNavigate()
      const options = useMemo(() => countryList().getData(), [])
    const [inputData,setInputData] = useState(
        {
         firstname:"",
         lastname:"",
         email:"",
         country:"",
         message:"",
         phone:""
       
    }
)
     
  
    

      const handleform = (event) =>{
         const {name,value} = event.target;
         setInputData((prev)=>({
            ...prev,
            [name]:value
         }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(inputData)
        const text="Are you Sure";
        if(confirm(text)){
          navigate('/Pagescount')
        }
    }
  return (
    <div>
       <section className='max-w-[1200px] mx-auto py-20'>
           <div className='text-5xl text-black text-center font-medium pb-6 underline '>Personal  Details </div>
       <form action="" className="bg-gray-100 border-2 max-w-[600px] mx-auto text-black px-10 shadow-xl rounded-xl py-5  " onSubmit={handleSubmit}>
       <div className="flex flex-col relative">
          <label htmlFor="" className="top-1 left-3 text-black ">First Name <span className="text-red-800">*</span></label>
          <div className="flex">
          <input type="text" name="firstname" className="px-3 w-full bg-gray-100 h-10 rounded-xl border-2 border-black" required value={inputData.firstname} onChange={handleform}  />
          </div>
        </div>
        <div className="flex flex-col relative">
          <label htmlFor="" className="top-1 left-3 text-black ">Last Name <span className="text-red-800">*</span></label>
          <div className="flex">
          <input type="text" name="lastname" className="px-3 w-full bg-gray-100 h-10 rounded-xl border-2 border-black" required  value={inputData.lastname} onChange={handleform} />
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
          value={inputData.phone}
          onChange={(phone) => setInputData({...inputData,phone:phone})}
                                  />
          </div>
        </div>
        <div className="flex flex-col relative">
          <label htmlFor="" className="top-1 left-3 text-black ">Email <span className="text-red-800">*</span></label>
          <div className="flex">
          <input type="email" name="email" className="px-3 w-full bg-gray-100 h-10 rounded-xl border-2 border-black" value={inputData.email} required onChange={handleform}/>
          </div>
        </div>
        <div className="flex flex-col relative">
        <label htmlFor="" className="top-1 left-3 text-black ">Country <span className="text-red-800">*</span></label>
        <div className="flex">
       <select name="country" id="" className="px-3 w-full bg-gray-100 h-10 rounded-xl border-2 border-black" value={inputData.country} required onChange={handleform}>
         {
           options.map((item,indx)=>{
              return <option key={indx}>{item.label}</option>
           })
         }
       </select>
        </div>
      </div>
        <div className="flex flex-col relative ">

          <label htmlFor="" className="top-1 left-3 text-black ">Message <span className="text-red-800 ">*</span></label>
          <div className="flex">
          <textarea name="message" rows="5" id="" className="w-full px-3 py-2 bg-gray-100 rounded-xl border-2 border-black" value={inputData.message} required onChange={handleform}></textarea>
          </div>
        </div>
        <div className="flex  py-3">
        <button className="px-3 py-2 bg-orange-300 w-full rounded-xl text-xl">Submit</button>
        </div>
    </form>
       </section>
    </div>
  )
}

export default HiringDetailForm
