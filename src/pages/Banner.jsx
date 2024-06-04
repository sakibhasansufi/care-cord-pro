
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from '../assets/1.jpg'
import pic2 from '../assets/2.jpg'
import pic3 from '../assets/3.jfif'
import pic4 from '../assets/4.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={pic1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic4} />
                </SwiperSlide>
                
                
            </Swiper>
        </div>
    );
};

export default Banner;