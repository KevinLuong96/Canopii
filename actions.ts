const SET_TREE = "SET_TREE";
const SET_LOCATION = "SET_LOCATION";
const SET_TREE_TYPE = "SET_TREE_TYPE";
const SET_ENTRY_ID = "SET_ENTRY_ID";

function setTree(treeName, ID) {
  return {
    type: SET_TREE,
    treeName,
    ID,
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
    type: SET_TREE_TYPE,
    treeType,
  };
}

function setEntryID(entryID) {
  return {
    type: SET_ENTRY_ID,
    entryID,
  };
}

export {
  SET_TREE,
  SET_LOCATION,
  SET_TREE_TYPE,
  SET_ENTRY_ID,
  setTree,
  setLocation,
  setTreeType,
  setEntryID,
};
