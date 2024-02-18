import { StyleSheet } from "react-native";

const registerStyles = StyleSheet.create({
  container: {
    position: 'relative',
    // top: 'auto',
    // marginTop: 'auto',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#E5E8E1',
    height: 780,
    width: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  registerText: {
    fontSize: 60,
    margin: 0,
    letterSpacing: 0,
    textAlign: "center",
    height: 80,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 80,
    opacity: .58,
  },
  input: {
    width: 322,
    height: 56,
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
    borderRadius: 14,
    backgroundColor: 'white',
    textAlign: 'left',
    justifyContent: 'center',
  },
  passwordInput: {
    width: 255,
  },
  button: {
    width: 322,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  showPasswordButton: {
    position: 'absolute',
    top: 16,
    right: 12,
    opacity: .35,
  },
  passwordContainer: {
    position: 'relative',
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    width: 322,
  },
  passwordContainer2: {
    flexDirection: "row",
    alignItems: "center",
  },
  noacc: {
    fontSize: 16,
    color: "blue",
    marginTop: 15,
  },
});

export default registerStyles;
