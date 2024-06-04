import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Card from "./Card";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Care Cord Pro</title>
            </Helmet>
            <Banner></Banner>
            <Card></Card>
        </div>
    );
};

export default Home;