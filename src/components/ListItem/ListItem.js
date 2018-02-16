import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import style from './ListItem.style';
import Btn from '../Btn/Btn';

const ListItem = (props) => {
  const styles = StyleSheet.create(style());
  const { item } = props;

  return (
    <View style={styles.item}>
      <Btn
        type='text'
        text='-'
        styles={left_btn_style}
      />
      <View style={styles.item_title_block}>
        <Text style={styles.text_top}>{item.text_top}</Text>
        <Text style={styles.text_bottom}>{item.text_bottom}</Text>
      </View>
      <Btn
        type='text'
        text='+'
        styles={right_btn_style}
      />
    </View>
  );
}

export default ListItem;

const left_btn_style = {
  btn: {
    height: 50,
    width: 83,
    backgroundColor: '#E5E5E5',
    elevation: 5,
    borderRadius: 3,
    marginLeft: 20,
  },
  content: {
    color: '#000000',
    fontSize: 20,
  },
};

const right_btn_style = {
  btn: {
    height: 50,
    width: 83,
    backgroundColor: '#009687',
    elevation: 5,
    borderRadius: 3,
    marginRight: 20,
  },
  content: {
    color: '#ffffff',
    fontSize: 20,
  },
};