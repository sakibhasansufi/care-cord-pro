import { Helmet } from "react-helmet-async";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Care Cord Pro</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;