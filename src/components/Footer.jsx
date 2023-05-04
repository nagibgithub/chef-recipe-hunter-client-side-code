import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer p-10 bg-slate-800 text-white xl:grid-cols-6 lg:grid-cols-3'>
            <div className='lg:col-span-2 xl:col-span-2'>
                <Link to={'/'}><img className='invert w-52 border-2 hover:invert-0 hover:bg-white border-black px-4 py-2 rounded-xl' src='/name.png' alt="" /></Link>
                <p className='py-1 text-sm pr-10'>Test of Radhuni is a Website for you where famous chefs recipes are shown for you. It is our pleaser that we provide some good recipes for you. Thank You for visiting our site.</p>
                <h1 className='footer-title'>Follow Us</h1>
                <div className='flex w-full'>
                    <Link to={'https://www.facebook.com/NMFuadBD'}><div data-tip='facebook' className='footer-social-image'><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" /></div></Link>
                    <Link to={'https://twitter.com/NMFuadBD'}><div data-tip='twitter' className='footer-social-image'><img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="" /></div></Link>
                    <Link to={'https://www.instagram.com/nmfuadbd/'}><div data-tip='instagram' className='footer-social-image'><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="" /></div></Link>
                    <Link to={'https://github.com/nagibgithub'}><div data-tip='github' className='footer-social-image'><img className='invert' src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" /></div></Link>
                    <Link to={'https://www.youtube.com/@nmfuadbd/'}><div data-tip='youtube' className='footer-social-image'><img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="" /></div></Link>
                </div>

            </div>
            <div className='lg:col-span-1 xl:col-span-1'>
                <span className="footer-title">Company</span>
                <Link to={'/about'} className="link link-hover">About us</Link>
                <Link to={'/contact'} className="link link-hover">Contact</Link>
                <Link to={'/jobs'} className="link link-hover">Jobs</Link>
                <Link to={'/press'} className="link link-hover">Press kit</Link>
            </div>
            <div className='lg:col-span-1 xl:col-span-1'>
                <span className="footer-title">Legal</span>
                <Link to={'/terms_conditions'} className="link link-hover">Terms of use</Link>
                <Link to={'/terms_conditions'} className="link link-hover">Privacy policy</Link>
                <Link to={'/terms_conditions'} className="link link-hover">Cookie policy</Link>
            </div>
            <div className='lg:col-span-2 xl:col-span-2'>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16 text-black font-semibold" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;