import React from 'react';

const CardDetail = ({ camp }) => {
  const { id, name, image, fees,date,time,profession,location } = camp;
  return (
    <div className='font-roboto'>
      <div className="mx-auto w-auto  space-y-4 rounded-lg bg-white p-6 shadow-lg  dark:bg-[#18181B]">
        <div className='flex justify-center'>
          <img src={image} className="h-[275px] w-[350px] rounded-lg object-cover" alt="" />
        </div>

        <div className="grid gap-2">
          <h1 className="text-lg font-semibold ">Camp Name : <span className='font-normal'>{name}</span></h1>
          <p className="text-sm text-gray-500 dark:text-white/60">This is a brief description of the product. It highlights the key features and benefits.</p>
          <div className="text-lg font-semibold">$99.99</div>
        </div>
        <div className="flex gap-4">
          <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button>
          <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">View Details</button>
        </div>
      </div>

    </div>
  );
};

export default CardDetail;