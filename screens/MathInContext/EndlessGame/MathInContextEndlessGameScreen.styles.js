import { StyleSheet } from "react-native";
  
export const styles = StyleSheet.create({
    EndlessGame: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      padding: 10,
      backgroundColor: "#ccc",
    },
    num_item: {
      height: 180,
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
      width: '100%',
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
    