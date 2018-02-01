import React from 'react';
import {StackNavigator} from 'react-navigation';

import Home from './screens/home';
import DetailKata from './screens/detailKata'

const RootNavigator = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: { title: "Kategori" }
    },
    DetailKata: {
        screen: DetailKata
    }
});

export default RootNavigator;