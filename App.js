import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList,
} from 'react-native';
import AppStyle from './src/styles/App.style';
import Header from './src/containers/Header/Header';
import ListItem from './src/components/ListItem/ListItem';
import data from './data.json';

export default class App extends Component {
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
    // console.log('============================================')
    // console.warn(data)
    // console.warn(data.data)
    // console.log('============================================')
    const sections = data.data.map((e,i) => {
      return (
        {
          'title': e.head,
          'data': e.items,
        }
      ) 
    });

    return (
      <View style={styles.container}>
        <Header />
        <SectionList
          sections={sections}
          renderItem={({item}) => <ListItem item={item}/>}
          renderSectionHeader={({section}) => <Text>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }     
}

{/*

          <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />

*/}