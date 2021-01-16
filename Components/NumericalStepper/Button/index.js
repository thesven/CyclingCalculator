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
        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <Text>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }

}