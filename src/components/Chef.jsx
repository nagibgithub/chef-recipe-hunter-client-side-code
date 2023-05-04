import React from 'react';
import LazyLoad from 'react-lazy-load';
import {Link} from 'react-router-dom';

const Chef = ({chef}) => {
    // console.log(chef);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <LazyLoad height={400} width={400} threshold={0.10}>
                    <img src={chef.picture} className="max-w-sm rounded-lg shadow-2xl" />
                </LazyLoad>
                <div>
                    <h1 className="text-5xl font-bold">Chef {chef.name}</h1>
                    <p className="py-6">{chef.details}</p>
                    <Link to={`/recipes/${ chef._id }`}><button className="btn btn-primary">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;