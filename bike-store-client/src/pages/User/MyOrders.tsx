import { useGetUserOwnOrdersQuery } from '../../redux/features/Order/Order';

const MyOrders = () => {
    const { data, isLoading } = useGetUserOwnOrdersQuery(undefined);
    console.log(data);
    return (
        <div>
            My Order
        </div>
    );
};

export default MyOrders;