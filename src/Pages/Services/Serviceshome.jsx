import { Carousel } from "@material-tailwind/react";
import ServiceTestimoial from "./ServicesTestimonial";
import FAQs from "../../Components/FAQS/FAQs";
import bgtestimonials  from '../../assets/testimonialbg.png'
function Serviceshome() {

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
    <div >
    <main className="">
   
        <section className="mt-24 flex flex-wrap max-w-[1200px] mx-auto text-black  pt-7">
         <div className=" md:w-2/3  ">
           <h1 className=" text-6xl leading-tight capitalize font-bold not-italic mb-4 px-4">Get The <span className=" text-orange-500">Best Programming </span> Help</h1>
         <p className=" text-xl font-medium leading-9 text-justify mb-4 text-gray-700  px-5">The student pursuing their professional degrees in coding require programming
          help to create the coding program. Various companies like Assignment Service Australia have
           technical experts that facilitate catering different needs of students. ASA helps in providing 
           the best programming assignment at affordable prices. The cheap programming help is the major reason why our 
         services are considered to be highly efficient among various programming learners.</p>
         </div>
         <div className=" md:w-1/3 w-full pb-3"><img src="https://assignmentserviceaustralia.com/static/media/programming_banner.90ea545a707e39c3c042.png" alt="" className=" w-full align-middle" /></div>
        </section>
        <section className="py-7 text-black bg-gray-300 ">
        <div className="max-w-[1200px] mx-auto">
        <h1 className="text-4xl font-normal text-black text-center pb-3">Languages covered</h1> 
        <p className="text-xl pb-5 text-justify">Our ASA experts aim to offerthe best programming help for different programming assignments. Just name it; you will get it on time. The various languages covered in our programming assignment service mainly include:</p>
        <ul className=" list-disc pl-10 text-justify">
        <li className="text-xl py-3 font-normal">C/C++ programming assignment service</li>
        <li className="text-xl py-3 font-normal">Java programming assignment service</li>
        <li className="text-xl py-3 font-normal">MATLAB programming assignment service</li>
        <li className="text-xl py-3 font-normal">MYOB programming assignment service </li>
        <li className="text-xl py-3 font-normal">Data mining programming assignment service</li>
        <li className="text-xl py-3 font-normal">R programming assignment service</li>
        <li className="text-xl py-3 font-normal">SAS programming assignment service</li>
        <li className="text-xl py-3 font-normal">UML programming assignment service</li>
        <li className="text-xl py-3 font-normal">Database programming assignment service</li>
        <li className="text-xl py-3 font-normal">Data flow programming assignment service</li>
        </ul>
        <p className="text-xl py-3 font-normal text-justify"  >Get in touch with us and get the best grades by getting help from our programming assignment services.</p>
        </div>
        </section>
        <section>
           <div className="max-w-[1200px] mx-auto text-black pb-7 pt-3">
              <h1 className="text-xl font-medium py-3">Assistance areas for my Programming Assignment</h1>
              <p className="text-xl leading-9  pb-4 text-justify ">The various areas from which I can get help from online professionals for my programming assignments for 
              both paid/free services include website, android and IOS applications. Assignmentserviceaustralia.com provides 
              programming help for designing and programming to fulfill the desired purpose. Connect with our experts when you think 
              you need any help with your programming assignment. The experts help in providing with an advanced solution to any programming 
              language problem. When you are looking for any assistance for the development of any Android application. 
              Our programming experts are here to help you create an effective programming assignment for you with 24x7 availability.</p>
              <p className="text-xl leading-9 pb-4 text-justify">IOS is an operating system by Apple Inc. for the usage of various Apple products. 
              There are times when the programming assignments may demand various programs specifically 
              for the IOS platform. Development of such programs is considered to be a complex task for 
              students so that emphasise is on getting help with the best programming services. 
              Our programming experts facilitate in resolving all issues and solve all queries appropriately.</p>
           </div>
        </section>
        <section className=" py-3 bg-cover" style={{backgroundImage:`url(${bgtestimonials})`}}>
            <div className="text-white text-center text-6xl font-medium ">Our Testimonials</div>
            {
                <Carousel transition={{ duration:1 }} loop="true" autoplay="true" className="rounded-xl w-full h-auto  py-12 "  >
                {
                  Testimonials.map((item,i)=>{
                    return  <ServiceTestimoial key={i} Content={item.Content} Name={item.Name} NameTitle={item.NameTitle}/>
                  })
                } 
                </Carousel>
            }
       
        </section>
        <section className="bg-white py-4">
        <div className="text-black max-w-[1200px] mx-auto px-3 py-2">
           {
            faq.map((item,indx)=>{
                 return <FAQs key={indx} Question={item.question} Answer={item.Answer} />
            })
           }
           </div>
        </section>
        </main>
    </div>
  )
}

export default Serviceshome
