import React, {Component} from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Icon.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        >
          Login with Facebook
        </Icon.Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})