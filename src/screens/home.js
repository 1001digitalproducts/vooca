import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View>
                <Text style={styles.textStyle}>Halaman home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18
    }
});