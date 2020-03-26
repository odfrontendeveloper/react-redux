import React, { useState } from 'react';
import ModalWindow from './ModalWindow';
import { store } from '../store/reducers/index.js';
import { AUTH_USER } from '../store/actions';

const LoginForm = () => {

  let [login, changeLogin] = useState('');
  let [resValidate, changeResValidate] = useState('');

  let handlerChangeInput = (value) => {
    changeLogin(value);
    changeResValidate('');
  }

  let handlerLoginForm = (e) => {
    e.preventDefault();
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(login)){
      store.dispatch({ type: AUTH_USER, email: login });
      localStorage.setItem('user', login);
      changeLogin('');
      changeResValidate('');
      return;
    }
    changeResValidate('Incorrect email!');
  }

  return (
    <ModalWindow isOpen={store.getState().loginFormIsVisible}>
      <form className='form' onSubmit={(e) => { handlerLoginForm(e) }}>
        <label className='form-head'>Login form</label>
        <label className='form-label' htmlFor='log-in-form'>Enter your email:</label>
        <input
          type='text'
          id='log-in-form'
          className='form-input'
          value={login}
          onChange={(e) => { handlerChangeInput(e.target.value) }}
        />
        <div className='form-result-validate danger'>
          {
            resValidate
          }
        </div>
        <div className='form-btn-container'>
          <button type='submit' className='form-btn-container-btn'>Sign in</button>
          <button type='button' className='form-btn-container-btn danger' onClick={() => { store.dispatch({ type: 'CLOSE_LOGIN_FORM' }) }}>Close</button>
        </div>
      </form>
    </ModalWindow>
  );
}

export default LoginForm;
