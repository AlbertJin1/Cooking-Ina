import { StyleSheet } from "react-native";

const forgotPasswordStyles = StyleSheet.create({
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
  logo: {
    width: 430,
    height: 180,
    marginBottom: 10,
    padding: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 100,
    textAlign: "center",
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
  resetButton: {
    width: 322,
  },
  resetButtonText: {
    color: "white",
    fontSize: 20,
  },
  goBackButton: {
    position: 'absolute',
    top: 48,
    left: 28,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
});

export default forgotPasswordStyles;
