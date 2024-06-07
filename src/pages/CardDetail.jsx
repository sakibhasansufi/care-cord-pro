import { LuTimer } from "react-icons/lu";
import { BsCalendar2Date } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useJoin from "../hooks/useJoin";


const CardDetail = ({ camp }) => {
  const { _id, name, image, fees, date, time, profession, location, participant } = camp;
  const [joined,refetch]=useJoin();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const handleJoin = () => {
    if (user && user.email) {
      console.log(user.email)
      const joinInfo = {
        joinId: _id,
        email: user.email,
        name,
        image,
        fees,
        date,
        time,
        profession,
        location
      }
      axiosSecure.post('/join', joinInfo)
        .then(res => {
          if (res.data.insertedId) {
            toast.success(`You have successfully joined ${name}`,{
              position : "bottom-center"
            })
          refetch()
            }
        })
    }

  }
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
          <div className="font-roboto text-lg text-red">Participant Numbers : {joined.length}</div>



        </div>
        <div className="flex justify-between">

          <Link to={`/camp/${_id}`}>
            <button onClick={handleJoin} className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">Join Now</button>
          </Link>

        </div>
      </div>

    </div>
  );
};

export default CardDetail;