import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Testimonial.css'
import StorySection from '../StudentStories/StorySection';

const TestiMonials = () => {
  
    const testiMonials = [
        {
            name: 'Rekob Ramya',
            description: "Our college professors generally assign a lot of homework for us. I am a finance major and always feel that I have a lot on my plate. I tried to do it but wasn't able to finish all of them. I found TutorBin online and desperately asked for help. Their experts do all my homework correctly with explanations. I can’t thank you enough for that.”",
            address: 'USA',
            img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
        },
        {
            name: 'Brandon Savage',
            description: "Our college professors generally assign a lot of homework for us. I am a finance major and always feel that I have a lot on my plate. I tried to do it but wasn't able to finish all of them. I found TutorBin online and desperately asked for help. Their experts do all my homework correctly with explanations. I can’t thank you enough for that.”",
            address: 'USA',
            img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
        },
        {
            name: 'Steve Burns',
            description: "Our college professors generally assign a lot of homework for us. I am a finance major and always feel that I have a lot on my plate. I tried to do it but wasn't able to finish all of them. I found TutorBin online and desperately asked for help. Their experts do all my homework correctly with explanations. I can’t thank you enough for that.”",
            address: 'USA',
            img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: "Our college professors generally assign a lot of homework for us. I am a finance major and always feel that I have a lot on my plate. I tried to do it but wasn't able to finish all of them. I found TutorBin online and desperately asked for help. Their experts do all my homework correctly with explanations. I can’t thank you enough for that.”",
            address: 'USA',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 6000,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70  flex justify-center   ">
            <div className="container  mt-5 max-w-[1300px] mx-auto">
                 <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme " {...options}>
                            {
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <StorySection testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;