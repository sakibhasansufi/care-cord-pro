import { NavLink, Outlet } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import { MdHomeFilled } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import useJoin from "../hooks/useJoin";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    // to do 
    const isAdmin = useAdmin();
    const [joined]=useJoin();
    return (
        <div className="flex mt-10">
            {/* side bar */}
            <div className="w-auto px-2 py-4 min-h-full border">
                <ul className="menu">

                    {
                        isAdmin ? <>
                            <p className="text-2xl font-semibold mb-4">Care Cord Pro <br /> <span className="text-lg font-medium">Admin Dash Board</span> </p>
                            <div className="flex ">
                                <IoIosContact className="text-3xl" />
                                <li><NavLink to='/dashboard/cart' className='drop-shadow-xl'>Profile</NavLink></li>
                            </div>
                            <div className="flex mt-4">
                                <IoMdPersonAdd className="text-3xl" />
                                <li><NavLink to='/dashboard/add' className='drop-shadow-xl'>Add camp</NavLink></li>
                            </div>
                            <div className="flex mt-4">
                                <MdManageAccounts className="text-3xl" />
                                <li><NavLink to='/dashboard/manage' className='drop-shadow-xl'>Manage Camp</NavLink></li>
                            </div>
                            <div className="flex mt-4">
                                <LuSettings2 className="text-3xl" />
                                <li><NavLink to='/dashboard/manageRegister' className='drop-shadow-xl'>Manage Register Camp</NavLink></li>
                            </div>
                            <div className="divider"></div>
                            <div className="flex ">
                                <MdHomeFilled className="text-3xl" />
                                <li><NavLink to='/' className='drop-shadow-xl'>Home</NavLink></li>
                            </div>
                        </>
                            : <>
                                <p className="text-2xl font-semibold mb-4">Care Cord Pro <br /> <span className="text-lg font-medium">User Dash Board</span> </p>
                                <div className="flex ">
                                    <IoAnalyticsSharp className="text-3xl" />
                                    <li><NavLink to='/dashboard/analytics' className='drop-shadow-xl'>Analytics</NavLink></li>
                                </div>
                                <div className="flex ">
                                    <IoIosContact className="text-3xl" />
                                    <li><NavLink to='/dashboard/participantProfile' className='drop-shadow-xl'>Participant Profile</NavLink></li>
                                </div>
                                <div className="flex ">
                                    <LuSettings2 className="text-3xl" />
                                    <li><NavLink to='/dashboard/registerCamp' className='drop-shadow-xl'>Registered Camp</NavLink></li>
                                </div>
                                <div className="flex ">
                                    <MdPayment className="text-3xl" />
                                    <li><NavLink to='/dashboard/payment' className='drop-shadow-xl'>Payment History</NavLink></li>
                                </div>
                                <div className="divider"></div>
                                <div className="flex ">
                                    <MdHomeFilled className="text-3xl" />
                                    <li><NavLink to='/' className='drop-shadow-xl'>Home</NavLink></li>
                                </div>
                            </>
                    }


                </ul>
            </div>

            <section className="flex px-20">
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;