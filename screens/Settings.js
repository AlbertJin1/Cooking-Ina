import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import settingsStyles from '../styles/SettingsStyles';
import { FontAwesome5 } from 'react-native-vector-icons';
import { AntDesign, Entypo } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getAuth, reauthenticateWithCredential, updatePassword, EmailAuthProvider, signOut } from 'firebase/auth';

const SettingsScreen = () => {
    const navigation = useNavigation();
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const [oldPassword, setOldPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword2, setShowPassword2] = useState(false);

    const handleChangePassword = async () => {
        // Check if any input fields are empty
        if (!oldPassword || !newPassword || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (!currentUser) {
            Alert.alert('Error', 'User not logged in');
            return;
        }

        // Password validation
        const newPasswordRequirements = validatePassword(newPassword);

        if (newPasswordRequirements.length > 0) {
            Alert.alert('Error', `Password must have:\n${newPasswordRequirements.join('\n')}`);
            return;
        }

        if (newPassword !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        // Re-authenticate the user
        const credential = EmailAuthProvider.credential(currentUser.email, oldPassword);

        try {
            await reauthenticateWithCredential(currentUser, credential);
        } catch (error) {
            Alert.alert('Error', 'Re-authentication failed. Please check your current password.');
            return;
        }

        try {
            await updatePassword(currentUser, newPassword);

            // Password successfully changed
            Alert.alert(
                'Success',
                'Password changed successfully! Please login again.',
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            // Log out the user
                            signOut(auth);

                            // Clear input fields
                            setOldPassword('');
                            setNewPassword('');
                            setConfirmPassword('');

                            // Navigate to the login screen or any other screen as needed
                            navigation.navigate('Login');
                        },
                    },
                ]
            );
        } catch (error) {
            Alert.alert('Error', 'Password change failed. Please try again.');
        }
    };

    const validatePassword = (password) => {
        const passwordRequirements = [];

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

        return passwordRequirements;
    };

    return (
        <ScrollView contentContainerStyle={settingsStyles.backgroundContainer}>
            <View style={settingsStyles.circleContainer}>
                <View style={[settingsStyles.circle, settingsStyles.circle1]}></View>
                <View style={[settingsStyles.circle, settingsStyles.circle2]}></View>
                <View style={[settingsStyles.circle, settingsStyles.circle3]}></View>
                <View style={[settingsStyles.circle, settingsStyles.circle4]}></View>
                <View style={[settingsStyles.circle, settingsStyles.circle5]}></View>
                <View style={[settingsStyles.circle, settingsStyles.circle6]}></View>
            </View>

            <View style={settingsStyles.container}>

                <View style={settingsStyles.sectionContainer}>
                    <View style={settingsStyles.titleContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={settingsStyles.goBackButton}>
                            <AntDesign name="leftcircle" size={46} color="#6D9773" />
                        </TouchableOpacity>
                        <Text style={settingsStyles.screenTitle}>Settings & Privacy</Text>
                    </View>
                    <View style={[settingsStyles.sectionTitleContainer, settingsStyles.changepass]}>
                        <FontAwesome5 name="lock" size={24} style={settingsStyles.sectionIcon} />
                        <Text style={settingsStyles.sectionTitle}>Change Password</Text>
                    </View>

                    <View style={settingsStyles.AllinputContainer}>
                        {/* Old Password */}
                        <View style={settingsStyles.inputContainer}>
                            <TextInput
                                style={settingsStyles.input}
                                placeholder="Old Password"
                                secureTextEntry={!showPassword}
                                value={oldPassword}
                                onChangeText={setOldPassword}
                            />
                            <TouchableOpacity
                                style={settingsStyles.showPasswordButton}
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                <Entypo
                                    name={showPassword ? "eye-with-line" : "eye"}
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* New Password */}
                        <View style={settingsStyles.inputContainer}>
                            <TextInput
                                style={settingsStyles.input}
                                placeholder="New Password"
                                secureTextEntry={!showPassword1}
                                value={newPassword}
                                onChangeText={setNewPassword}
                            />
                            <TouchableOpacity
                                style={settingsStyles.showPasswordButton}
                                onPress={() => setShowPassword1(!showPassword1)}
                            >
                                <Entypo
                                    name={showPassword1 ? "eye-with-line" : "eye"}
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Confirm Password */}
                        <View style={settingsStyles.inputContainer}>
                            <TextInput
                                style={settingsStyles.input}
                                placeholder="Confirm Password"
                                secureTextEntry={!showPassword2}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                            <TouchableOpacity
                                style={settingsStyles.showPasswordButton}
                                onPress={() => setShowPassword2(!showPassword2)}
                            >
                                <Entypo
                                    name={showPassword2 ? "eye-with-line" : "eye"}
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={settingsStyles.confirmButton}
                            onPress={handleChangePassword}
                        >
                            <Text style={settingsStyles.confirmButtonText}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Privacy Container */}
                <View style={[settingsStyles.sectionContainer, settingsStyles.privacy]}>
                    <View style={settingsStyles.sectionTitleContainer}>
                        <FontAwesome5 name="shield-alt" size={24} style={settingsStyles.sectionIcon} />
                        <Text style={settingsStyles.sectionTitle}>Privacy</Text>
                    </View>
                    {/* Add privacy content here */}
                </View>

                {/* Language Container */}
                <TouchableOpacity style={settingsStyles.languageContainer} onPress={() => alert("Feature not yet available")}>
                    <View style={settingsStyles.sectionTitleContainer}>
                        <FontAwesome5 name="language" size={24} style={settingsStyles.sectionIcon} />
                        <Text style={settingsStyles.sectionTitle}>Language</Text>
                    </View>
                </TouchableOpacity>

                {/* Privacy Matters Text */}
                <View style={settingsStyles.privacyMattersContainer}>
                    <Text style={settingsStyles.privacyMattersText}>Your privacy matters</Text>
                    <Text style={settingsStyles.privacyMattersText}>safeguard it fiercely, online and off.</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default SettingsScreen;
