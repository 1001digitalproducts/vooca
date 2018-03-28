import React from 'react';
import {StackNavigator} from 'react-navigation';

import Home from './screens/home';
import SubKategori from './screens/daftarSubKategori';
import ArtiKata from './screens/artiKata';
import About from './screens/about';

const RootNavigator = StackNavigator({
    Home: {
        screen: Home,
    },
    SubKategori: {
        screen: SubKategori,
    },
    ArtiKata: {
        screen: ArtiKata,
    },
    About: {
        screen: About,
        navigationOptions: {
            header: null
        }
    }
});

export default RootNavigator;