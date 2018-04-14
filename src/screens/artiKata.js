import React, {Component} from 'react';
import {
    Container,
    Content,
    List,
    Text,
    ListItem,
    Card,
    CardItem,
    Body,
    Button,
    Icon
} from 'native-base';

export default class ArtiKata extends Component {

    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
        const item = params ? params.item : null;

        return {
            title: item.kata,
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#1DCFAC'
            },
            headerRight: (
                <Button
                    onPress={() => navigation.navigate('About')}
                    transparent light
                >
                    <Icon name="ios-menu"/>
                </Button>
            ),
        }
    };

    render() {
        const {params} = this.props.navigation.state;
        const item = params ? params.item : null;

        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>{item.kata}</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                {item.arti}
                            </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}