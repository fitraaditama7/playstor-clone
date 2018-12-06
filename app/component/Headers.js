import React, {Component} from 'react';
import {Header, Icon, Text, Item, Input} from 'native-base';

export default class Headers extends Component{
    render() {
        return(
            <Header searchBar style={{backgroundColor : '#109c57', shadowColor: '#007735', shadowOffset:1}}>
            <Item style={{padding: 5, marginTop: 5, borderRadius: 2}}>
                <Icon name="menu"/>
                <Input placeholder="Google Play" />
                <Icon name="mic"/>
            </Item>
            </Header>
        )
    }
}

