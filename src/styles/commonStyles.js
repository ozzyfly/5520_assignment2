import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e9ecef",
  },
  button: {
    margin: 15,
    padding: 12,
    backgroundColor: "#3498db",
    borderRadius: 8,
    elevation: 3, // Adds shadow for Android
    shadowOffset: { width: 1, height: 1 }, // For iOS shadow
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 18,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cancelButton: {
    padding: 12,
    backgroundColor: "#2ecc71",
    borderRadius: 8,
  },
  saveButton: {
    padding: 12,
    backgroundColor: "#2ecc71",
    borderRadius: 8,
  },
});
