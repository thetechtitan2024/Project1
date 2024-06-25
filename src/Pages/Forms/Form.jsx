import { useState } from "react"

import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import attach from '../../assets/attach.png'
import axios from 'axios'

function Form() {

  const [count,setCount] = useState(1)
    const [inputData,setInputdata] = useState({
        Email:"",
        Subject:"",
        date:"",
        time:"",
        pagecount:0,
        phone:"",
        Description:"",
        Attach:"",
        accept:"accepted"
        
       
    })
    
       const Increament= ()=>{
          setCount(count+1)
    }
    const Decreament = () =>{
      if(count>0)
      setCount(count-1)
    }

    const Savedata = async () =>{
         await axios.post('http://localhost:3000/api/assignment/Assignment_inputdata',inputData)
         .then((res)=>{
          if(res.status === 200){
            alert("Data Save Sucessfull")
          }else {
            alert("Something Error")
          }
         })
    }

 const handleForm = (e) =>{
      const {name,value} = e.target;
      setInputdata((prev)=>({
            ...prev,
            [name]:value
      }))
 } 

 const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(inputData)
        Savedata()
 }
  return (
    <div>
    <div className="lg:p-2  bg-orange-400 rounded-xl max-w-[600px]   ">
    <form action="" className=" bg-white text-gray-800 px-8 py-7 flex flex-col rounded-xl shadow-2xl" onSubmit={handleSubmit}>
          <div className="font-medium text-2xl pb-3">Struggling with Your Assignment?</div>
          <div className="flex lg:flex-row  lg:justify-between flex-wrap gap-2 w-full">
             <div className="flex w-full lg:max-w-full ">
              <ul className="w-full flex flex-col ">
                <li className="w-full pt-2 pb-3 relative">
                {
                    <div className="text-sm font-medium pb-1 absolute left-3 -top-1 bg-white ">Email</div>
                }
                    <div className="flex "><input type="email" className="border-2 border-black w-full h-8 py-1 rounded-lg px-2 text-sm bg-white " placeholder="Email"  name="Email" 
                    value={inputData.Email}
                    onChange={handleForm}
                    required
                    />
                    </div>

     </li>
              
                <li className="w-full pt-2 pb-3 relative">
                    {  <div className=" absolute left-3 -top-1 bg-white text-sm font-medium">Subject/CourseCode</div>
                    }
                    <div className="flex"><input type="text" className="w-full h-8 py-1 rounded-lg px-2 bg-white border-2 border-black " placeholder="Subject/CourseCode" name="Subject" value={inputData.Subject} onChange={handleForm} /></div>
                </li>
                <li className="w-full pt-2 pb-4 relative lg:block ">
              
                    <div className="absolute left-3 -top-1 bg-white text-sm font-medium">Deadline</div>
                          
                    
                    <div className="w-full">
                       <div className="flex w-full"><input type="date" name="date" className="w-full h-8 py-1 rounded-l-lg px-2 bg-white border-2 border-black " value={inputData.date} onChange={handleForm}  />
                          <select name="time" id="" className=" bg-white px-1 rounded-r-lg border-2 border-black " value={inputData.time} onChange={handleForm} required>
                          <option >2:00 AM</option>
                          <option >10:00 AM</option>
                          </select>
                       </div>
                       <div></div>
                    </div>
                </li>
                <li className="pb-4 relative">
                {
                 //<h1 className=" font-medium w-full text-center">Enter Your Assignment Description</h1>
                //  <input type="text" className="w-full h-8 py-1 rounded-lg px-2 bg-white border-2 border-black " placeholder="Phone" />
                   <div className="absolute left-3 z-10 -top-3 bg-white text-sm font-medium">Phone</div>
               } 
                <div className="flex">
                <PhoneInput
                placeholder="+91 1234567890"
                inputStyle={{width:"100%",height:"44px",border:"none"}}
                buttonStyle={{border:'none'}}
                containerStyle={{border:'2px solid black',borderRadius:"8px"}}
                dropdownStyle={{zIndex:'999'}}
                searchStyle={{backgroundColor:'white',height:'40px'}}
               
                country={"in"}
                enableSearch={true}
                value={inputData.phone}
                 inputProps={{
                  required:true
                                   
                 }}
                 onChange={(phone) => setInputdata({...inputData,phone:phone})}
                                        />
                     </div>
            </li>
                <li className="w-full relative">
                    {
                     <div className="absolute  left-2 -top-3 bg-white z-10 text-sm font-medium">No. of pages</div>
                    }
                    </li>
                    <div>
                    <div className="flex relative ">
                    <input type="text" className="w-full h-8  py-1 rounded-l-lg px-3 border-y-2 border-l-2 border-black bg-white " name="pagecount" placeholder="Subject/CourseCode" value={inputData.pagecount = count} disabled onChange={handleForm} />
                    <div className=" text-lg px-6 bg-orange-400 cursor-pointer flex justify-center items-center right-12 hover:bg-orange-300 hover:text-white border-y-2 border-l-2 border-black "  onClick={Decreament}>-</div>
                    <div className="  px-6 text-lg bg-orange-400  right-0 cursor-pointer rounded-r-lg flex justify-center items-center hover:bg-orange-300 hover:text-white border-2 border-black "  onClick={Increament}>+</div>
                    </div>
                    </div>
             
              </ul>
             </div>

             <div className=" w-full  pt-1"> 
             
             
             
         
         <div className="mt-2 w-full border-2 relative  border-black  rounded-xl flex flex-col ">
         <div className="absolute left-3 -top-3 bg-white text-sm font-medium">Order Description</div>
                <textarea name="Description" rows="3" id="" className="w-full  py-2 bg-transparent" placeholder="" value={inputData.Description} onChange={handleForm} required>
                </textarea>
                  <div className="w-auto relative cursor-pointer py-1 px-6">
                  <h1 className=" cursor-pointer opacity-100 font-medium flex  w-auto "> <span><img src={attach} alt="" className="w-6 cursor-pointer z-10" /></span> Attach file</h1>
                  <input type="file" name="Attach" className=" absolute cursor-pointer w-[100px] h-auto  top-0 opacity-0 max-h-12  z-[9]" multiple value={inputData.Attach} onChange={handleForm}  />
                  </div>
                  </div>
               
                </div>
                </div>
                <div className="block">
                <div className="flex py-4">
                <input type="checkbox" name="accept" id="" className="text-sm" value={inputData.accept} onChange={handleForm}  required/><p className="px-2">I accept the T&C, agree to receive offers & updates</p></div>
                <div className="flex justify-center pt-4"><button className="py-3 px-10 bg-orange-500 text-xl text-white rounded-md hover:bg-orange-600 font-medium">Free Assistant</button></div>
                </div>
        </form>
        </div>
    </div>
  )
}

export default Form
