import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  NativeModules,
} from 'react-native';
import AppStyle from './src/styles/App.style';
import Header from './src/containers/Header/Header';
import ListItem from './src/components/ListItem/ListItem';
import Btn from './src/components/Btn/Btn';
import data from './data.json';

export default class App extends Component {
  constructor(props) {
    super(props);
      // this.onChangeText = this.onChangeText.bind(this);

      this.state = {
        content: null,
      }
    }
  
  componentDidMount() {
    this.setState({
      content: data.data,
    })
  }

  onPlus = (e, i, s) => {
    const {
      content,
    } = this.state;
    const newContent = content;
    newContent[s - 1].items[i].text_bottom++;
    this.setState({
      content: newContent,
    });
  }

  onMinus = (e, i, s) => {
    const {
      content,
    } = this.state;
    const newContent = content;
    newContent[s - 1].items[i].text_bottom--;
    // const number = newContent[s - 1].items[i].text_bottom;
    // console.log(number);
    // if (number <= 0) newContent[s - 1].items[i].text_bottom = 0;
    this.setState({
      content: newContent,
    });
  }

  // componentDidUpdate(prevState) {

  // }

  render() {
    const {
      content,
    } = this.state;
    const Dimensions = require('Dimensions');
    const { StatusBarManager } = NativeModules;
    const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;
    const styles = StyleSheet.create(AppStyle(Dimensions, STATUSBAR_HEIGHT));
    // console.log('============================================')
    // console.log('============================================')
    const sections = content && content.map((e,i) => {
      return (
        { 
          'section_id': e.id,
          'title': e.head,
          'data': e.items,
        }
      ) 
    });

    return (
      sections ?
      <View style={styles.container}>
        <View style={styles.status_bar_bg}/>
        <Header />
        <SectionList
          // contentContainerStyle={styles.setion_list}
          sections={sections}
          renderItem={(attr) => {
            // console.warn(attr)
            return (
              <ListItem
                section_id={attr.section.section_id}
                item_index={attr.index}
                item={attr.item} 
                display={attr.index >= 4 ? 'none' : 'flex'}
                onPlus={this.onPlus}
                onMinus={this.onMinus}
              />
            )
          }}
          renderSectionHeader={({section}) => {
            return (
              <View style={styles.section_bottom_shadow_box}>
                <Text style={styles.section_header_text}>{section.title}</Text>
                <View style={styles.section_bottom_shadow} />
                <View style={styles.section_top_shadow} />
              </View>
            )
          }}
          ItemSeparatorComponent={(items) => {
            if (items.section.data.length <= 4) {
              return (
                <View style={styles.item_separator} />
              )
            } else return <View style={styles.item_separator} />
          }}
          keyExtractor={(item, index) => index}
          renderSectionFooter={(items) => {
            if (items.section.data.length >= 4) {
              return (
                  <Btn
                    type='text'
                    text='Еще категории...'
                    styles={show_more_style}
                  />
              )
            }
          }}
        />
      </View> :     
      <View>
        <Text>ERROR</Text>
      </View>
    );
  }     
}

const show_more_style = {
  btn: {
    height: 35,
    width: 150,
    backgroundColor: '#E5E5E5',
    elevation: 5,
    borderRadius: 50,
    marginLeft: 20,
    alignSelf: 'center',
    marginBottom: 20,
  },
  content: {
    color: '#7E7E7E',
    fontSize: 18,
  },
};