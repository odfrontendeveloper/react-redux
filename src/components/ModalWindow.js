import React from 'react';
import ReactDOM from 'react-dom';

const ModalWindow = (props) => {

  return (
    ReactDOM.createPortal(
      <div
        className='ModalWindow'
        style={{ display: props.isOpen ? 'flex' : 'none' }}
      >
        <div
          className='ModalWindow-container'
        >
          {
            props.children
          }
        </div>
      </div>,
      document.getElementById('root')
    )
  );
}

export default ModalWindow;