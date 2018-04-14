import React from 'react';
import {Provider} from 'react-redux';
import RootNavigator from './router';
import store from './redux/store';
import {Root} from "native-base";

export default class App extends React.Component {

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    }

    render() {
        return (
            <Root>
                <Provider store={store}>
                    <RootNavigator/>
                </Provider>
            </Root>
        );
    }
}