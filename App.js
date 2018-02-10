import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import AppStyle from './src/App.style';

export default class App extends React.Component {
  constructor(props) {
    super(props);
      // this.onChangeText = this.onChangeText.bind(this);

      this.state = {
        // events: [],
      }
    }
  
  // componentDidMount() {

  // }

  // componentDidUpdate(prevState) {

  // }

  render() {
    const Dimensions = require('Dimensions');
    const styles = StyleSheet.create(AppStyle(Dimensions));

    // const {
    //   events,
    // } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>text</Text>
      </View>
    );
  }     
}