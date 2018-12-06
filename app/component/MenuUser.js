import React, {Component} from 'react';
import {createMaterialTopTabNavigator, createAppContainer, withNavigation} from 'react-navigation';
import {View, Text} from 'react-native';
import {Icon} from 'native-base';
import {StyleSheet, ScrollView} from 'react-native';


import Banner from './Banner';
import CardView from './CardView';
import DetailPage from './Detail';
import Populer from './Popular'

class HalamanUntukAnda extends Component {
    static navigationOptions = {
        tabBarIcon: () => <Icon name='md-compass' type="Ionicons" />,
    }
    render() {
        return(
            <View style={{backgroundColor: '#ededed'}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CardView jenisApp='disarankan' name="Disarankan Untuk Anda" menuType={this.props.menuType}/>
                    <CardView jenisApp='games' name="Game Baru+ Diperbarui" menuType={this.props.menuType}/>
                    <CardView jenisApp="games" name="Game pra-daftar"/>
                    <CardView jenisApp="aplikasi" name="Aplikasi Baru + Diperbarui" menuType={this.props.menuType}/>
                    <CardView jenisApp="games" name="Game yang kamu suka" menuType={this.props.menuType}/>
                </ScrollView>
            </View>    
            
        )
    }
}

class HalamanPalingPopuler extends Component {
    static navigationOptions = {
        tabBarIcon: () => <Icon name='insert-chart' type="MaterialIcons" />,
    }
    render() {
        return(
            <View style={{backgroundColor: '#ededed'}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                   <Populer/>
                </ScrollView>
            </View> 
        )
    }
}

class HalamanKategori extends Component {
    static navigationOptions = {
        tabBarIcon: () => <Icon name='shape' type="MaterialCommunityIcons" />,
    }
    render() {
        return (
            <View>
                <Text>Categories</Text>
            </View>
        )
    }
} 

class HalamanPIlihanEditor extends Component {
    static navigationOptions = {
        tabBarIcon: () => <Icon name='shield' type="Entypo" />,
    }
    render() {
        return(
            <View>
                <Text>Editors Choices</Text>
            </View>
        )
    }
}


class HalamanKeluarga extends Component {
    static navigationOptions = {
        tabBarIcon: () => <Icon name='star-face' type="MaterialCommunityIcons" />,
    }
    render() {
        return(
            <View>
                
                <Text>Keluarga</Text>
                
            </View>
        )
    }
}

class HalamanAksesAwal extends Component {
    static navigationOptions = {
        tabBarIcon: () => <Icon name='md-compass' type="Ionicons" />,
    }
    render(){
        return(
            <View>
                <Text>Akses Awal</Text>
            </View>
        )
    }
}



const tabMenu = createMaterialTopTabNavigator({
    "Untuk Anda" : {screen: HalamanUntukAnda,},
    "Paling Populer" : {screen: HalamanPalingPopuler},
    Kategori : {screen: HalamanKategori},
    "Pilihan Editor" : {screen: HalamanPIlihanEditor},
    Keluarga: {screen: HalamanKeluarga},
    "Akses Awal" : {screen: HalamanAksesAwal},

},
{
    tabBarOptions: {
        activeTintColor:'#109c57',
        inactiveTintColor: '#292929',
        showIcon: true,
        showLabel: true, 
        scrollEnabled: true,
        swipeEnabled: false,
        upperCaseLabel: false,
        indicatorStyle: {
            opacity: 0
        },
        iconStyle: {
            activeTintColor: '#109c57',
        },

        labelStyle: {
            fontWeight: 'bold',
            color: '#109c57',
            fontSize: 10,
        },

        tabStyle: {
            width: 100,
    
            
        },
        style: {
            backgroundColor: '#fff',
          },
        

    }
})

const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });

export default createAppContainer(tabMenu)