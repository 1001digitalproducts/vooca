import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DetailKata extends Component {
    render() {
        return (
            <View>
                <Text style={styles.textStyle}>Ini halaman detail</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18
    }
});