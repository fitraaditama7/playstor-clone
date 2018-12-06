import React, {Component} from 'react';
import {createAppContainer, createMaterialTopTabNavigator, withNavigation} from 'react-navigation';
import {View, Text} from 'react-native';
import MenuUser from './MenuUser.js';
import HalamanDetail from './Detail'
let colors= '';



class HalamanBeranda extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const navigate = this.props.navigation;

        return(
            <MenuUser menuType="all"/>
        )
    }
}

class HalamanFilm extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <MenuUser menuType="film"/>
        )
    }
}

class HalamanBuku extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <MenuUser menuType="Buku"/>
        )
    }
}


class HalamanGame extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <MenuUser menuType="game"/>
        )
    }
}

const TabNavigator = createMaterialTopTabNavigator({
    Beranda: {screen: HalamanBeranda},
    Game: {screen: HalamanGame},
    Film: {screen: HalamanFilm},
    Buku: {screen: HalamanBuku},
},
{
    tabBarOptions: {
        scrollEnabled: true,
        activeTintColor: '#e91e63',
        swipeEnabled : false,
        indicatorStyle:{
            marginLeft: 7,
            width: 90,
            backgroundColor: 'white'
        },
        
        labelStyle: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: 12,
            marginBottom: 10
        },

        tabStyle: {
            width: 100,
            height: 35
        },

        tabBarPosition: 'bottom',
        style: {
          elevation:0,
          backgroundColor: '#109c57',
        },
      }
});


export default createAppContainer(TabNavigator);
