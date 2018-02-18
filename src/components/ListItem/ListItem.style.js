const styles = (display = 'flex') => {
  return {
    item: {
      // height: 76,
      flex: 1,
      flexDirection: 'column',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      backgroundColor: '#fff',
      display: display,
      paddingTop: 18,
      paddingBottom: 18,
    },
    item_title_block: {
      paddingHorizontal: 10,
      flex: 0,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text_top: {
      fontSize: 22,
      color: '#000000',
    },
    text_bottom: {
      fontSize: 20,
      color: '#949494',
    },
    item_main: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  }
}

export default styles;