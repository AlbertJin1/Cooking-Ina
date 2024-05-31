import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// STYLE/COMPO
import userProfileStyles from '../styles/UserProfileStyles';
import CustomButton from '../components/CustomButton';
import { AntDesign } from 'react-native-vector-icons';

// FIREBASE
import { getAuth } from 'firebase/auth';
import {
    doc,
    getFirestore,
    updateDoc,
    getDoc,
    onSnapshot,
} from 'firebase/firestore';

const UserProfileScreen = () => {
    const auth = getAuth();
    const navigation = useNavigation();
    const db = getFirestore();

    const user = auth.currentUser;

    const [profilePicture, setProfilePicture] = useState('https://bootdey.com/img/Content/avatar/avatar1.png');
    const [status, setStatus] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [bio, setBio] = useState('');
    const [isBioEdited, setIsBioEdited] = useState(false);


    const [editedFirstName] = useState('');
    const [editedLastName] = useState('');
    const [editedBio, setEditedBio] = useState('');

    // Load user data function...
    const loadUserData = async () => {
        if (user) {
            const userDocRef = doc(db, 'users', user.uid);

            try {
                const docSnapshot = await getDoc(userDocRef);
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
                    setFirstName(userData.firstName || '');
                    setLastName(userData.lastName || '');
                    setEmail(userData.email);
                    setPhoneNumber(userData.phoneNumber || '');
                    setAddress(userData.address || '');
                    setBio(userData.bio || '');
                    setStatus(userData.status || '');
                    setProfilePicture(userData.profilePicture || 'https://bootdey.com/img/Content/avatar/avatar1.png');
                }
            } catch (error) {
                console.error('Error loading user data:', error);
            }
        }
    };

    useEffect(() => {
        loadUserData();
    }, [user]);

    useEffect(() => {
        const unsubscribe = () => {
            if (user) {
                const userDocRef = doc(db, 'users', user.uid);
                const unsubscribe = onSnapshot(userDocRef, (doc) => {
                    if (doc.exists()) {
                        const userData = doc.data();
                        setFirstName(userData.firstName || '');
                        setLastName(userData.lastName || '');
                        setEmail(userData.email);
                        setPhoneNumber(userData.phoneNumber || '');
                        setAddress(userData.address || '');
                        setBio(userData.bio || '');
                        setStatus(userData.status || '');
                        setProfilePicture(userData.profilePicture || 'https://bootdey.com/img/Content/avatar/avatar1.png');
                    }
                });
                return unsubscribe;
            }
        };

        return unsubscribe();
    }, [user]);

    const handleSaveProfile = async () => {
        if (user) {

            if (!firstName.trim() && lastName.trim()) {
                Alert.alert('Error', 'You forgot to type in your First Name');
                return;
            }

            if (firstName.trim() && !lastName.trim()) {
                Alert.alert('Error', 'Did you forget your family name???!!');
                return;
            }

            if (!firstName.trim() && !lastName.trim()) {
                Alert.alert('Error', 'Are you a nameless person? PLEASE INPUT YOUR NAME!!');
                return;
            }


            if (!phoneNumber.trim()) {
                Alert.alert(
                    'Phone Number Confirmation',
                    'Do you have a phone number?',
                    [
                        {
                            text: 'Yes',
                            onPress: () => {
                                Alert.alert('ALERT', 'Please input your phone number.');
                            },
                        },
                        {
                            text: 'No',
                            onPress: () => {
                                Alert.alert('SAVING', 'Saving your profile now.');

                                saveProfile();
                            },
                        },
                    ],
                    { cancelable: false }
                );
            } else {
                if (phoneNumber.length !== 11) {
                    Alert.alert('Error', 'Phone number must be 11 digits.');
                    return;
                }

                saveProfile();
            }
        } else {
            Alert.alert('User Not Logged In', 'Please log in to save your profile changes.');
        }
    };


    const saveProfile = async () => {
        const userDocRef = doc(db, 'users', user.uid);

        try {

            const updatedFields = {
                firstName: editedFirstName || firstName,
                lastName: editedLastName || lastName,
                phoneNumber,
                address,
                bio: editedBio || bio,
            };


            if (status !== undefined) {
                updatedFields.status = status;
            }

            await updateDoc(userDocRef, updatedFields);

            Alert.alert('Profile Updated', 'Your profile has been updated successfully.');


            navigation.goBack();
        } catch (error) {
            console.error('Profile update error:', error);
            Alert.alert('Error', 'An error occurred while updating your profile.');
        }
    };

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#E5E8E1', flexGrow: 1 }}>
            <View style={userProfileStyles.backgroundContainer}>
                <View style={[userProfileStyles.circle, userProfileStyles.circle1]}></View>
                <View style={[userProfileStyles.circle, userProfileStyles.circle2]}></View>
                <View style={[userProfileStyles.circle, userProfileStyles.circle3]}></View>
                <View style={[userProfileStyles.circle, userProfileStyles.circle4]}></View>
                <View style={[userProfileStyles.circle, userProfileStyles.circle5]}></View>
                <View style={[userProfileStyles.circle, userProfileStyles.circle6]}></View>

                <View style={userProfileStyles.editProfileContainer}>
                    <View style={userProfileStyles.titleContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={userProfileStyles.goBackButton}>
                            <AntDesign name="leftcircle" size={46} color="#6D9773" />
                        </TouchableOpacity>
                        <Text style={userProfileStyles.screenTitle}>Edit Profile</Text>
                    </View>
                    <Image
                        source={{ uri: profilePicture }}
                        style={userProfileStyles.profilePic}
                    />
                    <Text style={userProfileStyles.name}>
                        {user ? `${firstName} ${lastName}`.trim() || 'No logged user' : 'No logged user'}
                    </Text>
                    <TextInput
                        style={userProfileStyles.statusText}
                        value={status}
                        onChangeText={(text) => setStatus(text)}
                        placeholder="Custom status here"
                        editable={user ? true : false}
                    />
                    <Text style={[userProfileStyles.label, userProfileStyles.textBio]}>Bio</Text>
                    <TextInput
                        style={[userProfileStyles.input, { height: 129 }]}
                        multiline={true}
                        value={isBioEdited ? editedBio : bio}
                        onChangeText={(text) => {
                            setEditedBio(text);
                            setIsBioEdited(true);
                        }}
                        editable={user ? true : false}
                    />
                    <Text style={[userProfileStyles.label, userProfileStyles.textName]}>First Name</Text>
                    <TextInput
                        style={[userProfileStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                        value={firstName}
                        onChangeText={(text) => setFirstName(text)}
                        editable={user ? true : false}
                    />

                    <Text style={[userProfileStyles.label, userProfileStyles.textName]}>Last Name</Text>
                    <TextInput
                        style={[userProfileStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                        value={lastName}
                        onChangeText={(text) => setLastName(text)}
                        editable={user ? true : false}
                    />
                    <Text style={[userProfileStyles.label, userProfileStyles.textEmail]}>Email</Text>
                    <TextInput
                        style={userProfileStyles.emailInput}
                        value={email}
                        editable={false}
                    />
                    <Text style={[userProfileStyles.label, userProfileStyles.textNum]}>Phone Number</Text>
                    <TextInput
                        style={userProfileStyles.input}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                        editable={user ? true : false}
                    />
                    <Text style={[userProfileStyles.label, userProfileStyles.textAdd]}>Address</Text>
                    <TextInput
                        style={[userProfileStyles.input, { height: 86 }]}
                        multiline={true}
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                        editable={user ? true : false}
                    />
                    <CustomButton
                        title="Save"
                        onPress={handleSaveProfile}
                        style={[userProfileStyles.changeButton]}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default UserProfileScreen;
