import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Game: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#ccc",
  },
  question: {
    //margin: 10,
    width: 300,
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  question_element: {
    //padding: 5,
    fontSize: 20,
  },
  input: {
    marginTop: 20,
    padding: 15,
    width: 300,
    fontSize: 20,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    margin: 20,
    padding: 15,
    width: 300,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#223764",
    color: "#fff",
  },
  button_exit: {
    margin: 30,
    padding: 10,
    width: 250,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#86bfe8",
  },
  button_text: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  button_text_ex: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    color: "black",
  },
});
