import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
    this.props = props;
    this.state = { click: 0, loading: true };
  }

  static getDerivedStateFromProps(props) {
    console.log('getDerivedStateFromProps');
    return props;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick() {
    const currentClick = this.state.click + 1;
    this.setState({ click: currentClick, loading: true })
  }

  render() {
    console.log('Render');
    return (
      <div>
        <h4>I'm a Class Component</h4>
        <button onClick={this.handleClick.bind(this)}>
          Update me! Count: {this.state.click}
        </button>
        {this.props.children}
      </div>
    );
  }
}

export default ClassComponent;
