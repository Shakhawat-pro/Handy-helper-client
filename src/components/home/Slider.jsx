import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle"
import 'swiper/css'
import "./styles.css"

import { Navigation, Autoplay, Pagination} from 'swiper/modules';

const Slider = () => {
    return (
        <div className="mx-auto rounded-3xl overflow-clip z-1 mt-16 lg:mt-10" data-aos="flip-up" data-aos-delay="150">

            <Swiper
                    style={{
                        '--swiper-navigation-color': '#23BE0A',
                        '--swiper-pagination-color': '#23BE0A',
                    }}
             navigation={true} 
             autoplay={{
                delay: 1800,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
            modules={[Navigation, Autoplay, Pagination]}
            loop={true}
            >
                <SwiperSlide>
                    <div className="slide slide-1  flex flex-col" data-aos="fade-up" >
                        <h1 className='text-[#23BE0A] text-2xl lg:text-7xl font-bold mb-6 ' data-aos="zoom-in-down" >Bangladesh</h1>
                        <p className=" w-10/12 text-sm lg:text-md text-white  text-center">Bangladesh, South Asia gem, features diverse landscapes, ancient history, and bustling cities like Dhaka. Known for its delectable cuisine and the UNESCO-listed Sundarbans.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide-2 flex flex-col ">
                        <h1 className='text-[#23BE0A] text-2xl lg:text-7xl font-bold mb-6'>Borobudur Temple</h1>
                        <p className=" w-10/12 text-sm lg:text-md text-white  text-center">Borobudur Temple: Majestic Buddhist monument in Central Java, Indonesia. UNESCO World Heritage Site. Intricate carvings depict Buddhist teachings. Popular tourist destination and sacred pilgrimage site.</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide-3 flex flex-col ">
                        <h1 className='text-[#23BE0A] text-2xl lg:text-7xl font-bold mb-6'>Bangkok</h1>
                        <p className=" w-10/12 text-sm lg:text-md text-white  text-center">Bustling capital of Thailand known for its vibrant street life, ornate shrines, and dynamic nightlife. Rich cultural heritage, modern skyscrapers, and bustling markets attract millions of visitors annually. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide-4 flex flex-col ">
                        <h1 className='text-[#23BE0A] text-2xl lg:text-7xl font-bold mb-6'>Cameron Highlands</h1>
                        <p className=" w-10/12 text-sm lg:text-md text-white  text-center">Idyllic hill station in Malaysia renowned for its cool climate, tea plantations, and strawberry farms. Offers scenic hikes, lush landscapes, and a peaceful retreat from urban life.</p>
                    </div>

                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Slider;



