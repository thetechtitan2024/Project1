/* eslint-disable react/no-unescaped-entities */
import  { useEffect, useState } from 'react'
import style from '../../CSS/Style.module.css'
import { NavLink } from 'react-router-dom';

function Deadline() {
   
    const [Timedays,setTimeDays] = useState(false)
    const [days1,setDays1] = useState(true);
    const [days2,setDays2] = useState(false);
    const [days3,setDays3] = useState(false);
    const date = new Date();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const [months,setmonth] = useState(date.getMonth())
    const [day,setDate] = useState(date.getDate()+1)
    const [year,setYear] = useState(date.getFullYear())
    const [hour,setHour] = useState("11:00 AM")
    const [datetime,setDatetime] = useState(`2024-07-01T11:30`)
    const Activedays=(days)=>{
           if(days=="day1"){
            setDays1(true)
            setDays2(false)
            setDays3(false)
            setDate(date.getDate()+1)
            setHour("11:00 AM")
            setmonth(date.getMonth())
            setYear(date.getFullYear())
           
           }
           else if(days=="day2"){
            setDays1(false)
            setDays2(true)
            setDays3(false)
            setDate(date.getDate()+2)
            setHour("11:00 AM")
            setmonth(date.getMonth())
            setYear(date.getFullYear())
           }
           else if(days=="day3"){
            setDays1(false)
            setDays2(false)
            setDays3(true)
            setDate(date.getDate()+3)
            setHour("11:00 AM")
            setmonth(date.getMonth())
            setYear(date.getFullYear())
           }
    }
const handleform = (e) =>{
      setDatetime(e.target.value)
      
      }
      useEffect(()=>{
        setHour(`${(datetime.slice(11,16))}`)
        setmonth(parseInt(datetime.slice(5,7)-1))
        setDate(`${(datetime.slice(8,10))}`)
        setYear(`${(datetime.slice(0,4))}`)
      },[datetime])


  return (
    <div className='pt-20 pb-12 h-[80vh] bg-[#f0f8ff] '>
        <section className={style.Container}>
           <div className='bg-white px-10 py-10 h-[70vh] rounded-lg w-max m-auto'>
              <h1 className='text-xl font-bold py-2' >Deadline</h1>
              <p className='text-sm text-gray-800'>When do you need your order to be ready? The deadline affects the price.</p>
               <div className='py-4'>
               <div className='flex justify-start items-center '>
               <span className={!Timedays?`${style.radio} `:`${style.radio}  ${style.actives}` } onClick={()=>{setTimeDays(!Timedays)}}></span> <p className='pl-2 font-medium'>As soon as possible</p>
               </div>
               {
                   Timedays&&
                   <div className='flex px-10 gap-3 py-4'>
                   <div className={days1?`${style.dayselect} ${style.daysActive}`:`${style.dayselect}`} onClick={()=>{Activedays('day1')}}>1 day</div>
                   <div className={days2?`${style.dayselect} ${style.daysActive}`:`${style.dayselect}`} onClick={()=>{Activedays('day2')}}>2 day</div>
                   <div className={days3?`${style.dayselect} ${style.daysActive}`:`${style.dayselect}`} onClick={()=>{Activedays('day3')}}>3 day</div>
                   </div>
                }
               </div>
               
               <div className='py-4'>
               <div className='flex justify-start items-center '>
               <span className={!Timedays?`${style.radio} ${style.actives} `:`${style.radio}`} onClick={()=>{setTimeDays(!Timedays)}} ></span> <p className='pl-2 font-medium'>Specific date</p>
               </div>
               {
                  !Timedays&&

                   <div className='flex px-10 gap-3 py-4 h-12 w-[60%] relative'>
                     <input type="datetime-Local"  className=' w-full bg-white px-3 border-2 border-orange-300 rounded-xl '  name='datetime' value={datetime} defaultChecked={date.toISOString().split('T')[0] } onChange={handleform}  data-last-active-input/>
                     
                   </div>
               }
               </div>

              <div className='border-l-2 border-orange-500 pl-3 mb-10'>
                <span>Your chosen deadline:</span> <span className='font-medium'>{hour}</span>  on <span className='font-medium'>{month[months]} {day}, {year}</span>.
              </div>
              <div className={style.control_button}>
                 <div className={style.controller} onClick={()=>window.history.back()}>Back</div>
                 <NavLink to='/submit'>
                 <div className={style.controller}>Next</div>
                 </NavLink>
              </div>
           </div>
        
        </section>
    </div>
  )
}

export default Deadline
