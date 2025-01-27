
import { FaAngleDoubleRight, FaArrowRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import PriceRangeFilter from "./PriceRangeFilter";
import { useGetAllProductsQuery } from "../../redux/features/products/product.api";
import { TProduct } from "../../types/productsType";
import { TMeta } from "../../types/global.type";
import CustomSpinner from "../../components/Spinner/CustomSpinner";
import ProductCart from "../../components/Products/ProductCart";
import { Link } from "react-router-dom";

const categories: string[] = ['Mountain', 'Road', 'Hybrid', 'Electric'];
const topBikeBrands: string[] = [
    "Honda",
    "Yamaha",
    "Kawasaki",
    "Ducati",
    "Suzuki",
    "BMW Motorrad",
    "KTM",
    "Harley-Davidson",
    "Royal Enfield",
    "TVS"
];

const Shop = () => {
    const { data, isFetching } = useGetAllProductsQuery(undefined) as {
            data?: {
                data?: TProduct[],
                meta?: TMeta;
            };
            isFetching: boolean;
        };
        console.log(data, isFetching);




    const [viewItem, setViewItem] = useState({})

    const itemPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const { register, watch } = useForm({
        defaultValues: {
            categories: [],
            discounted: false,
            search: '',
            sort: ""
        }
    })
    const selectedCategories = watch("categories");
    const isDiscounted = watch("discounted");
    const searchQuery = watch('search');
    const sort = watch("sort")

    const viewItemFunction = (item) => {
        setViewItem(item);
        // document.getElementById('my_modal_2').showModal()
    }
    const handlePriceChange = (minPrice: number, maxPrice: number) => {
        console.log({ minPrice, maxPrice });
    }
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content here */}
                    <div>
                        <div className="p-5">
                            <label className="input input-bordered flex items-center gap-2 md:w-2/3 mx-auto">
                                <input type="text" {...register('search')} className="grow " placeholder="Search Name" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                            </label>
                        </div>
                        <div className="flex  items-center">
                            <label htmlFor="my-drawer-2" className="btn mr-auto mx-5 drawer-button lg:hidden">
                                Filter <FaAngleDoubleRight className="text-2xl" />
                            </label>
                            <div className="flex justify-center items-center mx-5 text-gray-500">
                                <span className="w-24">Sort by:</span>
                                <select  {...register("sort")} className="select select-bordered w-full max-w-xs">
                                    <option value={sort} disabled >Select an Option</option>
                                    <option value={"low-to-high"}>Price: Low to High</option>
                                    <option value={"high-to-low"}>Price: High to Low</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    {
                        isFetching ?
                            <CustomSpinner></CustomSpinner>
                            :
                            <div className="p-5">
                                <div className=' grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-8 px-2 md:px-0'>
                                    {
                                        data?.data?.map((item: TProduct) => <ProductCart key={item._id} item={item}></ProductCart>)
                                    }
                                </div>
                                <div className='flex justify-center mt-8'>
                                    <Link to={"/shop"}><button className="btn bg-[#22292f] hover:bg-black text-white">More <FaArrowRight></FaArrowRight></button></Link>
                                </div>
                            </div>
                    }
                    <div className="flex justify-center mt-5">
                        {/* {
                            [...Array(data?.totalPage).keys()].map(page => <button
                                key={page}
                                className={currentPage == page + 1 ? "text-xl px-5 bg-primary-c text-white py-3 mx-1 border-2 rounded-full" : "text-xl px-5 py-3 mx-1 border-2 rounded-full"}
                                onClick={() => setCurrentPage(page + 1)}
                            >

                                {page + 1}
                            </button>)
                        } */}
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-base-200 text-base-content min-h-full lg:w-48 w-52 p-4 lg:mt-0 mt-16">
                        <div className="space-y-2">
                            <div className=" font-semibold ">
                                <form action="" className="space-y-2">
                                    <PriceRangeFilter min={0} max={1500} onChange={handlePriceChange}></PriceRangeFilter>

                                    <ul className=" bg-base-200 rounded-box w-full">
                                        <li>
                                            <details open className="">
                                                <summary className="text-lg font-semibold text-[#22292f] px-2 mb-1">Categories</summary>
                                                <ul className="space-y-1">
                                                    {
                                                        categories?.map((category: string) =>
                                                            <div key={category} className="form-control">
                                                                <label className="label cursor-pointer flex justify-start gap-3">
                                                                    <input value={category} {...register('categories')} type="checkbox" className="checkbox" />
                                                                    <p>{category}</p>
                                                                </label>
                                                            </div>
                                                        )
                                                    }
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                    <ul className=" bg-base-200 rounded-box w-full">
                                        <li>
                                            <details open className="">
                                                <summary className="text-lg font-semibold text-[#22292f] px-2 mb-1">Bike Brand</summary>
                                                <ul className="space-y-1">
                                                    {
                                                        topBikeBrands?.map((category: string) =>
                                                            <div key={category} className="form-control">
                                                                <label className="label cursor-pointer flex justify-start gap-3">
                                                                    <input value={category} {...register('categories')} type="checkbox" className="checkbox" />
                                                                    <p>{category}</p>
                                                                </label>
                                                            </div>
                                                        )
                                                    }
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <label className="label cursor-pointer flex justify-start gap-3">
                                <input  {...register('discounted')} type="checkbox" className="checkbox" />
                                <h4 className="text-lg font-semibold text-[#22292f]">InStock</h4>
                            </label>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;