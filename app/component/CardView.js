import React, { Component } from 'react';
import { Text, View, Card, CardItem, Icon, Content, Row, Right, Left } from 'native-base';
import { StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';
import {createStackNavigator, withNavigation, createAppContainer} from 'react-navigation';


class List extends Component {
    
    render() {
        return(
            <Text>Sabar</Text>
        )
    }
}


class CardView extends Component {

    daftarApp = [
        { key: 1, nama: 'AOV', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/246x0w.jpg'), peringkat: 1, jenis: 'game', ukuran: '90MB', rating: '12+', download: '100jt'},
        { key: 2, nama: 'BBM', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/bbm.png'), peringkat: 2, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt'},
        { key: 3, nama: 'Whatsapp', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/whatsapp.png'), peringkat: 3, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt' },
        { key: 4, nama: 'Bukalapak', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/bukalapak.jpg'), peringkat: 4, jenis: 'aplikasi',ukuran: '90MB', rating: '12+', download: '100jt' },
        { key: 5, nama: 'Facebook', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/facebook.png'), peringkat: 6, jenis: 'aplikasi',ukuran: '90MB', rating: '12+', download: '100jt' },
        { key: 6, nama: 'Grab', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/grab.jpg'), peringkat: 5, jenis: 'aplikasi' ,ukuran: '90MB', rating: '12+', download: '100jt'},
        { key: 7, nama: 'Clash of Clans', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/coc.png'), peringkat: 8, jenis: 'game',ukuran: '90MB', rating: '12+', download: '100jt' },
        { key: 8, nama: 'Getrich', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/getrich.png'), peringkat: 7, jenis: 'game' ,ukuran: '90MB', rating: '12+', download: '100jt'},
        { key: 9, nama: 'Hago', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/hago.png'), peringkat: 9, jenis: 'game' ,ukuran: '90MB', rating: '12+', download: '100jt'},
        { key: 10, nama: 'Mini World Block Art', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/miniwroldblockart.png'), peringkat: 10, jenis: 'game' ,ukuran: '90MB', rating: '12+', download: '100jt'},
        { key: 11, nama: 'Mobile Legend', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/mobilelegend.png'), peringkat: 11, jenis: 'game' ,ukuran: '90MB', rating: '12+', download: '100jt'},
        { key: 12, nama: 'Joox', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/joox.jpg'), peringkat: 13, jenis: 'aplikasi',ukuran: '90MB', rating: '12+', download: '100jt' },
        { key: 13, nama: 'Lazada', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/lazada.png'), peringkat: 12, jenis: 'aplikasi',ukuran: '90MB', rating: '12+', download: '100jt' },
        { key: 14, nama: 'Shopee', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/shopee.png'), peringkat: 14, jenis: 'aplikasi',ukuran: '90MB', rating: '12+', download: '100jt' },
        { key: 15, nama: 'Polaris', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/polaris.png'), peringkat: 16, jenis: 'aplikasi',ukuran: '90MB', rating: '12+', download: '100jt' },
        { key: 16, nama: 'Spotify', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/sporify.png'), peringkat: 15, jenis: 'aplikasi',ukuran: '90MB', rating: '12+', download: '100jt' },
        { key: 17, nama: 'Tik Tok', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/tiktok.png'), peringkat: 18, jenis: 'aplikasi' ,ukuran: '90MB', rating: '12+', download: '100jt'},
        { key: 18, nama: 'Traveloka', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/traveloka.png'), peringkat: 17, jenis: 'aplikasi' ,ukuran: '90MB', rating: '12+', download: '100jt'},
        { key: 19, nama: 'Tokopedia', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/tokopedia.png'), peringkat: 20, jenis: 'aplikasi' ,ukuran: '90MB', rating: '12+', download: '100jt'},
        { key: 20, nama: 'Pou', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/pou.png'), peringkat: 19, jenis: 'game' ,ukuran: '90MB', rating: '12+', download: '100jt'},
        { key: 21, nama: 'Subways Surfers', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/subwaysurfers.png'), peringkat: 21, jenis: 'game',ukuran: '90MB', rating: '12+', download: '100jt' },
        { key: 22, nama: 'Twitter', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/twitter.png'), peringkat: 22, jenis: 'aplikasi',ukuran: '90MB', rating: '12+', download: '100jt' },
        { key: 23, nama: 'UC Browser', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/ucbrowser.png'), peringkat: 23, jenis: 'aplikasi',ukuran: '90MB', rating: '12+', download: '100jt' },
        { key: 24, nama: 'Webtoon', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/webtoon.png'), peringkat: 24, jenis: 'aplikasi',ukuran: '90MB', rating: '12+', download: '100jt' },
    ]

    app= [];
    constructor(props) {
        super(props);
        this.state = {
            jenisApp: this.props.jenisApp
        }
        if(this.state.jenisApp === 'disarankan') {
            for(let i=0; i<this.daftarApp.length; i++) {
                if(this.daftarApp[i]){
                    this.app.push(this.daftarApp[i]);
                }
            }
        } else if(this.state.jenisApp==='games') {
            for(let i=0; i<this.daftarApp.length; i++) {
                if(this.daftarApp[i].jenis === 'game'){
                    this.app.push(this.daftarApp[i]);
                }
            }
        } else if(this.state.jenisApp==='aplikasi'){
            for(let i=0; i<this.daftarApp.length; i++) {
                if(this.daftarApp[i].jenis === 'aplikasi'){
                    this.app.push(this.daftarApp[i]);
                }
            }
        }
    }

    render() {
        return (
            <Card style={{ marginRight: 5, marginLeft: 5, marginTop: 5 }}>
                <CardItem>
                    <View style={{ flex: 1 }}>
                        <View style={styles.judul}>
                            <Left style={{ marginTop: 5 }}>
                                <Text style={{ fontSize: 12, }}>{this.props.name}</Text>
                            </Left>
                            <Right style={{ marginTop: 5 }}>
                                <Text style={{ fontSize: 12, color: '#109c57' }}>More</Text>
                            </Right>
                        </View>


                        <View style={{ marginTop: 20 }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {this.app.map((daftarApp, key) =>
                                    <TouchableHighlight onPress={() => this.props.navigation.navigate( 'DetailScreen')} key={key}>
                                   {/* <TouchableHighlight onPress={() => alert("Test Guys")}> */}
                                    
                                    <View style={{ marginRight: 5, marginLeft: 2 }}  >
                                        <View style={{ width: 80, height: 80, }}>
                                            <Image style={{ width: 80, height: 80, }} source={daftarApp.imagesrc} />
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Left>
                                                <Text style={{ fontSize: 10, marginTop: 10 }} >{daftarApp.nama}</Text>
                                            </Left>
                                            <Right>
                                                <Icon style={{ fontSize: 10, marginTop: 10, justifyContent: 'flex-end', alignItems: 'flex-start' }} name="ellipsis-v" type="FontAwesome"></Icon>
                                            </Right>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                            <Left >
                                                <Text style={{ fontSize: 9 }} >{daftarApp.score}*</Text>
                                            </Left>
                                            <Right>
                                                <Text style={{ fontSize: 9, color: '#109c57' }} >{daftarApp.harga}</Text>
                                            </Right>
                                        </View>
                                    </View>
                                       
                                   </TouchableHighlight>
                                )}
                            </ScrollView>
                        </View>
                    </View>
                </CardItem>
            </Card>
  
        )
    }
}



const styles = StyleSheet.create({
    judul: {
        flex: 1,
        flexDirection: 'row',
    }
})


export default withNavigation(CardView, List)