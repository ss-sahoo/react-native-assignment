import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginVertical: 10,
  },
  cardBlur: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(209, 213, 219, 0.3)",
  },
  expandedContent: {
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#49AD61",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 5,
    backgroundColor: "#fff",
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  clearButton: {
    backgroundColor: "#F44336",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  errorText: {
    color: "#F44336",
    marginBottom: 5,
  },
  detailsContent: {
    marginTop: 10,
  },
  buttonWrapper: {
    width: "47%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 10,
  },
  cardTitle: {
    color: "#545C66",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardHeading: {
    color: "#545C66",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardText: {
    color: "#545C66",
    fontSize: 14,
    fontWeight: "normal",
  },
});
