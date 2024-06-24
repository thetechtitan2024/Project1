/* eslint-disable react/no-unescaped-entities */
import  { useState } from 'react'
import style from '../../CSS/Style.module.css'

import { NavLink } from 'react-router-dom'
function PagesCount() {
  
    const [pageCount,setPageCount] = useState(1)
    const Pageincrement = () =>{
        setPageCount(pageCount+1);
    }
    const Pagedecreament = () =>{
        if(pageCount > 1){
            setPageCount(pageCount-1)
        }
    }
  return (
    <div className='pt-20 pb-12 h-[80vh] bg-[#f0f8ff] fle '>
        <section className={style.Container}>
           <div className='bg-white max-w-[700px] mx-auto px-10 py-10 h-[70vh] rounded-lg'>
              <h1 className='text-xl font-bold py-2' >Page count</h1>
              <p className='text-sm text-gray-800'>How many pages do you need? The number of pages affects your order's price.</p>
              <div className='flex gap-x-3 py-5'>
                  <div onClick={Pagedecreament} className='py-1 px-6 text-2xl font-medium flex items-center justify-center text-orange-700 rounded-lg bg-orange-50 hover:border-2 cursor-pointer border-orange-600'>&#x2212;</div>
                  <div className='py-1 px-16 border-2 t7ext-2xl font-normal text-black rounded-lg flex justify-center items-center border-orange-100'>{pageCount}</div>
                  <div onClick={Pageincrement} className='py-1 px-6 text-2xl font-bold text-orange-700 rounded-lg bg-orange-50 hover:border-2 border-orange-600 cursor-pointer'>&#x2b;</div>
              </div>
              <div className='border-l-2 border-orange-500 pl-3 mb-10'>
               <span className='text-lg font-medium'>{pageCount}</span> <span> double-spaced pages are</span><span className='text-lg font-medium px-2'>{pageCount*275}</span><span>words.</span>
              </div>
              <div className={style.control_button}>
              
                 <div className={style.controller} onClick={()=>{history.back()}}>Back</div>
                 <NavLink to='/Deadline'>
                 <div className={style.controller}>Next</div>
                 </NavLink>
              </div>
           </div>

        </section>
    </div>
  )
}

export default PagesCount
