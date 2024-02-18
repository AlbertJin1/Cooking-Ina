import { useCallback, React } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// STYLE/COMPO
import welcomeStyles from '../styles/welcomeStyles';
import { useFonts, Poppins_400Regular, Poppins_900Black, Poppins_600SemiBold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import CustomButton from '../components/CustomButton';
import * as SplashScreen from 'expo-splash-screen';


const WelcomeScreen = () => {
    const navigation = useNavigation();
    SplashScreen.preventAutoHideAsync();


    let [fontsLoaded, fontError] = useFonts({
        Poppins_900Black, Poppins_400Regular, Poppins_600SemiBold, Poppins_800ExtraBold,
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E8E1' }} >

            <View style={welcomeStyles.container} onLayout={onLayoutRootView}>
                <Image source={require('../img/Logo/cooking-ina.png')} style={welcomeStyles.logo} />
                <Text style={welcomeStyles.welcomeText}>
                    <Text style={[{ fontFamily: 'Poppins_900Black' }]}>Cooking</Text>
                    <Text style={[{ fontFamily: 'Poppins_400Regular' }]}>Ina</Text>
                </Text>
                <CustomButton
                    title="Login"
                    onPress={() => { navigation.navigate('Login') }}
                />

                <CustomButton
                    title="Register"
                    onPress={() => { navigation.navigate('Register') }}
                />
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;