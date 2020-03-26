import React from 'react';

const Item = (props) => {
  return (
    <div className='item' key={props.item._id}>
      <div className='item-functional-buttons'>
        <button
          type='button'
          className='item-functional-buttons-button redact-button'
          onClick={() => { props.openRedactForm(props.item._id, props.item.title, props.item.description) }}
        ></button>
        <button
          type='button'
          className='item-functional-buttons-button delete-button'
          onClick={() => { props.openDeleteForm(props.item._id) }}
        ></button>
      </div>
      <div className='item-title'>{props.item.title}</div>
      <div className='item-description'>{props.item.description}</div>
    </div>
  );
}

export default Item;