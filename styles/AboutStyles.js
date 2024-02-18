import { StyleSheet } from "react-native";

const aboutStyles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#E5E8E1',
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    descriptionContainer: {
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 14,
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 40,
        borderRadius: 14,
        width: 150,

        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        fontFamily: "Poppins_700Bold",
        textAlign: 'center',
    },
    title1: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily: "Poppins_700Bold",
        textAlign: 'center',
    },
    title2: {
        fontSize: 15,
        fontFamily: "Poppins_700Bold",
        textAlign: 'center',
    },
    header: {
        fontSize: 30,
        fontFamily: 'Poppins_600SemiBold',
        textAlign: 'center',
        flex: 1,
    },
    headercont: {
        fontSize: 18,
        fontFamily: "Poppins_700Bold",
    },
    description: {
        fontSize: 15,
        textAlign: 'justify',
        color: '#333',
        fontFamily: 'Poppins_400Regular',
        marginBottom: 20,
    },
    goBackButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        position: 'absolute',
        left: 0,
        zIndex: 1,
    },
    circle: {
        position: 'absolute',
        borderRadius: 50,
        width: 100,
        height: 100,

        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    circle1: {
        top: -50,
        left: -40,
        backgroundColor: '#FFBA00',
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    circle2: {
        top: 140,
        left: -35,
        backgroundColor: '#0C3B2E',
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    circle4: {
        top: 0,
        right: -80,
        backgroundColor: '#0C3B2E',
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    circle3: {
        top: 200,
        right: -25,
        backgroundColor: '#FFBA00',
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    circle5: {
        bottom: 80,
        left: -30,
        backgroundColor: '#0C3B2E',
        height: 180,
        width: 180,
        borderRadius: 140,
    },
    circle6: {
        bottom: -100,
        right: -70,
        backgroundColor: '#FFBA00',
        height: 180,
        width: 180,
        borderRadius: 140,
    },
    copyrightContainer: {
        position: 'absolute',
        bottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    copyrightText: {
        fontSize: 12,
        color: '#333',
        fontFamily: 'Poppins_400Regular',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 60,
        position: 'relative',
        marginTop: 0,
    },
});

export default aboutStyles;
