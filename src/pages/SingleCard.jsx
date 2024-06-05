import { BsCalendar2Date } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { LuTimer } from "react-icons/lu";
import { useLoaderData } from "react-router-dom";


const SingleCard = () => {
    const campData = useLoaderData();
    const { _id, name, image, fees, date, time, profession, location, description } = campData
    return (

        <section className="flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
            <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
                <div className="max-w-md z-40 md:space-y-6 sm:space-y-5 space-y-4">
                    <h1 className="lg:text-5xl font-montserrat sm:text-4xl text-3xl font-bold leading-tight text-gray-900">{name}</h1>
                    <p className="lg:text-lg font-roboto sm:text-base text-sm text-gray-600">
                        {description}
                    </p>

                    <div className="flex space-x-3">
                        <div className="flex items-center">
                            <GrMoney className="mr-2" />
                            <div className="text-lg font-montserrat font-semibold">Fees: <span className='font-normal text-sm'>${fees}</span></div>
                        </div>
                        <div className="flex items-center">
                            <BsCalendar2Date className="mr-2" />
                            <div className="text-lg font-montserrat font-semibold">Date: <span className='font-normal text-sm'>{date}</span></div>
                        </div>
                        <div className="flex items-center">
                            <LuTimer className="mr-1" />
                            <div className="text-lg font-montserrat font-semibold">Time: <span className='font-normal text-sm'>{time}</span></div>
                        </div>
                    </div>

                    <div className="flex space-x-7 mt-5">
                        <div className="flex items-center">
                            <FaLocationDot className="mr-2" />
                            <div className="text-lg font-montserrat font-semibold">Location: <span className='font-normal text-sm'>{location}</span></div>
                        </div>
                        <div className="text-lg font-montserrat font-semibold">Health Care Profession: <span className='font-normal text-sm'>{profession}</span></div>

                    </div>
                    <button className="btn btn-secondary">Join Camp</button>
                </div>
                <div className="relative z-40">
                    <img src={image} className="relative md:h-[600px]  sm:h-[500px] h-[300px]  w-[500px] bg-gray-400 rounded-b-full object-cover" alt="hero navigate ui" />
                </div>
            </div>
        </section>

    );
};

export default SingleCard;