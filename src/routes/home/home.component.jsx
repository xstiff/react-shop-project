import Categories from "../../Components/Categories/categories.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store/categories/categories.action";
import { useEffect } from "react";
import Alert from "../../Components/Alert/alert.component";
import { FETCH_CATEGORIES_START } from "../../store/categories/categories.action";
const Home = () => {
    const categories = [
        {
            id: 1,
            title: "hats",
            imageUrl:
                "https://images.pexels.com/photos/954254/pexels-photo-954254.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
        },
        {
            id: 2,
            title: "jackets",
            imageUrl:
                "https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_960_720.jpg",
        },
        {
            id: 3,
            title: "sneakers",
            imageUrl:
                "https://cdn.pixabay.com/photo/2017/04/08/16/16/kicks-2213619_960_720.jpg",
        },
        {
            id: 4,
            title: "womens",
            imageUrl:
                "https://pixabay.com/get/gf50470f3dab05f517133135d0b6dae8057ec08279ddb215f651112ca2df9ba3f3c7616c09a6b5a68894b35aa12640b82f31d13ff267b19c8cfc65b5e4806b88e94a1f9f7f073630b1ccdfe4202ccb391_1920.jpg",
        },
        {
            id: 5,
            title: "mens",
            imageUrl:
                "https://pixabay.com/get/gce81cf1e2319b5ec26062e9984093e40c6e60387c2eece5b5fffd6dccdd2f05b4e314a4a35d7292741754973040f859aa0050700e6345649558d55de8a72cbc20c35c88de3a7df0e03cab2b83e74584f_1920.jpg",
        },
    ];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FETCH_CATEGORIES_START());
    }, []);
    return (
        <>
            <Alert />
            <Categories cats={categories} />
            <CategoriesPreview />
        </>
    );
};

export default Home;
