import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button, Card } from 'native-base';
import { View } from 'react-native';

export default class Kategori extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nama :this.props.nameset,
            iconse : this.props.iconset,
            colors : this.props.colorset
        }
    }
    render() {
        return (
            
                    <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: this.props.colorset }} rounded>
                            <Icon style={{fontSize: 10}} active name={this.props.iconset} type={this.props.typeset}/>
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{fontSize: 10}}>{this.props.nameset}</Text>
                    </Body>
                    
                </ListItem>

             
        )
    }
}