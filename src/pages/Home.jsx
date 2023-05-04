import React, {useState} from 'react';
import Marquee from "react-fast-marquee";
import {Link, useLoaderData} from 'react-router-dom';
import ChefCard from '../components/ChefCard';

const Home = () => {

  const chefs = useLoaderData();

  return (
    <div className='container mx-auto'>
      <section className='flex flex-col-reverse lg:grid lg:grid-cols-2 min-h-screen'>
        <div className='flex flex-col justify-evenly'>
          <h1 className='text-2xl lg:text-4xl font-semibold text-violet-700'>Bangladesh's Finest Chefs: Discover Authentic Recipes from Across the Country</h1>
          <p>Explore a culinary journey through Bangladesh with our collection of recipes from the country's most talented chefs. From traditional dishes to modern twists, discover the diverse flavors and rich cultural heritage of Bangladesh's cuisine, all in one place.</p>
          <button className='btn btn-primary w-2/3'>Explore our recipes</button>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?w=740&t=st=1683120306~exp=1683120906~hmac=6fecfd0f35bb741be4b6fb77025064bf126a968f21b0c22d61ccdf3251737a63" alt="" />
        </div>
      </section>

      {/* Chef Section */}
      <section className='mb-10 min-h-screen'>
        <div>
          <h1 className='text-center text-2xl lg:text-3xl font-bold'>Bangladesh Top Famous Chefs are here ...</h1>
        </div>
        <div className='my-5'>
          <Marquee pauseOnHover={true} gradient={true} gradientColor={[255,255,255]} gradientWidth={150} speed={50}>
            {
              chefs.slice(0, 6).map(chef => <ChefCard key={chef._id} chef={chef}></ChefCard>)
            }
          </Marquee>
        </div>
        <h1 className='text-center text-lg'>Only top six Chef's are shown here. To see all chefs </h1>
        <Link to={'/chefs'}><button className='btn btn-primary mx-auto flex w-1/3'>Show All Chefs</button></Link>
      </section>
    </div>
  );
};

export default Home;