import React from 'react';
import './Page.css'


const Page = () => {
  return (
    <>
        <section className='page'>
         <div className='pd1'>
         <div className='pd1c'>
         <p>Know us better</p>
           <h2>
               Your full stack technology <br />
               partners from idea conception <br />
               to project execution and <br />
               Maintenance.
           </h2>
         </div>
           <div>
           <p className='pp1'>
               WebWrite IT Services is a bespack software <br /> development company specializing in research-led,<br />
               human-centered custom software development, <br /> progressive web apps (PWA's) and mobile <br /> applications.
           </p>
           <p className='pp2'>Learn more</p>
           </div>
         </div>
         <div className='pd2'>
           <div className='pd2c'>
           <i class="fa-solid fa-mobile-screen"></i>
           <h2> Mobile <br /> <span>Application</span></h2>
           <p> Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. Quibusdam, optio possimus <br /> suscipit ratione, dolor adipisci voluptas corporis <br /> optio repellat blanditiis.</p>
           <div className='pd2c1'>
               <p>Go ahead</p>
               <div className='pd2c1l'></div>
               <div className='btnd'>
                   <button>Prev</button>
                   <button>Next</button>

               </div>
           </div>
           </div>
          <div className='pd2c2'>
              <p>Game Applications</p>
              <p>Website Development</p>
              <p className='ma'>Mobile Applications</p>
              <p>Project Management</p>
              <p>UI/UX Design</p>

          </div>
         </div>
        </section>
    </>
  )
}

export default Page