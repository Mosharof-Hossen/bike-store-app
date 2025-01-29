
import { FaAngleDoubleRight, } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import PriceRangeFilter from "./PriceRangeFilter";
import { useGetAllProductsQuery } from "../../redux/features/products/product.api";
import { TProduct } from "../../types/productsType";
import { TMeta, } from "../../types/global.type";
import CustomSpinner from "../../components/Spinner/CustomSpinner";
import ProductCart from "../../components/Products/ProductCart";

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
    // const [params, setParams] = useState<TQueryParams[]>([]);
    // const itemPerPage = 2;
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [priceLimit, setPriceLimit] = useState("0-10000")

    const { register, watch } = useForm({
        defaultValues: {
            categories: [],
            stock: false,
            search: '',
            sort: "",
            brand: []
        }
    })
    const selectedCategories = watch("categories");
    const isStock = watch("stock");
    const searchQuery = watch('search');
    const sort = watch("sort")
    const brand = watch("brand")
    const queryParams = {
        searchTerm: searchQuery || undefined,
        category: selectedCategories.length > 0 ? selectedCategories.join(',') : undefined,
        brand: brand.length > 0 ? brand.join(',') : undefined,
        filterPrice: priceLimit || undefined,
        sort: sort || undefined,
        inStock: isStock || undefined,
        page: currentPage || undefined,
    };
    console.log({queryParams});
    const handlePriceChange = (minPrice: number, maxPrice: number) => {
        setPriceLimit(`${minPrice}-${maxPrice}`)
    }

    const { data, isFetching, } = useGetAllProductsQuery(queryParams) as {
        data?: {
            data?: TProduct[],
            meta?: TMeta;
        };
        isFetching: boolean;
    };

    console.log({data});


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
                                    <option value={""}>Random Price</option>
                                    <option value={"price"}>Price: Low to High</option>
                                    <option value={"-price"}>Price: High to Low</option>
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

                            </div>
                    }
                    <div className="flex justify-center mt-5 space-x-1">
                        {
                            [...Array(data?.meta?.totalPage)].map((i, page) => <button
                                key={page}
                                className={currentPage == page + 1 ? "  bg-[#22292f] text-white btn btn-circle p-4 text-xl" : "btn btn-circle"}
                                onClick={() => {
                                    console.log(i);
                                    setCurrentPage(page + 1)
                                }}
                            >
                                {page + 1}
                            </button>)
                        }
                    </div>

                </div>

                {/* Side bar */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-base-200 text-base-content min-h-full lg:w-48 w-52 p-4 lg:mt-0 mt-16">
                        <div className="space-y-2">
                            <div className=" font-semibold ">
                                <form action="" className="space-y-2">
                                    <PriceRangeFilter min={0} max={10000} onChange={handlePriceChange}></PriceRangeFilter>

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
                                                        topBikeBrands?.map((brand: string) =>
                                                            <div key={brand} className="form-control">
                                                                <label className="label cursor-pointer flex justify-start gap-3">
                                                                    <input value={brand} {...register('brand')} type="checkbox" className="checkbox" />
                                                                    <p>{brand}</p>
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
                                <input  {...register('stock')} type="checkbox" className="checkbox" />
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