import React from 'react';
import LazyLoad from 'react-lazy-load';
import {Link} from 'react-router-dom';

const ChefCard = ({chef}) => {
    // console.log(chef);

    const {
        _id,
        picture,
        name,
        likes,
        experience,
        recipes_no,
        buttonText
    } = chef

    return (
        <div className='border-2 p-4 rounded-3xl mx-2 shadow-lg h-full flex flex-col justify-between'>
            <LazyLoad width={350} height={250} threshold={0.99}>
                <img className='w-52 mx-auto' src={picture} alt="" />
            </LazyLoad>
            <h1 className='text-xl font-bold pt-2 pb-1'>Chef {name}</h1>
            <p className='py-1'>Likes: {likes}</p>
            <p className='py-1'>Year of expenses: {experience} years</p>
            <p className='py-1'>Number of Recepies: {recipes_no}</p>
            <Link className='mx-auto w-2/3' to={`/recipes/${ _id }`}><button className='btn btn-primary w-full mt-5'>{buttonText}</button></Link>
        </div>
    );
};

export default ChefCard;