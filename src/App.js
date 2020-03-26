import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import { store } from './store/reducers/index.js';
import { Redirect } from 'react-router-dom';

function App(props) {
  return (
    <div className="app">
      {
        store.getState().authUser !== false ? (
          <Redirect to='/page' />
        ) : (
            null
          )
      }
      <LoginForm />
      <div className='app-main'>
        <div className='app-main-login'>
          <button type='button' className='login-form-button' onClick={() => { store.dispatch({ type: 'OPEN_LOGIN_FORM' }) }}>Press to log in</button>
        </div>
      </div>
    </div>
  );
}

export default connect(
  state => ({
    teststore: state
  }),
  dispatch => ({})
)(App);
