import React from 'react';
import ModalWindow from './ModalWindow';
import { store } from '../store/reducers/index.js';
import { deleteItem } from '../requests';

const DeleteForm = () => {

  let handlerDeleteForm = (e) => {
    e.preventDefault();
    deleteItem(store.getState().deleteId);
  }

  return (
    <ModalWindow isOpen={store.getState().deleteItemFormIsVisible}>
      <form className='form' onSubmit={(e) => { handlerDeleteForm(e) }}>
        <label className='form-head'>Delete item</label>
        <label className='form-label' htmlFor='log-in-form'>Are you shure?</label>
        <div className='form-btn-container'>
          <button type='submit' className='form-btn-container-btn'>Confirm</button>
          <button type='button' className='form-btn-container-btn danger' onClick={() => { store.dispatch({ type: 'CLOSE_DELETE_FORM' }) }}>Close</button>
        </div>
      </form>
    </ModalWindow>
  );
}

export default DeleteForm;
