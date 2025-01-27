import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useGetAllProductsQuery } from '../../redux/features/products/product.api';
import { TMeta } from '../../types/global.type';
import { TProduct } from '../../types/productsType';

const AllProducts = () => {
    const { data:meta,isFetching:metaFetching } = useGetAllProductsQuery(undefined,) as {
        data?: {
            data?: TProduct[],
            meta?: TMeta;
        };
        isFetching: boolean;
    };

    const { data, isFetching, } = useGetAllProductsQuery({ limit: meta?.meta?.total },{skip:metaFetching}) as {
        data?: {
            data?: TProduct[],
            meta?: TMeta;
        };
        isFetching: boolean;
    };

    console.log(" data:",data?.data);

    return (
        <div className='px-10 space-y-10'>
            <SectionTitle heading={"Control Your Inventory"} subHeading={"Add, edit, and manage your bike listings effortlessly."}></SectionTitle>
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
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <dialog id="my_modal_1" className="modal">
                <ItemModal item={viewItem}></ItemModal>
            </dialog>
            <dialog id="itemEditModal" className="modal">
                <ItemEditModal item={viewItem}></ItemEditModal>
            </dialog>
            <dialog id="addItemModal" className="modal">
                <AddItemModal></AddItemModal>
            </dialog> */}
        </div>
    );
};

export default AllProducts;