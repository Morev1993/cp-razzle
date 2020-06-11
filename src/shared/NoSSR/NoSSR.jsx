class NoSSR extends React.Component {
  state = {
    isClient: false
  }
  componentDidMount() {
     this.setState({ isClient: false })
  }
  render() {
    const { isClient } = this.state
    const { children } = this.props
    return isClient ? children : null;
  }
}