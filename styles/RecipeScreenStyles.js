import { StyleSheet } from 'react-native';

const recipeStyles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#E5E8E1',
    },
    scrollView: {
        flexGrow: 1,
    },
    container: {
        // padding: 20,
    },
    ingre: {
        padding: 20,

    },
    recipeHeader: {
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: 'gray',
        marginTop: 0,
        padding: 20,
    },
    recipebackground: {
        backgroundColor: '#0C3B2E',
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    heartIconBackground: {
        backgroundColor: '#FFBA00',
        borderRadius: 50,
        padding: 8,
    },
    recipeName: {
        marginTop: 10,
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold',
        color: '#E5E8E1',
    },
    recipeImageContainer: {
        borderRadius: 150,
        overflow: 'hidden',
        marginTop: 15,
        borderWidth: 4,
        borderColor: 'black',
        // Android shadow
        elevation: 8,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    recipeImage: {
        width: 272,
        height: 272,
    },
    horizontalLine: {
        borderBottomColor: '#1E1E1E',
        borderBottomWidth: 1,
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 20,
        color: '#FFBA00',
        fontFamily: 'Poppins_600SemiBold',
    },
    sectionTitleCont: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        backgroundColor: '#0C3B2E',
        padding: 10,
        borderRadius: 50,
        marginBottom: 30,
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    detailsContainer: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        padding: 20,
        marginBottom: 10,
    },
    detailsContainerStatic: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginBottom: 10,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailIcon: {
        fontSize: 20,
        marginRight: 5,
        color: '#FFBA00',
    },
    detailText: {
        color: '#FFBA00',
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
    },
    detailTextBelowImage: {
        textAlign: 'center',
        color: '#FFBA00',
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
    },
    addedByModifContainer: {
        marginTop: 20,
    },
    detailTextBelowList: {
        textAlign: 'left',
        color: 'black',
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
    },
    listContainer: {
        marginLeft: 0,
    },
    listingreContainer: {
        marginLeft: 0,
        paddingHorizontal: 15,
    },
    listItem: {
        fontSize: 18,
        marginBottom: 5,
        fontFamily: 'Poppins_600SemiBold',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'justify',
    },
    stepContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        marginBottom: 10,
    },
    stepNumber: {
        fontSize: 16,
        marginRight: 10,
        color: '#FFBA00',
        fontFamily: 'Poppins_600SemiBold',
        backgroundColor: '#0C3B2E',
        borderRadius: 20,
        padding: 10,
        width: 40,
        height: 40,
        textAlign: 'center',
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    stepText: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
        textAlign: 'justify',
    },
    sectionTitleContDirect: {
        marginTop: 20,
    },
    saucebg: {
        color: 'white',
    },

    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tableCell: {
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
        color: 'black',
        textAlign: 'left',
        verticalAlign: 'middle',
        padding: 10,
        // borderWidth: 1,

    },
    tableCellColumn: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
        color: '#FFBA00',
        borderWidth: 1,
        verticalAlign: 'middle',
        backgroundColor: '#0C3B2E',
        borderTopLeftRadius: 10,
        padding: 15,
    },
    tableCellColumn2: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
        color: '#FFBA00',
        borderWidth: 1,
        verticalAlign: 'middle',
        backgroundColor: '#0C3B2E',
        padding: 15,
        borderTopRightRadius: 10,
    },
});

export default recipeStyles;
