import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import style from './ListItem.style';
import Btn from '../Btn/Btn';
import TextInputBox from '../TextInput/TextInputBox';

const ListItem = (props) => {
  const {
    item,
    display,
    onPlus,
    onMinus,
    onChangeComment,
    onToggleComment,
    section_id,
    item_index,
    toggleComment,
    customItem,
  } = props;
  const styles = StyleSheet.create(style(display));
  return (
    <View style={styles.item}>
      <View style={styles.item_main}>
        <Btn
          type='text'
          text='-'
          styles={left_btn_style}
          section_id={section_id}
          item_index={item_index}
          action={onMinus}
          disabled={item.text_bottom === 0 ? true : false}
        />
        <TouchableOpacity
          style={styles.item_title_block}
          onPress={() => onToggleComment(item_index,section_id)}
        >
          <Text style={styles.text_top}>{item.text_top}</Text>
          <Text style={styles.text_bottom}>{item.text_bottom}</Text>
        </TouchableOpacity>
        <Btn
          type='text'
          text='+'
          styles={right_btn_style}
          section_id={section_id}
          item_index={item_index}
          action={onPlus}
        />
      </View>
      <View>
        <TextInputBox
          text={item.comment}
          change={onChangeComment}
          section_id={section_id}
          item_index={item_index}
          visible={item.comment_visible}
        />
      </View>
      { customItem }
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