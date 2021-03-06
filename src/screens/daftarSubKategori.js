import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as kategoriActions from '../redux/kategori/actions';
import {
    Container,
    Content,
    List,
    Text,
    ListItem,
    Item,
    Input,
    Icon,
    Button,
    ActionSheet
} from 'native-base';
import {Linking} from 'react-native';

var BUTTONS = ["About", "Report", "Cancel"];
var CANCEL_INDEX = 2;
var url = 'http://1001digitalproduct.awancoder.com/report';

class DaftarSubKategori extends Component {

    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
        const item = params ? params.item : null;

        return {
            title: item,
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

    componentDidMount() {
        const {params} = this.props.navigation.state;
        const item = params ? params.item : null;
        const {kategoriActions} = this.props;
        kategoriActions.getKata(item);
    }

    constructor(props) {
        super(props);
        this.state = {
            keyword: ""
        }
    }

    render() {
        const {dataKata} = this.props.kategoriReducer;
        const {keyword} = this.state;
        let filteredData;

        if (keyword.length !== 0) {
            filteredData = dataKata.filter(
                (val) => {
                    return val.kata.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
                }
            );
        } else {
            filteredData = dataKata
        }

        return (
            <Container>
                <Content>
                    <Item rounded style={{marginTop: 5}}>
                        <Input placeholder='Cari...' onChangeText={(text) => {
                            this.setState({
                                keyword: text
                            })
                        }}/>
                        <Icon active name='search'/>
                    </Item>
                    <List
                        dataArray={filteredData}
                        renderRow={(item) =>
                            <ListItem>
                                <Text
                                    style={{flex: 1}}
                                    onPress={() => {
                                        this.props.navigation.navigate('ArtiKata', {item})
                                    }
                                    }
                                >{item.kata}</Text>
                            </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        kategoriReducer: state.kategoriReducer,
    }
}

const mapDispatchToProps = (dispatch) => ({kategoriActions: bindActionCreators(kategoriActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(DaftarSubKategori);