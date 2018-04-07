import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import * as kategoriActions from '../redux/kategori/actions';
import CategoriesImage from '../components/imageCategories';
import {
    Container,
    Content,
    Text,
    Button,
    Icon
} from 'native-base';
import GridLayout from 'react-native-layout-grid';

class Home extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: "Categories",
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#1DCFAC'
            },
            headerRight: (
                <Button
                    onPress={() => navigation.navigate('About')}
                    transparent light
                >
                    <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
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