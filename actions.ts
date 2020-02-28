const SET_TREE_NAME = "SET_TREE_NAME";

function setTreeName(treeName) {
  return {
    type: SET_TREE_NAME,
    treeName,
  };
}
export { SET_TREE_NAME, setTreeName };
