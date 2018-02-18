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

    klik = () => {
        Alert.alert("Halo");
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

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18
    }
});

function mapStateToProps(state) {
    return {
        kategoriReducer: state.kategoriReducer,
    }
}

const mapDispatchToProps = (dispatch) => ({kategoriActions: bindActionCreators(kategoriActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Home);