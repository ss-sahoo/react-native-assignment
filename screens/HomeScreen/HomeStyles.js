import { StyleSheet } from "react-native";
const backgroundImage = require("../../assets/background-image.png");

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  scrollView: {
    padding: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 6,
    marginVertical: 10,
    flex: 1,
  },
  redButton: {
    backgroundColor: "#e74c3c",
  },
  greenButton: {
    backgroundColor: "#2ecc71",
  },
  disabledButton: {
    opacity: 0.5,
    backgroundColor: "#545C66",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  disabledButtonText: {
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 10,
    gap: 10,
  },
});

export default homeStyles;
