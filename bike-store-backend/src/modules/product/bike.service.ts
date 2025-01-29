import QueryBuilder from '../../builder/QueryBuilder';
import { TBike } from './bike.interface';
import Bike from './bike.model';

const createBikeItem = async (bikeData: TBike) => {
  const result = await Bike.create(bikeData);
  return result;
};

const getAllBikes = async (query: Record<string, unknown>) => {

  // const result = await Bike.find(query).select('-__v');
  const searchAbleFields = ["name", "brand", "category"]
  const bikeQuery = new QueryBuilder(
    Bike.find().select('-__v'),
    query
  )
    .search(searchAbleFields)
    .filter()
    .sort()
    .paginate()

    const result = await bikeQuery.modelQuery;
    const meta = await bikeQuery.countTotal();
    return { meta, result };
};



const getSingleBike = async (id: string) => {
  const result = await Bike.findById(id).select('-__v');
  return result;
};


const updateBike = async (id: string, data: object) => {
  const result = await Bike.findByIdAndUpdate(id, data, { new: true }).select(
    '-__v'
  );
  return result;
};
const deleteBike = async (_id: string) => {
  const result = await Bike.findByIdAndDelete({ _id });
  return result;
};

export const bikeServices = {
  createBikeItem,
  getAllBikes,
  getSingleBike,
  updateBike,
  deleteBike,
};
