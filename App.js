import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  NativeModules,
} from 'react-native';
// =============================
import AppStyle from './src/styles/App.style';
// =============================
import Header from './src/containers/Header/Header';
import ListItem from './src/components/ListItem/ListItem';
import Btn from './src/components/Btn/Btn';
// import UploadPhoto from './src/components/UploadPhoto/UploadPhoto';
// =============================
import data from './data.json';

export default class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        content: null,
        // sections: null,
        // section_items: null,
      }
    }
  
  componentDidMount() {
    let state = data.data;
    // console.log(state);
    // let sections = [];
    // let section_items = [];
    state.map((section,s_i) => {
      // sections.push(e.head);
      // section_items.push(e.items);
      section.items.map((item, i_i) => {
        if (i_i <= 3) state[s_i].items[i_i].display = 'flex';
        if (i_i > 3) state[s_i].items[i_i].display = 'none';
        state[s_i].items[i_i].comment = null;
        state[s_i].items[i_i].comment_visible = false;
      });
    });
    this.setState({
      content: state,
      // sections: sections,
      // section_items: section_items,
    });
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
    this.setState({
      content: newContent,
    });
  }

  onChangeComment = (action, i, s, text) => {
    const {
      content,
    } = this.state;
    const newContent = content;
    if (action === 'edit') {
      newContent[s - 1].items[i].comment = text;
    }
    if (action === 'submit') {
      const comment_value = newContent[s - 1].items[i].comment;
      if (!comment_value || !comment_value.length) {
        newContent[s - 1].items[i].comment_visible = false;
      }
    }
    this.setState({
      content: newContent,
    });
  }

  onToggleComment = (i, s) => {
    const {
      content,
    } = this.state;
    const newContent = content;
    const visible = newContent[s - 1].items[i].comment_visible;
    const text = newContent[s - 1].items[i].comment;
    newContent[s - 1].items[i].comment_visible = !visible;

    if (visible && text && !text.length) {
      newContent[s - 1].items[i].comment_visible = false;
    }

    this.setState({
      content: newContent,
    });
  }

  onLoadMore = (index, last_item_index) => {
    const {
      content,
    } = this.state;
    const index_of_last_displayed_item = 
    content[index - 1].items.findIndex((e,i) => e.display === 'none');
    const length_of_none_items = last_item_index - index_of_last_displayed_item + 1;

    if (length_of_none_items) {
      let times = length_of_none_items;
      if (times > 4) times = 4;
      for (let j = 0; j < times; j++) {
        content[index - 1].items[index_of_last_displayed_item + j].display = 'flex';
      }
      this.setState({
        content: content,
      });
    }
  }

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
        // { 
        //   'section_id': i,
        //   'title': e,
        //   'data': section_items[i],
        // }
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
          renderItem={({section,index,item}) => {
            return (
              <ListItem
                section_id={section.section_id}
                item_index={index}
                item={item} 
                display={item.display}
                onPlus={this.onPlus}
                onMinus={this.onMinus}
                onChangeComment={this.onChangeComment}
                onToggleComment={this.onToggleComment}
                // customComponent={section.section_id === 3 ? <UploadPhoto /> : null}
                customBtn={section.section_id === 3 ? 
                  <Btn 
                    type='image'
                    src={require('./src/icons/photo.png')}
                    styles={uploadBtn}
                    action={() => alert('Функционал в разработке')}
                  /> : null}
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
            if (items.leadingItem.display === 'flex' && items.trailingItem.display !== 'none') {
              return (
                <View style={styles.item_separator} />
              )
            } else return null
          }}
          keyExtractor={(item, index) => index}
          renderSectionFooter={(content) => {
            const {
              section
            } = content;
            const last_item_index = section.data.length - 1;
            const last_item = section.data[last_item_index];
            if (last_item.display === 'none') {
              return (
                  <Btn
                    type='text'
                    text='Еще категории...'
                    styles={show_more_style}
                    action={() => this.onLoadMore(content.section.section_id, last_item_index)}
                  />
              )
            }
          }}
          ListFooterComponent={
            <View style={styles.list_footer}>
              <Btn
                type='text'
                text='Продолжить'
                styles={continueBtn}
                action={() => alert('Продолжить')}
              />
            </View>
          }
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

const uploadBtn = {
  btn: {
    height: 45,
    width: 75,
    backgroundColor: '#E5E5E5',
    elevation: 5,
    borderRadius: 3,
  },
  content: {
    // resizeMode: 'contain'
  },
};

const continueBtn = {
  btn: {
    height: 45,
    // width: 75,
    backgroundColor: '#009687',
    elevation: 5,
    borderRadius: 3,
    paddingHorizontal: 20,
  },
  content: {
    color: '#fff',
    fontSize: 20,
  },
};