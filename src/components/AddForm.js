import React, { useState } from 'react';
import ModalWindow from './ModalWindow';
import { store } from '../store/reducers/index.js';
import { addItem, changeItem } from '../requests';

const AddForm = (props) => {

  let [titleValue, changeTitleValue] = useState('');
  let [descriptionValue, changeDescriptionValue] = useState('');
  let [resValidate, changeResValidate] = useState('');

  let handlerAddForm = (e) => {
    e.preventDefault();
    if (props.modeAdd) {
      if (titleValue !== '' && descriptionValue !== '') {
        changeResValidate('');
        addItem(
          {
            title: titleValue,
            description: descriptionValue
          },
          changeTitleValue,
          changeDescriptionValue
        );
      }
      else {
        changeResValidate('Fill all fields!');
      }
    } else {
      if (props.redactTitleValue !== '' && props.redactDescriptionValue !== '') {
        changeResValidate('');
        changeItem(
          {
            id: store.getState().redactId,
            title: props.redactTitleValue,
            description: props.redactDescriptionValue
          },
          props.changeRedactTitleValue,
          props.changeRedactDescriptionValue
        );
      }
      else {
        changeResValidate('Fill all fields!');
      }
    }
  }

  return (
    <ModalWindow isOpen={props.modeAdd ? store.getState().addItemFormIsVisible : store.getState().redactItemFormIsVisible}>
      <form className='form' onSubmit={(e) => { handlerAddForm(e) }}>
        <label className='form-head'>{props.modeAdd ? `Add item` : `Redact item`}</label>
        <label className='form-label' htmlFor={`${props.modeAdd ? 'add' : 'redact'}-title`}>Title:</label>
        <textarea
          type='text'
          id={`${props.modeAdd ? 'add' : 'redact'}-title`}
          className='form-input'
          value={props.modeAdd ? titleValue : props.redactTitleValue}
          onChange={(e) => { props.modeAdd ? changeTitleValue(e.target.value) : props.changeRedactTitleValue(e.target.value) }}
        ></textarea>
        <label className='form-label' htmlFor={`${props.modeAdd ? 'add' : 'redact'}-description`}>Description:</label>
        <textarea
          type='text'
          id={`${props.modeAdd ? 'add' : 'redact'}-description`}
          className='form-input'
          value={props.modeAdd ? descriptionValue : props.redactDescriptionValue}
          onChange={(e) => { props.modeAdd ? changeDescriptionValue(e.target.value) : props.changeRedactDescriptionValue(e.target.value) }}
        ></textarea>        
        <div className='form-result-validate danger'>
          {
            resValidate
          }
        </div>
        <div className='form-btn-container'>
          <button type='submit' className='form-btn-container-btn'>{props.modeAdd ? `Add` : `Change`}</button>
          <button type='button' className='form-btn-container-btn danger' onClick={() => { props.modeAdd ? store.dispatch({ type: 'CLOSE_ADD_FORM' }) : store.dispatch({ type: 'CLOSE_REDACT_FORM' }) }}>Close</button>
        </div>
      </form>
    </ModalWindow>
  );
}

export default AddForm;
