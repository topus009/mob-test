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
  } = props;

  generated_styles = StyleSheet.create(style(type,styles));


  if (props.type === 'image') {
    renderBtn =       
      <TouchableOpacity style={generated_styles.btn}>
        <Image 
          source={props.src}
          style={generated_styles.content}
        />
      </TouchableOpacity>
  }

  if (props.type === 'text') {  
    renderBtn =
      <TouchableOpacity style={generated_styles.btn}>
        <Text style={generated_styles.content}>{props.text}</Text>
      </TouchableOpacity>;
  }

  return renderBtn
}

export default Btn;