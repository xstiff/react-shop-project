import Categories from "../../Components/Categories/categories.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../store/categories/categories.action";
import { useEffect } from "react";
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
                "https://pixabay.com/get/g73d97108be934e49f5610b0bf771c39ebc70bc7fecc96473b6105946fe07de139ccfd577d4a31cd3473f423790a97f341ce4fc9f020b4e20e074d08f49211ff9b2adebca594681aed1670e0105e221ad_1920.jpg",
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
        dispatch(fetchCategoriesAsync());
    }, []);
    return (
        <div>
            <Categories cats={categories} />
            <CategoriesPreview />
        </div>
    );
};

export default Home;
