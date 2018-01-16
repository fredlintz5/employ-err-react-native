import React from 'react';
import { StyleSheet, View } from 'react-native';

import ProfileUser from './src/components/ProfileUser/ProfileUser';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileUser />
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
