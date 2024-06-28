/* eslint-disable react/prop-types */


function WhyChoose(props) {
  return (
    <div>
      <section className='bg-transparent  rounded-lg py-1 flex items-center flex-col flex-grow basis-80  ' >
      <div className='px-3  pb-2 flex flex-col items-center'>
      <img src={props.Image} alt={props.Alt} className="w-28 "/>
      <h1 className="text-xl text-black font-medium ">{props.heading}</h1>
    </div>
         <div className=' py-3 text-black '><p className=" text-center  px-4">{props.content}</p></div>
      </section>
    </div>
  )
}

export default WhyChoose
