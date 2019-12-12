import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sketch from '../components/sketch';

import sketch from '../scripts/phi';

class IndexPage extends React.Component {

  constructor() {
      super();
      this.sketch = this.sketch.bind(this);
  }

  sketch(p) {
    const phi = 1.6180339;
    p.state = [];
    p.dispatch = () => {};

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    p.setup = () => {
      p.createCanvas(500,500);
      p.noFill();
      p.smooth();
    };

    p.draw = () => {
      p.background(200);
      p.stroke(10, 10);
      p.spiral(p.width / 2, p.height / 2, 0, 1000);
    };

    p.spiral = (x, y, origin, lines) => {
      for (let i = 0; i < lines; i += 1) {
        p.translate(x, y);
        p.rotate(p.radians(p.noise((p.frameCount - i) * 0.001 * phi) * 10 + 100));
        p.line(origin, 0, 0, 0);
        p.translate(-x, -y);
        x += origin += phi;
      }
    };
  }

  render(){
    return (
      <Layout>
        <Sketch sketch={this.sketch} />
      </Layout>
    );
  }

};

export default IndexPage;
