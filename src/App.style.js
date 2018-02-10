const styles = (Dimensions) => {
  const dW = Dimensions.get('window').width;
  const dH = Dimensions.get('window').height;
  return {
    container: {
      flex: 1,
      backgroundColor: '#F1F1F1',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      maxHeight: dH,
    },
    text: {
      alignSelf: 'stretch',
      textAlign: 'center',
    },
  }
}

export default styles;