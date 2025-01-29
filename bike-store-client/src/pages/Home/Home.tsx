import Banner from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";
import Review from "../../components/Review/Review";
import ShortFeature from "../../components/ShortFeature/ShortFeature";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <ShortFeature></ShortFeature>
            <Products></Products>
            <Review></Review>
        </div>
    );
};

export default Home;