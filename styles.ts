import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  all: {
    fontFamily: "OpenSans-Regular",
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
    fontFamily: "OpenSans-Bold",
    fontSize: 30,
  },
  heading: {
    fontFamily: "OpenSans",
    fontSize: 18,
  },
  body: {
    fontFamily: "OpenSans",
    fontSize: 14,
  },
});
