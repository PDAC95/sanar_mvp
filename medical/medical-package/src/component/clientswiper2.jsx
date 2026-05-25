import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { clientswiperdata2 } from "../constant/alldata";

function Clientswiper2() {
    return (
        <>
            <div className="content-inner-4">
                <div className="container">
                    <Swiper className="swiper client-swiper"
                        spaceBetween={30}
                        slidesPerView={6}
                        loop={true}
                        autoplay={{ delay: 3000, }}
                        modules={[Autoplay]}
                        breakpoints={{
                            1200: { slidesPerView: 6, },
                            991: { slidesPerView: 4, },
                            575: { slidesPerView: 3, },
                            320: { slidesPerView: 2, },
                        }}
                    >
                        {clientswiperdata2.map((item, i) => (
                            <SwiperSlide key={i} className="wow fadeInUp" data-wow-delay={item.delay} data-wow-duration="0.7s">
                                <div className="clients-logo1">
                                    <img src={item.image} alt="" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
export default Clientswiper2;