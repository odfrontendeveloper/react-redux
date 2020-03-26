import { store } from "../store/reducers";
import axios from 'axios';

export async function getItems(email) {
  store.dispatch({ type: 'OPEN_LOAD' });
  axios({
    method: 'get',
    url: 'https://raysael.herokuapp.com/todo?author=' + localStorage.user
  }).catch(function (error) {
    store.dispatch({ type: 'CLOSE_LOAD' });
    alert('Произошла ошибка');
  }).then((responce) => {
    store.dispatch({ type: 'CLOSE_LOAD' });
    store.dispatch({
      type: 'GET_ITEMS',
      data: responce.data
    });
  });
}

export async function deleteItem(id) {
  store.dispatch({ type: 'OPEN_LOAD' });
  axios({
    method: 'delete',
    url: 'https://raysael.herokuapp.com/todo/' + id
  }).catch(function (error) {
    alert('Произошла ошибка');
    store.dispatch({ type: 'CLOSE_LOAD' });
  }).then((responce) => {
    store.dispatch({ type: 'CLOSE_LOAD' });
    store.dispatch({
      type: 'SET_DELETE_ID',
      id: null
    });
    store.dispatch({
      type: 'CLOSE_DELETE_FORM'
    });
    store.dispatch({
      type: 'DELETE_ITEM',
      id: id
    });
  });
}

export async function addItem(data, changeTitle, changeDescription) {
  store.dispatch({ type: 'OPEN_LOAD' });
  axios.post('https://raysael.herokuapp.com/todo', {
    author: localStorage.user,
    title: data.title,
    description: data.description
  }).catch(function (error) {
    store.dispatch({ type: 'CLOSE_LOAD' });
    alert('Произошла ошибка');
  }).then((responce) => {
    if (responce.status >= 200 && responce.status < 300) {
      changeTitle('');
      changeDescription('');
      store.dispatch({ type: 'CLOSE_ADD_FORM' });
      store.dispatch({ type: 'CLOSE_LOAD' });
      store.dispatch({
        type: 'ADD_ITEM',
        data: responce.data
      });
    }
  });
}

export async function changeItem(data, changeTitle, changeDescription) {
  store.dispatch({ type: 'OPEN_LOAD' });
  axios({
    method: 'patch',
    url: 'https://raysael.herokuapp.com/todo/' + data.id,
    data: {
      title: data.title,
      description: data.description
    }
  }).catch(function (error) {
    store.dispatch({ type: 'CLOSE_LOAD' });
    alert('Произошла ошибка');
  }).then((responce) => {
    if (responce.status >= 200 && responce.status < 300) {
      changeTitle('');
      changeDescription('');
      store.dispatch({
        type: 'SET_REDACT_ID',
        id: null
      });
      store.dispatch({ type: 'CLOSE_REDACT_FORM' });
      store.dispatch({ type: 'CLOSE_LOAD' });
      store.dispatch({
        type: 'REDACT_ITEM',
        data: responce.data
      });
    }
  });
}