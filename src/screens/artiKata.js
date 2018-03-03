import React, {Component} from 'react';
import {
    Container,
    Content,
    List,
    Text,
    ListItem,
    Card,
    CardItem,
    Body
} from 'native-base';

export default class ArtiKata extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: "Terjemahan",
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#1DCFAC'
            },
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