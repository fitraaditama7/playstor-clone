import React, {Component} from 'react';
import {createMaterialTopTabNavigator, createAppContainer, withNavigation} from 'react-navigation';
import {View, Text} from 'react-native';
import {Icon, Card, Content, Button} from 'native-base';
import {StyleSheet, ScrollView} from 'react-native';


import Banner from './Banner';
import CardView from './CardView';
import DetailPage from './Detail';
import Populer from './PopularMenu'
import Kategori from './Kategori';

class HalamanUntukAnda extends Component {
    static navigationOptions = {
        tabBarIcon: () => <Icon name='md-compass' type="Ionicons" style={{fontSize:15}}/>,
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
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        tabBarIcon: () => <Icon name='insert-chart' type="MaterialIcons" style={{fontSize:15}}/>,
        tabBarOptions: {
                 labelStyle: {
            fontWeight: 'bold',
            color: this.props.colorMenu,
            fontSize: 10,
        },

        }
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
        tabBarIcon: () => <Icon name='shape' type="MaterialCommunityIcons" style={{fontSize:15}} />,
        
    }
    render() {
        return (
            <Content style={{backgroundColor: '#ededed'}}>
                <View style={{marginTop: 20,  marginBottom: 20}}>
                    <Text style={{marginLeft: 20,marginBottom: 25}}>Kategori populer</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{marginLeft: 20, alignItems: 'center',justifyContent: 'center'}}>
                            <Button style={{ marginBottom: 5,  backgroundColor: "#0A6D3D", height: 60, width: 60 , borderRadius: 60/2, alignItems: 'center',justifyContent: 'center'}} >
                                <Icon active style={{fontSize: 20}} name="md-build" type="Ionicons"/>
                            </Button>
                            <Text style={{fontSize: 12}}>Fotografi</Text>
                        </View>

                        <View style={{marginLeft: 20, alignItems: 'center',justifyContent: 'center'}}>
                            <Button style={{ marginBottom: 5,  borderBottomWidth: 3, backgroundColor: "#0c854a", height: 60, width: 60 , borderRadius: 60/2, alignItems: 'center',justifyContent: 'center'}} >
                                <Icon active style={{fontSize: 20}} name="star" type="FontAwesome"/>
                            </Button>
                            <Text style={{fontSize: 12}}>Keluarga</Text>
                        </View>

                        <View style={{marginLeft: 20, alignItems: 'center',justifyContent: 'center'}}>
                            <Button style={{ marginBottom: 5,  borderBottomWidth: 3, backgroundColor: "#0f9d58", height: 60, width: 60 , borderRadius: 60/2, alignItems: 'center',justifyContent: 'center'}} >
                                <Icon active style={{fontSize: 20}} name="music" type="FontAwesome"/>
                            </Button>
                            <Text style={{fontSize: 12}}>Musik & audio</Text>
                        </View>


                        <View style={{marginLeft: 20, alignItems: 'center',justifyContent: 'center'}}>
                            <Button style={{ marginBottom: 5,  borderBottomWidth: 3, backgroundColor: "#32ab70", height: 60, width: 60 , borderRadius: 60/2, alignItems: 'center',justifyContent: 'center'}} >
                                <Icon active style={{fontSize: 20}} name="ticket-confirmation" type="MaterialCommunityIcons"/>
                            </Button>
                            <Text style={{fontSize: 12}}>Hiburan</Text>
                        </View>


                        <View style={{marginLeft: 20, alignItems: 'center',justifyContent: 'center'}}>
                            <Button style={{ marginBottom: 5,  borderBottomWidth: 3, backgroundColor: "#0A6D3D", height: 60, width: 60 , borderRadius: 60/2, alignItems: 'center',justifyContent: 'center'}} >
                                <Icon active style={{fontSize: 20}} name="shopping-cart" type="Entypo"/>
                            </Button>
                            <Text style={{fontSize: 12}}>Belanja</Text>
                        </View>

                        <View style={{marginLeft: 20, alignItems: 'center',justifyContent: 'center'}}>
                            <Button style={{ marginBottom: 5,  borderBottomWidth: 3, backgroundColor: "#0c854a", height: 60, width: 60 , borderRadius: 60/2, alignItems: 'center',justifyContent: 'center'}} >
                                <Icon active style={{fontSize: 20}} name="ios-settings" type="Ionicons"/>
                            </Button>
                            <Text style={{fontSize: 12}}>Personalisasi</Text>
                        </View>

                        <View style={{marginLeft: 20, alignItems: 'center',justifyContent: 'center'}}>
                            <Button style={{ marginBottom: 5,  borderBottomWidth: 3, backgroundColor: "#0f9d58", height: 60, width: 60 , borderRadius: 60/2, alignItems: 'center',justifyContent: 'center'}} >
                                <Icon active style={{fontSize: 20}} name="users" type="FontAwesome"/>
                            </Button>
                            <Text style={{fontSize: 12}}>Sosial</Text>
                        </View>

                        <View style={{marginLeft: 20, alignItems: 'center',justifyContent: 'center'}}>
                            <Button style={{ marginBottom: 5,  borderBottomWidth: 3, backgroundColor: "#32ab70", height: 60, width: 60 , borderRadius: 60/2, alignItems: 'center',justifyContent: 'center'}} >
                                <Icon active style={{fontSize: 20}} name="md-chatboxes" type="Ionicons"/>
                            </Button>
                            <Text style={{fontSize: 12}}>Komunikasi</Text>
                        </View>
                        
                    </ScrollView>
                </View>
                <Text style={{marginLeft: 20}}>Semua katogri</Text>
                <Card>
                   <Kategori iconset="md-build" style={{padding: 5}} typeset="Ionicons"  nameset="Alat" colorset="#0A6D3D" /> 
                   <Kategori iconset="shopping-cart" typeset="Entypo"  nameset="Belanja" colorset="#0c854a"/> 
                   <Kategori iconset="newspaper" typeset="MaterialCommunityIcons" nameset="Berita dan Majalah" colorset="#0f9d58"/> 
                   <Kategori iconset="insert-chart" typeset="MaterialIcons" nameset="Bisnis" colorset="#32ab70"/> 
                   <Kategori iconset="ios-bookmarks" typeset="Ionicons" nameset="Buku dan Referensi" colorset="#0A6D3D"/> 
                   <Kategori iconset="weather-partlycloudy" typeset="MaterialCommunityIcons" nameset="Cuaca" colorset="#0c854a"/> 
                   <Kategori iconset="android-debug-bridge" typeset="MaterialCommunityIcons" nameset="Events" colorset="#0f9d58"/> 
                   <Kategori iconset="camera" typeset="Entypo" nameset="Fotografi" colorset="#32ab70"/> 
                   <Kategori iconset="game-controller" typeset="Entypo" nameset="Game" colorset="#0A6D3D"/> 
                   <Kategori iconset="home-account" typeset="MaterialCommunityIcons" nameset="Gaya Hidup" colorset="#0c854a"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Google Cast" colorset="#0f9d58"/> 
                   <Kategori iconset="ticket-confirmation" typeset="MaterialCommunityIcons" nameset="Hiburan" colorset="#32ab70"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Kecantikan" colorset="#0A6D3D"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Kedokteran" colorset="#0c854a"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Keluarga" colorset="#0f9d58"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Kencan" colorset="#32ab70"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Keshatan dan Kebugaran" colorset="#0A6D3D"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Keuangan" colorset="#0c854a"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Komik" colorset="#0f9d58"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Komunikasi" colorset="#32ab70"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Makanan dan Minuman" colorset="#0A6D3D"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Mengasuh Anak" colorset="#0c854a"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Musik dan Audio" colorset="#0f9d58"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Olahraga" colorset="#32ab70"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Otomatif dan Kendaraan" colorset="#0A6D3D"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Pemutar dan Editor Video" colorset="#0c854a"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Pendidikan" colorset="#0f9d58"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Perjalanan dan Lokal" colorset="#32ab70"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Perpustakaan dan Demo" colorset="#0A6D3D"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Personalisasi" colorset="#0c854a"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Peta dan Navigasi" colorset="#0f9d58"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Produktifitas" colorset="#32ab70"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Rumah dan Griya" colorset="#0A6D3D"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Seni dan Desain" colorset="#0c854a"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Sosial" colorset="#0f9d58"/> 
                   <Kategori iconset="md-build" typeset="" nameset="Wear OS by Google" colorset="#32ab70"/> 
                  
                  
                  
                </Card>
            </Content>
            
        )
    }
} 

class HalamanPIlihanEditor extends Component {
    static navigationOptions = {
        tabBarIcon: () => <Icon name='shield' type="Entypo" style={{fontSize:15}}/>,
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
        tabBarIcon: () => <Icon name='star-face' type="MaterialCommunityIcons" style={{fontSize:15}}/>,
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
        tabBarIcon: () => <Icon name='md-compass' type="Ionicons" style={{fontSize:15}}/>,
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