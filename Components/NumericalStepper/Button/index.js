import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class NumericalStepperButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    componentDidMount(){

    }

    render(){
        let containerStyle = (this.props.styles !== undefined) ? this.props.styles.container : {};
        let textStyle = (this.props.styles !== undefined) ? this.props.styles.text : {};
        return(
            <TouchableOpacity style={containerStyle} onPress={this.props.onPress}>
                <Text style={textStyle}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }

}