// import { OPEN_LOGIN_FORM } from "../actions/loginform";
import { combineReducers, createStore } from "redux";
import { imageLoad, loginFormIsVisible, addItemFormIsVisible, redactItemFormIsVisible, deleteItemFormIsVisible, redactId, deleteId } from "./loginform";
import { authUser } from "./authuser";
import { datalist } from "./datalist";


export let store = createStore(
  combineReducers({
    imageLoad,
    loginFormIsVisible,
    addItemFormIsVisible,
    redactItemFormIsVisible,
    deleteItemFormIsVisible,
    redactId,
    deleteId,
    authUser,
    datalist
  })
);

store.subscribe(() => console.log(store.getState()));