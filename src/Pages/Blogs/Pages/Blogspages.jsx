import { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink, useParams } from "react-router-dom";
import { Blogsdata } from "./BlogData";
function Blogspages() {
  const param = useParams();
  const [blogs, setBlogs] = useState(null);
  useState(() => {
    let blog = Blogsdata.find((blog) => blog.id === parseInt(param.id));
    if (blog) {
      setBlogs(blog);
    }
  }, [blogs]);

  let options = {
    autoplay: true,
    animateout: "slideOutUP",
    center:true,
    nav: true,
    dots: true,
    margin: 17,
    
    responsive: {
      1100: {
        items: 3,
      },
      724: {
        items: 3,
      },
      500: {
        items: 2,
      },
      370: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },
      120: {
        items: 1,
      },
    },
  };

  console.log(blogs);

  return (
    <div className=" mt-20 text-black reltive bg-gray-50 py-10">
      {blogs ? (
        <section className="relative lg:max-w-[992px] max-w-[1200px] mx-auto my-0  block ">
          <div className="flex">
            <NavLink reloadDocument to="/blogs">
              <button className="px-6 py-2 text-lg rounded-xl hover:bg-orange-400 bg-orange-500 ">
                Go to back
              </button>
            </NavLink>
          </div>
          {
            <main className="py-44">
            {

           
              // <div className="block relative pb-[66.66%] h-0 overflow-hidden max-w-[1200px]   mx-auto ">
              //   <div className="absolute top-0 left-0 right-0 bottom-0  my-6 ">
              //     <img
              //       src={blogs.Images}
              //       alt="taj mahal "
              //       className=" object-fill w-full h-full block aspect-auto"
              //     />
              //   </div>
              // </div>
            }
              <article className="relative bg-white max-w-[1190px] mx-auto -mt-40 rounded-xl shadow-2xl ">
                <div className="flex flex-col p-8">
                  <header className="md:text-5xl text-[4vmax] font-bold">
                    {blogs.heading}
                  </header>
                  <ul className="flex gap-x-3 py-5">
                    <li className=" capitalize">published Mariellen Ward</li>
                    <li className=" "> July 25, 2022</li>
                  </ul>
                  <figure>
                    <img
                      src="https://indiaforbeginners.com/wp-content/uploads/2022/07/MW-Taj-Mahal-2019-edited.jpg"
                      alt=""
                    />
                  </figure>
                  <h1 className="md:text-4xl text-[3vmax] font-medium py-10 text-orange-500">
                    Welcome To The India For Beginners Travel Blog
                  </h1>
                  <p className="md:text-xl text-justify py-5 leading-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Distinctio harum dignissimos recusandae laboriosam iste
                    omnis exercitationem architecto, doloribus quam vel cumque
                    aspernatur accusamus ex, porro quas quod nam molestiae
                    sequi.
                  </p>

                  <p className="md:text-xl text-justify py-5 leading-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate beatae, dolorum ullam reprehenderit pariatur a
                    dicta nemo commodi quis odio delectus odit vitae architecto
                    eum ipsa aperiam, dolorem ab earum. Lorem ipsum dolor, sit
                    amet consectetur adipisicing elit. Voluptatum, odio
                    possimus. Facere voluptas distinctio velit, non quos modi
                    numquam aspernatur eos aperiam illum, quae fuga impedit iure
                    vero blanditiis amet iusto fugiat dolorem. Reprehenderit
                    obcaecati possimus sit? Adipisci, eum ea?
                  </p>

                  <p className="md:text-xl text-justify py-5 leading-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolores rerum sit laudantium reprehenderit recusandae nisi
                    libero expedita adipisci voluptas aut rem a amet impedit
                    doloremque sapiente, inventore distinctio at voluptate natus
                    voluptates odio! Eius facere dolores expedita fugit magni
                    accusamus!
                  </p>
                </div>
              </article>

              <div className="text-5xl py-7 text-orange-500 font-bold text-center">
                Similar Blogs
              </div>
              <OwlCarousel
              id="Owl-carsouel"
                loop
                margin={10}
                dotsEach
                className="owl-theme"
                {...options}
              >
                {Blogsdata.map((item, indx) => {
                  return (
                    <section
                      key={indx}
                      className=" hover:scale-105 hover:bg-white hover:p-3 cursor-pointer max-w-[400px] border-2 h-auto rounded-xl overflow-hidden  shadow-lg"
                    >
                      <div>
                        <img src={item.Images} alt={item.Alt} className="" />
                      </div>
                      <div className="flex flex-col justify-center py-3 items-start px-4 ">
                        <div className="text-black text-sm font-medium pb-2">
                          {item.heading}
                        </div>
                        <div className="text-black text-xl font-medium pb-2">
                          {item.heading}
                        </div>
                        <div className="text-black text-sm font-normal pb-3">
                          {item.Date}
                        </div>
                        <div className="flex  ">
                          <NavLink to={`/Blogspage/${item.id}`}>
                            <button className="py-2 px-6 bg-orange-500 hover:bg-orange-400 rounded-xl">
                              Read More
                            </button>
                          </NavLink>
                        </div>
                      </div>
                    </section>
                  );
                })}
              </OwlCarousel>
            </main>
          }
        </section>
      ) : (
        "Loading ........."
      )}
    </div>
  );
}

export default Blogspages;
