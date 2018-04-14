import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, TouchableOpacity, Linking} from 'react-native';
import {bindActionCreators} from 'redux';
import * as kategoriActions from '../redux/kategori/actions';
import CategoriesImage from '../components/imageCategories';
import {
    Container,
    Content,
    Text,
    Button,
    Icon,
    ActionSheet
} from 'native-base';
import GridLayout from 'react-native-layout-grid';

var BUTTONS = ["About", "Report", "Cancel"];
var CANCEL_INDEX = 2;
var url = 'http://1001digitalproduct.awancoder.com/report';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: "Categories",
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
        const {dataKategori} = this.props.kategoriReducer;

        const data = dataKategori.map((value) => {
            return value.kategori
        });

        return (
            <Container>
                <Content>
                    <GridLayout
                        style={{marginTop: 10}}
                        items={data}
                        itemsPerRow={2}
                        renderItem={(item) => (
                            <View style={styles.card}>
                                <TouchableOpacity
                                    style={styles.item}
                                    onPress={() => {
                                        this.props.navigation.navigate('SubKategori', {item})
                                    }}
                                >
                                    <CategoriesImage item={item} {...this.props}/>
                                    <Text style={styles.name}>
                                        {
                                            item
                                        }
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    item: {
        height: 150,
    },
    name: {
        fontSize: 12,
        textAlign: 'center',
        color: '#000000'
    }
});

function mapStateToProps(state) {
    return {
        kategoriReducer: state.kategoriReducer,
    }
}

const mapDispatchToProps = (dispatch) => ({kategoriActions: bindActionCreators(kategoriActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Home);