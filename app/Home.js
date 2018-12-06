import React, {Component} from 'react';
import {Header, Container, ScrollView, Icon, Text} from 'native-base';
import Headers from './component/Headers';
import Menu from './component/Menu';


export default class Home extends Component {
    render() {
        return(
            <Container>
                <Headers />
                <Menu />
            </Container>
        )
    }
}

