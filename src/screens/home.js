import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as kategoriActions from '../redux/kategori/actions';

class Home extends Component {
    render() {
        const {isiData} = this.props.KategoriReducer;
        return (
            <View>
                <Text style={styles.textStyle}>Halaman home</Text>
                <Text style={styles.textStyle}>Isi reducer: {isiData}</Text>
            </View>
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
        KategoriReducer: state.KategoriReducer,
    }
}

const mapDispatchToProps = (dispatch) => ({kategoriActions: bindActionCreators(kategoriActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Home);