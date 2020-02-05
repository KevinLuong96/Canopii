import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  all: {
    fontFamily: "OpenSans",
  },
  container: {
    width: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  centered: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  flex: {
    display: "flex",
    flex: 1,
  },
  flexColumn: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 20,
  },
  heading: {
    fontSize: 20,
  },
  body: {
    fontSize: 14,
  },
});
