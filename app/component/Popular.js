import React, { Component } from 'react';
import { View, List, ListItem, Card, Icon, Right, Left, CardItem, Content } from 'native-base';
import { Text, Image, ScrollView } from 'react-native';
import { createToTabNavigator, createAppContainer } from 'react-navigation';

export default class Popular extends Component {
    daftarApp = [
        { key: 1, nama: 'AOV', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/246x0w.jpg'), peringkat: 1, jenis: 'game', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 2, nama: 'BBM', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/bbm.png'), peringkat: 2, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 3, nama: 'Whatsapp', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/whatsapp.png'), peringkat: 3, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 4, nama: 'Bukalapak', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/bukalapak.jpg'), peringkat: 4, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 5, nama: 'Facebook', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/facebook.png'), peringkat: 6, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 6, nama: 'Grab', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/grab.jpg'), peringkat: 5, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 7, nama: 'Clash of Clans', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/coc.png'), peringkat: 8, jenis: 'game', ukuran: '90MB', rating: '12+', download: '100jt', pengembang: 'Snow Corporation'},
        { key: 8, nama: 'Getrich', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/getrich.png'), peringkat: 7, jenis: 'game', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 9, nama: 'Hago', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/hago.png'), peringkat: 9, jenis: 'game', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 10, nama: 'Mini World Block Art', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/miniwroldblockart.png'), peringkat: 10, jenis: 'game', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 11, nama: 'Mobile Legend', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/mobilelegend.png'), peringkat: 11, jenis: 'game', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 12, nama: 'Joox', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/joox.jpg'), peringkat: 13, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 13, nama: 'Lazada', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/lazada.png'), peringkat: 12, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt', pengembang: 'Snow Corporation'},
        { key: 14, nama: 'Shopee', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/shopee.png'), peringkat: 14, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 15, nama: 'Polaris', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/polaris.png'), peringkat: 16, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 16, nama: 'Spotify', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/sporify.png'), peringkat: 15, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 17, nama: 'Tik Tok', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/tiktok.png'), peringkat: 18, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 18, nama: 'Traveloka', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/traveloka.png'), peringkat: 17, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 19, nama: 'Tokopedia', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/tokopedia.png'), peringkat: 20, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 20, nama: 'Pou', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/pou.png'), peringkat: 19, jenis: 'game', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 21, nama: 'Subways Surfers', score: '4.6', harga: 'FREE', imagesrc: require('../img/game/subwaysurfers.png'), peringkat: 21, jenis: 'game', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 22, nama: 'Twitter', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/twitter.png'), peringkat: 22, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 23, nama: 'UC Browser', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/ucbrowser.png'), peringkat: 23, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt' , pengembang: 'Snow Corporation'},
        { key: 24, nama: 'Webtoon', score: '4.6', harga: 'FREE', imagesrc: require('../img/aplikasi/webtoon.png'), peringkat: 24, jenis: 'aplikasi', ukuran: '90MB', rating: '12+', download: '100jt', pengembang: 'Snow Corporation'},
    ]
    app=[]
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
            <Content style={{marginLeft: 5, marginRight: 5}}>

                <Card>
                    <List>
                        {this.daftarApp.map((daftarApp, key) =>

                            <ListItem>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ marginTop: 5, marginRight: 10, fontSize: 11 }}>{key+1}</Text>

                                    <View style={{ width: 50, height: 50, backgroundColor: "black" }}>
                                        <Image style={{ width: 50, height: 50,}} source={daftarApp.imagesrc} />
                                    </View>
                                    <View style={{ height: 50, marginLeft: 10 }}>
                                        <Text style={{ fontSize: 12 }}>{daftarApp.nama}</Text>
                                        <Text style={{ fontSize: 11 }}>{daftarApp.pengembang}</Text>
                                        <View>
                                            <Text style={{ fontSize: 10, marginTop: 10 }}>{daftarApp.ukuran}.{daftarApp.score}</Text>
                                        </View>
                                    </View>
                                    <Right >
                                        <Icon style={{ fontSize: 20, }} name="ellipsis-v" type="FontAwesome"></Icon>
                                    </Right>
                                </View>

                            </ListItem>
                        )}
                    </List>
                </Card>
            </Content>
        )
    }
}