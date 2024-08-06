import React from 'react'
function Contact () {
    return ( 
        <>
     <div className="home  flex justify-center  items-center h-screen">
        <div className="container text-center ">
            
            <div className="ourheader text-center mb-7 ">
<h3 className='font-extrabold text-4xl text-center text-slate-700'>Contact Section</h3>
<div className="shape mt-5 text-center">
    <span className='inline-block w-16 h-1 bg-slate-700'></span>
    <i class="fa-solid fa-star mx-3 "></i>
    <span className='inline-block w-16 h-1 bg-slate-700'></span>
</div>
            </div>
           
          <form action="" className='w-3/4 mx-auto'>
<input type="text" className='w-full focus:outline-none focus:ring-0 border-b-2 py-3 mb-5' placeholder='UserName' />
<input type="text" className='w-full focus:outline-none focus:ring-0 border-b-2 py-3 mb-5' placeholder='UserAge' />
<input type="email" className='w-full focus:outline-none focus:ring-0 border-b-2 py-3 mb-5' placeholder='UserEmail' />
<input type="password" className='w-full focus:outline-none focus:ring-0 border-b-2 py-3 mb-5' placeholder='UserPassword' />



<button className='bg-emerald-400 text-white px-6 py-2 rounded-md '>submit</button>
          </form>
          
        </div>
        </div>
        </>
     );
}

export default Contact ;