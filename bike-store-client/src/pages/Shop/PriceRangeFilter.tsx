import React from "react";
import { useForm } from "react-hook-form";

type PriceRangeProps = {
    min: number;
    max: number;
    onChange: (minPrice: number, maxPrice: number) => void;
};

type PriceFormValues = {
    minPrice: number;
    maxPrice: number;
};

const PriceRangeFilter: React.FC<PriceRangeProps> = ({ min, max, onChange }) => {
    const { register, watch, setValue } = useForm<PriceFormValues>({
        defaultValues: { minPrice: min, maxPrice: max },
    });

    const minPrice = watch("minPrice");
    const maxPrice = watch("maxPrice");

    return (
        <div className="p-4  ">
            <h2 className="text-lg font-semibold mb-2">Filter by Price</h2>

            <div className="flex items-center justify-between mb-3">
                <span className="text-gray-600">${minPrice}</span>
                <span className="text-gray-600">${maxPrice}</span>
            </div>

            {/* Min Price Slider */}
            <input
                type="range"
                min={min}
                max={max}
                {...register("minPrice")}
                onChange={(e) => {
                    const value = Math.min(Number(e.target.value), maxPrice);
                    setValue("minPrice", value);
                    onChange(value, maxPrice);
                }}
                className="w-full cursor-pointer accent-blue-500"
            />

            {/* Max Price Slider */}
            <input
                type="range"
                min={min}
                max={max}
                {...register("maxPrice")}
                onChange={(e) => {
                    const value = Math.max(Number(e.target.value), minPrice);
                    setValue("maxPrice", value);
                    onChange(minPrice, value);
                }}
                className="w-full cursor-pointer accent-blue-500"
            />

        </div>
    );
};

export default PriceRangeFilter;
