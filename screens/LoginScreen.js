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

// COMPONENTS
import { useNavigation } from "@react-navigation/native";
import { Fontisto, Entypo, AntDesign } from 'react-native-vector-icons';
import loginStyles from "../styles/LoginStyles";
import CustomButton from "../components/CustomButton";
import { isEmailValid } from "../components/validation";

// FONTS
import {
  useFonts,
  Poppins_400Regular,
  Poppins_900Black,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

// FIREBASE
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  let [fontsLoaded, fontError] = useFonts({
    Poppins_900Black,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const isEmailVerified = (user) => {
    return user.emailVerified;
  };

  const handleLogin = () => {
    if (!email || !password) {
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

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (isEmailVerified(user)) {
          console.log("User signed in:", user);

          // Display success alert with "OK" button
          Alert.alert(
            "Login Successful",
            "You have successfully logged in.",
            [
              {
                text: "OK",
                onPress: () => {
                  setEmail("");
                  setPassword("");
                  navigation.navigate("Home");
                },
              },
            ]
          );
        } else {
          Alert.alert(
            "Email Not Verified",
            "Please verify your email to log in."
          );
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
        Alert.alert("Error", "Wrong credentials.");
      });
  };

  return (
    <React.Fragment>
      <StatusBar backgroundColor="#0C3B2E" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0C3B2E' }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
          <ScrollView
            contentContainerStyle={loginStyles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            <View style={loginStyles.container}>
              <Text
                style={[loginStyles.loginText, { fontFamily: "Poppins_900Black" }]}
              >
                LOGIN
              </Text>
              <Text
                style={[
                  loginStyles.descriptionText,
                  { fontFamily: "Poppins_400Regular" },
                ]}
              >
                Login to continue using this app
              </Text>

              <TextInput
                style={[loginStyles.input, { fontFamily: "Poppins_400Regular" }]}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />

              <View style={loginStyles.passwordContainer}>
                <TextInput
                  style={[
                    loginStyles.input,
                    loginStyles.passwordInput,
                    { fontFamily: "Poppins_400Regular" }
                  ]}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity
                  style={loginStyles.showPasswordButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Entypo
                    name={showPassword ? "eye-with-line" : "eye"}
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>

              <CustomButton
                title="Login"
                onPress={handleLogin} style={loginStyles.button}
              />

              <View style={loginStyles.noAccountContainer}>
                <Text
                  style={[
                    loginStyles.noacc,
                    { fontFamily: "Poppins_400Regular", color: "black" },
                  ]}
                >
                  Forgot your password?{" "}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
                  <Text
                    style={[
                      loginStyles.noacc,
                      { fontFamily: "Poppins_600SemiBold", color: "#BB8A52" },
                    ]}
                  >
                    Reset
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={loginStyles.orContainer}>
                <Fontisto name="minus-a" size={24} />
                <Text style={loginStyles.orText}>OR</Text>
                <Fontisto name="minus-a" size={24} />
              </View>

              <View style={loginStyles.socialButtonsContainer}>
                <TouchableOpacity
                  style={[loginStyles.socialButton, loginStyles.facebookButton]}
                  onPress={() => {
                    Alert.alert("Feature Unavailable", "This feature will be available soon.");
                  }}
                >
                  <View style={loginStyles.socialButtonIcon}>
                    <AntDesign name="facebook-square" size={24} color="#3b5998" />
                  </View>
                  <Text style={loginStyles.socialButtonText}>Login with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[loginStyles.socialButton, loginStyles.googleButton]}
                  onPress={() => {
                    Alert.alert("Feature Unavailable", "This feature will be available soon.");
                  }}
                >
                  <View style={loginStyles.socialButtonIcon}>
                    <AntDesign name="google" size={24} color="#dd4b39" />
                  </View>
                  <Text style={loginStyles.socialButtonText}>Login with Google</Text>
                </TouchableOpacity>
              </View>

              <View style={loginStyles.noAccountContainer}>
                <Text
                  style={[
                    loginStyles.noacc,
                    { fontFamily: "Poppins_400Regular", color: "black" },
                  ]}
                >
                  Don't have an account?{" "}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                  <Text
                    style={[
                      loginStyles.noacc,
                      { fontFamily: "Poppins_600SemiBold", color: "#BB8A52" },
                    ]}
                  >
                    Register
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

export default LoginScreen;
