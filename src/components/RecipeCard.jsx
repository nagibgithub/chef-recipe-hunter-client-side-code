import React from 'react';
import Rating from "react-rating";
import {FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar, FaStarHalf, FaStarHalfAlt} from 'react-icons/fa';

const RecipeCard = ({recipe}) => {

    const {
        rec_id,
        rec_img,
        rec_name,
        ingredients,
        cooking_method,
        rating,
        favorite
    } = recipe

    return (
        <div className='text-white border-2 backdrop-blur-3xl rounded-3xl flex flex-col justify-between'>
            <h1 className='text-white bg-black rounded-t-3xl bg-opacity-40 text-center text-2xl font-bold py-5'>{rec_name}</h1>
            <hr />
            <div className='py-5'>
                <img className='h-auto w-5/6 mx-auto rounded-xl' src={rec_img} alt="" />
            </div>
            <div className='px-5'>
                <p>Ingredients:</p>
                <ul>
                    {
                        ingredients.map((ing, index) => <li key={index}>{ing}</li>)
                    }
                </ul>
            </div>
            <p className='px-5'>Cooking Method: {cooking_method}</p>
            <hr />
            <div className='flex items-center justify-center p-5 h-14'>
                <Rating
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                    readonly
                />
                <p className='mx-1'>{rating} Stars</p>
                <p className='mx-1'>2k reviews</p>
            </div>
        </div>
    );
};

export default RecipeCard;