const SET_TREE_NAME = "SET_TREE_NAME";
const SET_LOCATION = "SET_LOCATION";
const SET_TREE_TYPE = "SET_TREE_TYPE";
const SET_ENTRY_ID = "SET_ENTRY_ID";

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

function setEntryID(entryID) {
  return {
    type: SET_LOCATION,
    entryID,
  };
}

export {
  SET_TREE_NAME,
  SET_LOCATION,
  SET_TREE_TYPE,
  SET_ENTRY_ID,
  setTreeName,
  setLocation,
  setTreeType,
  setEntryID,
};
