import React, {useState} from 'react';
import Rating from "react-rating";
import {FaRegStar, FaStar} from 'react-icons/fa';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import toast, {Toaster} from 'react-hot-toast';

const RecipeCard = ({recipe}) => {

    const [favoriteBtn, setFavorite] = useState(false)

    const clickFavoriteHandler = () => {
        setFavorite(true)
        toast.success('Add this recipe as favorite...!')
    }

    // console.log(recipe);

    const {
        rec_img,
        rec_name,
        ingredients,
        cooking_method,
        rating,
        favorite
    } = recipe

    return (
        <div className='text-white border-2 backdrop-blur-3xl rounded-3xl flex flex-col justify-between'>
            <div>
                <div className='text-white bg-black rounded-t-3xl bg-opacity-40 py-5 grid grid-cols-4'>
                    <div></div>
                    <h1 className='text-center text-xl font-bold col-span-2'>{rec_name}</h1>
                    <div className='flex justify-end mr-5'>
                        <button onClick={clickFavoriteHandler} disabled={favoriteBtn ? true : false} className='tooltip tooltip-left' data-tip="Favorite Button">
                            <FontAwesomeIcon icon={faStar} size='2xl' style={favoriteBtn ? {color: "#ff00d0"} : {color: "#ffffff"}} />
                        </button>
                    </div>
                </div>
                <hr />
            </div>
            <div>
                <div className='py-5'>
                    <img className='h-auto w-5/6 mx-auto rounded-xl' src={rec_img} alt="" />
                </div>
                <div className='px-5'>
                    <p className='underline font-bold'>Ingredients:</p>
                    <ul className='mb-4'>
                        {
                            ingredients.map((ing, index) => <li className='list-disc pl-2 ml-4' key={index}>{ing}</li>)
                        }
                    </ul>
                </div>
                <p className='px-5 underline font-bold'>Cooking Method: </p>
                <p className='px-5 pb-5 text-justify'>{cooking_method}</p>
            </div>
            <div>
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
        </div>
    );
};

export default RecipeCard;