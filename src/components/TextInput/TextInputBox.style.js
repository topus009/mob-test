const styles = (color, focused, visible) => {
  return {
    input_wrapper: {
      // height: 76,
      // flex: 1,
      // flexDirection: 'column',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      // backgroundColor: '#fff',
      display: visible ? 'flex' : 'none',
      paddingHorizontal: 20,
      marginTop: 25,
      // backgroundColor: '#FF7B7B',
    },
    input: {
      // placeholder: 10,
      // flex: 0,
      // flexDirection: 'column',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      fontSize: 20,
      paddingHorizontal: 3,
      marginHorizontal: -3,
      paddingBottom: 10,
    },
    placeholder: {
      fontSize: 18,
      color: color,
      display: focused ? 'flex' : 'none',
      // opacity: focused ? 1 : 0,

    },
    underline_text: {
      fontSize: 18,
      color: '#9C9C9C',
      display: focused ? 'flex' : 'none',
      // opacity: focused ? 1 : 0,

    },
  }
}

export default styles;