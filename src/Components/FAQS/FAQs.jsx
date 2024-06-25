/* eslint-disable react/prop-types */
import { useState } from "react"
import minus from '../../assets/minus.png'
import add from '../../assets/add.png'

function FAQs(props) {
   const [click,setClick] = useState(false);  

  return (
    <div className="border-b-2 border-black">
      
        
            <div className=" bg-gray-200 px-4 rounded-lg text-black ">
            <div className="flex justify-between items-center cursor-pointer" onClick={()=>{setClick(!click)}}>
            <h1 className="text-xl font-medium py-3 " >{props.Question}</h1>
            {click ? <img src={ minus} alt="Show More" className="w-7"/>:<img src={add} alt="show less" className="w-7"/>}
            </div>
                {
                    click&&
                    <p className="text-lg font-normal  pb-4">{props.Answer}</p>
                }
            </div>

    </div>
  )
}

export default FAQs
