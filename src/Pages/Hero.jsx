import Form from "./Forms/Form"
import mark from "../assets/mark.png"

function Hero() {   
 

  return (
    <div className="pt-20">
        <section className=" lg:grid flex lg:grid-cols-2 flex-col-reverse justify-between w-full mx-auto py-8 gap-10 2xl:max-w-[1350px] xl:max-w-[1191px] lg:max-w-[95%] max-w-[95%] ">
        <div className="w-full lg:px-0  pt-16 xl:max-w-[100%] relative h-auto flex flex-col mx-auto ">
       <div className="px-0 flex flex-col justify-center ">
       <p className=" font-bold text-5xl   bg-gradient-to-r lg:px-0  from-orange-600 max-h-full to-gray-800 w-full  text-transparent bg-clip-text">#1 ASSIGNMENT HELP SERVICE!</p>
       <div className="py-4">
       <h1 className="text-lg text-gray-500 ">Find expert academic writers for your assignments. Get 100% plagiarism-free work. GoAssignmentHelp offers 24/7 study help at affordable prices! We feature:</h1>
       </div>
        </div>
       
    { 
         <section className="relative">
        <ul className="md:flex justify-between text-black   lg:px-0 md:px-3">
          <div className="flex flex-col gap-y-3 ">
            <li className="flex items-center gap-x-2"><img src={mark} alt="" className=" w-5 h-5"/><p>Free plagiarism check</p></li>
            <li className="flex  items-center gap-x-2 "><img src={mark} alt="" className=" w-5 h-5"/><p>100% satisfaction guarantee</p></li>
            <li className="flex items-center gap-x-2"><img src={mark} alt="" className=" w-5 h-5"/><p>100% confidentiality</p></li>
            
          </div>
          <div className="flex flex-col gap-y-3 nd:py-0 py-2">
          <li className="flex items-center gap-x-2"><img src={mark} alt="" className=" w-5 h-5"/><p>Quick turnaround times</p></li>
            <li className="flex  items-center gap-x-2 "><img src={mark} alt="" className=" w-5 h-5"/><p>Work in any citation style you choose</p></li>
            <li className="flex items-center gap-x-2"><img src={mark} alt="" className=" w-5 h-5"/><p>High-quality papers</p></li>
          </div>
        
        </ul>
     
    </section>
  }
            <div className="text-xl    text-center mt-10 hidden px-5  ">
           <button className="py-3 bg-orange-500 w-full hover:underline cursor-pointer font-bold rounded-lg " > Free Assistant</button>
            </div>
        </div>
        <div className="">
        <Form/>
        </div> 
           
        </section>
    </div>
  )
}

export default Hero
