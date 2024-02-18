import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import aboutStyles from '../styles/AboutStyles';
import { AntDesign } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';


const AboutScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={aboutStyles.backgroundContainer}>
            <View style={[aboutStyles.circle, aboutStyles.circle2]}></View>
            <View style={[aboutStyles.circle, aboutStyles.circle3]}></View>
            <View style={[aboutStyles.circle, aboutStyles.circle5]}></View>

            <View style={aboutStyles.headerContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={aboutStyles.goBackButton}
                >
                    <AntDesign name="leftcircle" size={46} color="#6D9773" style={{ zIndex: 1 }} />
                </TouchableOpacity>
                <Text style={aboutStyles.header}>About</Text>
            </View>
            <View style={aboutStyles.titleContainer}>
                <Text style={aboutStyles.headercont}>About</Text>
            </View>
            <View style={aboutStyles.descriptionContainer}>
                <View style={[aboutStyles.circle, aboutStyles.circle4]}></View>
                <View style={[aboutStyles.circle, aboutStyles.circle1]}></View>
                <View style={[aboutStyles.circle, aboutStyles.circle6]}></View>
                <Text style={aboutStyles.title}>Craving Pinoy?</Text>
                <Text style={aboutStyles.title1}>Introducing the ultimate Filipino recipe explorer!</Text>
                <Text style={aboutStyles.description}>
                    Imagine a digital cookbook bursting with
                    flavors. This app showcases every lip-smacking Filipino dish, from sinigang's tangy magic to adobo's savory embrace. Each recipe unveils ingredient secrets and step-by-step instructions, guiding you from kitchen newbie to Pinoy cook extraordinaire.
                </Text>
                <Text style={aboutStyles.title2}>Ready to embark on a delicious journey?</Text>
            </View>

            {/* Copyright Notice */}
            <View style={aboutStyles.copyrightContainer}>
                <Text style={aboutStyles.copyrightText}>&#169; 2024 Cooking Ina & AmbatuCooks | All Rights Reserved</Text>
            </View>
        </View>
    );
};

export default AboutScreen;
