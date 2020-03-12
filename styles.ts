import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  all: {
    fontFamily: "Muli-Regular",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "#f9f9f9",
  },
  centered: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "#f9f9f9",
    alignItems: "center",
  },
  flex: {
    display: "flex",
    flex: 1,
  },
  title: {
    fontFamily: "Muli",
    color: "#4b4b4b",
    fontSize: 30,
  },
  heading: {
    fontFamily: "Muli",
    color: "#4b4b4b",
    fontSize: 18,
  },
  body: {
    fontFamily: "Muli",
    color: "#4b4b4b",
    fontSize: 14,
  },
});
