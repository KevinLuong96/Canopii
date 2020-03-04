const SET_TREE_NAME = "SET_TREE_NAME";
const SET_LOCATION = "SET_LOCATION";

function setTreeName(treeName) {
  return {
    type: SET_TREE_NAME,
    treeName,
  };
}

function setLocation(location) {
  return {
    type: SET_LOCATION,
    location,
  };
}

export { SET_TREE_NAME, SET_LOCATION, setTreeName, setLocation };
