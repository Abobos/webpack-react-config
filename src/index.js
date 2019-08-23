import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.css'

class App extends Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

const mountNode = document.getElementById('app');
render(<App name="Blessing"/>, mountNode);