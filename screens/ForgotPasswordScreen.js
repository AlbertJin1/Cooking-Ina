import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// STYLES/COMPONENTS
import forgotPasswordStyles from "../styles/ForgotPasswordStyles";
import CustomButton from "../components/CustomButton";
import { isEmailValid } from "../components/validation";
import { AntDesign } from 'react-native-vector-icons';

// FIREBASE
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    if (!isEmailValid(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent successfully
        Alert.alert(
          "Password Reset Email Sent",
          "Please check your email for the password reset link."
        );
        setEmail("");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.error("Password reset error:", error);
        Alert.alert(
          "Password Reset Error",
          "Unable to send a password reset email. Please check the email address."
        );
      });
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
          <ScrollView contentContainerStyle={forgotPasswordStyles.scrollContainer}>
            <View style={forgotPasswordStyles.container}>
              <Image
                source={require("../img/Logo/cooking-ina.png")}
                style={forgotPasswordStyles.logo}
              />
              <Text
                style={[
                  forgotPasswordStyles.title,
                  { fontFamily: "Poppins_900Black" },
                ]}
              >
                Forgot Your Password?
              </Text>
              <Text
                style={[
                  forgotPasswordStyles.description,
                  { fontFamily: "Poppins_400Regular" },
                ]}
              >
                Enter your email address, and we'll send you a password reset link.
              </Text>
              <TextInput
                style={[
                  forgotPasswordStyles.input,
                  { fontFamily: "Poppins_400Regular" },
                ]}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <CustomButton
                title="Reset Password"
                onPress={handleResetPassword} style={forgotPasswordStyles.resetButton}
              />
              <TouchableOpacity onPress={() => navigation.goBack()} style={forgotPasswordStyles.goBackButton}>
                <AntDesign name="leftcircle" size={46} color="#6D9773" />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default ForgotPasswordScreen;
