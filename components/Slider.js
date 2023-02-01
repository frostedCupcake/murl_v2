'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';
import styles from '../styles';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, EffectCards, Navigation } from 'swiper';

const slideShowData = [
  {
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg',
    name: 'slide1',
  },
  {
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg',
    name: 'slide2',
  },
  {
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg',
    name: 'slide3',
  },
  {
    url: 'https://res.cloudinary.com/dbmw0xoar/image/upload/v1666629405/ecell/NetX/math_q80bw1.jpg',
    name: 'slide4',
  },
];

export default function Slider() {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6 mx-auto`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <Swiper
          grabCursor={true}
          pagination={true}
          navigation={true}
          loop={true}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          modules={[EffectCards, Autoplay, Pagination]}
          className="mySwiper w-[20rem] rounded-sm h-[15rem] sm:w-[30rem] sm:h-[20rem] lg:w-[50rem] lg:h-[30rem] "
        >
          {slideShowData.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item.url}
                alt={item.name}
                className="w-[10rem] h-[10rem]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        //{' '}
      </motion.div>
      //{' '}
    </section>
  );
}
