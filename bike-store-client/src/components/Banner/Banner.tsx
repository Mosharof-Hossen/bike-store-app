import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowAltCircleRight, } from "react-icons/fa";
import banner1 from "../../assets/banner/banner1.jpg"
import banner2 from "../../assets/banner/banner2.jpg"
import banner3 from "../../assets/banner/banner3.jpg"
import banner4 from "../../assets/banner/banner4.jpg"
import banner5 from "../../assets/banner/banner5.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import "./slideStyle.css"
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

const Banner = () => {

    return (
        <>
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
                className="mySwiper"
            >
                <SwiperSlide >
                    <div
                        className="hero h-[550px] bg-center bg-no-repeat bg-cover"
                        style={{
                            backgroundImage: `url(${banner1})`,
                        }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="md:max-w-lg max-w-md">
                                <p className='text-sm mb-2'>Affordable & Reliable</p>
                                <h1 className="mb-5 text-5xl font-bold"> Find Your Perfect Ride</h1>
                                <p className="mb-5">
                                    Browse a wide range of new and used bikes at the best prices. Buy your dream bike today!
                                </p>
                                <div className="mt-6">
                                    <Link to={"/shop"}><button className="btn bg-[#22292f] hover:bg-black text-white border-black text-xl">Explore <FaArrowAltCircleRight /></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div
                        className="hero h-[550px] bg-center bg-no-repeat bg-cover"
                        style={{
                            backgroundImage: `url(${banner2})`,
                        }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="md:max-w-lg max-w-md">
                                <p className='text-sm mb-2'>Exclusive & Budget-Friendly</p>
                                <h1 className="mb-5 text-5xl font-bold">Get the Best Deals</h1>
                                <p className="mb-5">
                                    Explore a wide range of bikes with competitive prices and exclusive discounts. Ride more, spend less!
                                </p>
                                <div className="mt-6">
                                    <Link to={"/shop"}><button className="btn bg-[#22292f] hover:bg-black text-white border-black text-xl">Buy Now <FaArrowAltCircleRight /></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div
                        className="hero h-[550px] bg-center bg-no-repeat bg-cover"
                        style={{
                            backgroundImage: `url(${banner3})`,
                        }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="md:max-w-lg max-w-md">
                                <p className='text-sm mb-2'>Stylish & High-Performance</p>
                                <h1 className="mb-5 text-5xl font-bold"> Ride with Confidence</h1>
                                <p className="mb-5">
                                    Choose from top brands and latest models with excellent features. Elevate your biking experience now!
                                </p>
                                <div className="mt-6">
                                    <Link to={"/shop"}><button className="btn bg-[#22292f] hover:bg-black text-white border-black text-xl">Explore <FaArrowAltCircleRight /></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div
                        className="hero h-[550px] bg-center bg-no-repeat bg-cover"
                        style={{
                            backgroundImage: `url(${banner4})`,
                        }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="md:max-w-lg max-w-md">
                                <p className='text-sm mb-2'>Simple & Hassle-Free</p>
                                <h1 className="mb-5 text-5xl font-bold"> Buy Your Bike Easily</h1>
                                <p className="mb-5">
                                    Enjoy a seamless bike-buying experience with trusted sellers and secure transactions. Ride stress-free!
                                </p>
                                <div className="mt-6">
                                    <Link to={"/shop"}><button className="btn bg-[#22292f] hover:bg-black text-white border-black text-xl">See More <FaArrowAltCircleRight /></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div
                        className="hero h-[550px] bg-center bg-no-repeat bg-cover"
                        style={{
                            backgroundImage: `url(${banner5})`,
                        }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="md:max-w-lg max-w-md">
                                <p className='text-sm mb-2'>Verified & Trusted</p>
                                <h1 className="mb-5 text-5xl font-bold"> Quality Bikes, Guaranteed</h1>
                                <p className="mb-5">
                                    Get thoroughly inspected bikes from reliable sellers with full assurance. Your safety is our priority!
                                </p>
                                <div className="mt-6">
                                    <Link to={"/shop"}><button className="btn bg-[#22292f] hover:bg-black text-white border-black text-xl">Buy Now <FaArrowAltCircleRight /></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
};

export default Banner;