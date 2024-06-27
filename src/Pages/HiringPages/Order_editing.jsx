/* eslint-disable react/no-unescaped-entities */

import { useState,useEffect } from 'react';
import style from '../../CSS/Style.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Order_editing() {
    
       const navigate = useNavigate()  

     const [pageCount,setPageCount] = useState(1)
     const date = new Date();
   
     const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
     const [months,setmonth] = useState(date.getMonth())
     const [day,setDate] = useState(date.getDate()+1)
     const [year,setYear] = useState(date.getFullYear())
     const [hour,setHour] = useState("11:00 AM")
     
     const Pageincrement = () =>{
         setPageCount(pageCount+1);
     }
     const Pagedecreament = () =>{
         if(pageCount > 1){
             setPageCount(pageCount-1)
         }
     }
     const [images,setImages] = useState(null)
     const [orderEditinData,setOrderEditingData] = useState({
       subject:"",
        instruction:"",     
       deadline:"2024-07-01T11:35",
       pageCount:pageCount
   })     

   const formdata = new FormData()
   formdata.append('subject',orderEditinData.subject)
   formdata.append('instruction',orderEditinData.instruction)
   formdata.append('deadline',orderEditinData.deadline)
   formdata.append('pageCount',orderEditinData.pageCount)
   formdata.append('attachment',images)


 console.log(images)
   
   useEffect(()=>{
     setHour(`${(orderEditinData.deadline.slice(11,16))}`)
     setmonth(parseInt(orderEditinData.deadline.slice(5,7)-1))
     setDate(`${(orderEditinData.deadline.slice(8,10))}`)
     setYear(`${(orderEditinData.deadline.slice(0,4))}`)
     console.log(orderEditinData.deadline)
   
   },[orderEditinData.deadline])
   
   async function onSubmitData () {
        await axios.post('/api/orderediting',formdata,{
          headers:{
               'Content-Type': 'multipart/form-data'
          }
        })
        .then((res)=>{
          if(res.status === 200){
               const text="Are you sure";
               if(confirm(text)){
                    navigate('/personaldetail')
               }
          }
        }).catch((err)=>{
          alert(err)
        })
       
   }

   const handleInput = (e) => {
   const {name,value}=e.target;
   setOrderEditingData((prev)=>({
   ...prev,
   [name]:value
   })
 
)
   
     
   
   }
   const handleSubmit = (event) =>{
   event.preventDefault();
   const text="Are you sure";
   if(confirm(text)){
     onSubmitData()
}
  
   console.log(orderEditinData);
   
   }   
  const textareadesc = "Mention your topic, main idea, and requirements like tone of voice, structure, glossary, formatting style, or notes from your professor.";
  return (
     <div className={style.Main} >
     <section className={style.Container}>
          <div className={style.Form_field}>
               <div className={style.heading}>
               <h1>Provide your order details</h1>
               <p>These details are essential and help experts understand what you need.</p>
               </div>
               <form className={style.Form} onSubmit={handleSubmit}>
              
               <div className='pb-6'>
               <label htmlFor="" className='text-sm'>Subject</label>
               <div className="flex">
               <input name="subject" id="" placeholder='Subjects' className={style.Input} required value={orderEditinData.subject} onChange={handleInput}/>
             
                    </div>
                    </div>
                  
               <div className='py-2 text-sm '>Instruction</div>
               <div className={style.textarea}>
                  <textarea  name="instruction" rows='4' id="" placeholder={textareadesc} value={orderEditinData.instruction} required onChange={handleInput}></textarea>
               </div>

               <div className={style.attach}>
                      <div>Attach files</div>
                      <input type="file" name='attachment'  onChange={(e)=>setImages(e.target.files[0])}/>
                      </div>
                      {
                         images&&
                         <h1 className=' px-3 text-orange-500'>{images.name}</h1>
                      }
                      
                      
             <div className='block'>
               <h1 className='text-sm py-2' >Page count</h1>
               <div className='flex gap-x-3 py-2'>
               <div onClick={Pagedecreament} className='py-1 px-6 text-2xl font-medium flex items-center justify-center text-orange-700 rounded-lg bg-orange-50 hover:border-2 cursor-pointer border-orange-600'>&#x2212;</div>
               <input className='py-1 px-5 text-center border-2 text-2xl font-normal w-20  bg-white text-black rounded-lg flex justify-center items-center border-orange-100' name='pageCount' value={orderEditinData.pageCount = pageCount} disabled onChange={handleInput}/>
               <div onClick={Pageincrement} className='py-1 px-6 text-2xl font-bold text-orange-700 rounded-lg bg-orange-50 hover:border-2 border-orange-600 cursor-pointer'>&#x2b;</div>
               </div>
               <div className='border-l-2 border-orange-500 pl-3 mb-4'>
               <span className='text-lg font-medium'>{pageCount}</span> <span> double-spaced pages are</span><span className='text-lg font-medium px-2'>{pageCount*275}</span><span>words.</span>
              </div>
              </div>
              <h1>deadline</h1>
              <div className='flex  gap-3 pb-4  relative'>
                  <input type="datetime-Local"  className=' w-full h-12 bg-white px-3 border-2 border-orange-300 rounded-xl '  name='deadline' value={orderEditinData.deadline} defaultChecked={date.toISOString().split('T')[0] } onChange={handleInput}  data-last-active-input/>
      
                  </div>
                  <div className='border-l-2 border-orange-500 pl-3 mb-10'>
                  <span>Your chosen deadline:</span> <span className='font-medium'>{hour}</span>  on <span className='font-medium'>{month[months]} {day}, {year}</span>.
                </div>
                <div className={style.control_button}>
               <NavLink to='/order'>
                    <div className={style.controller}>Back</div>
                    </NavLink>
                   
                    <button className={style.controller} >Next</button>
                    
               </div>
               </form>
                
               
          </div>
     
     </section>
   
   </div>
  )
}

export default Order_editing
