
// export default function Home() {
//   return (
//     <>


// <div className="carousel rounded-box">
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
//       alt="Burger" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
//       alt="Burger" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
//       alt="Burger" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
//       alt="Burger" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
//       alt="Burger" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
//       alt="Burger" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
//       alt="Burger" />
//   </div>
// </div>
    
//     </>
//   )
// }




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function Home() {


  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
      <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Burger" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
        alt="Burger" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
        alt="Burger" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
        alt="Burger" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
        alt="Burger" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};