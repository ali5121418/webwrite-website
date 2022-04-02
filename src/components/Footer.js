import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <>
        <footer>
           <div className='fd1'>
           <div className='fd2'>
           <div>
                <h2 className='hsame'>Email</h2>
                <p className='psame'>info@conovoinc.com</p>
            </div>
            <div>
                <h2 className='hsame'>Address</h2>
                <p className='psame'>268 Bath Road Slough, Berkshire SL1 4DX, United Kingdom.</p>
            </div>
            <div>
                <h2 className='hsame'>Phone</h2>
                <p className='psame'>+44 7846 691963</p>
            </div>
            <div className='icons'>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            </div>
           </div>
           <div className='fd3'>
               <div className='imgdiv'>
                   <img className='img1' src="./images/p.png" alt="" />
                   <img className='img2' src="./images/p1.png" alt="" />
               </div>
               <div  className='nletter'>
                   <p>Subscribe Newsletter</p>
                   <div className='nl1'>
                       <input type="email" placeholder='abc@email.com' />
                       <button>Subscribe</button>
                   </div>
               </div>
           </div>
           </div>
           <p className='foot'>Dream. Connect. Innovate -- WebWrite IT Services © 2021</p>
        </footer>
    </>
  )
}

export default Footer