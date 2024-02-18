import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 'auto',
    marginTop: 'auto',
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
  formContainer: {
    alignItems: "center",
    padding: 0,
    // borderRadius: 30,
    // borderWidth: 3,
  },
  noAccountContainer: {
    flexDirection: "row",
  },
  loginText: {
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
  passwordContainer: {
    position: 'relative',
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    width: 322,
  },
  showPasswordButton: {
    position: 'absolute',
    top: 16,
    right: 12,
    opacity: .35,
  },
  forgotPassword: {
    fontSize: 15,
    marginVertical: 5,
    textAlign: 'right',
    opacity: .89,
    fontFamily: "Poppins_400Regular"
  },
  noacc: {
    fontSize: 16,
    color: "blue",
    margin: 0,
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
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    opacity: .44,
  },
  orText: {
    color: 'black',
    fontSize: 16,
    marginHorizontal: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    width: 322,
    textAlign: 'center',
  },
  socialButtonIcon: {
    marginRight: 0,
  },
  facebookButton: {
    marginBottom: 15,
  },
  googleButton: {
    marginBottom: 35  ,
  },
  socialButtonText: {
    fontFamily: "Poppins_600SemiBold",
    textAlign: 'center',
    flex: 1,
  },
});

export default loginStyles;
