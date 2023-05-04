import React from 'react';
import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilePdf} from '@fortawesome/free-solid-svg-icons';

const Blog = () => {

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });


    return (
        <div className='container m-auto border-2 p-2 rounded-lg' >
            <div className='grid grid-cols-3'>
                <div className='col-span-1'></div>
                <h1 className='text-center col-span-1 font-bold text-3xl my-3'>Bonus Question Section</h1>
                <button className='col-span-1 btn btn-primary text-2xl'><span> <FontAwesomeIcon icon={faFilePdf} /> </span> Print as PDF </button>
            </div>
            <div className='border-2 p-5 rounded-lg shadow-lg bg-sky-50 mb-5'>
                <div className='flex items-center'>
                    <h1 className='bg-red-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Quesion: 1</h1>
                    <h2 className='pl-4 text-lg font-semibold'>Differences between uncontrolled and controlled components.</h2>
                </div>
                <h1 className='bg-green-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Answer: </h1>
                <p className='pl-4 text-lg font-semibold'>
                    The main differences between uncontrolled and controlled components are:
                    <br />
                    - Uncontrolled components are managed independently, while controlled components are managed by a higher-level system or framework.
                    <br />
                    - Uncontrolled components do not receive or provide dependencies to other components, while controlled components may interact with other components in a more structured way.
                    <br />
                    - Uncontrolled components may be more difficult to manage and update, while controlled components are generally easier to manage and update.
                </p>
            </div>
            <div className='border-2 p-5 rounded-lg shadow-lg bg-sky-50 mb-5'>
                <div className='flex items-center'>
                    <h1 className='bg-red-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Quesion: 2</h1>
                    <h2 className='pl-4 text-lg font-semibold'>How to validate React props using PropTypes?</h2>
                </div>
                <h1 className='bg-green-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Answer: </h1>
                <p className='pl-4 text-lg font-semibold'>
                    To validate React props using PropTypes, you can follow these steps:
                    <br />
                    First, you need to import PropTypes from the prop-types package.
                    <br />
                    <code className='text-blue-500'>import PropTypes from 'prop-types';</code>
                    <br />
                    Then, you can define the propTypes for your component as a static property:
                    <br />
                    <code className='text-blue-500'>
                        {`class MyComponent extends React.Component {`}
                        <br />{`static propTypes = {`}
                        <br />{`name: PropTypes.string.isRequired,`}
                        <br />{`age: PropTypes.number,`}
                        <br />{`    email: PropTypes.string`}
                        <br />{`}`}
                        <br />{`  render() {`}
                        <br />{`    return (`}
                        <br />{`<div>`}
                        <br />{`<p>Name: {this.props.name}</p>`}
                        <br />{`<p>Age: {this.props.age}</p>`}
                        <br />{`<p>Email: {this.props.email}</p>`}
                        <br />{`</div>`}
                        <br />{`    );`}
                        <br />{`}`}
                        <br />{`}`}
                    </code>
                    <br />
                    In the example above, we're defining three PropTypes: name, age, and email. The isRequired validator is used for the name prop, which means that the prop is required and will throw a warning if it is not provided.
                    <br />
                    You can use various validators from PropTypes to specify the type of a prop. For example, PropTypes.string for strings, PropTypes.number for numbers, PropTypes.bool for booleans, and so on.
                    <br />
                    Once the PropTypes are defined, if a prop is passed with an incorrect type, a warning will be shown in the console.
                </p>
            </div>
            <div className='border-2 p-5 rounded-lg shadow-lg bg-sky-50 mb-5'>
                <div className='flex items-center'>
                    <h1 className='bg-red-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Quesion: 3</h1>
                    <h2 className='pl-4 text-lg font-semibold'>What is the difference between nodejs and express js?</h2>
                </div>
                <h1 className='bg-green-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Answer: </h1>
                <p className='pl-4 text-lg font-semibold'>
                    Differences between Node.js and Express.js are:
                    <br />
                    1. Node.js is a runtime environment, whereas Express.js is a web application framework built on top of Node.js.
                    <br />
                    2. Node.js provides the core functionality for building server-side applications in JavaScript, while Express.js provides a set of features and tools for building web applications and APIs.
                    <br />
                    3. Node.js provides low-level APIs for handling network connections, while Express.js provides higher-level APIs for handling HTTP requests and responses.
                    <br />
                    4. Express.js provides a more structured approach to building web applications and APIs, whereas Node.js requires developers to build everything from scratch.
                    <br />
                    5. Express.js has a strong and active community of developers who contribute to the development of the framework, while Node.js has a more general-purpose community that develops a variety of applications using the runtime.
                </p>
            </div>
            <div className='border-2 p-5 rounded-lg shadow-lg bg-sky-50 mb-5'>
                <div className='flex items-center'>
                    <h1 className='bg-red-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Quesion: 4</h1>
                    <h2 className='pl-4 text-lg font-semibold'>What is a custom hook, and why will you create a custom hook?</h2>
                </div>
                <h1 className='bg-green-400 py-2 px-4 w-max border-2 text-lg font-semibold rounded-lg shadow-lg'>Answer: </h1>
                <p className='pl-4 text-lg font-semibold'>
                    Custom hooks are created to help simplify code, make it more reusable, and easier to maintain. By creating a custom hook, you can encapsulate complex logic and make it more manageable. Additionally, custom hooks can be used to abstract away implementation details and provide a simpler API for other components to use.
                    <br />
                    For example, if you have two components that need to fetch data from an API and display it, you could create a custom hook that handles the data fetching logic. This way, both components can use the same custom hook to fetch the data, and any changes or improvements made to the custom hook will be reflected in both components.
                </p>
            </div>
        </div >
    );
};

export default Blog;