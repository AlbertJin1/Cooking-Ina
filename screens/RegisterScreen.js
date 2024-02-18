import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// STYLE/COMPO
import registerStyles from "../styles/RegisterStyles";
import CustomButton from "../components/CustomButton";
import { isEmailValid } from "../components/validation";
import { Entypo } from 'react-native-vector-icons';

// FIREBASE
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  const sendVerificationEmail = (user) => {
    sendEmailVerification(user)
      .then(() => {
        console.log("Verification email sent");
      })
      .catch((error) => {
        console.error("Email verification error:", error);
      });
  };

  const handleRegister = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      // !phoneNumber ||
      // !address ||
      !password ||
      !confirmPassword
    ) {
      Alert.alert(
        "Empty Fields",
        "Please fill in all the required input fields."
      );
      return;
    }

    if (!isEmailValid(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    let passwordRequirements = [];

    if (!/[a-z]/.test(password)) {
      passwordRequirements.push("at least one lowercase letter");
    }
    if (!/[A-Z]/.test(password)) {
      passwordRequirements.push("at least one uppercase letter");
    }
    if (!/\d/.test(password)) {
      passwordRequirements.push("at least one numeric digit");
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      passwordRequirements.push("at least one special character");
    }
    if (password.length < 8 || password.length > 15) {
      passwordRequirements.push("between 8 and 15 characters in length");
    }

    if (passwordRequirements.length === 0 && password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User registered:", user);

          const userRef = doc(db, "users", user.uid);
          setDoc(
            userRef,
            {
              firstName,
              lastName,
              email,
              phoneNumber: phoneNumber || "",
              address: address || "",
            },
            { merge: true }
          )
            .then(() => {
              console.log("User information stored in Firestore");
            })
            .catch((error) => {
              console.error("Firestore error:", error);
            });

          sendVerificationEmail(user);
          Alert.alert(
            "Check Your Email",
            "Please check your email for verification."
          );
          setFirstName("");
          setLastName("");
          setPhoneNumber("");
          setAddress("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          navigation.navigate("Login");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            Alert.alert(
              "Email Already in Use",
              "The email address is already registered. Please use a different email."
            );
          } else {
            console.error("Registration error:", error);
          }
        });
    } else if (password !== confirmPassword) {
      setPasswordMismatch(true);
    } else {
      Alert.alert(
        "Weak Password",
        `Password should contain ${passwordRequirements.join(", ")}.`
      );
    }
  };

  return (
    <React.Fragment>
      <StatusBar backgroundColor="#0C3B2E" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0C3B2E' }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -120 : 0}
        >
          <ScrollView contentContainerStyle={registerStyles.scrollContainer}>
            <View style={registerStyles.container}>
              <Text
                style={[
                  registerStyles.registerText,
                  { fontFamily: "Poppins_900Black" },
                ]}
              >
                REGISTER
              </Text>
              <Text
                style={[
                  registerStyles.descriptionText,
                  { fontFamily: "Poppins_400Regular" },
                ]}
              >
                Enter your personal information
              </Text>
              <TextInput
                style={[registerStyles.input, { fontFamily: "Poppins_400Regular" }]}
                placeholder="First Name"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
              />
              <TextInput
                style={[registerStyles.input, { fontFamily: "Poppins_400Regular" }]}
                placeholder="Last Name"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
              />
              {/* <TextInput
                style={[registerStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                placeholder="Username"
                value={username}
                onChangeText={text => setUsername(text)}
            /> */}
              <TextInput
                style={[registerStyles.input, { fontFamily: "Poppins_400Regular" }]}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              {/* <TextInput
            style={[registerStyles.input, { fontFamily: "Poppins_400Regular" }]}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          /> */}
              {/* <TextInput
            style={[registerStyles.input, { fontFamily: "Poppins_400Regular" }]}
            placeholder="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
          /> */}

              <View style={registerStyles.passwordContainer}>
                <TextInput
                  style={[
                    registerStyles.input,
                    registerStyles.passwordInput,
                    { fontFamily: "Poppins_400Regular" },
                  ]}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity
                  style={registerStyles.showPasswordButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Entypo
                    name={showPassword ? "eye-with-line" : "eye"}
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <View style={registerStyles.passwordContainer2}>
                <TextInput
                  style={[
                    registerStyles.input,
                    registerStyles.passwordInput,
                    { fontFamily: "Poppins_400Regular" },
                  ]}
                  placeholder="Confirm Password"
                  secureTextEntry={!showPassword1}
                  value={confirmPassword}
                  onChangeText={(text) => setConfirmPassword(text)}
                />
                <TouchableOpacity
                  style={registerStyles.showPasswordButton}
                  onPress={() => setShowPassword1(!showPassword1)}
                >
                  <Entypo
                    name={showPassword1 ? "eye-with-line" : "eye"}
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              {passwordMismatch && (
                <Text
                  style={[
                    { color: "red", fontSize: 15, fontFamily: "Poppins_400Regular", marginLeft: -115, marginTop: -10, marginBottom: 10, },
                  ]}
                >
                  Passwords do not match.
                </Text>
              )}

              <CustomButton
                title="Register"
                onPress={handleRegister} style={registerStyles.button}
              />
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={[
                    registerStyles.noacc,
                    { fontFamily: "Poppins_400Regular", color: "black" },
                  ]}
                >
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text
                    style={[
                      registerStyles.noacc,
                      { fontFamily: "Poppins_600SemiBold", color: "#BB8A52" },
                    ]}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default RegisterScreen;
