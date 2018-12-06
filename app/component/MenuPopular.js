import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
import {Content} from 'native-base'

class AplikasiGratis extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <View style={{backgroundColor: "black"}}><Text>Home</Text></View>
        )
    }
}

class GameGratis extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <Content><Text>Home</Text></Content>
        )
    }
}


class Terlaris extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <View style={{flex:1}}><Text>Home</Text></View>
        )
    }
}


class SedangHangat extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <View><Text>Home</Text></View>
        )
    }
}


class AplikasiBerbayar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <View><Text>Home</Text></View>
        )
    }
}

class GameBerbayar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <View>
                <Text>Home</Text>
                </View>
        )
    }
}


const TabNavigator = createMaterialTopTabNavigator({
    HomePopular: AplikasiGratis,
    GamePopular: GameGratis,
  });
  
  export default createAppContainer(TabNavigator);

