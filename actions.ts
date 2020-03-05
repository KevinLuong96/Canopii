const SET_TREE_NAME = "SET_TREE_NAME";
const SET_LOCATION = "SET_LOCATION";
const SET_TREE_TYPE = "SET_TREE_TYPE";

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

function setTreeType(treeType) {
  return {
    type: SET_LOCATION,
    treeType,
  };
}

export {
  SET_TREE_NAME,
  SET_LOCATION,
  SET_TREE_TYPE,
  setTreeName,
  setLocation,
  setTreeType,
};
