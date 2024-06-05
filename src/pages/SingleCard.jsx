import { useContext } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { LuTimer } from "react-icons/lu";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useState } from 'react';



const SingleCard = () => {

    const campData = useLoaderData();
    const { _id, name, image, fees, date, time, profession, location, description } = campData;
    const { user } = useContext(AuthContext);
    return (

        <section className="flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
            <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
                <div className="max-w-md z-40  md:space-y-6 sm:space-y-5 space-y-4">
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
                    <section>
                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>Join the program</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                            <div className="modal-box ">
                                <form action="">
                                    <div className="flex items-center gap-5">
                                        <div >
                                            <p className="block text-[16px] font-montserrat text-gray-500 dark:text-gray-300">Camp name :</p>
                                        </div>


                                        <input disabled type="text" name="name" defaultValue={name} className="block w-full font-roboto bg-gray-50 cursor-not-allowed mt-2 text-center placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                    </div>


                                    <div className="flex items-center gap-5 mt-2">
                                        <div >
                                            <p className="block text-[14px] font-montserrat text-gray-500 dark:text-gray-300">Camp Fees :</p>
                                        </div>


                                        <input disabled type="text" name="name" defaultValue={fees} className="block text-center font-roboto bg-gray-50 cursor-not-allowed mt-2 w-[100px] placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                                        <div >
                                            <p className="block text-[14px] font-montserrat text-gray-500 dark:text-gray-300">Location :</p>
                                        </div>

                                        <input disabled type="text" name="name" defaultValue={location} className="block text-center font-roboto bg-gray-50 cursor-not-allowed mt-2 w-[150px] placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                    </div>



                                    <div className="flex items-center gap-5 mt-2">
                                        <div >
                                            <p className="block text-[14px] font-montserrat text-gray-500 dark:text-gray-300">Professional :</p>
                                        </div>


                                        <input disabled type="text" name="name" defaultValue={profession} className="block text-center font-roboto bg-gray-50 cursor-not-allowed mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />


                                    </div>


                                    <div className="flex items-center gap-5 mt-2">
                                        <div >
                                            <p className="block text-[14px] font-montserrat text-gray-500 dark:text-gray-300">User Name:</p>
                                        </div>

                                        <input disabled type="text" name="name" defaultValue={user?.displayName || "user not found"} className="block text-center font-roboto bg-gray-50 cursor-not-allowed mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                    </div>


                                    <div className="flex items-center gap-5 mt-2">
                                        <div >
                                            <p className="block text-[14px] font-montserrat text-gray-500 dark:text-gray-300">User Email:</p>
                                        </div>

                                        <input disabled type="text" name="name" defaultValue={user?.email || "user not found"} className="block text-center font-roboto bg-gray-50 cursor-not-allowed mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                    </div>


                                    {/* age */}
                                    <div className="flex items-center gap-5 mt-2">
                                        <div >
                                            <p className="block text-[14px] font-montserrat text-gray-500 dark:text-gray-300">Age</p>
                                        </div>

                                        <input type="text" name="age" placeholder="Your age" className="block text-center font-roboto bg-gray-50  mt-2 w-[100px] placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />


                                        <div >
                                            <p className="block text-[14px] font-montserrat text-gray-500 dark:text-gray-300">Number</p>
                                        </div>

                                        <input type="text" name="age" placeholder="Phone Number" className="block text-center font-roboto bg-gray-50  mt-2 w-[300px] placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />


                                    </div>


                                    {/* gender and emergency contact  */}

                                    <div className="flex items-center gap-5 mt-2">
                                        <div >
                                            <p className="block text-[14px] font-montserrat text-gray-500 dark:text-gray-300">Gender</p>
                                        </div>

                                        <select name="select" className="select select-bordered w-[120px] max-w-xs mt-2">
                                            <option disabled selected>Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>

                                        <div >
                                            <p className="block text-[12px] font-montserrat text-gray-500 dark:text-gray-300">Emergency Contact</p>
                                        </div>

                                        <input type="number" name="number" placeholder="Phone Number" className="block  font-roboto bg-gray-50  mt-2 w-[170px] placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />


                                    </div>





                                </form>

                                <div className="modal-action">

                                    <form method="dialog">

                                        <button className="btn">Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </section>

                </div>
                <div className="relative ">
                    <img src={image} className="relative md:h-[600px] z-40 sm:h-[500px] h-[300px]  w-[500px] bg-gray-400 rounded-b-full object-cover" alt="hero navigate ui" />
                </div>
            </div>
        </section>

    );
};

export default SingleCard;