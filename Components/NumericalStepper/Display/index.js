import React from 'react';
import {Text} from 'react-native';

export default class NumericalStepperDisplay extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render(){
        return(
            <React.Fragment>
                <Text>{this.props.currentValue}</Text>
            </React.Fragment>
        );
    }

}