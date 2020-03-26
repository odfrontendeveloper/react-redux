import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { store } from '../store/reducers';
import Header from './Header';
import DeleteForm from './DeleteForm';
import ImageLoad from './ImageLoad';
import { getItems } from '../requests';
import AddForm from './AddForm';
import Item from './Item';


function Page(props) {

  let [redactTitleValue, changeRedactTitleValue] = useState();
  let [redactDescriptionValue, changeRedactDescriptionValue] = useState();

  useEffect(() => {
    getItems(localStorage.user);
  }, []);

  let openRedactForm = (id, title, description) => {
    changeRedactTitleValue(title);
    changeRedactDescriptionValue(description);
    store.dispatch({ type: 'OPEN_REDACT_FORM' });
    store.dispatch({ type: 'SET_REDACT_ID', id: id });
  }

  let openDeleteForm = (id) => {
    store.dispatch({ type: 'OPEN_DELETE_FORM' });
    store.dispatch({ type: 'SET_DELETE_ID', id: id });
  }

  return (
    <div className="app">
      <ImageLoad />
      {
        store.getState().authUser === false ? (
          <Redirect to='/login' />
        ) : (
            null
          )
      }
      <Header />
      <AddForm modeAdd={true} />
      <AddForm
        modeAdd={false}
        redactTitleValue={redactTitleValue}
        redactDescriptionValue={redactDescriptionValue}
        changeRedactTitleValue={changeRedactTitleValue}
        changeRedactDescriptionValue={changeRedactDescriptionValue}
      />
      <DeleteForm />
      <div className='app-main'>
        <div className='app-main-container'>
          <button type='button' className='item item-add-new' onClick={() => { store.dispatch({ type: 'OPEN_ADD_FORM' }) }}></button>
          {
            store.getState().datalist.map((item) => {
              return (
                <Item
                  openRedactForm={openRedactForm}
                  openDeleteForm={openDeleteForm}
                  item={item}
                  key={item._id}
                />
              );
            })
          }
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
)(Page);
