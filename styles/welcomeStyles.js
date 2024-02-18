import { StyleSheet } from 'react-native';

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 43,
        marginBottom: 100,
    },
    logo: {
        width: 430,
        height: 180,
        marginBottom: 10,
        padding: 30,
    },
});

export default welcomeStyles;