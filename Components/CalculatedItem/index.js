import React from 'react';
import { View, Text } from 'react-native';
import {calculatedItemStyles} from '../../Styles';

export default class CalculatedItem extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        let highValue = (this.props.high == NaN) ? "..." : this.props.high;
        return(
            <View style={calculatedItemStyles.container}>
                <View style={calculatedItemStyles.headers}>
                    <Text style={calculatedItemStyles.headerTitle}>{this.props.title}</Text>
                    <Text style={calculatedItemStyles.headerDescription}>{this.props.description}</Text>
                </View>
                <View style={calculatedItemStyles.values}>
                    <Text>Low: {Math.round(this.props.low)} W</Text>
                    <Text>High: {Math.round(highValue)} W</Text>
                </View>
            </View>
        );
    }

}