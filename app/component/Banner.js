import React, {Component} from 'react';
import {View, Text} from 'native-base';
import {Image} from 'react-native';
import {Carousel} from 'react-native-carousel';

export default class Banner extends Component{
    render() {
        return(
            <View>
            <Carousel
                indicatorAtBottom={true}
                delay={3000}
                indicatorOffset={0}
                indicatorColor='#FFFFFF'
                indicatorSize={30}
                inactiveIndicatorColor='#AAA'
                indicatorSpace={15}
                animate={false}
            >
                <View style={{width: 100, height: 50}}>
                    <Image source={require('../img/banner/banner.jpg')}/>
                </View>
                <View style={{width: 100, height: 50}}>
                    <Image source={require('../img/banner/banner.jpg')}/>
                </View>
                <View style={{width: 100, height: 50}}>
                    <Image source={require('../img/banner/banner.jpg')}/>
                </View>
            </Carousel>
            </View>
        )
    }
}