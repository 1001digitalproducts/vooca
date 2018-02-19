import React, {Component} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as kategoriActions from '../redux/kategori/actions';
import {
    Container,
    Content,
    Button,
    Text,
    List,
    ListItem,
} from 'native-base';

class Home extends Component {

    navigate = (item) =>{
        Alert.alert(item.kategori);
        const {navigation} = this.props;
        navigation.navigate('DetailKata');
    };

    render() {
        const {dataKategori} = this.props.kategoriReducer;
        return (
            <Container>
                <Content>
                    <List
                        dataArray={dataKategori}
                        renderRow={(item) =>
                            <ListItem>
                                <Text>{item.kategori}</Text>
                            </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        kategoriReducer: state.kategoriReducer,
    }
}

const mapDispatchToProps = (dispatch) => ({kategoriActions: bindActionCreators(kategoriActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Home);