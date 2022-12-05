import { useState, useEffect } from "react";
import Axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/Home.css";

const Home = () => {

    return(
        <>

        <div className="page text-center">
            <div className="container">
                <div className="row">
                    <div className="col">

                    <h1 className="text-info">Home Page</h1>
                    <h5 className="info text-danger">Welcome to our Ecommerce site!</h5>
                
                    </div>
                </div>

                <div className="row2">
                    <div className="col">
                   
                    <div className="swiper-info">
                        <h4 className="mt-3 text-danger">Below are some available products</h4>
                    </div>

                   <Swiper
                   spaceBetween={30}
                   centeredSlides={true}
                   autoplay={{
                       delay: 2500,
                       disableOnInteraction: false,
                   }}
                   pagination={{
                       clickable: true,
                   }}
                   navigation={true}
                   modules={[Autoplay, Pagination, Navigation]}
                   className="mySwiper">

                   <SwiperSlide><img src="https://i.ebayimg.com/images/g/Yc4AAOSwx9ZawmaT/s-l500.jpg" className="mt-1 p-3" width="200" alt="Nokia Brick 3310"></img></SwiperSlide>
                   <SwiperSlide><img src="https://cdn.pixabay.com/photo/2016/09/10/15/45/marbles-1659398__340.jpg" className="mt-1 p-3" width="200"></img></SwiperSlide>
                   <SwiperSlide><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTz_fkW2zsvdMa23-glIYpoz1ERy3JD1J4UN2a3ERIcAG65CQWx" className="mt-1 p-3" width="200"></img></SwiperSlide>
                   <SwiperSlide><img src="https://cdn.pixabay.com/photo/2021/02/04/04/34/rubiks-cube-two-layer-solved-5980245__340.jpg" className="mt-1 p-3" width="200"></img></SwiperSlide>
                   </Swiper>

       
                    </div>
                </div>

            </div>
        </div>
        
        </>
    )

}

export default Home;