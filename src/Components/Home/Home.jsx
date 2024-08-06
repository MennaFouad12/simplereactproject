import React from 'react'
import logo from'../../assets/avataaars.svg'
function Home () {
    return ( 
        <>
      <div className="home bg-emerald-400 text-white flex justify-center  items-center h-screen">
        <div className="container text-center ">
            <div className='text-center'>
       <img src={logo} className='w-48 mx-auto'  alt="" />
       </div>
            <div className="ourheader text-center mb-7 ">
<h3 className='font-extrabold text-4xl text-center'>Start Framework</h3>
<div className="shape mt-5 text-center">
    <span className='inline-block w-16 h-1 bg-white'></span>
    <i class="fa-solid fa-star mx-3"></i>
    <span className='inline-block w-16 h-1 bg-white'></span>
</div>
            </div>
           
           <p className='mt-5  '>Graphic Artist - Web Designer - Illustrator</p>
          
        </div>
        </div>
        </>
     );
}

export default Home ;