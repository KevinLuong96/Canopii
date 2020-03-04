import { SET_TREE_NAME, SET_LOCATION } from "../actions";

const initialState = {
  treeName: {},
  location: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TREE_NAME:
      return Object.assign({}, state, {
        treeName: action.treeName,
      });
    case SET_LOCATION:
      return Object.assign({}, state, {
        location: action.location,
      });
  }
  return state;
}

export default rootReducer;
