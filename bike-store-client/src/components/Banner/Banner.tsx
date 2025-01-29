import { FaArrowAltCircleRight, } from "react-icons/fa";
import banner1 from "../../assets/banner/banner1.jpg"
import banner2 from "../../assets/banner/banner2.jpg"
import banner3 from "../../assets/banner/banner3.jpg"
import banner4 from "../../assets/banner/banner4.jpg"
import { Link } from "react-router-dom";

const Banner = () => {

    return (
        <>
           
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div
                        className="hero h-[550px]"
                        style={{
                            backgroundImage: `url(${banner1})`,
                        }}>
                        <div className="hero-overlay"></div>
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
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>



                <div id="slide2" className="carousel-item relative w-full">
                    <div
                        className="hero h-[550px]"
                        style={{
                            backgroundImage: `url(${banner2})`,
                        }}>
                        <div className="hero-overlay"></div>
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
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div
                        className="hero h-[550px]"
                        style={{
                            backgroundImage: `url(${banner3})`,
                        }}>
                        <div className="hero-overlay"></div>
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
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div
                        className="hero h-[550px]"
                        style={{
                            backgroundImage: `url(${banner4})`,
                        }}>
                        <div className="hero-overlay"></div>
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
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;