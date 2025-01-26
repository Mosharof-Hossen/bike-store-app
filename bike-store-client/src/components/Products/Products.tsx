import React from 'react';
import { useGetAllProductsQuery } from '../../redux/features/products/product.api';

const Products = () => {
    const { data } = useGetAllProductsQuery(undefined);
    console.log(data);
    return (
        <div>

        </div>
    );
};

export default Products;