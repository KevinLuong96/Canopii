import {
  SET_TREE,
  SET_LOCATION,
  SET_TREE_TYPE,
  SET_ENTRY_ID,
} from "../actions";

const initialState = {
  treeName: "",
  treeID: 0,
  location: {},
  treeType: "",
  entryID: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TREE:
      return Object.assign({}, state, {
        treeName: action.treeName,
        treeID: action.ID,
      });
    case SET_LOCATION:
      return Object.assign({}, state, {
        location: action.location,
      });
    case SET_TREE_TYPE:
      return Object.assign({}, state, {
        treeType: action.treeType,
      });
    case SET_ENTRY_ID:
      return Object.assign({}, state, {
        entryID: action.entryID,
      });
  }
  return state;
}

export default rootReducer;
