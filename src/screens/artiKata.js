import React, {Component} from 'react';
import {
    Container,
    Content,
    List,
    Text,
    ListItem,
} from 'native-base';

export default class App extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        const item = params ? params.item : null;

        return {
            title: item.kata,
        }
    };

    render() {
        const { params } = this.props.navigation.state;
        const item = params ? params.item : null;

        return (
            <Container>
                <Content>
                    <Text>{item.arti}</Text>
                </Content>
            </Container>
        );
    }
}