import React from 'react';
import {StackNavigator} from 'react-navigation';

import Home from './screens/home';
import SubKategori from './screens/daftarSubKategori';
import ArtiKata from './screens/artiKata';

const RootNavigator = StackNavigator({
    Home: {
        screen: Home,
    },
    SubKategori: {
        screen: SubKategori,
    },
    ArtiKata: {
        screen: ArtiKata,
    }
});

export default RootNavigator;