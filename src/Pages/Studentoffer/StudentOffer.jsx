/* eslint-disable react/prop-types */


function StudentOffer(props) {
  const shadow = {
      boxShadow:"-47px 0px 34px 0px #ddd"
  }

  return (
    <div>
            
        <section className="px-4 bg-gray-100 h-64  py-10" style={shadow}>
             <div className="text-4xl text-start text-gray-500 font-bold pb-10">{props.Num}</div>
             <div className="text-xl px-3 font-medium">{props.Heading}</div>
             <div className="py-7 px-3 text-lg ">{props.Content}</div>
        </section>

      
    </div>
  )
}

export default StudentOffer
