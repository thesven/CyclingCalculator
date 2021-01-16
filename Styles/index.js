import {StyleSheet} from 'react-native';

const mainStyles = StyleSheet.create({
    screenContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        height: 250
    }
});

export {mainStyles}