import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Content } from 'native-base';

export default class App extends React.Component {

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    }

    render() {
    return (
      <View style={styles.container}>
        <Text>Test button</Text>
          <Content>
              // NativeBase default style
              <Button>
                  <Text>Click Me! </Text>
              </Button>
          </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
