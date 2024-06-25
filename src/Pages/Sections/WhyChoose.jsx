/* eslint-disable react/prop-types */


function WhyChoose(props) {
  return (
    <div>
      <section className='bg-white border-l-2 rounded-lg py-3 flex flex-col flex-grow basis-80  ' >
      <div className='px-4  pb-2'>
      <img src={props.Image} alt={props.Alt} className="w-20  "/>
      <h1 className="text-xl text-black font-medium ">{props.heading}</h1>
    </div>
         <div className=' py-3 text-black '><p className="border-l-2 border-blue-800 px-4">{props.content}</p></div>
      </section>
    </div>
  )
}

export default WhyChoose
