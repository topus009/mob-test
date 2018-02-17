const styles = (type, stylesheet, disabled) => {
  const {
    btn,
    content,
  } = stylesheet;

  if (type === 'image') {
    return ({
      btn: {
        justifyContent: 'center',
        alignItems: 'center',
        opacity: disabled ? 0.2 : 1,
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
        opacity: disabled ? 0.2 : 1,
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