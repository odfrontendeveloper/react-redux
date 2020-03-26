import React from 'react';
import { store } from '../store/reducers/index.js';

const ImageLoad = () => {
  return(
    <div className='ImageLoad' style={{
      display: store.getState().imageLoad ? 'flex' : 'none'
    }}>
      <img src='./img/ui/circle.gif' alt='wait' className='ImageLoad-image' />
      <div></div>
    </div>
  );
}

export default ImageLoad;