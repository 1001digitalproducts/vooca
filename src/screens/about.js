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
                </View>
                <View>
                    <Text style={styles.subtitle}>Powered by Awan and Rosyid</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#1DCFAC',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitle: {
        color: 'white',
        fontWeight: '200',
        paddingBottom: 20,
    },
    titleWrapper: {
        justifyContent: 'center',
        flex: 1,
    },
    image: {
        height: 120,
        width: 120
    },
});
