import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  };

  myRef = null; //ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static static getDerivedStateFromProps(nextProps, prevState) {
    conosle.log('getDerivedStateFromProps');
    if(nextProps.color !== prevState.color) {

    }
  }
  render() {
    return <div></div>;
  }
}

export default LifeCycleSample;
