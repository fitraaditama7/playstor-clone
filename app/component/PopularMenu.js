import React, {Component} from 'react';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
import {View, Text} from 'react-native';
import { Content, Card } from 'native-base';

import Popular from './Popular';
import MenuPopular from './MenuPopular'
 
export default class HomeTopPage extends Component {
    render() {
        return(
            <Content>
                <Card>
                    <Popular/>
                </Card>
            </Content>
        )
    }
}

