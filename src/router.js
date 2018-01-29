import { StackNavigator } from 'react-navigation';
import Home from './screens/home';

const RootNavigator = StackNavigator({
    Home: {
        screen: Home,
    },
});

export default RootNavigator;