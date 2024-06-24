import { useEffect, useState } from "react"

function StudentStories() {
    // const carsouelItem={
    //     height:'20rem',
    //     minWidth:'100%',
    //     width:'100%',
    //     display:"flex",
    //     alignItem:"center",
    //     justifyContent:"center",
    //     transition:'1s cubic-bezier(0.39,0.575,0.565,1)'
//     // }
//    const data =["item1","item2","item3"]
//    const [currentIndex,setCurrentIndex] = useState(0)
//    const carsouelInfiniteScroll = () =>{
//     if(currentIndex === data.length-1){
//         return setCurrentIndex(0)
//     }
//     return setCurrentIndex(currentIndex+1)
//    }
//    useEffect(()=>{
//      const interval = setInterval(() => {
//           carsouelInfiniteScroll()
//      },3000);
//      return () => clearInterval(interval)
//    })
   const [index, setIndex] = useState(0);
   const length = 3;
   const handlePrevious = () => {
     const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
   };
   
   const handleNext = () => {
     const newIndex = index + 1;
     setIndex(newIndex >= length ? 0 : newIndex);
   };
   const slider = () =>{
    if(index ===  length){
        return setIndex(0)
    }
    return setIndex(index+1)
   }
   useEffect(()=>{
     const interval = setInterval(()=>{slider()},3000)
     return ()=>clearInterval(interval)
   })
   
  return (
    <>
    {
    // <div>
    //      <section className="bg-[#f1f1f1] text-black flex flex-nowrap overflow-hidden">
          
    //             {
    //                 data.map((item,i)=>{
    //                     return <h1  key={i} className="h-80 min-w-full w-full bg-red-400 flex items-center justify-center" style={{transform:`translate(-${currentIndex*100}%)`}}>
    //                       {item}
    //                     </h1>
    //                 })
    //             }
        
    //      </section>

    // </div>
    }
    <div className="carousel text-black">
    <button onClick={handlePrevious}>Previous</button>
    <button onClick={handleNext}>Next</button>
    <p>{index}</p>
  </div>
            
      </>    
            
             
  )
  
}

export default StudentStories
