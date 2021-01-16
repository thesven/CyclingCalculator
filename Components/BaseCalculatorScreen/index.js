import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import NumericalStepper from '../NumericalStepper';
import {mainStyles} from '../../Styles';

export default class BaseCalculatorScreen extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state = {

        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){

    }

    render(){
        return(
            <React.Fragment>
                <View style={mainStyles.screenContainer}>
                    <View>
                        <ImageBackground source={{uri: this.props.background}} style={mainStyles.header}>
                            <Text>{this.props.title}</Text>
                            <Text>{this.props.description}</Text>
                        </ImageBackground>
                    </View>
                    <View>
                        <NumericalStepper ref={(r) => this.hundreds = r} startingValue={0} minValue={0} maxValue={9} stepAmount={1} incrementTitle="+" decrementTitle="-" direction="vertical"/>
                        <NumericalStepper ref={(r) => this.tends = r} startingValue={0} minValue={0} maxValue={9} stepAmount={1} incrementTitle="+" decrementTitle="-" direction="vertical"/>
                        <NumericalStepper ref={(r) => this.ones = r} startingValue={0} minValue={0} maxValue={9} stepAmount={1} incrementTitle="+" decrementTitle="-" direction="vertical"/>
                    </View>
                </View>
            </React.Fragment>
        );
    }

}