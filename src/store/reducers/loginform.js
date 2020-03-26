export function imageLoad(state = false, action) {
  switch (action.type) {
    case 'OPEN_LOAD':
      return true;
    case 'CLOSE_LOAD':
      return false;
    default:
      return state;
  }
}

export function loginFormIsVisible(state = false, action) {
  switch (action.type) {
    case 'OPEN_LOGIN_FORM':
      return true;
    case 'CLOSE_LOGIN_FORM':
      return false;
    default:
      return state;
  }
}

export function addItemFormIsVisible(state = false, action) {
  switch (action.type) {
    case 'OPEN_ADD_FORM':
      return true;
    case 'CLOSE_ADD_FORM':
      return false;
    default:
      return state;
  }
}

export function redactItemFormIsVisible(state = false, action) {
  switch (action.type) {
    case 'OPEN_REDACT_FORM':
      return true;
    case 'CLOSE_REDACT_FORM':
      return false;
    default:
      return state;
  }
}

export function deleteItemFormIsVisible(state = false, action) {
  switch (action.type) {
    case 'OPEN_DELETE_FORM':
      return true;
    case 'CLOSE_DELETE_FORM':
      return false;
    default:
      return state;
  }
}

export function redactId(state = null, action) {
  switch (action.type) {
    case 'SET_REDACT_ID':
      return action.id;
    default:
      return state;
  }
}

export function deleteId(state = null, action) {
  switch (action.type) {
    case 'SET_DELETE_ID':
      return action.id;
    default:
      return state;
  }
}