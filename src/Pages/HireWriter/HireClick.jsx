import { useState } from "react";
import write from "../../assets/Hire/write.png";
import "./Style.css";
import { NavLink } from "react-router-dom";
function HireClick() {
  const [writing, setWriting] = useState(true);
  const [editing, setEditing] = useState(false);
  // const [technical, setTechnical] = useState(false);
  const [Link,setLink] = useState('/order-writing')
  const handleSelect = (name) =>{
    console.log(name)
       if(name === "writing"){
        setWriting(true)
        setEditing(false)
        // setTechnical(false)
        setLink('/order-writing')
       }
       else if(name === "editing"){
        setWriting(false)
        setEditing(true)
        // setTechnical(false)
        setLink('/order-editing')
       }
      //  else if(name === "technical"){
      //   setWriting(false)
      //   setEditing(false)
      //   setTechnical(true)
      //   setLink('/order-technical')
      //  }
  }
  return (
    <div className="flex w-full bg-cover h-full" id="main-page"  >
     
      <section className="pt-36 text-black py-10  max-w-[700px] mx-auto">
        <div className="text-white">
          <h1 className="text-2xl font-bold "> Select Your Order Type</h1>
          <p className="text-lg py-2 ">
            Knowing your goal allows us to find the best person for the job.
          </p>
        </div>

        <ul className="pt-2 ">
          <li className={writing?"Inactive box":"box"} onClick={()=>{handleSelect('writing')}}>
            <div className="icons">
              <img src={write} alt="" /> <span className="radio"></span>
            </div>
            <div className="content">
              <h1>Writing</h1>
              <p className="">
                Get an essay or paper written according to your instructions by
                a professional writer.
              </p>
            </div>
            <div className="buttons">
              <button>{writing?"Selected":"Select"}</button>
            </div>
          </li>

          <li className={editing?"Inactive box":"box"} onClick={()=>{handleSelect('editing')}}>
            <div className="icons">
              <img src={write} alt="" /> <span className="radio"></span>
            </div>
            <div className="content">
              <h1>Editing</h1>
              <p>
              Get your paper edited, proofread, or have AI content revised by a professional editor.
              </p>
            </div>
            <div className="buttons">
              <button onClick={()=>{handleSelect('editing')}}>{editing?"Selected":"Select"}</button>
            </div>
          </li>
{


          // <li className={technical?"Inactive box":"box"} onClick={()=>{handleSelect('technical')}}>
          //   <div className="icons">
          //     <img src={write} alt="" />
          //     <span className='radio'></span>
          //   </div>
          //   <div className="content">
          //     <h1 className="">Technical</h1>
          //     <p className="">
          //     Get an expert’s help with math problems, data analysis, coding, labs, accounting, etc.
          //     </p>
          //   </div>
          //   <div className="buttons">
          //     <button className=""onClick={()=>{handleSelect('technical')}}>{technical?"Selected":"Select"}</button>
          //   </div>
          // </li>
}
        </ul>
        <div className="control-contain">
           <NavLink reloadDocument to={Link}>
          <div className="controls">Next</div>
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default HireClick;
