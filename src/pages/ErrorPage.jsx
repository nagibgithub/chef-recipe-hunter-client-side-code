import {Link, useRouteError} from "react-router-dom";

export default function ErrorPage () {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="mx-auto text-center flex flex-col justify-center items-center min-h-screen">
            <p>Sorry, an unexpected error has occurred.</p>
            <img className="w-96 mx-auto" src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif" alt="" />
            <p>
                <i>{error.data}</i>
                <br />
                <i>Page is {error.statusText || error.message}</i>
                <p className="text-[#ff0000] text-lg my-2 py-2 font-black tracking-wide">Error Status: {error.status}</p>
            </p>
            <Link to={'/'}><button className="px-4 py-2 mb-5 mt-2 bg-sky-500 rounded-md text-white hover:bg-sky-600 active:bg-sky-700">Go to Nagib Travels Home Page</button></Link>
        </div>
    );
}