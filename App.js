/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import Interactable from 'react-native-interactable';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redSquare: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});

export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.container}
          onLayout={this.onLayout}
        >
          <Interactable.View
            snapPoints={[{ x: 0, y: 0 }, { x: 100, y: 100 }]}
            animatedNativeDriver
          >
            <View style={styles.redSquare} />
          </Interactable.View>
        </View>
      </View>
    );
  }

  onLayout = () => {
    console.log('ON LAYOUT');
  }
}
