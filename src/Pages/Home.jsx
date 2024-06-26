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
import bgtestimonials  from '../assets/testimonialbg.png'
import band from '../assets/band.jpg'
import { Testimonials } from "../assets/Testimonials"
import ServiceTestimoial from "./Services/Testimonial"
import { Faqs as faq } from "../assets/Faqs"
function Home() {





 return (
    <div className="w-full relative  " id="">
  
      <Hero/>
      <section className="bg-gray-200">
      <div className="flex justify-center items-center py-5 pt-6 md:text-6xl text-4xl font-medium text-black "><h1 className="">Why Choose us ?</h1></div>
      <div className="grid lg:grid-cols-3 px-10 grid-cols-[repeat(6,minmax(350px,1fr))] auto-cols-max mb-10 gap-3 py-6 overflow-auto  max-w-[1300px] mx-auto">
      {
        Choose.map((item,i)=>{
          return   <WhyChoose key={i} Image={item.Images} heading={item.heading} Alt={item.heading} content={item.Content}/>
        })
      }
      </div>
      <section className="   py-10 border-y-2" style={{backgroundImage:`url(${band})`}}>
      
        <ul className="flex flex-wrap justify-evenly py-3 max-w-[1200px] mx-auto">
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
      <section className="text-black bg-gray-100 py-10 ">
    
      <h1 className="text-center text-4xl break-words font-medium pb-4"> Assignment Help in 3 Simple Steps</h1>
      
      <div className="grid lg:grid-cols-3 grid-cols-[repeat(3,minmax(350px,1fr))] auto-cols-max mb-10 gap-6 py-6  max-w-[1300px] mx-auto text-black overflow-x-auto md:px-20 px-3">
      {
        Offering.map((item,i)=>{
          return   <StudentOffer key={i} Num={item.id} Heading={item.heading} Content={item.content}  />
          })
          }
          </div>
          </section>

          <section className=" bg-no-repeat bg-cover" style={{backgroundImage:`url(${bgtestimonials})`}}>
          <div className="text-white text-center text-7xl font-bold pt-3"> Testimonials</div>
          <Carousel transition={{ duration:1 }} loop="true" autoplay="true" className="rounded-xl w-full h-auto  pt-5 pb-12 bg-transparent"  >
          {
            Testimonials.map((item,i)=>{
              return  <ServiceTestimoial key={i} Content={item.Content} Name={item.Name} NameTitle={item.NameTitle}/>
            })
          } 
          </Carousel>
          </section>
          <section className="bg-white py-4">
          <div className="text-black max-w-[1200px] mx-auto px-3 py-3" >
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
