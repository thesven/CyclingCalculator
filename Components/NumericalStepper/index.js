import React from 'react';
import { View } from 'react-native';
import NumericalStepperButton from './Button';
import NumericalStepperDisplay from './Display';
import {horizontalDisplay, verticalDisplay} from './Style';

export default class NumericalStepper extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentValue: 0,
        };

        if(this.props.startingValue === undefined){
            console.error("👎🏻 Numberical Stepper :: startingValue :: a starting value property must be defined");
        }

        if(this.props.stepAmount === undefined){
            console.error("👎🏻 Numberical Stepper :: stepAmount :: a step amount value property must be defined");
        }

        if(this.props.incrementTitle === undefined){
            "👎🏻 Numberical Stepper :: incrementTitle :: a increment title property must be defined"
        }

        if(this.props.decrementTitle === undefined){
            "👎🏻 Numberical Stepper :: decrementTitle :: a decrement title property must be defined"
        }

        if(this.props.minValue === undefined){
            "👎🏻 Numberical Stepper :: minValue :: a minimum value property must be defined"
        }

        if(this.props.maxValue === undefined){
            "👎🏻 Numberical Stepper :: minValue :: a maximum value property must be defined"
        }

        switch(this.props.direction){
            case "horizontal":
                this.directionStyle = horizontalDisplay;
                break;
            case "vertical":
                this.directionStyle = verticalDisplay;
                break;
            default:
                this.directionStyle = horizontalDisplay;
        }

        console.log(this.props.direction);
        console.log(this.directionStyle);

        this.incrementValue = this.incrementValue.bind(this);
        this.decrementValue = this.decrementValue.bind(this);
        this._changeValue = this._changeValue.bind(this);
        this.getCurrentValue
    }

    componentDidMount(){
        this.setState({currentValue: this.props.startingValue});
    }

    getCurrentValue(){
        return this.state.currentValue;
    }

    incrementValue(){
        let newValue = this.state.currentValue + this.props.stepAmount;
        let val = (newValue > this.props.maxValue) ? this.props.maxValue : newValue;
        this._changeValue(val);
    }

    decrementValue(){
        let newValue = this.state.currentValue - this.props.stepAmount;
        let val = (newValue < this.props.minValue) ? this.props.minValue : newValue;
        this._changeValue(val);
    }

    _changeValue(newValue){
        this.setState({currentValue: newValue}, (this.props.onUpdate !== undefined) ? this.props.onUpdate : () => {});
    }

    render(){
        return(
            <React.Fragment>
                <View style={this.directionStyle.container}>
                    <NumericalStepperButton title={this.props.incrementTitle} onPress={this.incrementValue} />
                    <NumericalStepperDisplay currentValue={this.state.currentValue} />
                    <NumericalStepperButton title={this.props.decrementTitle} onPress={this.decrementValue} />
                </View>
            </React.Fragment>
        );
    }

}