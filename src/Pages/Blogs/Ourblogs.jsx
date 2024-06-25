import { NavLink } from "react-router-dom"
 import { Blogsdata  } from "./Pages/BlogData"

function Ourblogs() {
      
  return (
    <div className="py-20 bg-gray-50">
    <div className="text-black max-w-[1200px] mx-auto text-center text-4xl font-bold underline pb-16 py-6">
        Our Blogs
    </div>
    <div className="grid md:grid-cols-3 max-w-[1200px] mx-auto  gap-5 md:px-0 px-2    ">
    {
        
        Blogsdata.map((item,indx)=>{
            return  (
            <section key={indx} className=" hover:scale-105 hover:bg-white hover:p-3 cursor-pointer max-w-[400px] border-2 h-auto rounded-xl overflow-hidden  shadow-lg">
         
            <div><img src={item.Images} alt={item.Alt} className=""/></div> 
            <div className="flex flex-col justify-center] py-3 items-start px-4 ">
            <div className='text-black text-sm font-medium pb-2'>{item.heading}</div>
            <div className='text-black text-xl font-medium pb-2'>{item.heading}</div>
            <div className='text-black text-sm font-normal pb-3'>{item.Date}</div>
            <div className="flex  ">
            <NavLink reloadDocument to={`/Blogspage/${item.id}`}>
            <button className="py-2 px-6 bg-orange-500 hover:bg-orange-400 rounded-xl">Read More</button>
            </NavLink>
            </div>        
            </div>   
     
              </section>)
        })
    }
        
        
    
    </div>
    </div>
  )
}

export default Ourblogs
