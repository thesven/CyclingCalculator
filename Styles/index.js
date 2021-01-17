import {StyleSheet} from 'react-native';

var black = '#071013';
var pacificBlue= '#23B5D3';
var peweterBlue = '#75ABBC';
var cadetblue = '#A2AEBB';
var gainboro = '#DFE0E2';
var white = '#FFFFFF';

const mainStyles = StyleSheet.create({
    view:{
        backgroundColor: gainboro,
        flexDirection: 'column',
    },
    screenContainer:{
        flexDirection: 'column',
        height: '100%',
    },
    stepperContainer: {
        width: '100%',
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 8,
    },
    header:{
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: 250
    },
    pageHeader:{
        backgroundColor: black,
        color: white,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageTitle:{
        color: pacificBlue,
        fontSize: 36,
        fontWeight: '700',
        textAlign: 'center',
        padding: 8,
    },
    pageDescription:{
        color: white,
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        padding: 8
    },
    ftpContainer:{
        backgroundColor: pacificBlue,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',

    },
    ftpTitle:{
        fontSize: 24,
        fontWeight: '600',
        color: gainboro,
        paddingHorizontal: 8,
    },
    ftpValue:{
        fontSize: 24,
        fontWeight: '600',
        color: white,
        paddingHorizontal: 8,
    }
});

const calculatedItemStyles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        backgroundColor: white
    },
    headers:{
        width: '50%',
        flexDirection: 'column',
        alignContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle:{
        fontSize: 18,
        fontWeight: '500',
        color: pacificBlue,
        paddingVertical: 4,
    },
    headerDescription:{
        fontSize: 18,
        fontWeight: '300',
        color: peweterBlue,
        paddingVertical: 4,
    },
    values:{
        width: '50%',
        flexDirection: 'column',
    },
    valuesHigh:{

    },
    valueLow:{

    },
});

const stepperStyle = StyleSheet.create({
    buttonContainer:{
        backgroundColor: black,
        width: 50,
        height: 50,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 32,
        color: gainboro
    },
    displayContainer: {
        width: 50,
        height: 50,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: cadetblue
    },
    displayText: {
        fontSize: 32,
        padding: 8,
        color: white
    }
});

export {mainStyles, calculatedItemStyles, stepperStyle}