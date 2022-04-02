import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <>
        <header>
        <div className='head'>
                   <div className="headc">
                   <div  className='logo'>
                        <img src="./images/logo.png" alt="" />
                    </div>
                    <div className="line">|</div>
                    <nav>
                     <Link to='/'>Who we are</Link>
                     <Link to='/'>Portfolio</Link>
                     <Link to='/'>Services</Link>
                     <Link to='/'>Careers</Link>
                     <Link to='/'>Contact Us</Link>

                    </nav>
                   </div>
                   <button className='btnh'>Get Quotation</button>
                </div>
                <div className='hdis'>
                  <p>A non-stop IT service provider that will take care of all your mobile and web application <br /> development needs </p>
                  <h1>WebWrite <span>IT Services</span> </h1>
                  <button className='disbtn'>Get Started</button>
                </div>
                <div className='hside'>
                  <div className='hsidec'>
                     <p className='ps'>Mobile Development</p>
                     <div className='sidel'></div>
                     <p className='go'>Go ahead </p>
                  </div>
                  <div className='hsidec'>
                     <p className='ps'>Web Development</p>
                     <div className='sidel'></div>
                     <p className='go'>Go ahead </p>
                  </div>
                  <div className='hsidec'>
                     <p className='ps'>Graphic Deigning</p>
                     <div className='sidel'></div>
                     <p className='go'>Go ahead </p>
                  </div>
                </div>
                <div className='links'>
                    <p>LinkedIn</p>
                    <p>Facebook</p>
                    <p>Twitter</p>

                </div>
                <img className='bg' src="./images/background.png" alt="bg" />
                <div className='overlay'></div>
                
        </header>
    </>
  )
}

export default Home