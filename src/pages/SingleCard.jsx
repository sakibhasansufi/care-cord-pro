import { useLoaderData } from "react-router-dom";


const SingleCard = () => {
    const campData = useLoaderData();
    const {_id, name, image, fees, date, time, profession, location,description}=campData
    return (

        <section className="flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
            <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
                <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
                    <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">{name}</h1>
                    <p className="lg:text-lg sm:text-base text-sm text-gray-600">
                        {description}
                    </p>
                    <div className="flex space-x-4">
                        <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
                            Get Started
                        </button>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-transparent text-blue-600">
                            Learn More
                        </button>
                    </div>
                    <p className="text-sm text-gray-500">Trusted by 5000+ Users</p>
                </div>
                <div className="relative">
                    <img src={image} className="relative md:h-[600px]  sm:h-[500px] h-[300px]  w-[500px] bg-gray-400 rounded-b-full object-cover" alt="hero navigate ui" />
                </div>
            </div>
        </section>

    );
};

export default SingleCard;