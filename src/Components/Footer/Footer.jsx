

import React from 'react';

function Footer() {
    return (
        <>
            <div className=" mx-auto bg-slate-700">
                <div className="ourcards flex flex-col md:flex-row py-16  text-white">
                    {/* Location Card */}
                    <div className="flex flex-col mb-8 md:mb-0 md:w-1/3">
                        <div className="card text-center">
                            <h4 className='font-medium text-2xl mb-3'>LOCATION</h4>
                            <p className='mb-3'>Clark, MO 65243</p>
                            <p>2215 John Daniel Drive</p>
                        </div>
                    </div>

                    {/* Around the Web Card */}
                    <div className="flex flex-col mb-8 md:mb-0 md:w-1/3 text-center">
                        <div className="card">
                            <h4 className='font-medium text-2xl mb-3'>AROUND THE WEB</h4>
                            <div className="icons mt-4 flex justify-center">
                                <i className='fab fa-facebook fa-x p-3 border rounded-full mx-2'></i>
                                <i className='fab fa-twitter p-3 border rounded-full mx-2'></i>
                                <i className='fab fa-linkedin p-3 border rounded-full mx-2'></i>
                                <i className='fa-solid fa-globe p-3 border rounded-full mx-2'></i>
                            </div>
                        </div>
                    </div>

                    {/* About Freelancer Card */}
                    <div className="flex flex-col md:w-1/3 text-center">
                        <div className="card">
                            <h4 className='font-medium text-2xl mb-3'>ABOUT FREELANCER</h4>
                            <p className='w-full md:w-3/4 mx-auto'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>

                {/* Footer Copyright */}
                <div className="ourfooter text-center bg-slate-800 text-white py-5">
                    <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
