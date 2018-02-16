import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import style from './Header.style';
// import icon_leftArrow from '../../icons/left-arrow.png'
// import icon_check from '../../icons/check.png' 

const Header = () => {
  const styles = StyleSheet.create(style());
    return (
      <View 
        style={styles.header}
      >
        <TouchableOpacity
          style={styles.icon}
        >
          <Image 
            source={require('../../icons/left-arrow.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text 
          style={styles.text}
        >
          №23, Бегущие кревет...
        </Text>
        <TouchableOpacity
          style={styles.icon}
        >
          <Image 
            source={require('../../icons/check.png' )}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    );  
}

export default Header;