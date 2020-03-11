import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  all: {
    fontFamily: "Muli-Regular",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  centered: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  flex: {
    display: "flex",
    flex: 1,
  },
  title: {
    fontFamily: "Muli",
    fontSize: 30,
  },
  heading: {
    fontFamily: "Muli",
    fontSize: 18,
  },
  body: {
    fontFamily: "Muli",
    fontSize: 14,
  },
});
