import React from 'react';
import {useLoaderData} from 'react-router-dom';
import ChefCard from '../components/ChefCard';

const AllChef = () => {

    const chefs = useLoaderData()
    // console.log(chefs);

    return (
        <>
            <div className='container mx-auto'>
                <h1 className='text-center text-xl mt-10 font-bold'>Bangladeshi Top and Most Famous Outstanding Chefs are here in one place...</h1>
            </div>
            <div className='container mx-auto mb-10 flex flex-wrap justify-center '>
                {
                    chefs.map(chef => <div className='w-96 my-3' key={chef.id}><ChefCard chef={chef}></ChefCard></div>)
                }
            </div>
        </>
    );
};

export default AllChef;