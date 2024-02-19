import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: (windowWidth - 60) / 2,
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    marginRight: 20,
  },
  cardBlur: {
    borderRadius: 12,
    overflow: "hidden",
    width: (windowWidth - 60) / 2,
    marginRight: 20,
    marginBottom: 20,
  },
  cardTitle: {
    color: "#545C66",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardText: {
    color: "#545C66",
    fontSize: 12,
    fontWeight: "normal",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 10,
  },
  buttonWrapper: {
    width: "fit-content",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  flatListContent: {
    alignItems: "center",
  },
});
