import { Offering } from "../assets/Offering"
import { Choose } from "../assets/WhychoosecData"
import Hero from "./Hero"
import WhyChoose from "./Sections/WhyChoose"
import StudentOffer from "./Studentoffer/StudentOffer"
import { Carousel } from "@material-tailwind/react";
import '../Components/CSS/Style.css'
// import StudentTestimoials from "./StudentStories/StudentTestimoials"
import CountUp from 'react-countup';
import FAQs from "../Components/FAQS/FAQs"
import student from '../assets/student.png'
import task from '../assets/task.png'
import technical from '../assets/technical.png'
import house from '../assets/houseprofee.png'

import band from '../assets/Banner.jpg'
import { Testimonials } from "../assets/Testimonials"
import ServiceTestimoial from "./Services/Testimonial"
import { Faqs as faq } from "../assets/Faqs"
import style from "../CSS/Style.module.css"
import Navbar from "../Components/Header/Navbar"
function Home() {





 return (
    <div className="w-full relative  " id="">
      <Navbar/>
      <Hero/>
      <section className="bg-white">
      <div className="flex flex-col justify-center items-center py- pt-10 md:text-6xl text-4xl font-medium text-black ">
      <h1 className="">Why Choose us ?</h1>
      <span className={style.sectiontitle_design}>
        <span className={style.secicons}></span>
      </span>
      </div>
      <div className="grid lg:grid-cols-3 px-10 grid-cols-[repeat(6,minmax(350px,1fr))] auto-cols-max mb-10 gap-3 pb-6 overflow-auto  max-w-[1300px] mx-auto">
      {
        Choose.map((item,i)=>{
          return   <WhyChoose key={i} Image={item.Images} heading={item.heading} Alt={item.heading} content={item.Content}/>
        })
      }
      </div>
      <section className="py-10 border-y-2" style={{backgroundImage:`url(${band})`}}>
      
        <ul className="flex flex-wrap justify-evenly py-3 max-w-[1200px] mx-auto gap-y-8">
          <li>
          <div className="flex justify-center items-center pb-3" >
          <img src={student} alt="Student request" className=" w-16 h-16" />
          </div>
            <div className="text-3xl  text-center font-bold" ><CountUp end={12958} duration={5} start={1} delay={0} /> </div>
            <div className="text-xl font-medium" >Student Requests</div>
          </li>
          <li>
            <div className="flex justify-center items-center pb-3">
            <img src={task} alt="Assignment Completed" className=" w-16 h-16" />
            </div>
            <div className="text-3xl  text-center font-bold"> <CountUp end={2478} duration={5} start={1} delay={0} /> </div>
            <div className="text-xl font-medium">Assignments Completed</div>
          </li>
          <li>
          <div className="flex justify-center items-center pb-3">
          <img src={technical} alt="Technical Project" className=" w-16 h-16" />
          </div>
            <div className="text-3xl  text-center font-bold"><CountUp end={2378} duration={5} start={1} delay={0} /></div>
            <div className="text-xl font-medium">Technical Projects  </div>
          </li>
          <li>
           <div className="flex justify-center items-center pb-3">
           <img src={house} alt="In house Professionals" className=" w-16 h-16" />
           </div>
            <div className="text-3xl  text-center font-bold"><CountUp end={1273} duration={5} start={1} delay={0} /></div>
            <div className="text-xl font-medium">In house professionals</div>
          </li>
        </ul>
      
      </section>
      <section className="text-black bg-gray-100 py-9 ">
      <div className="flex flex-col justify-center items-center md:text-6xl text-4xl font-medium text-black ">
      <h1 className="text-center"> Assignment Help in 3 Simple Steps</h1>
      <span className={style.sectiontitle_design}>
      <span className={style.secicons}></span>
      </span>
      </div>
      
      <div className="grid lg:grid-cols-3 grid-cols-[repeat(3,minmax(350px,1fr))] auto-cols-max mb-10 gap-6   max-w-[1300px] mx-auto text-black overflow-x-auto md:px-20 px-3 ">
      {
        Offering.map((item,i)=>{
          return   <StudentOffer key={i} Num={item.id} Heading={item.heading} Content={item.content} image={item.image} alt={item.alt} />
          })
          }
          </div>
          </section>

          <section className=" bg-no-repeat bg-cover" style={{backgroundImage:`url(${band})`}}>
          <div className="text-white text-center md:text-7xl text-4xl font-bold pt-3"> Testimonials</div>
          <Carousel transition={{ duration:1 }} loop="true" autoplay="true" className="rounded-xl w-full h-auto  pt-5 pb-12 bg-transparent"  >
          {
            Testimonials.map((item,i)=>{
              return  <ServiceTestimoial key={i} Content={item.Content} Name={item.Name} NameTitle={item.NameTitle}/>
            })
          } 
          </Carousel>
          </section>
          <section className="bg-white py-4">
          <div className="text-black max-w-[1200px] mx-auto px-3 py-3 pb-10" >
          <div className="text-black text-center pb-3 md:text-7xl text-[5vmax]  font-medium">FAQ</div>
             {
              faq.map((item,indx)=>{
                   return <FAQs key={indx} Question={item.question} Answer={item.Answer} />
              })
             }
             </div>
          </section>
      </section>
    </div>
  )
}

export default Home
