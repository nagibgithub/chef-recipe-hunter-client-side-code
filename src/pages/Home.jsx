import React, {useState} from 'react';
import Marquee from "react-fast-marquee";
import {Link, useLoaderData} from 'react-router-dom';
import ChefCard from '../components/ChefCard';
import Chef from '../components/Chef';
import HomeRecipe from '../components/HomeRecipe';
import RecipeCard from '../components/RecipeCard';

const Home = () => {

  const chefs = useLoaderData();

  return (
    <div className='container mx-auto'>

      {/* Home Banner Section */}
      <section className='mt-5 mb-10'>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{backgroundImage: `url("https://img.freepik.com/premium-photo/assorted-indian-recipes-food-various_79295-7226.jpg")`}}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-contents text-center text-neutral-content">
                <div className="w-3/4 mx-auto">
                  <h1 className="mb-5 text-4xl font-semibold">Bangladesh's Finest Chefs: Discover Authentic Recipes from Across the Country</h1>
                  <p className="mb-5">Explore a culinary journey through Bangladesh with our collection of recipes from the country's most talented chefs. From traditional dishes to modern twists, discover the diverse flavors and rich cultural heritage of Bangladesh's cuisine, all in one place.</p>
                  <button className="btn btn-primary">Explore our recipes</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{backgroundImage: `url("https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg")`}}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-contents text-center text-neutral-content">
                <div className="w-3/4 mx-auto">
                  <h1 className="mb-5 text-4xl font-semibold">Bangladesh's Finest Chefs: Discover Authentic Recipes from Across the Country</h1>
                  <p className="mb-5">Explore a culinary journey through Bangladesh with our collection of recipes from the country's most talented chefs. From traditional dishes to modern twists, discover the diverse flavors and rich cultural heritage of Bangladesh's cuisine, all in one place.</p>
                  <button className="btn btn-primary">Explore our recipes</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{backgroundImage: `url("https://img.freepik.com/premium-photo/assorted-indian-recipes-food-various_79295-7226.jpg")`}}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-contents text-center text-neutral-content">
                <div className="w-3/4 mx-auto">
                  <h1 className="mb-5 text-4xl font-semibold">Bangladesh's Finest Chefs: Discover Authentic Recipes from Across the Country</h1>
                  <p className="mb-5">Explore a culinary journey through Bangladesh with our collection of recipes from the country's most talented chefs. From traditional dishes to modern twists, discover the diverse flavors and rich cultural heritage of Bangladesh's cuisine, all in one place.</p>
                  <button className="btn btn-primary">Explore our recipes</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{backgroundImage: `url("https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg")`}}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-contents text-center text-neutral-content">
                <div className="w-3/4 mx-auto">
                  <h1 className="mb-5 text-4xl font-semibold">Bangladesh's Finest Chefs: Discover Authentic Recipes from Across the Country</h1>
                  <p className="mb-5">Explore a culinary journey through Bangladesh with our collection of recipes from the country's most talented chefs. From traditional dishes to modern twists, discover the diverse flavors and rich cultural heritage of Bangladesh's cuisine, all in one place.</p>
                  <button className="btn btn-primary">Explore our recipes</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </section>

      <hr className='border-4' />

      {/* Chef Section */}
      <section className='my-10 min-h-screen'>
        <div>
          <h1 className='home-bold-font'>Bangladesh Top Famous Chefs are here ...</h1>
        </div>
        <div className='my-5'>
          <Marquee pauseOnHover={true} gradient={true} gradientColor={[255, 255, 255]} gradientWidth={150} speed={50}>
            {
              chefs.slice(0, 6).map(chef => <ChefCard key={chef._id} chef={chef}></ChefCard>)
            }
          </Marquee>
        </div>
        <h1 className='text-center text-lg'>Only top six Chef's are shown here. To see all chefs </h1>
        <Link to={'/chefs'}><button className='btn btn-primary mx-auto flex w-1/3'>Show All Chefs</button></Link>
      </section>

      <hr className='border-4' />

      <section className='my-10'>
        <div>
          <h1 className='home-bold-font mt-10'>Let Know our Team</h1>
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <Chef chef={chefs[8]}></Chef>
            </div>
            <div id="item2" className="carousel-item w-full">
              <Chef chef={chefs[7]}></Chef>
            </div>
            <div id="item3" className="carousel-item w-full">
              <Chef chef={chefs[10]}></Chef>
            </div>
            <div id="item4" className="carousel-item w-full">
              <Chef chef={chefs[9]}></Chef>
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a>
            <a href="#item2" className="btn btn-xs">2</a>
            <a href="#item3" className="btn btn-xs">3</a>
            <a href="#item4" className="btn btn-xs">4</a>
          </div>
        </div>
      </section>

      <hr className='border-4' />

      <section className='my-20 bg-[url("https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35126.jpg")] bg-cover bg-no-repeat'>
        <div className='pb-20 pt-5 px-5 bg-black bg-opacity-50'>
          <h1 className='home-bold-font py-5 text-white'>Top Recipes of the day</h1>
          {
            <div className='grid lg:grid-cols-3 gap-5'>
              <RecipeCard recipe={chefs[7].recipes[1]}></RecipeCard>
              <RecipeCard recipe={chefs[7].recipes[3]}></RecipeCard>
              <RecipeCard recipe={chefs[2].recipes[3]}></RecipeCard>
            </div>
          }
        </div>
      </section>


    </div>
  );
};

export default Home;