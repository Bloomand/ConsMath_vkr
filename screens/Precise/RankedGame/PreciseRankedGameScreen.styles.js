import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  RankedGame: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#ccc",
  },
  timer: {
    //marginTop: 5,
    padding: 5,
    width: 300,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#223764",
  },
  timerText: {
    fontSize: 20,
    color: "white",
  },
  num_item: {
    height: 80,
    width: 60,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    padding: 15,
    marginRight: 10,
    textAlign: "center",
  },
  item: {
    marginTop: 10,
    width: 300,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text_bold: {
    fontWeight: "bold",
  },
  safe: {
    height: 380,
  },
  table_line: {
    flexDirection: "row",
    justifyContent: "center",
  },
  header_view: {
    height: 50,
    width: 65,
    backgroundColor: "#223764",
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    color: "#fff",
  },
  element_view: {
    height: 50,
    width: 65,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  element: {
    textAlign: "center",
  },
});
