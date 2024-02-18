import { StyleSheet } from "react-native";

const menuStyles = StyleSheet.create({
    backgroundContainer: {
        flexGrow: 1,
        position: 'relative',
        backgroundColor: '#E5E8E1',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginBottom: 20,
    },
    circle: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
        borderRadius: 50,
        width: 100,
        height: 100,
        elevation: 5,
    },
    circle1: {
        top: 60,
        right: -15,
        backgroundColor: '#FFBA00',
    },
    circle2: {
        top: 115,
        right: -45,
        backgroundColor: '#0C3B2E',
    },
    circle3: {
        top: 160,
        left: -45,
        backgroundColor: '#0C3B2E',
    },
    circle4: {
        top: 210,
        left: -25,
        backgroundColor: '#FFBA00',
    },
    circle5: {
        top: 330,
        right: -15,
        backgroundColor: '#FFBA00',
    },
    circle6: {
        bottom: 325,
        right: -30,
        backgroundColor: '#0C3B2E',
    },
    circle7: {
        bottom: 130,
        left: -40,
        backgroundColor: '#FFBA00',
        height: 180,
        width: 180,
        borderRadius: 140,
    },
    circle8: {
        bottom: -90,
        right: -56,
        backgroundColor: '#0C3B2E',
        height: 180,
        width: 180,
        borderRadius: 140,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profilePic: {
        width: 130,
        height: 130,
        borderRadius: 80,
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        marginBottom: 0,
        color: '#0C3B2E',
        fontFamily: "Poppins_700Bold",
        height: 35,
    },
    email: {
        fontStyle: 'italic',
        color: 'black',
        opacity: .44,
        fontFamily: "Poppins_400Regular",
    },
    buttonsContainer: {
        width: '100%',
        paddingTop: 0,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0,
        width: '100%',
        marginTop: 18,
        padding: 15,
        borderRadius: 14,
        backgroundColor: 'white',
        elevation: 5,
    },
    icon: {
        marginRight: 10,
        color: '#0C3B2E',
    },
    title: {
        flex: 1,
        fontSize: 18,
        fontFamily: "Poppins_400Regular",
        marginLeft: 10,
    },
    arrow: {
        marginLeft: 10,
        color: '#0C3B2E',
    },
    DeleteButton: {
        backgroundColor: '#ff7575',
        marginTop: 45,
        color: 'black',
    },
    blackIcon: {
        color: 'black',
    },
    LogoutButton: {
        marginTop: 15,
    },
    closeButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        position: 'relative',
        marginTop: 0,
    },
    screenTitle: {
        fontSize: 30,
        fontFamily: 'Poppins_600SemiBold',
        textAlign: 'center',
        flex: 1,
    },
    closeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        position: 'absolute',
        right: 0,
        zIndex: 1,
    },
    bottomImage: {
        position: 'absolute',
        bottom: 5,
        left: 15,
        width: 94,
        height: 70,
    },
});

export default menuStyles;
