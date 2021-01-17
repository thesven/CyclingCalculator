import React from 'react';
import {Text, View} from 'react-native';

export default class NumericalStepperDisplay extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render(){
        let containerStyle = (this.props.styles !== undefined) ? this.props.styles.container : {};
        let textStyle = (this.props.styles !== undefined) ? this.props.styles.text : {};
        return(
            <View style={containerStyle}>
                <Text style={textStyle}>{this.props.currentValue}</Text>
            </View>
        );
    }

}