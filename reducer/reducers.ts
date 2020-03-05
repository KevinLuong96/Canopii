import { SET_TREE_NAME, SET_LOCATION, SET_TREE_TYPE } from "../actions";

const initialState = {
  treeName: "",
  location: {},
  treeType: "",
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
    case SET_TREE_TYPE:
      return Object.assign({}, state, {
        treeType: action.treeType,
      });
  }
  return state;
}

export default rootReducer;
