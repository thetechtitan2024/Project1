/* eslint-disable react/no-unescaped-entities */

 import { useState } from 'react'
import style from '../../CSS/Style.module.css'
// import leftarrow from '../../assets/leftarrow.png'
// import downarrow from '../../assets/downarrow.png'
import { NavLink } from 'react-router-dom'
function Order_Technical() {
  const [orderTechnicalData,setOrderTechnicalData] = useState({
    subject:"",
    attachment:"",
    instruction:""
})       
const handleInput = (e) => {
const {name,value}=e.target;
setOrderTechnicalData((prev)=>({
...prev,
[name]:value
}))
}
const handleSubmit = (event) =>{
event.preventDefault()
console.log(orderTechnicalData)

}
  const textareadesc = "Provide a complete dscription of your assignment and what documents you need. Mention requirement like formatting style, structure, ideas, or notes from your professor ";
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
                     <select name="subject" id="" className={style.Input} required value={orderTechnicalData.subject} onChange={handleInput} >
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
                
                           
                <div className='py-2 text-sm '>Instruction</div>
                <div className={style.textarea}>
                   <textarea  name="instruction" rows='4' id="" required placeholder={textareadesc} value={orderTechnicalData.instruction} ></textarea>
                </div>
                <div className={style.attach}>
                <div>Attach files</div>
                <input type="file" name='attachment' value={orderTechnicalData.attachment} onChange={handleInput} />
         </div>
                </form>

                <div className={style.control_button}>
                <NavLink to='/order'>
                <div className={style.controller}>Back</div>
                </NavLink>
                <NavLink to='/personaldetail'>
                <div className={style.controller}>Next</div>
                </NavLink>
                </div>
           </div>
           {
          //  <div className={style.orderInfoContainer }>
          //      <div className={style.orderInfo}>
          //          <div className={style.orderheading} onClick={()=>{setOrderinfo(!orderinfo)}}>
          //            <h1>Order info
          //           <p className='flex justify-center items-center'> {orderinfo? <img src={downarrow} alt='leftarrow'/>:<img src={leftarrow}  alt='leftarrow' />}</p></h1>
          //            {
          //               orderinfo&&
          //              <p>As you fill out the form, your order details will appear here</p>
          //            }
          //          </div>
                   
               
          //      </div>
          //  </div>
                    }
      </section>
    </div>
  )
}

export default Order_Technical
