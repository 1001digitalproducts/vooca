import React, {Component} from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';

export default class CategoriesImage extends Component {
    render() {
        const {item} = this.props;
        if (item === 'School Supplies') {
            return (
                <Image
                    style={styles.image}
                    source={require('../../assets/icon_categories/vooca_school.png')}
                    onPress={() => {
                        this.props.navigation.navigate('SubKategori', {item})
                    }}
                />
            )
        } else if (item === 'Vegetables') {
            return (
                <Image
                    style={styles.image}
                    source={require('../../assets/icon_categories/vooca_vegetable.png')}
                    onPress={() => {
                        this.props.navigation.navigate('SubKategori', {item})
                    }}
                />
            )
        } else if (item === 'Fruits') {
            return (
                <Image
                    style={styles.image}
                    source={require('../../assets/icon_categories/vooca_fruit.png')}
                    onPress={() => {
                        this.props.navigation.navigate('SubKategori', {item})
                    }}
                />
            )
        } else if (item === 'Animals') {
            return (
                <Image
                    style={styles.image}
                    source={require('../../assets/icon_categories/vooca_animal.png')}
                    onPress={() => {
                        this.props.navigation.navigate('SubKategori', {item})
                    }}
                />
            )
        } else if (item === 'Family') {
            return (
                <Image
                    style={styles.image}
                    source={require('../../assets/icon_categories/vooca_family.png')}
                    onPress={() => {
                        this.props.navigation.navigate('SubKategori', {item})
                    }}
                />
            )
        } else if (item === 'Musical Instruments') {
            return (
                <Image
                    style={styles.image}
                    source={require('../../assets/icon_categories/vooca_music.png')}
                    onPress={() => {
                        this.props.navigation.navigate('SubKategori', {item})
                    }}
                />
            )
        }
    }
}

const styles = StyleSheet.create({
    image: {
        height: '70%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
});