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
    Icon,
    ActionSheet
} from 'native-base';
import {Linking} from 'react-native';

var BUTTONS = ["About", "Report", "Cancel"];
var CANCEL_INDEX = 2;
var url = 'http://1001digitalproduct.awancoder.com/report';

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
                    onPress={() => {
                        ActionSheet.show(
                            {
                                options: BUTTONS,
                                title: "Menu",
                                cancelButtonIndex: CANCEL_INDEX,
                            },
                            buttonIndex => {
                                if (buttonIndex === 0) {
                                    navigation.navigate('About');
                                } else if (buttonIndex === 1) {
                                    Linking.openURL(url);
                                }
                            }
                        )
                    }}
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