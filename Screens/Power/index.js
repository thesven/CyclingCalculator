import React from 'react';

import BaseCalculatorScreen from '../../Components/BaseCalculatorScreen';
import CalculatedItem from '../../Components/CalculatedItem';
import { calculatePowerZones } from '../../Utils/Calculator';

export default class PowerScreen extends BaseCalculatorScreen{

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        super.componentDidMount();
    }

    onValueUpdate(){
        let hundredsValue = this.hundreds.getCurrentValue() * 100;
        let tensValue = this.tens.getCurrentValue() * 10;
        let onesValue = this.ones.getCurrentValue();
        let total = hundredsValue + tensValue + onesValue;

        let zones = calculatePowerZones(total);
        let newDisplay = [];
        for(i = 0; i < zones.zones.length; i++){
            newDisplay.push(
                <CalculatedItem title={zones.zones[i].title}
                                description={zones.zones[i].description}
                                low={zones.zones[i].low}
                                high={zones.zones[i].high}
                                key={i} />
            );
        }
        console.log(newDisplay.length);
        super.updateState({data: newDisplay, currentCalculationValue: total * .95});
    }

    render(){
        return super.render();
    }

}