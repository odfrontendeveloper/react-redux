import { AUTH_USER, LOG_OUT } from "../actions";

let initialState = localStorage.user ? localStorage.user : false;

export function authUser(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return action.email;
    case LOG_OUT:
      delete localStorage.user;
      return false;
    default:
      return state;
  }
}