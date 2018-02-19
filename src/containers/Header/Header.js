import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import style from './Header.style';
import Btn from '../../components/Btn/Btn';
// import icon_leftArrow from '../../icons/left-arrow.png'
// import icon_check from '../../icons/check.png' 

const Header = () => {
  const styles = StyleSheet.create(style());
    return (
      <View 
        style={styles.header}
      >
        {/* 
        
                <TouchableOpacity
          style={styles.icon}
        >
          <Image 
            source={require('../../icons/left-arrow.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        
        */}

        <Btn 
          type='image'
          src={require('../../icons/left-arrow.png')}
          styles={btn}
          action={() => alert('Назад')}
        />
        <Text 
          style={styles.text}
        >
          №23, Бегущие кревет...
        </Text>
        <Btn 
          type='image'
          src={require('../../icons/check.png')}
          styles={btn}
          action={() => alert('Готово')}
        />

        {/*
        
        <TouchableOpacity
          style={styles.icon}
        >
          <Image 
            source={require('../../icons/check.png' )}
            style={styles.image}
          />
        </TouchableOpacity>
        
        */}

      </View>
    );  
}

export default Header;

const btn = {
  btn: {
    height: 22,
    width: 22,
    margin: 25,
  },
  content: {
    height: 22,
    width: 22,
    resizeMode: 'contain'
  },
};

