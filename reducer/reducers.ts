import {
  SET_TREE,
  SET_LOCATION,
  SET_TREE_TYPE,
  SET_ENTRY_ID,
  SET_PREDICTED_TREES,
  SET_PHOTO_URI,
  CLEAR,
} from "../actions";

const initialState = {
  treeName: null,
  treeID: null,
  location: null,
  treeType: null,
  entryID: null,
  predictedTrees: null,
  photoURI: null,
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
    case SET_PREDICTED_TREES:
      return Object.assign({}, state, {
        predictedTrees: action.predictedTrees,
      });
    case SET_PHOTO_URI:
      return Object.assign({}, state, {
        photoURI: action.photoURI,
      });
    case CLEAR:
      return initialState;
  }
  return state;
}

export default rootReducer;
