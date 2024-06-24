/* eslint-disable react/prop-types */

function StorySection ({testiMonialDetail}) {
    const {name, description, img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    const shadow= {
        boxshadow: '0 19px 38px rgba(0,0,0,0.10), 0 15px 12px rgba(0,0,0,0.02)'
    }
    return (
        <div className="item">
            <div className="bg-[#007aff] relative p-8 rounded-3xl text-center border-2 border-[#ECECEC] " style={shadow}>
             <p className="text-sm pb-5">{description}</p>
             <div className="testimonial-name">
             <img className="img-circle" src={img} />
             <span className="text-black">{name}</span> 
             </div>
            </div>
        </div>
    );
}

export default StorySection
