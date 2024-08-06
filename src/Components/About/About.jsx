import React from 'react'
function About() {
    return ( 
        <>
     <div className="about bg-emerald-400 text-white flex justify-center items-center h-screen">
        <div className="container  ">
       
            <div className="ourheader text-center mb-7 ">
<h3 className='font-extrabold text-4xl text-center'>about component</h3>
<div className="shape mt-5 text-center">
    <span className='inline-block w-16 h-1 bg-white'></span>
    <i class="fa-solid fa-star mx-3"></i>
    <span className='inline-block w-16 h-1 bg-white'></span>
</div>
            </div>
           
            <div className="text flex flex-col md:flex-row justify-evenly">
<p className='flex flex-col md:w-1/3 mb-5'>Freelancer is a free bootstrap theme created by Route
    . The download includes the complete source files including HTML, CSS, 
    and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    <p className='flex flex-col md:w-1/3'>Freelancer is a free bootstrap theme created by Route
    . The download includes the complete source files including HTML, CSS, 
    and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
        </div>
   
        </>
     );
}

export default About ;