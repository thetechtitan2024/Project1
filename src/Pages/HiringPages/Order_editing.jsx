/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import style from '../../CSS/Style.module.css'
import { NavLink } from 'react-router-dom'
function Order_editing() {
  const [orderEditinData,setOrderEditingData] = useState({
            subject:"",
            attachment:"",
            instruction:""
  })       
  const handleInput = (e) => {
       const {name,value}=e.target;
       setOrderEditingData((prev)=>({
        ...prev,
        [name]:value
       }))
  }
  const handleSubmit = (event) =>{
       event.preventDefault()
       console.log(orderEditinData)
       
  }
  const textareadesc = "Mention your topic, main idea, and requirements like tone of voice, structure, glossary, formatting style, or notes from your professor.";
  return (
    <div className={style.Main}>
      <section className={style.Container}>
           <div className={style.Form_field}>
                <div className={style.heading}>
                <h1>Provide your order details</h1>
                <p>These details are essential and help experts understand what you need.</p>
                </div>
                <form className={style.Form} onSubmit={handleSubmit}>
                    <label htmlFor="" className='text-sm'>Subject</label>
                     <div className="flex">
                     <select name="subject" id="" className={style.Input} required value={orderEditinData.subject} onChange={handleInput}>
                     <option value="20">Accounting</option>
                     <option value="101">Algebra</option>
                     <option value="10">Biology</option>
                     <option value="106">Calculas</option>
                     <option value="12">Chemistry</option>
                     <option value="110">Coading</option>
                     <option value="83">Computer Science</option>
                     <option value="19">Economics</option>
                     <option value="34">Engineering</option>
                     <option value="103">Excel</option>
                     </select>
                     </div>
                <div className={style.textbt}>You can choose the most similar one or 'Other' if you can't find an exact match.</div>
                
                <h1>Files for editing</h1>
                <div className={style.attach}>
                       <div>Attach files</div>
                       <input type="file" name='attachment' value={orderEditinData.attachment} onChange={handleInput}/>
                </div>
                <div className='py-2 text-sm '>Instruction</div>
                <div className={style.textarea}>
                   <textarea  name="instruction" rows='4' id="" required placeholder={textareadesc} value={orderEditinData.instruction} onChange={handleInput}></textarea>
                </div>

                </form>

                <div className={style.control_button}>
                <NavLink to='/order'>
                <div className={style.controller}>Back</div>
                </NavLink>
                <NavLink to='/order-editing/personaldetail'>
                <div className={style.controller}>Next</div>
                </NavLink>
                </div>
           </div>
      
      </section>
    </div>
  )
}

export default Order_editing
