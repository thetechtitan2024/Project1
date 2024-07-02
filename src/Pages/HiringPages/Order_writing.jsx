/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import style from '../../CSS/Style.module.css'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../Components/Header/Navbar';
function Order_writing() {
const param = useParams()
const navigate = useNavigate()
  // const [pageCount,setPageCount] = useState(1)
  const date = new Date();
console.log(param)
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const [months,setmonth] = useState(date.getMonth())
  const [day,setDate] = useState(date.getDate()+1)
  const [year,setYear] = useState(date.getFullYear())
  const [hour,setHour] = useState("11:00 AM")
  
  // const Pageincrement = () =>{
  //     setPageCount(pageCount+1);
  // }
  // const Pagedecreament = () =>{
  //     if(pageCount > 1){
  //         setPageCount(pageCount-1)
  //     }

  // }
  const [attachment,setAttachment] = useState(null)
  const [orderEditinData,setOrderEditingData] = useState({
    title:param.title,
    subject:"",
     instruction:"",
    typeofpaper:"",
    others:"",
    deadline:"2024-07-01T11:35",
    pageCount:1
})     

const formdatatosend = new FormData()
formdatatosend.append('subject',orderEditinData.subject)
formdatatosend.append('instruction',orderEditinData.instruction)
formdatatosend.append('typeofpaper',orderEditinData.typeofpaper)
formdatatosend.append('others',orderEditinData.others)
formdatatosend.append('deadline',orderEditinData.deadline)
formdatatosend.append('pageCount',orderEditinData.pageCount)
formdatatosend.append('attachment',attachment)
formdatatosend.append('title',orderEditinData.title)
const [selectother,setSelectother] = useState(false)

async function onSubmitData () {
 await axios.post('/api/orderwriting',formdatatosend)
 .then((res)=>{
   const text="Data Save Sucessfully";
   console.log(res.data)              
  if(confirm(text)){
       navigate(`/personaldetail/${res.data.Data._id}`)
  }
 })
 .catch((err)=>{
  alert(err)
 })
 
}


useEffect(()=>{
  setHour(`${(orderEditinData.deadline.slice(11,16))}`)
  setmonth(parseInt(orderEditinData.deadline.slice(5,7)-1))
  setDate(`${(orderEditinData.deadline.slice(8,10))}`)
  setYear(`${(orderEditinData.deadline.slice(0,4))}`)
  console.log(orderEditinData.deadline)
  if(orderEditinData.typeofpaper == 'others'){
    setSelectother(true)
  }else{
    setSelectother(false)
  }

},[orderEditinData.deadline,orderEditinData])

const handleInput = (e) => {
const {name,value}=e.target;
setOrderEditingData((prev)=>({
...prev,
[name]:value
}))



}
const handleSubmit = (event) =>{
event.preventDefault()
const text = "Are you Sure";
if(confirm(text)){
  onSubmitData();
}

}
  const textareadesc = "Mention your topic, main idea, and requirements like formatting style, references, structure, examples or notes from your professor.";
  return (
  <div>
    <Navbar/>
    <div className={style.Main} id={style.bgwave} >
      <section className={style.Container}>
           <div className={style.Form_field}>
                <div className={style.heading}>
                <h1>Provide your order details</h1>
                <p>These details are essential and help experts understand what you need.</p>
                </div>
                <form className={style.Form} onSubmit={handleSubmit}>
                <div className='pb-3'>
                <label htmlFor="" className='text-sm'>Type of Paper</label>
                <div className="flex ">
                <select  id="" name='typeofpaper' className={style.Input} required value={orderEditinData.typeofpaper} onChange={handleInput}>
                <option >Select Options</option>
                <option  >Essay (Any Type)</option>
                <option>Admission Essay</option>
                <option>Annotated Bibliography</option>
                <option >Application Essay</option>
                <option >Argumentative essay</option>
                <option >Article (Any Type)</option>
                <option >Article Review</option>
                <option >Assignment</option>
                <option >Book/Movie Review</option>
                <option >Capstone project</option>
                <option >others</option>
                </select>
                </div>
                <div className='flex'>
                {
                  selectother&&
                  <input name="others" id="" placeholder='type of paper' className={style.Input} required value={orderEditinData.others} onChange={handleInput}/>
                }
                </div>
                </div>
                <div className='pb-2'>
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
                       <input type="file" name='attachment'  onChange={(e)=>setAttachment(e.target.files[0])}/>
                       </div>
                       {
                         attachment&&
                         <h1 className=' px-3 text-orange-500'>{attachment.name}</h1>
                       }
                       
              <div className='block'>
                <h1 className='text-sm ' >Word count</h1>
                <div className='flex gap-x-3 py-2 pb-2'>
                {
                  // <div onClick={Pagedecreament} className='py-0 px-6 text-2xl font-medium flex items-center justify-center text-orange-700 rounded-lg bg-orange-50 hover:border-2 cursor-pointer border-orange-600'>&#x2212;</div>
              }
                <input className='py-0 px-5 text-center border-2 text-2xl font-normal w-44  bg-white text-black rounded-lg flex justify-center items-center border-orange-100' name='pageCount' value={orderEditinData.pageCount }  onChange={handleInput}/>
                {
                  //<div onClick={Pageincrement} className='py-0 px-6 text-2xl font-bold text-orange-700 rounded-lg bg-orange-50 hover:border-2 border-orange-600 cursor-pointer'>&#x2b;</div>
                  }
                </div>

               { 
              //   <div className='border-l-2 border-orange-500 pl-3 mb-3'>
              //   <span className='text-lg font-medium'>{pageCount}</span> <span> double-spaced pages are</span><span className='text-lg font-medium px-2'>{pageCount*275}</span><span>words.</span>
              //  </div>
              }
               </div>
               <h1>deadline</h1>
               <div className='flex  gap-3 pb-3  relative'>
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
    </div>
  )
}

export default Order_writing
