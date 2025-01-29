import { FcAcceptDatabase, FcApproval, FcCurrencyExchange, FcIdea, FcInTransit } from "react-icons/fc";
import { Swiper, SwiperSlide } from 'swiper/react';
import person1 from "../../assets/viewers/member1.png"
import person2 from "../../assets/viewers/member2.png"
import person3 from "../../assets/viewers/member3.png"
import person4 from "../../assets/viewers/member4.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Review.css';

// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from "../SectionTitle/SectionTitle";

const Review = () => {
    return (
        <div className='my-10 px-5'>
            <SectionTitle heading="Real Reviews from Riders" subHeading="See what customers say about this bike before buying."></SectionTitle>
            <Swiper
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile (small screens)
                    640: { slidesPerView: 2, spaceBetween: 15 }, // Tablets
                    // 1024: { slidesPerView: 3, spaceBetween: 20 }, // Laptops
                    // 1440: { slidesPerView: 4, spaceBetween: 25 }, // Large screens
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper  text-[#22292f]"
            >

                <SwiperSlide className='featureSlide h-20'>
                    <div className='bg-gray-200 rounded-xl h-full  flex justify-center items-center w-full '>
                        <div className='space-y-2 px-14'>
                            <div className="mt-5  w-20 h-20 mx-auto">
                                <img src={person1} alt="" className="mx-auto" />
                            </div>
                            <blockquote className="text-xs italic font-medium text-center">"Amazing bike with great mileage and smooth performance. Totally worth it!"</blockquote>
                            <div className="text-center text-sm dark:text-gray-600">
                                <p>Rahul Sharma</p>
                                <p>Sales Manager, SpeedX Motors</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='featureSlide'>
                    <div className='bg-gray-200 rounded-xl h-full flex justify-center items-center w-full '>
                        <div className='space-y-2 px-14'>
                            <div className="mt-5  w-20 h-20 mx-auto">
                                <img src={person2} alt="" className="mx-auto" />
                            </div>
                            <blockquote className="text-xs italic font-medium text-center">"Superb riding experience! The engine power and comfort are excellent."</blockquote>
                            <div className="text-center text-sm dark:text-gray-600">
                                <p>Emily Carter</p>
                                <p>Motorcycle Test Engineer, AutoTech Inc.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='featureSlide'>
                    <div className='bg-gray-200 rounded-xl h-full flex justify-center items-center w-full '>
                        <div className='space-y-2 px-14'>
                            <div className="mt-5  w-20 h-20 mx-auto">
                                <img src={person3} alt="" className="mx-auto" />
                            </div>
                            <blockquote className="text-xs italic font-medium text-center">"Best bike in this price range. Stylish design and fuel-efficient!"</blockquote>
                            <div className="text-center text-sm dark:text-gray-600">
                                <p>Hasan Ahmed</p>
                                <p>Marketing Executive, RidePro Ltd.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='featureSlide'>
                    <div className='bg-gray-200 rounded-xl h-full flex justify-center items-center w-full '>
                        <div className='space-y-2 px-14'>
                            <div className="mt-5  w-20 h-20 mx-auto">
                                <img src={person4} alt="" className="mx-auto" />
                            </div>
                            <blockquote className="text-xs italic font-medium text-center">"Great build quality and speed. Perfect choice for daily commuting!"</blockquote>
                            <div className="text-center text-sm dark:text-gray-600">
                                <p>Jason Lee</p>
                                <p>Product Analyst, MotoGear Solutions</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Review;