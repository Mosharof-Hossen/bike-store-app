import brand1 from "../../assets/brands/brand1.png"
import brand2 from "../../assets/brands/brand2.png"
import brand3 from "../../assets/brands/brand3.png"
import brand4 from "../../assets/brands/brand4.png"
import brand5 from "../../assets/brands/brand5.png"
import brand6 from "../../assets/brands/brand6.png"
import brand7 from "../../assets/brands/brand7.jpg"
import brand8 from "../../assets/brands/brand8.png"
const BrandSection = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800 mt-10">
            <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
                <h2 className="text-3xl font-bold">Fully Connected with</h2>
                <div className="flex flex-wrap justify-center lg:justify-between">
                    <div className="w-16 h-1w-16 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600">
                        <img src={brand1} alt="" />
                    </div>
                    <div className="w-16 h-1w-16 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600">
                        <img src={brand2} alt="" />
                    </div>
                    <div className="w-16 h-1w-16 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600">
                        <img src={brand3} alt="" />
                    </div>
                    <div className="w-16 h-1w-16 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600">
                        <img src={brand4} alt="" />
                    </div>
                    <div className="w-16 h-1w-16 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600">
                        <img src={brand5} alt="" />
                    </div>
                    <div className="w-16 h-1w-16 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600">
                        <img src={brand6} alt="" />
                    </div>
                    <div className="w-16 h-1w-16 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600">
                        <img src={brand7} alt="" />
                    </div>
                    <div className="w-16 h-1w-16 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600">
                        <img src={brand8} alt="" />
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default BrandSection;