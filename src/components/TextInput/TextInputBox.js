import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import style from './TextInputBox.style';

export default class TextInputBox extends Component {
  constructor(props) {
    super(props);
      this.state = {
        color: '#9C9C9C',
        focused: false,
      }
  }

  onFocus = () => {
    this.setState({
      color: '#5BAAA2',
      focused: true,
    });
  }

  onBlur = () => {
    this.setState({
      color: '#9C9C9C',
      focused: false,
    });
  }

  change = (action, e) => {
    const {
      change,
      section_id,
      item_index,
    } = this.props;

    if (action === 'edit') change(action,item_index,section_id,e);
    if (action === 'submit') change(action,item_index,section_id);
  }

  render() {
    const {
      color,
      focused,
    } = this.state;
    const {
      text,
      visible,
    } = this.props;
  
    const styles = StyleSheet.create(style(color, focused, visible));
    return (
      <View style={styles.input_wrapper}>
        <Text style={styles.placeholder}>Комментарий</Text>
        <TextInput
          style={styles.input}
          maxLength={128}
          returnKeyLabel='done'
          value={text}
          underlineColorAndroid={focused ? color : 'transparent'}
          onChangeText={(text) => this.change('edit', text)}
          onBlur={this.onBlur}
          onSubmitEditing={() => this.change('submit')}
          placeholder={visible && !focused ? 'Введите комментарий' : ''}
          onFocus={this.onFocus}
          autoFocus={visible}
        />
        <Text style={styles.underline_text}>Максимум 128 символов. Увас осталось 125.</Text>
      </View>
    );
  }
}




// ///////////////////////////////////

// export default class TextInputBox extends Component {
//   constructor(props) {
//     super(props);
//       this.state = {

//       }
//     }

//   render() {
//     return (
      
//     );
//   }     
// }