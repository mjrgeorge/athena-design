import React from 'react';
import './Achievements.css';
import icon1 from '../../assets/icon/icon1.png';
import icon2 from '../../assets/icon/icon2.png';
import icon3 from '../../assets/icon/icon3.png';
import icon4 from '../../assets/icon/icon4.png';

const Achievements = () => {
  return (
    <div className='row align-items-center mx-auto achievements-area' id='about'>
      <div className='col-lg-5 col-md-12 px-0'>
        <div>
          <h2 className='py-2'>Our Achievements</h2>
          <p className='text-muted'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letter
          </p>
        </div>
      </div>
      <div className='col-lg-7 col-md-12 justify-content-center'>
        <div className='row mx-0'>
          <div className='col-md-6 icons-area'>
            <div className='radiusStyleTwo btn-brand bg-white shadow p-3 my-4 bg-info d-flex justify-content-center align-items-center'>
              <div>
                <img className='mr-3' src={icon1} alt='icon' />
              </div>
              <div className='text-white'>
                <h2 className='font-weight-bolder '>700+</h2>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className='radiusStyleOne bg-white shadow p-3 my-4 bg-info d-flex justify-content-center align-items-center'>
              <div>
                <img className='mr-3' src={icon2} alt='icon' />
              </div>
              <div>
                <h2 className='font-weight-bolder'>25+</h2>
                <p>Crazy Minds</p>
              </div>
            </div>
          </div>
          <div className='col-md-6 mx-auto icons-area'>
            <div className='radiusStyleTwo bg-white shadow p-3 my-4 bg-info d-flex justify-content-center align-items-center'>
              <div>
                <img className='mr-3' src={icon3} alt='icon' />
              </div>
              <div>
                <h2 className='font-weight-bolder'>140+</h2>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className='radiusStyleOne bg-white shadow p-3 my-4 bg-info d-flex justify-content-center align-items-center'>
              <div>
                <img className='mr-3' src={icon4} alt='icon' />
              </div>
              <div>
                <h2 className='font-weight-bolder'>75+</h2>
                <p>Running Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
