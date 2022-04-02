import React from 'react';
import './Page2.css';
import {Link} from 'react-router-dom'

const Page2 = () => {
  return (
    <>
        <section className='page2'>
            <div className='page2d'>
                <h1>Portfolio</h1>
                <div className='page2d2'>
                    <Link className='active' to="">All</Link>
                    <Link to="">Mobile Apps</Link>
                    <Link to="">Websites</Link>
                    <Link to="">Games</Link>

                </div>
                
            </div>
            <div className='page3d'>
                <img src="./images/mbl.png" alt="" />
                <h1>Uncover</h1>
                <div className='see'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Asperiores facere cumque nisi, necessitatibus, quas <br />
                 tempora autem dolor fuga architecto.</p>
                 <button>See More</button>
                </div>
            </div>
            <div className='boxd'>
                    <img src="./images/box.png" alt="" />
                    <div className='btndivv'>
                        <button>Prev</button>
                        <button>Next</button>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Page2