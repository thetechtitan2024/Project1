/* eslint-disable react/prop-types */

import comma from '../../assets/icon.png'
function ServiceTestimoial(props) {
  return (
    <div>
    <div id='' className=" px-2">  
  
    <div className='text-black flex flex-col lg:gap-x-10 justify-center py-8 border-2 font-[karla]  border-gray-400 rounded-xl items-start mx-auto shadow-2xl bg-white max-w-[1200px] '>
    <div className="pl-10">
{  <img src={comma} alt="comma icons" className="w-7"/> 
}
    </div>
    <div className=' font-bold md:px-20 px-3 '>
         <p className='lg:text-xl font-medium lg:leading-8'>{props.Content}</p> 
         <div className='flex gap-x-5 py-5'>
          <div className="w-20 h-20 bg-gray-500 rounded-full border-2 border-black"><img src="" alt="" /></div>
         <div className=' py-5  text-xl'>
         <p >{props.Name}</p>
         <p>{props.NameTitle}</p>
         </div>
         </div>
</div>
      
    </div>
       
  

    </div>
    </div>
  )
}

export default ServiceTestimoial
