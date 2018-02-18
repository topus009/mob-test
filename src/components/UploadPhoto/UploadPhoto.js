import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import style from './UploadPhoto.style';

export default class UploadPhoto extends Component {
  constructor(props) {
    super(props);
      this.state = {
        // color: '#9C9C9C',
        // focused: false,
      }
  }

  render() {
    // const {
    //   color,
    //   focused,
    // } = this.state;
    // const {
    //   text,
    //   visible,
    // } = this.props;
  
    // const styles = StyleSheet.create(style(color, focused, visible));
    return (
      <View>
        <Text>Photo</Text>
      </View>
    );
  }
}