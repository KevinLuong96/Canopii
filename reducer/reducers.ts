import { SET_TREE_NAME } from "../actions";

const initialState = {
  treeName: "",
  location: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TREE_NAME:
      return Object.assign({}, state, {
        treeName: action.treeName,
      });
  }
}

export default rootReducer;
