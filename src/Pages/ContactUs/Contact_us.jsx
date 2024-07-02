// import Forms from "./Contact_usForm"
// import message from '../../assets/email.png'
//  import location from '../../assets/location.png'
//  import style from '../../CSS/Style.module.css'
import MobileForm from '../Forms/MobileForm'
import wave from '../../assets/wave.jpg'
import Navbar from '../../Components/Header/Navbar'

function Contact_us() {
  return (
    <div className='bg-no-repeat bg-cover' style={{backgroundImage:`url(${wave})`}}>
    <Navbar/>
    <div className='z-50' >
    <div className='pt-28 max-w-[1200px] mx-auto justify-between items-center  py-10 text-white'>
     <div className='pb-16 max-w-[900px] mx-auto '>
      <h1 className='text-center md:text-6xl text-3xl px-3 font-bold'>GOT A QUESTION ?</h1>
      <p className='pt-8  md:text-xl text-lg px-4 text-justify font-normal'>Fill the form below our dedicated team will help you with all your academic needs. If you have any questions, concerns, or need further information, please feel free to reach out to us using any of the methods below.</p>
     </div> 
    <MobileForm/>  
    </div>
   
    
    </div>
    </div>
  )
}

export default Contact_us
