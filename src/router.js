import React from 'react';
import {StackNavigator} from 'react-navigation';

import Home from './screens/home';
import DetailKata from './screens/detailKata';
import ArtiKata from './screens/artiKata';

const RootNavigator = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: { title: "Kategori" }
    },
    DetailKata: {
        screen: DetailKata,
    },
    ArtiKata: {
        screen: ArtiKata,
    }
});

export default RootNavigator;