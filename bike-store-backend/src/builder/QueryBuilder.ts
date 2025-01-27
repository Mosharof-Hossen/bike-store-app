import { Query } from "mongoose";

class QueryBuilder<T> {
    public modelQuery: Query<T[], T>;
    public query: Record<string, unknown>;

    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
        this.modelQuery = modelQuery;
        this.query = query;
    }

    search(searchAbleFields: string[]) {
        const searchTerm = this.query?.searchTerm;
        if (searchTerm) {
            this.modelQuery = this.modelQuery.find({
                $or: searchAbleFields.map((field) => ({
                    [field]: { $regex: searchTerm, $options: 'i' },
                })),
            });
        }
        return this;
    }

    filter() {
        const queryObj = { ...this.query };
        const excludeFields = ['searchTerm', 'sort', 'limit', 'page',];
        excludeFields.forEach((el) => delete queryObj[el]);
        const customQuery = {} as Record<string, unknown>;
        if (queryObj.filterPrice) {
            const [smallValue, largeValue] = (queryObj.filterPrice as string).split("-").map(Number);
            customQuery.price = { $gte: smallValue, $lte: largeValue }
        }

        if (queryObj.category) {
            const options = (queryObj.category as string).split(",");
            customQuery.category = { "$in": options };
        }
        if (queryObj.brand) {
            const options = (queryObj.brand as string).split(",");
            customQuery.brand = { "$in": options };
        }
        if (queryObj.inStock) {
            customQuery.inStock = queryObj.inStock;
        }
        this.modelQuery = this.modelQuery.find(customQuery);
        return this;
    }

    sort() {
        const sort = this?.query?.sort || '-createdAt';
        this.modelQuery = this.modelQuery.sort(sort as string);
        return this;
    }

    paginate() {
        const page = Number(this?.query?.page) || 1;
        const limit = Number(this?.query?.limit) || 10;
        const skip = (page - 1) * limit;
        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this;
    }

    async countTotal() {
        const filter = this.modelQuery.getFilter();
        const total = await this.modelQuery.model.countDocuments(filter);
        const page = Number(this?.query?.page) || 1;
        const limit = Number(this?.query?.limit) || 10;
        const totalPage = Math.ceil(total / limit);
        return {
          total,
          page,
          limit,
          totalPage
        }
      }

}

export default QueryBuilder;