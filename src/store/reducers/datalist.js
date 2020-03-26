export function datalist(state = [], action) {
  switch (action.type) {
    case 'GET_ITEMS':
      return action.data;
    case 'ADD_ITEM':
      return [
        ...state,
        action.data
      ];
    case 'REDACT_ITEM':
      return state.map(item => {
        if (item._id === action.data._id) {
          return action.data;
        }
        return item;
      });
    case 'DELETE_ITEM':
      return state.filter(item => item._id !== action.id);
    default:
      return state;
  }
}