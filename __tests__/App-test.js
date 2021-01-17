/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {calculatePowerZones} from '../Utils/Calculator';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

describe("Power Calculation Function", () => {
  test("it should return an object of calculated values", () => {
   
    let testMax = 150;

    expect(calculatePowerZones(testMax)).toEqual({"zones": [{"description": "Very Easy", "high": 106.875, "low": 0, "title": "Zone One"}, {"description": "Moderate", "high": 106.875, "low": 78.375, "title": "Zone Two"}, {"description": "Sustainable", "high": 128.25, "low": 106.875, "title": "Zone Three"}, {"description": "Challenging", "high": 149.625, "low": 128.25, "title": "Zone Four"}, {"description": "Hard", "high": 171, "low": 149.625, "title": "Zone Five"}, {"description": "Very Hard", "high": 213.75, "low": 171, "title": "Zone Six"}, {"description": "Max Effort", "high": 215.175, "low": 213.75, "title": "Zone Seven"}]});

  });
});