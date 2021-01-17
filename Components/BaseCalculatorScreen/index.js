import React from 'react';
import {ImageBackground, Text, View, VirtualizedList} from 'react-native';
import NumericalStepper from '../NumericalStepper';
import {mainStyles} from '../../Styles';

export default class BaseCalculatorScreen extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            currentCalculationValue: 0,
            data: [],
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onValueUpdate = this.onValueUpdate.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount(){

    }

    onValueUpdate(){

    }

    updateState(newStateObj){
        console.log(newStateObj);
        this.setState(newStateObj);
    }

    render(){
        console.log("Data:", this.state.data);
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
                        {this.state.data}
                    </View>
                    <View>
                        <Text>FTP Value:</Text>
                        <Text>{this.state.currentCalculationValue} W</Text>
                    </View>
                    <View style={mainStyles.stepperContainer}>
                        <NumericalStepper onUpdate={this.onValueUpdate} ref={(r) => this.hundreds = r} startingValue={0} minValue={0} maxValue={9} stepAmount={1} incrementTitle="+" decrementTitle="-" direction="vertical"/>
                        <NumericalStepper onUpdate={this.onValueUpdate} ref={(r) => this.tens = r} startingValue={0} minValue={0} maxValue={9} stepAmount={1} incrementTitle="+" decrementTitle="-" direction="vertical"/>
                        <NumericalStepper onUpdate={this.onValueUpdate} ref={(r) => this.ones = r} startingValue={0} minValue={0} maxValue={9} stepAmount={1} incrementTitle="+" decrementTitle="-" direction="vertical"/>
                    </View>
                </View>
            </React.Fragment>
        );
    }

}