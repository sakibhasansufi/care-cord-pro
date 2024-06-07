import { NavLink, Outlet } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import { MdHomeFilled } from "react-icons/md";


const Dashboard = () => {
    return (
        <div className="flex ">
            {/* side bar */}
            <div className="w-auto px-2 py-4 min-h-full border">
                <ul className="menu">
                    <p className="text-2xl font-semibold mb-4">Care Cord Pro <br /> <span className="text-lg font-medium">Dash Board</span> </p>
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


                </ul>
            </div>

            <section className="flex-1 ">
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;