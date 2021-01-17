import {StyleSheet} from 'react-native';

const mainStyles = StyleSheet.create({
    screenContainer:{
        flexDirection: 'column',
    },
    stepperContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    header:{
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: 250
    }
});

const calculatedItemStyles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    headers: {
        width: '50%',
        flexDirection: 'column',
    },
    values: {
        width: '50%',
        flexDirection: 'column',
    }
});

export {mainStyles, calculatedItemStyles}