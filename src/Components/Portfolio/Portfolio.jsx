import React from 'react'
import logo1 from'../../assets/poert1.png'
import logo2 from'../../assets/port2.png'
import logo3 from'../../assets/port3.png'
function Portfolio () {
    return ( 
        <>
         <div className="potfolio text-center ">
        <div className="  ">
       
            <div className="ourheader text-center mb-7 mt-5 ">
<h3 className='font-extrabold text-4xl text-center'>Portfolio component</h3>
<div className="shape mt-5 text-center">
    <span className='inline-block w-16 h-1 bg-slate-700'></span>
    <i class="fa-solid fa-star mx-3"></i>
    <span className='inline-block w-16 h-1 bg-slate-700'></span>
</div>
            </div>
           <div className="mycards flex flex-col md:flex-row mt-5 mx-auto">
            <div className="card flex flex-col rounded-lg">
                <div className="myimg">
<img src={logo1} alt="" className='w-full rounded-lg' />
</div>
            </div>
            <div className="card flex flex-col">
                <div className="myimg">
<img src={logo2} alt="" className='w-full rounded-lg' />
</div>
            </div>
            <div className="card flex flex-col">
                <div className="myimg">
<img src={logo3} alt="" className='w-full rounded-lg' />
</div>
            </div>
           </div>
           <div className="mycards flex flex-col md:flex-row mx-auto ">
            <div className="card flex flex-col">
                <div className="myimg">
<img src={logo1} alt="" className='w-full rounded-lg' />
</div>
            </div>
            <div className="card flex flex-col">
                <div className="myimg">
<img src={logo2} alt="" className='w-full rounded-lg' />
</div>
            </div>
            <div className="card flex flex-col">
                <div className="myimg">
<img src={logo3} alt="" className='w-full rounded-lg' />
</div>
            </div>
           </div>
           
        </div>
        </div>
        </>
     );
}

export default Portfolio ;