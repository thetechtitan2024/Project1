import { Carousel } from "@material-tailwind/react";
import ServiceTestimoial from "./Testimonial";
import FAQs from "../../Components/FAQS/FAQs";
import bgtestimonials from "../../assets/Banner.jpg";
import { Testimonials } from "../../assets/Testimonials";
import { Faqs as faq } from "../../assets/Faqs";
import { ServicesDataPages } from "./ServicesDataPages";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Navbarse from "../../Components/Header/Navbarse";


function Serviceshome() {
  const param = useParams()
  const [data,setData]=useState(null)
   useEffect(()=>{
    let Servicedata = ServicesDataPages.find((itmes)=>itmes.Link === param.Link)
    if(Servicedata){
      setData(Servicedata)
    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[data])
  return (
    <div>
    
    <Navbarse/>
      <main className="">   
               {
              data&&
              
                <div  className="">
                  <section className="mt-24 flex flex-wrap max-w-[1200px] mx-auto text-black   pt-16">
                  <div className=" md:w-2/3 max-w-full  ">
                  <h1 className=" md:text-6xl text-4xl leading-tight capitalize font-bold not-italic mb-4 px-4">
                  {data.title}
                  </h1>
                  
                  <p className=" text-xl font-medium leading-9 h-auto text-justify mb-4 text-gray-700  px-5">{data.Heading}</p>
               
                     </div>
                     <div className=" md:w-1/3 w-full pb-3 pt-5  flex justify-center items-center">
                     <img
                       src={data.image}
                       alt={data.Alt}
                       className=" md:w-full w-4/5 align-middle"
                       width='80%'
                     />
                   </div>
                   </section>
                   <section className="py-7 text-black bg-gray-300 ">
                   <div className="max-w-[1200px] mx-auto ">
                     <h1 className="text-5xl font-medium text-black  pb-5 underline md:px-0 pl-3">
                      Solutions
                     </h1>
                     {

                     
                    //  <p className="text-xl pb-5 px-2 text-justify">
                    //    Our ASA experts aim to offerthe best programming help for
                    //    different programming assignments. Just name it; you will get it
                    //    on time. The various languages covered in our programming
                    //    assignment service mainly include:
                    //  </p>
                     }
                     <ul className=" list-disc px-12 text-justify ">
                     {
                      data.Lists.map((item,indx)=>{
                        return  <li key={indx} className="text-xl py-3 font-normal">
                        <b>{item.heading} </b><span>{item.Content}</span>           
                     </li>
                    
                      })
                     }                     
                                        
                     </ul>
                     <p className="text-xl py-3 font-normal text-justify px-3">
                     Get in touch with us and get the best grades by getting help from
                     our programming assignment services.
                     </p>
                     <div className="flex justify-center pt-5">
                     <NavLink reloadDocument to='/order'>
                     <button className="py-3 px-9 bg-gradient-to-r from-orange-800 to-yellow-700  rounded-lg text-black text-xl  font-medium">Hire writer</button>
                     </NavLink>
                     
                     </div>
                   </div>
                 </section>
         
                  </div>
  
              
            }
  
         
        
     
      
        <section
          className=" py-3 bg-cover"
          style={{ backgroundImage: `url(${bgtestimonials})` }}
        >
          <div className="text-white text-center md:text-6xl text-4xl break-words font-bold ">
            Our Testimonials
          </div>
          {
            <Carousel
              transition={{ duration: 1 }}
              loop="true"
              autoplay="true"
              className="rounded-xl w-full h-auto  py-12 "
            >
              {Testimonials.map((item, i) => {
                return (
                  <ServiceTestimoial
                    key={i}
                    Content={item.Content}
                    Name={item.Name}
                    NameTitle={item.NameTitle}
                  />
                );
              })}
            </Carousel>
          }
        </section>
        <section className="bg-white py-4">
        <div className="text-black text-center pb-3 md:text-7xl text-[5vmax]  font-medium">FAQ</div>
          <div className="text-black max-w-[1200px] mx-auto px-3 py-2 pb-10">
            {faq.map((item, indx) => {
              return (
                <FAQs
                  key={indx}
                  Question={item.question}
                  Answer={item.Answer}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Serviceshome;
