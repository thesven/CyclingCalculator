import React from 'react';
import {ImageBackground, ScrollView, Text, View, VirtualizedList} from 'react-native';
import NumericalStepper from '../NumericalStepper';
import {mainStyles, stepperStyle} from '../../Styles';

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
        this.setState(newStateObj);
    }

    render(){
        return(
            <React.Fragment>
                <View style={mainStyles.screenContainer}>
                    <View style={mainStyles.pageHeader}>
                        <Text style={mainStyles.pageTitle}>{this.props.title}</Text>
                        <Text style={mainStyles.pageDescription}>{this.props.description}</Text>
                    </View>
                    <ScrollView>
                        {this.state.data}
                    </ScrollView>
                    <View style={mainStyles.ftpContainer}>
                        <Text style={mainStyles.ftpTitle}>FTP Value:</Text>
                        <Text style={mainStyles.ftpValue}>{Math.round(this.state.currentCalculationValue)} W</Text>
                    </View>
                    <View style={mainStyles.stepperContainer}>
                        <NumericalStepper displayStyle={{container: stepperStyle.displayContainer, text: stepperStyle.displayText}} buttonStyle={{container: stepperStyle.buttonContainer, text: stepperStyle.buttonText}} onUpdate={this.onValueUpdate} ref={(r) => this.hundreds = r} startingValue={0} minValue={0} maxValue={9} stepAmount={1} incrementTitle="+" decrementTitle="-" direction="vertical"/>
                        <NumericalStepper displayStyle={{container: stepperStyle.displayContainer, text: stepperStyle.displayText}} buttonStyle={{container: stepperStyle.buttonContainer, text: stepperStyle.buttonText}} onUpdate={this.onValueUpdate} ref={(r) => this.tens = r} startingValue={0} minValue={0} maxValue={9} stepAmount={1} incrementTitle="+" decrementTitle="-" direction="vertical"/>
                        <NumericalStepper displayStyle={{container: stepperStyle.displayContainer, text: stepperStyle.displayText}} buttonStyle={{container: stepperStyle.buttonContainer, text: stepperStyle.buttonText}} onUpdate={this.onValueUpdate} ref={(r) => this.ones = r} startingValue={0} minValue={0} maxValue={9} stepAmount={1} incrementTitle="+" decrementTitle="-" direction="vertical"/>
                    </View>
                </View>
            </React.Fragment>
        );
    }

}