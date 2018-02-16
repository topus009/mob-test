const styles = (type, stylesheet) => {
  const {
    btn,
    content,
  } = stylesheet;

  if (type === 'image') {
    return ({
      btn: {
        justifyContent: 'center',
        alignItems: 'center',
        ...btn,
      },
      content: {
        ...content,
      },
    })
  }

  if (type === 'text') {
    return ({
      btn: {
        justifyContent: 'center',
        alignItems: 'center',
        ...btn,
      },
      content: {
        textAlign: 'center',
        ...content,
      },
    })
  }
}

export default styles;