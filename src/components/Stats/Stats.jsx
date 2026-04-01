import React from 'react';

const Stats = () => {
    return (
        <div className='container mx-auto px-4 lg:px-16 my-12'>
            <div className='flex flex-col md:flex-row justify-around items-center bg-[#7C3AED] rounded-2xl p-10 md:p-16 gap-10 shadow-2xl'>

            <div className='text-center'>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">50k+</div>
                <div className="text-purple-100 font-medium">Active Users</div>
            </div>

            <div className='text-center border-white md:border-l md:px-20 md:border-r'>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">200+</div>
                <div className="text-purple-100 font-medium">Premium Tools</div>
            </div>

            <div className='text-center'>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">4.9</div>
                <div className="text-purple-100 font-medium">User Ratings</div>

            </div>
        </div>
        </div>
    );
};

export default Stats;
