import { FcAcceptDatabase, FcApproval, FcCurrencyExchange, FcIdea, FcInTransit } from "react-icons/fc";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './shortFeature.css';

// import required modules
import { Pagination } from 'swiper/modules';

const ShortFeature = () => {
    return (
        <div className='my-10 px-5'>
            <Swiper
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile (small screens)
                    640: { slidesPerView: 2, spaceBetween: 15 }, // Tablets
                    1024: { slidesPerView: 3, spaceBetween: 20 }, // Laptops
                    // 1440: { slidesPerView: 4, spaceBetween: 25 }, // Large screens
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper text-[#22292f]"
            >
                <SwiperSlide className='featureSlide'>
                    <div className='bg-gradient-to-br px-1 from-green-50 to-green-400 rounded-xl h-full flex justify-center items-center w-full '>
                        <div className='space-y-2'>
                            <div className="mt-5 ">
                                <FcApproval className="mx-auto w-20 h-20" />
                            </div>
                            <h4 className='font-bold text-xl text-[#22292f]'>Explore Top Models</h4>
                            <p className='text-sm text-gray-600'> Find the perfect bike easily.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='featureSlide'>
                    <div className='bg-gradient-to-br px-1 from-orange-50 to-orange-400 rounded-xl h-full flex justify-center items-center w-full '>
                        <div className='space-y-2'>
                            <div className="mt-5 ">
                                <FcAcceptDatabase className="mx-auto w-20 h-20" />
                            </div>
                            <h4 className='font-bold text-xl'>Unbeatable Deals</h4>
                            <p className='text-sm text-gray-600'>Get bikes at the best price.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='featureSlide'>
                    <div className='bg-gradient-to-br px-1 from-blue-50 to-blue-400 rounded-xl h-full flex justify-center items-center w-full '>
                        <div className='space-y-2'>
                            <div className="mt-5 ">
                                <FcIdea className="mx-auto w-20 h-20" />
                            </div>
                            <h4 className='font-bold text-xl'>100% Safe Purchase</h4>
                            <p className='text-sm text-gray-600'>Buy from trusted, verified sellers.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='featureSlide'>
                    <div className='bg-gradient-to-br px-1 from-yellow-50 to-yellow-400 rounded-xl h-full flex justify-center items-center w-full '>
                        <div className='space-y-2'>
                            <div className="mt-5 ">
                                <FcCurrencyExchange className="mx-auto w-20 h-20" />
                            </div>
                            <h4 className='font-bold text-xl'>Flexible Payment Plans</h4>
                            <p className='text-sm text-gray-600'>Hassle-free loan & EMI options.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='featureSlide'>
                    <div className='bg-gradient-to-br px-1 from-indigo-50 to-indigo-400 rounded-xl h-full flex justify-center items-center w-full '>
                        <div className='space-y-2'>
                            <div className="mt-5 ">
                                <FcInTransit className="mx-auto w-20 h-20" />
                            </div>
                            <h4 className='font-bold text-xl'>Fast Bike Delivery</h4>
                            <p className='text-sm text-gray-600'>Fast Bike Delivery</p>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default ShortFeature;