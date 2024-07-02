/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Forms() {
  // const [image,setImage] = useState('')
  const [formData, setformData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    State: "",
    Country: "",
    Comments: "",
    });
   
    // const forminput = new FormData();
    // forminput.append("FirstName",formData.FirstName)
    // forminput.append("LastName",formData.LastName)
    // forminput.append("Email",formData.Email)
    // forminput.append("Phone",formData.Phone)
    // forminput.append("State",formData.State)
    // forminput.append("Country",formData.Country)
    // forminput.append("Comments",formData. Comments)

  const Storedata = async () => {
    console.log("Post Here");
    await axios.post("http://localhost:3000/api/global/userdata", 
        formData    
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Data Save");
          window.location.reload();
        } else {
          alert("Try Again");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleForm = (e) => {
    const { name, value } = e.target
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const Onsubmit = (event) => {
    event.preventDefault();
    Storedata();
    console.log(formData);
  };
  return (
    <div>
  
      <section className=" p-4 relative grid grid-rows-1  md:flex flex-row-reverse md:gap-0 gap-8 ">
      
        <div className="md:max-w-[40%] md:px-10 pt-16">
        {

          // <div className="md:text-6xl underline text-3xl font-medium  text-blue-800">
          //   Contact Us
          // </div>
        }
          <div className="md:text-[1.2vw] font-semibold py-5">
            Ready to take your EdTech business to the next level? Contact us
            today to learn more about how Global EDTech Services can be the
            catalyst for your growth. Let's work together to achieve your goals
            and transform the future of education.
          </div>
          <div>
            <p className="text-xl flex flex-wrap font-bold">
              Email:
              <Link
                to="mailto: info@worldoassignment.com"
                className="underline text-blue-800"
              >
              info@worldoassignment.com.
              </Link>
            </p>
            <p className="text-xl font-bold">
              Phone: IN:
              <Link to="tel:+917814688725 " className="underline text-blue-800">
                ++91 7814688725
              </Link>
            </p>
          </div>
        </div>
        <div className=" px-10 py-5 bg-gray-200  shadow-2xl rounded-md">
          <div className="text-2xl font-bold py-3">
            Contact Form <p className="border-2 w-16 border-blue-600"></p>
          </div>
          <form action="" onSubmit={Onsubmit}  encType="multipart/form-data" className="relative w-full  flex flex-col ">
            <div className="grid grid-cols-2 gap-10 w-full ">
              <div className="">
                <input
                  type="text"
                  name="FirstName"
                  placeholder="FirstName*"
                  id=""
                  required
                  value={formData.FirstName}
                  onChange={handleForm}
                  className=" h-11 border-2 w-full my-1 px-2 border-black rounded-2xl bg-transparent"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="LastName"
                  placeholder="LastName*"
                  id=""
                  required
                  value={formData.LastName}
                  onChange={handleForm}
                  className=" h-11 border-2 w-full my-1 px-2 bg-transparent border-black rounded-2xl"
                />
              </div>
            </div>
            {
              // <div className="grid grid-cols-[repeat(2,minmax(min-content,400px))] gap-x-2">
            }
            <div className="grid grid-cols-2 gap-x-10">
              <div>
                <input
                  type="text"
                  name="Email"
                  placeholder="Email*"
                  id=""
                  required
                  value={formData.Email}
                  onChange={handleForm}
                  className=" h-11 border-2 w-full my-1 px-2 bg-transparent border-black rounded-2xl"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="Phone"
                  placeholder="Phone*"
                  id=""
                  required
                  value={formData.Phone}
                  onChange={handleForm}
                  className=" h-11 border-2 w-full my-1 px-2 bg-transparent border-black rounded-2xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-10">
              <div>
                <input
                  type="text"
                  name="State"
                  placeholder="State*"
                  id=""
                  required
                  value={formData.State}
                  onChange={handleForm}
                  className=" h-11 border-2 w-full my-1 px-2 bg-transparent border-black rounded-2xl"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="Country"
                  placeholder="Country*"
                  id=""
                  required
                  value={formData.Country}
                  onChange={handleForm}
                  className=" h-11 border-2 w-full my-1 px-2 bg-transparent border-black rounded-2xl"
                />
              </div>
            </div>
            {
            // <div className="">
            //   <input
            //     type="file"
            //     name="avatar"
            //     placeholder="avatar*"
            //     id=""
            //     required
            //     onChange={(e)=>setImage(e.target.files[0])}
            //     className=" h-11 border-2 w-full my-1 px-2 bg-transparent py-2 border-bl2ck ro-1xlunded"
            //   />
            // </div>
            
            <div>
              <textarea
                name="Comments"
                placeholder="Comments*"
                id=""
                cols=""
                rows="3"
                required
                value={formData.Comments}
                onChange={handleForm}
                className="w-full border-2 border-black bg-transparent rounded-2xl p-2"
              ></textarea>
            </div>
            }
            <div className=" md:text-[1.1vw] font-[600] px-2">
              By submitting this form, you acknowledge that you consent to the
              storage and processing of your personal information by Everbridge
              as described in the Privacy Policy.
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="py-2 px-5 bg-blue-800 hover:bg-blue-900 text-xl font-medium text-white rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
   
    </div>
  );
}

export default Forms;
