import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import commonStyles from './src/commonStyles';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: commonStyles.fontFamily,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
