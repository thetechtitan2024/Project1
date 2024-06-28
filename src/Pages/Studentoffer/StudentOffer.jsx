/* eslint-disable react/prop-types */


function StudentOffer(props) {
  const shadow = {
      boxShadow:"-47px 0px 34px 0px #ddd"
  }

  return (
    <div className="flex">
            
        <section className="px-4 bg-gray-100 h-96  py-5" style={shadow}>
              <div className="text-4xl text-start text-gray-500 font-bold pb-1 flex justify-center items-center "> <img src={props.image} alt={props.alt} width="120" /></div>
             <div className="text-xl px-3 font-medium flex  justify-center"><p className="pr-3">{props.Num}.</p>{props.Heading}</div>
             <div className="py-5 px-3 text-lg flex  justify-center items-center">{props.Content}</div>
        </section>

      
    </div>
  )
}

export default StudentOffer
