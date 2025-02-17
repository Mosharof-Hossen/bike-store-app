import { FaEdit, FaTrash } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useGetAllProductsQuery } from '../../redux/features/products/product.api';
import { TMeta } from '../../types/global.type';
import { TProduct } from '../../types/productsType';
import Swal from 'sweetalert2'
import { useDeleteProductMutation } from '../../redux/features/Admin/admin.api';
import { toast } from 'sonner';
import CustomSpinner from '../../components/Spinner/CustomSpinner';
import ProductEditModal from './ProductEditModal';
import { useRef, useState } from 'react';

const AllProducts = () => {
    const [viewItem, setViewItem] = useState({});
    const [deleteProduct] = useDeleteProductMutation();
    const { data: meta, isFetching: metaFetching } = useGetAllProductsQuery(undefined,) as {
        data?: {
            data?: TProduct[],
            meta?: TMeta;
        };
        isFetching: boolean;
    };

    const { data, isFetching, } = useGetAllProductsQuery({ limit: meta?.meta?.total }, { skip: metaFetching }) as {
        data?: {
            data?: TProduct[],
            meta?: TMeta;
        };
        isFetching: boolean;
    };

    console.log(" data:", data?.data);

    const handleDelete = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteProduct(id)
                console.log("deleteRes:", res);
                if (res.data?.data.success) {
                    toast.success(res?.data?.data?.message)
                }
            }
        });
    }

    const modalRef = useRef<HTMLDialogElement | null>(null);

    const openModal = (item: TProduct) => {
        setViewItem(item)
        modalRef.current?.showModal();
    };

    return (
        <div className='px-10 space-y-10'>
            <SectionTitle heading={"Control Your Inventory"} subHeading={"Add, edit, and manage your bike listings effortlessly."}></SectionTitle>
            {
                isFetching ?
                    <CustomSpinner></CustomSpinner>
                    :
                    <div className="bg-white p-5 rounded">
                        <div className="flex justify-between items-center my-5">
                            {/* <button onClick={handleAddItem} className="flex items-center bg-green-500 hover:bg-green-600 text-white gap-2 btn">Add Item <FaPlus></FaPlus></button> */}
                            {/* <h3 className="text-2xl font-semibold ">Total Item: {items?.length}</h3> */}
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Image</th>
                                        <th>Brand</th>
                                        <th>Category</th>
                                        <th>Model</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        data?.data?.map((item, i) => <tr key={item._id}>
                                            <th>{i + 1}</th>
                                            <th>
                                                <div className="avatar">
                                                    <div className="w-14 rounded-xl">
                                                        <img src={item.image} />
                                                    </div>
                                                </div>
                                            </th>
                                            <td>{item.brand}</td>
                                            <td>{item.category}</td>
                                            <td>{item.model}</td>
                                            <td>$ {item.price}</td>
                                            <td>{item.quantity}</td>
                                            {/* <td><button onClick={() => handleItemView(item)} className='flex items-center '><FaEye className='text-2xl text-green-500' /></button></td> */}
                                            <td><button className='cursor-pointer' onClick={() => openModal(item)}><FaEdit className="text-2xl text-primary-c"></FaEdit></button></td>
                                            <td><button className='cursor-pointer' onClick={() => handleDelete(item._id)}><FaTrash className="text-2xl text-red-500"></FaTrash></button></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }

            <dialog id="my_modal_1" ref={modalRef} className="modal">
                {/* <ItemModal item={viewItem}></ItemModal> */}
                <ProductEditModal forwardRef={modalRef} item={viewItem as TProduct}></ProductEditModal>
            </dialog>

        </div>
    );
};

export default AllProducts;