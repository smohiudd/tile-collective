import React, { Component } from 'react';
import styled from '@emotion/styled';
import p5 from 'p5';

class Sketch extends Component {
  constructor(props) {
    super(props);
    this.sketchRef = React.createRef();
    this.canvas = null;
  }

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.sketchRef.current); //eslint-disable-line
  }

  componentDidUpdate() {
    this.canvas.remove();
    this.canvas = new p5(this.props.sketch, this.sketchRef.current); //eslint-disable-line
  }

  componentWillUnmount() {
    this.canvas.remove();
  }

  render() {
    return <div ref={this.sketchRef} />;
  }
}

export default Sketch;
