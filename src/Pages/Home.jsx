import { Offering } from "../assets/Offering"
import { Choose } from "../assets/WhychoosecData"
import Hero from "./Hero"
import WhyChoose from "./Sections/WhyChoose"
import StudentOffer from "./Studentoffer/StudentOffer"
import { Carousel } from "@material-tailwind/react";
import '../Components/CSS/Style.css'
import StudentTestimoials from "./StudentStories/StudentTestimoials"
import CountUp from 'react-countup';
import FAQs from "../Components/FAQS/FAQs"
import student from '../assets/student.png'
import task from '../assets/task.png'
import technical from '../assets/technical.png'
import house from '../assets/houseprofee.png'
import bgtestimonials  from '../assets/testimonialbg.png'


function Home() {

  const Testimonials = [
    {
      id:1,
      Content:`Global Ed Tech has been a transformative partner for us. Their innovative solutions and seamless integration have significantly improved our efficiency and productivity. We can now focus more on delivering quality education to our clients rather than worrying about operational issues.`,
      Name:"Arjun Patel,",
      NameTitle:"from a leading e-learning platform"
    },
    {
        id:2,
        Content:`Partnering with Global Ed Tech has been a game-changer. Their state-of-the-art technology and exceptional customer support have streamlined our processes and enhanced our educational offerings. Our students and staff have never been happier.`,
        Name:"Priya Singh,",
        NameTitle:"from a prominent online education provider"
      },
      {
          id:3,
          Content:`The team at Global Ed Tech is incredibly knowledgeable and responsive. Their tools have provided us with the insights and capabilities needed to make informed decisions, optimize our resources, and achieve our goals. We highly recommend their services to any educational institution looking to modernize their operations.`,
          Name:"Rajesh Kumar,",
          NameTitle:"from a well-known educational institution"
        },
        {
            id:4,
            Content:`From the moment we implemented Global Ed Tech's systems, we noticed an immediate improvement in our operational efficiency. Their user-friendly platforms and comprehensive support have made a significant impact on our day-to-day activities. It's been a pleasure working with such a forward-thinking company.`,
            Name:"Deepak Mehta,",
            NameTitle:"from a respected learning institute"
          },
          {
            id:5,
            Content:`Global Ed Tech has exceeded our expectations in every way. Their cutting-edge technology and strategic insights have empowered us to optimize our workflows and deliver better educational experiences. Their commitment to excellence is evident in everything they do.`,
            Name:"Nina Gupta,",
            NameTitle:"from a renowned educational network"
          }
]


const faq = [
  {
      id:1,
      question:" What services do you offer? ",
      Answer:" We offer a wide range of academic services including assignment help, essay writing, research paper assistance, thesis and dissertation writing, editing, and proofreading."
  },
  {
      id:2,
      question:"  Who are your writers? ",
      Answer:"Our team consists of professional writers with advanced degrees (Masters and PhDs) in various fields. They have extensive experience in academic writing and are dedicated to providing high-quality assistance."
  },
  {
      id:3,
      question:"  How do I place an order? ",
      Answer:"To place an order, simply visit our website, fill out the order form with your assignment details, and proceed to checkout. You will receive a confirmation email once your order is placed."

  },
  {
      id:4,
      question:"What subjects do you cover? ",
      Answer:"We cover a wide range of subjects including but not limited to: English, Mathematics, Science, History, Business, Economics, Engineering, and Computer Science. If you have a specific subject in mind, please contact us to check availability."
      
  },
  {
      id:5,
      question:"How much do your services cost? ",
      Answer:"Our pricing depends on several factors including the type of assignment, academic level, number of pages, and deadline. You can get an instant quote by filling out the order form on our website."
      
  },
  {
      id:6,
      question:"  What payment methods do you accept?",
      Answer:" We accept various payment methods including credit/debit cards, PayPal, and bank transfers. All transactions are secure and encrypted."
      
  },
  {
      id:7,
      question:"   How long will it take to complete my assignment? ",
      Answer:"The turnaround time depends on the complexity and length of the assignment as well as the specified deadline. We offer flexible deadlines ranging from a few hours to several weeks."
      
  },
  {
      id:8,
      question:"  How long will it take to complete my assignment? ",
      Answer:"The turnaround time depends on the complexity and length of the assignment as well as the specified deadline. We offer flexible deadlines ranging from a few hours to several weeks."
      
  },
  {
      id:9,
      question:"How will I receive my completed assignment?",
      Answer:"Once your assignment is completed, it will be delivered to you via email in the format you requested (e.g., Word, PDF). You can also download it from your account on our website."
      
  },
  {
      id:10,
      question:"What if I need revisions?",
      Answer:"We offer free revisions within a specified period (usually 7 days) after the delivery of your assignment. If you need any changes, simply contact us with your revision request, and we will make the necessary adjustments."
      
  },
]

 return (
    <div className="w-full relative  " id="">
  
      <Hero/>
      <section className="bg-gradient-to-r max-h-full  from-gray-900  via-orange-500  to-gray-900   py-10 border-y-2">
      
        <ul className="flex flex-wrap justify-evenly py-6 max-w-[1200px] mx-auto">
          <li>
          <div className="flex justify-center items-center pb-3" >
          <img src={student} alt="Student request" className=" w-20 h-20" />
          </div>
            <div className="text-3xl  text-center font-bold" ><CountUp end={12958} duration={5} start={1} delay={0} /> </div>
            <div className="text-xl font-medium" >Student Requests</div>
          </li>
          <li>
            <div className="flex justify-center items-center pb-3">
            <img src={task} alt="Assignment Completed" className=" w-20 h-20" />
            </div>
            <div className="text-3xl  text-center font-bold"> <CountUp end={2478} duration={5} start={1} delay={0} /> </div>
            <div className="text-xl font-medium">Assignments Completed</div>
          </li>
          <li>
          <div className="flex justify-center items-center pb-3">
          <img src={technical} alt="Technical Project" className=" w-20 h-20" />
          </div>
            <div className="text-3xl  text-center font-bold"><CountUp end={2378} duration={5} start={1} delay={0} /></div>
            <div className="text-xl font-medium">Technical Projects  </div>
          </li>
          <li>
           <div className="flex justify-center items-center pb-3">
           <img src={house} alt="In house Professionals" className=" w-20 h-20" />
           </div>
            <div className="text-3xl  text-center font-bold"><CountUp end={1273} duration={5} start={1} delay={0} /></div>
            <div className="text-xl font-medium">In house professionals</div>
          </li>
        </ul>
      
      </section>
       <section className="bg-gray-200">
           <div className="flex justify-center items-center py-4 md:text-7xl text-4xl font-medium text-black "><h1 className="">Why Choose us ?</h1></div>
      <div className="grid lg:grid-cols-3 px-10 grid-cols-[repeat(6,minmax(350px,1fr))] auto-cols-max mb-10 gap-10 py-6 overflow-auto  max-w-[1300px] mx-auto">
      {
        Choose.map((item,i)=>{
          return   <WhyChoose key={i} Image={item.Images} heading={item.heading} Alt={item.heading} content={item.Content}/>
          })
          }
      </div>
      <section className="text-black bg-gray-100 py-10 ">
    
      <h1 className="text-center text-xl font-medium">Offering Student University Assignment Help in 4 Simple Steps</h1>
      
      <div className="grid lg:grid-cols-4 grid-cols-[repeat(4,minmax(350px,1fr))] auto-cols-max mb-10 gap-6 py-6  max-w-[1300px] mx-auto text-black overflow-x-auto md:px-20 px-3">
      {
        Offering.map((item,i)=>{
          return   <StudentOffer key={i} Num={item.id} Heading={item.heading} Content={item.content}  />
          })
          }
          </div>
          </section>

          <section className=" bg-no-repeat bg-cover" style={{backgroundImage:`url(${bgtestimonials})`}}>
          <Carousel transition={{ duration:1 }} loop="true" autoplay="true" className="rounded-xl w-full h-auto  py-12 bg-transparent"  >
          {
            Testimonials.map((item,i)=>{
              return  <StudentTestimoials key={i} Content={item.Content} Name={item.Name} NameTitle={item.NameTitle}/>
            })
          } 
          </Carousel>
          </section>
          <section className="bg-white py-4">
          <div className="text-black max-w-[1200px] mx-auto px-3 py-2" >
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
