import { LuTimer } from "react-icons/lu";
import { BsCalendar2Date } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';


const CardDetail = ({ camp }) => {
  const { _id, name, image, fees, date, time, profession, location } = camp;
  return (
    <div className='font-roboto'>
      <div className="mx-auto w-auto  space-y-4 rounded-lg bg-white p-6 shadow-lg  dark:bg-[#18181B]">
        <div className='flex justify-center'>
          <img src={image} className="h-[275px] w-[350px] rounded-lg object-cover" alt="" />
        </div>

        <div className="grid gap-2">
          <h1 className="text-lg font-montserrat font-semibold ">Camp Name : <span className='font-normal text-sm'>{name}</span></h1>
          <div className='flex justify-between'>
            <div className="flex items-center">
              <GrMoney className="mr-2" />
              <div className="text-lg font-montserrat font-semibold">Fees: <span className='font-normal text-sm'>${fees}</span></div>
            </div>

            <div className="flex items-center">
              <BsCalendar2Date className="mr-2" />
              <div className="text-lg font-montserrat font-semibold">Date: <span className='font-normal text-sm'>{date}</span></div>
            </div>

          </div>


          <div className="flex justify-between">
            <div className="flex items-center">
              <LuTimer className="mr-1" />
              <div className="text-lg font-montserrat font-semibold">Time: <span className='font-normal text-sm'>{time}</span></div>
            </div>
            <div className="flex items-center">
              <FaLocationDot className="mr-2" />
              <div className="text-lg font-montserrat font-semibold">Location: <span className='font-normal text-sm'>{location}</span></div>
            </div>

          </div>
          <div className="text-lg font-montserrat font-semibold">Health Care Profession: <span className='font-normal text-sm'>{profession}</span></div>



        </div>
        <div className="flex justify-between">
          <Link to='/available'>
            <AwesomeButton type="anchor" >See all camps</AwesomeButton>

          </Link>
          <Link to={`/${_id}`}>
            <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">View Details</button>
          </Link>

        </div>
      </div>

    </div>
  );
};

export default CardDetail;