const styles = (wh, STATUSBAR_HEIGHT) => {
  const dW = wh[0];
  const dH = wh[1];
  return {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection: 'column',
      maxHeight: dH,
    },
    status_bar_bg: {
      backgroundColor: '#000',
      height: STATUSBAR_HEIGHT,
      width: dW,
    },
    item_separator: {
      height: 1,
      backgroundColor: '#D9D9D9',
      marginHorizontal: 20,
    },
    list_footer: {
      height: 150,
      backgroundColor: '#EEEEEE',
      alignItems: 'flex-end',
      // justifyContent: 'center',
      paddingTop: 20,
      paddingRight: 15,
    },
    // =========== section-shadow ========
    section_bottom_shadow_box: {
      position: 'relative',
      backgroundColor: '#EEEEEE',
      height: 55,
      width: dW,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    section_bottom_shadow: {
      backgroundColor: '#EEEEEE',
      height: 1,
      elevation: 2,
      opacity: 0.8,
    },
    section_header_text: {
      color: '#7E7E7E',
      fontSize: 18,
      position: 'absolute',
      bottom: 10,
      left: 25,
    },
    section_top_shadow: {
      backgroundColor: '#EEEEEE',
      height: 5,
      elevation: 5,
      transform: [
        {translateY: 5},
        {skewY: '180deg'},
      ],
    },
  }
}

export default styles;