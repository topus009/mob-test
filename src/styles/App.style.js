const styles = (Dimensions) => {
  const dW = Dimensions.get('window').width;
  const dH = Dimensions.get('window').height;
  return {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection: 'column',
      maxHeight: dH,
      marginTop: 25,
    },
    text: {
      alignSelf: 'stretch',
      textAlign: 'center',
    },
  }
}

export default styles;