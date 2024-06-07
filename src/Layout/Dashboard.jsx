import { NavLink, Outlet } from "react-router-dom";
import { IoIosContact } from "react-icons/io";


const Dashboard = () => {
    return (
        <div className="flex ">
            <div className="w-auto px-2 py-4 min-h-full border">
                <ul className="menu">
                    <div className="flex">
                        <IoIosContact  className="text-4xl"/>
                        <li><NavLink to='/dashboard/cart' className='drop-shadow-xl'>My Cart</NavLink></li>
                    </div>
                    <div className="flex mt-4">
                        <IoIosContact  className="text-4xl"/>
                        <li><NavLink to='/dashboard/cart' className='drop-shadow-xl'>Add camp</NavLink></li>
                    </div>

                </ul>
            </div>

            <section className="flex-1">
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;