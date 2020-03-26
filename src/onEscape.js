import { store } from "./store/reducers";

document.addEventListener('keydown', function (event) {
  switch (event.code) {
    case 'Escape':
      store.dispatch({ type: 'CLOSE_LOGIN_FORM' });
      store.dispatch({ type: 'CLOSE_ADD_FORM' });
      store.dispatch({ type: 'CLOSE_REDACT_FORM' });
      store.dispatch({ type: 'CLOSE_DELETE_FORM' });
      break;
    default:
      return;
  }
});