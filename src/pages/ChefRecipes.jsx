import React from 'react';
import {useLoaderData} from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import LazyLoad from 'react-lazy-load';

const ChefRecipes = () => {

    const chef = useLoaderData()
    // console.log(chef);
    const {
        _id,
        picture,
        name,
        likes,
        experience,
        recipes_no,
        details,
        recipes
    } = chef

    return (
        <div className='login-container'>
            <div className='bg-black bg-opacity-60 pb-10'>

                <h1 className='text-center text-2xl lg:text-5xl font-bold mb-10 pt-5 text-white'>Chef {name}'s Recipes</h1>

                <div className='container mx-auto'>

                    <section className='lg:grid lg:grid-cols-3 items-center my-10'>
                        <div className='lg:col-span-1'>
                            {/* <LazyLoad height={762}> */}
                                <img className='border-4 rounded-full backdrop-blur-3xl h-96 w-96 mx-auto' src={picture} alt="" />
                            {/* </LazyLoad> */}
                        </div>
                        <div className='lg:col-span-2 border-2 px-4 py-2 rounded-xl shadow-xl lg:mr-10 backdrop-blur-3xl'>
                            <div className='w-full text-white'>
                                <p className='underline text-xl font-bold py-5'>Short Bio about chef {name} </p>
                                <p className='text-xl pb-5'>{details}</p>
                            </div>
                            <div className='flex justify-center pb-5'>
                                <div className="stats shadow">
                                    <div className="stat">
                                        <div className="stat-figure text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                        </div>
                                        <div className="stat-title">Total Likes</div>
                                        <div className="stat-value text-primary">{likes}K</div>
                                        <div className="stat-desc">21% more than last month</div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-figure text-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        </div>
                                        <div className="stat-title">Experience</div>
                                        <div className="stat-value text-secondary">{experience} Years</div>
                                        <div className="stat-desc">As a professional Chef</div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-title">No of recipes</div>
                                        <div className="stat-value">{recipes_no}+</div>
                                        <div className="stat-desc text-secondary">All are Delicious</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section>
                        <div className='grid lg:grid-cols-3 gap-10'>
                            {
                                recipes.map(recipe => <RecipeCard key={recipe.rec_id} recipe={recipe}></RecipeCard>)
                            }
                        </div>
                    </section>

                </div>

            </div >
        </div >
    );
};

export default ChefRecipes;