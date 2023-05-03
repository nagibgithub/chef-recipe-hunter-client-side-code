import React from 'react';
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
            <img className='w-52 mx-auto' src={picture} alt="" />
            <h1 className='text-xl font-bold pt-2 pb-1'>Chef {name}</h1>
            <p className='py-1'>Likes: {likes}</p>
            <p className='py-1'>Year of expenses: {experience} years</p>
            <p className='py-1'>Number of Recepies: {recipes_no}</p>
            <Link className='mx-auto w-2/3' to={`/recipes/${_id}`}><button className='btn btn-primary w-full mt-5'>{buttonText}</button></Link>
        </div>
    );
};

export default ChefCard;