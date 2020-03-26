import React from 'react';
import { store } from '../store/reducers';
import { LOG_OUT } from '../store/actions/index';

const Header = () => {

  let logOut = () => {
    store.dispatch({
      type: 'GET_ITEMS',
      data: []
    });
    store.dispatch({ type: LOG_OUT });
    store.dispatch({ type: 'SET_REDACT_ID', id: null });
    store.dispatch({ type: 'SET_DELETE_ID', id: null });
    store.dispatch({ type: 'GET_ITEMS', data: [] });
  }

  return (
    <div className="app-header">
      <div className='app-header-sign'></div>
      <div className="app-header-logo">
        <img alt='logo' src="./img/ui/pear100.png" className='app-header-logo-image' />
      </div>
      <div className='app-header-sign'>
        <button type='button' className='app-header-sign-button' onClick={() => { logOut() }}>
          <img src='./img/ui/sign.png' alt='logout button'/>
        </button>
      </div>
    </div>
  );
}

export default Header;
