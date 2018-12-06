import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from '../Home';
import Detail from './Detail';

const Navigations = createStackNavigator({
    Home: {screen: HomeScreen},
    DetailData: {screen: Detail}
})

export default class NavigatingBetWeen extends Component {
    render() {
        return(
            <Navigations />
        )
    }
}