import React from 'react';
import frame from '../../../assets/images/frame1.png';

const Header = () => {
  return (
    <main className='row d-flex align-items-center justify-content-center mt-0 '>
      <div className='col-md-5'>
        <h1 className='mb-4'>Florence agency</h1>
        <p style={{ color: '#000', fontSize: '16px' }} className='mb-4'>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>

        <a className='btn btn-brand text-white mb-3' href='#pricing'>
          See Pricing
        </a>
      </div>
      <div className='col-md-7'>
        <img src={frame} alt='' className='img-fluid w-100  p-4' />
      </div>
    </main>
  );
};

export default Header;
