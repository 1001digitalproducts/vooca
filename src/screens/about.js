import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class About extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/image_about.png')}
                    />
                    <Text
                        style={styles.title}>
                        Vooca!
                    </Text>
                    <Text
                        style={styles.subtitle}
                    >
                        Version 0.1 Beta
                    </Text>
                </View>
                <View>
                    <Text style={styles.footer}>Collaboration Awan and Rosyid at 1001 Digital Product Project from Indonesia</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#1DCFAC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitle: {
        color: 'white',
        fontWeight: '200',
    },
    footer: {
        color: 'white',
        fontWeight: '200',
        paddingBottom: 20,
        fontSize: 10,
    },
    titleWrapper: {
        justifyContent: 'center',
        flexGrow: 1,
    },
    image: {
        height: 120,
        width: 120
    },
});
