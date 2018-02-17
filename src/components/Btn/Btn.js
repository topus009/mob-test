import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import style from './Btn.styles';

const Btn = (props) => {
  let renderBtn;
  let generated_styles;
  const {
    type,
    styles,
    action,
    section_id,
    item_index,
    disabled,
  } = props;

  generated_styles = StyleSheet.create(style(type,styles,disabled));
  const onPress = (e) => {
    if (disabled) return false;
    action(e, item_index, section_id);
  }

  if (props.type === 'image') {
    renderBtn =       
      <TouchableOpacity
        style={generated_styles.btn}
        onPress={onPress}
        disabled={disabled}
      >
        <Image 
          source={props.src}
          style={generated_styles.content}
        />
      </TouchableOpacity>
  }

  if (props.type === 'text') {  
    renderBtn =
      <TouchableOpacity 
        style={generated_styles.btn}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={generated_styles.content}>{props.text}</Text>
      </TouchableOpacity>;
  }

  return renderBtn
}

export default Btn;