import React from 'react';
import './Page1.css'

const Page1 = () => {
  return (
    <>
        <section className='page1'>
        <div className='parent'>
        <div className='page1d'>
          <div className='page1dc1'>
              <div className='page1dc2'>
                  <div className='page1dc3'>
                     <p className='page1dc3p1'>BRAD SCHWAN</p>
                     <div></div>
                     <h2>What Clien <span>say?</span></h2>
                     <p className='page1dc3p2'>Lorem ipsum dolor sit, amet consectetur adipisicing 
                       dolores accusantium reprehenderit autem! Laudantium 
                        minus aperiam eaque  deserunt doloribus modi?</p>
                  </div>
              </div>
          </div>
        </div>
        <div className='page1d2'>
            <h1> So thats us. <br />There's no other <br /> way to put it.</h1>
            <div className='btndiv'>
                <button>Prev</button>
                <button>Next</button>

            </div>
        </div>
        </div>
            <img src="./images/bg.png" alt="" />
            <div className="page1overlay">ffffddss</div>
        </section>
    </>
  )
}

export default Page1