import React, {Component} from 'react';
import {createAppContainer, createMaterialTopTabNavigator, withNavigation} from 'react-navigation';
import {View, Text} from 'react-native';
import MenuUser from './MenuUser.js';
import HalamanDetail from './Detail'



class HalamanBeranda extends Component {
    static navigationOptions = {
        tabBarOptions: {
            style: {
                backgroundColor: '#109c57'
            }
        }
    }
    
    constructor(props){
        super(props);
        state = {
            colorMenu : '#109c57'
        }
    }
    render(){
        const navigate = this.props.navigation;

        return(
            <MenuUser menuType="all" colorMenu= '#109c57'/>
        )
    }
}

class HalamanFilm extends Component {
    static navigationOptions = {
        tabBarOptions: {
            style: {
                backgroundColor: '#ff1744'
            }
        }
    }
    constructor(props){
        super(props);
        state = {
            colorMenu : '#ff1744'
        }
    }
    render(){
        return(
            <MenuUser menuType="film" colorMenu='#ff1744'/>
        )
    }
}

class HalamanBuku extends Component {
    static navigationOptions = {
        tabBarOptions: {
            style: {
                backgroundColor: '#039be5'
            }
        }
    }
    constructor(props){
        super(props);
        state = {
            colorMenu : '#039be5'
        }
    }
    render(){
        return(
            <MenuUser menuType="Buku" colorMenu='#039be5'/>
        )
    }
}


class HalamanGame extends Component {
    static navigationOptions = {
        tabBarOptions: {
            style: {
                backgroundColor: '#109c57'
            }
        }
    }
    constructor(props){
        super(props);
        state = {
            colorMenu : '#109c57'
        }
    }
    render() {
        return(
            <MenuUser menuType="game" colorMenu='#109c57'/>
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
        },
      }
});


export default createAppContainer(TabNavigator);
