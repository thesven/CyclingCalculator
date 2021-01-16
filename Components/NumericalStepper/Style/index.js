import {StyleSheet} from 'react-native'

const verticalDisplay = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const horizontalDisplay = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export {verticalDisplay, horizontalDisplay}