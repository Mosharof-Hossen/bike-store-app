import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { TProduct } from '../../types/productsType';
import { useCreateProductMutation } from '../../redux/features/products/product.api';
import { toast } from 'sonner';
import { TResponse } from '../../types/global.type';
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
const CreateBike = () => {
    const [createBike] = useCreateProductMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },reset
    } = useForm({})


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log("bike", data);
        const productData = {
            ...data,
            quantity: Number(data.quantity),
            price: Number(data.price),
            inStock: Number(data.quantity) > 0,
        }
        const res = await createBike(productData) as TResponse<TProduct>;
        if (res.data) {
            toast.success("Bike added Successfully")
            reset()
        }
        if (res.error) {
            toast.success("Provide Valid data.")
        }
        console.log(productData);
    }




    return (
        <div>
            <SectionTitle heading='Showcase Your Bike to Buyers' subHeading='Quickly list your bike and attract potential buyers effortlessly.'></SectionTitle>
            <div className="w-full  md:px-20 px-10 space-y-3 rounded-xl    ">
                <h1 className="text-2xl font-bold text-center">Add Bike</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block ">Name</label>
                            <input type="text" id="name" placeholder="Name"  {...register("name", { required: true })} className="w-full px-4 py-3 rounded-md" />
                            {
                                errors?.name && <p><small className="text-red-500">Name is Required</small></p>
                            }
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="brand" className="block ">Brand</label>
                            <input type="text" id="brand" placeholder="Brand"  {...register("brand", { required: true })} className="w-full px-4 py-3 rounded-md" />
                            {
                                errors?.brand && <p><small className="text-red-500">Brand is Required</small></p>
                            }
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="image" className="block ">Image (URL Path)</label>
                            <input type="text" id="image" placeholder="Image"  {...register("image", { required: true })} className="w-full px-4 py-3 rounded-md" />
                            {
                                errors?.image && <p><small className="text-red-500">Image path is Required</small></p>
                            }
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="model" className="block ">Model</label>
                            <select  {...register("model", { required: true })} className="select select-neutral w-full">
                                {
                                    topBikeBrands?.map((model) => <option key={model}>{model}</option>)
                                }
                            </select>
                            {
                                errors?.model && <p><small className="text-red-500">Model is Required</small></p>
                            }
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="price" className="block ">Price</label>
                            <input type="text" id="price" placeholder="Price"  {...register("price", { required: true })} className="w-full px-4 py-3 rounded-md" />
                            {
                                errors?.price && <p><small className="text-red-500">Price is Required</small></p>
                            }
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="category" className="block ">Category</label>
                            <select  {...register("category", { required: true })} className="select select-neutral w-full">
                                {
                                    categories?.map((category) => <option key={category}>{category}</option>)
                                }
                            </select>
                            {
                                errors?.category && <p><small className="text-red-500">Category is Required</small></p>
                            }
                        </div>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="quantity" className="block ">Quantity</label>
                        <input type="text" id="quantity" placeholder="Quantity"  {...register("quantity", { required: true })} className="w-full px-4 py-3 rounded-md" />
                        {
                            errors?.quantity && <p><small className="text-red-500">Quantity is Required</small></p>
                        }
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="description" className="block ">Short Description</label>
                        <textarea placeholder="Short description........" {...register("description", { required: true })} className="textarea textarea-bordered textarea-lg text-justify w-full" />
                        {
                            errors?.description && <p><small className="text-red-500">Description is Required</small></p>
                        }
                    </div>


                    <button className="bg-[#22292f] hover:bg-black block w-full p-3 text-center text-white rounded-sm ">Add Product</button>

                </form>
            </div>
        </div>
    );
};

export default CreateBike;