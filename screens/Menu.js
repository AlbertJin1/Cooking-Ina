import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { FontAwesome5, AntDesign } from 'react-native-vector-icons';


import menuStyles from '../styles/MenuStyles';
import { useNavigation } from '@react-navigation/native';

// FONTS
import {
    useFonts,
    Poppins_400Regular,
    Poppins_900Black,
    Poppins_700Bold,
    Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

// FIREBASE
import { getAuth, signOut, deleteUser } from 'firebase/auth';
import {
    doc,
    getFirestore,
    getDoc,
    deleteDoc,
    onSnapshot,
} from 'firebase/firestore';

const Menu = () => {
    const auth = getAuth();
    const navigation = useNavigation();
    const db = getFirestore();
    const user = auth.currentUser;

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profilePicture: 'https://bootdey.com/img/Content/avatar/avatar1.png' // Default profile picture
    });

    useEffect(() => {
        let unsubscribe = () => { }; // Initialize unsubscribe function

        if (user) {
            const userDocRef = doc(db, 'users', user.uid);

            // Set up real-time listener for user document
            unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
                    setUserData(userData);
                }
            });
        }

        return () => {
            // Unsubscribe from real-time listener when component unmounts
            unsubscribe();
        };
    }, [user]);

    const handleLogout = () => {
        if (user) {
            signOut(auth)
                .then(() => {
                    console.log('Logged out successfully');
                    navigation.navigate('Login');
                })
                .catch((error) => {
                    console.error('Logout error:', error);
                });
        } else {
            Alert.alert('User Not Logged In', 'No need to log out.');
        }
    };

    const handleDeleteAccount = async () => {
        if (user) {
            Alert.alert(
                'Delete Account',
                'Are you sure you want to delete your account?',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'Delete',
                        onPress: async () => {
                            const userDocRef = doc(db, 'users', user.uid);

                            try {
                                await deleteDoc(userDocRef);
                                await deleteUser(user);

                                console.log('Account and document data deleted successfully');
                                Alert.alert('Success', 'Account data deleted successfully.');
                                navigation.navigate('Login');
                            } catch (error) {
                                console.error('Delete account error:', error);
                                Alert.alert('Error', 'An error occurred while deleting your account.');
                            }
                        },
                    },
                ]
            );
        } else {
            Alert.alert('User Not Logged In', 'Please log in to delete your account.');
        }
    };

    const handleProfilePress = () => {
        navigation.navigate('UserProfile');
    };

    // const handleFavoritesPress = () => {
    //     Alert.alert('Feature Not Available', 'Feature will be available soon.');
    // };

    const handleSettingsPress = () => {
        navigation.navigate('Settings');
    };

    const handleHelpPress = () => {
        navigation.navigate('About');
    };

    let [fontsLoaded, fontError] = useFonts({
        Poppins_900Black,
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            style={menuStyles.backgroundContainer}
        >
            <View style={[menuStyles.circle, menuStyles.circle1]} />
            <View style={[menuStyles.circle, menuStyles.circle2]} />
            <View style={[menuStyles.circle, menuStyles.circle3]} />
            <View style={[menuStyles.circle, menuStyles.circle4]} />
            <View style={[menuStyles.circle, menuStyles.circle5]} />
            <View style={[menuStyles.circle, menuStyles.circle6]} />
            <View style={[menuStyles.circle, menuStyles.circle7]} />
            <View style={[menuStyles.circle, menuStyles.circle8]} />

            <View style={menuStyles.container}>
                {/* Close Icon */}
                <View style={menuStyles.closeButtonContainer}>
                    <Text style={menuStyles.screenTitle}>Menu</Text>
                    <TouchableOpacity
                        style={menuStyles.closeButton}
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign name="closecircle" size={42} color="#6D9773" />
                    </TouchableOpacity>
                </View>

                {/* Profile Pic, Name, and Email */}
                <View style={menuStyles.profileContainer}>
                    <Image source={{ uri: userData.profilePicture }} style={menuStyles.profilePic} />
                    <Text style={menuStyles.name}>
                        {user ? `${userData.firstName} ${userData.lastName}` : 'No user logged'}
                    </Text>
                    <Text style={menuStyles.email}>
                        {user ? userData.email : 'No user logged'}
                    </Text>
                </View>

                {/* Buttons */}
                <View style={menuStyles.buttonsContainer}>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                menuStyles.button,
                                (item.title === 'Delete Account') && menuStyles.DeleteButton,
                                (item.title === 'Log Out') && menuStyles.LogoutButton,
                            ]}
                            onPress={() => {
                                if (item.title === 'Delete Account') {
                                    handleDeleteAccount();
                                } else if (item.title === 'Log Out') {
                                    handleLogout();
                                } else if (item.title === 'Profile') {
                                    handleProfilePress();
                                }
                                // else if (item.title === 'Favorites') {
                                //     handleFavoritesPress();
                                // } 
                                else if (item.title === 'Settings & Privacy') {
                                    handleSettingsPress();
                                } else if (item.title === 'About') {
                                    handleHelpPress();
                                }
                                // else if (item.title === 'Add Recipe') {
                                //     Alert.alert('Feature Not Yet Available', 'Feature will be available in future updates.');
                                // }
                                else {
                                }
                            }}
                        >
                            <FontAwesome5
                                name={item.icon}
                                size={28}
                                style={[menuStyles.icon, (item.title === 'Delete Account') && menuStyles.blackIcon]}
                            />
                            <Text style={menuStyles.title}>{item.title}</Text>
                            <FontAwesome5 name="chevron-right" size={18} color="#000" style={menuStyles.arrow} />
                        </TouchableOpacity>
                    ))}
                </View>
                {/* <Image source={require('../img/Logo/splash-ina.png')} style={menuStyles.bottomImage} /> */}
            </View>
        </ScrollView>
    );
};

const menuItems = [
    { title: 'Profile', icon: 'user' },
    // { title: 'Favorites', icon: 'heart' },
    { title: 'Settings & Privacy', icon: 'cog' },
    { title: 'About', icon: 'question-circle' },
    // { title: 'Add Recipe', icon: 'plus' },
    { title: 'Delete Account', icon: 'trash-alt' },
    { title: 'Log Out', icon: 'sign-out-alt' },
];

export default Menu;
