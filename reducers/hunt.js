const huntReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_HUNTS':
    return [...state, ...action.hunts];
  default:
    return state;
  }
};

export default huntReducer;