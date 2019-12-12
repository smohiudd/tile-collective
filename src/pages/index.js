import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from "react-helmet"

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sketch from '../components/sketch';

import RangeSelectTwo from "../components/RangeSelectTwo"
import RangeSelectThree from "../components/RangeSelectThree"

import squareTiling from '../tiling/tile_export.js';


// import DodecaHexaSquareTiling from '../tiling/DodecaHexaSquareTiling.js';

const controls = {
  marginTop: 10,
  cursor: "pointer"
};

let tiling = ["4.8.8","square","hexagonal"]


class IndexPage extends React.Component {

  constructor() {
      super();

      this.state = {
        angle:60,
        offset: 25,
        tile: tiling[1],
      };

      this.sketch = this.sketch.bind(this);
      this.sketch_map = this.sketch_map.bind(this);
  }

  sketch(p) {

    p.setup = () => {

      var canvasDiv = document.getElementById('sketch_canvas');
      var width = canvasDiv.offsetWidth;

      p.createCanvas(200,200);

      // p.translate(-500/2,-500/2,0);
      // p.rotateX(p.radians(45));
      // p.scale(0.8);
      p.background(255);

      let polys = [];

      let tile_selects = document.getElementById("tiles").value;

      switch (tile_selects ) {
        case "1":
          squareTiling(p, polys, this.state.angle, this.state.offset,4);
          break;
        case "2":
          console.log("select 4.8.8")
          break;
        case "3":
          console.log("select hexagonal")
          break;
        default:
          squareTiling(p, polys, this.state.angle, this.state.offset,4);
          // dodecaHexSquareTiling();
          // squareTiling();
          break;
      }

      for (var i = 0; i < polys.length; i++) {
          polys[i].hankin();
          polys[i].show();
      }


    };

    p.draw = () => {

    };
  }

  sketch_map(p) {
    p.setup = () => {
      p.createCanvas(300,200);


    }

    p.draw = () => {
      p.background(255);
      p.stroke(0);
      if(p.mouseX<=300 && p.mouseX>=0 && p.mouseY <= 200 && p.mouseY>=0 ){
        p.line(p.mouseX,0, p.mouseX, 200);
        p.line(0,p.mouseY, 300, p.mouseY);
      }


    }

    p.mousePressed = () => {
      if(p.mouseX<=300 && p.mouseX>=0 && p.mouseY <= 200 && p.mouseY>=0 ){
        p.noLoop();
        p.line(p.mouseX,0, p.mouseX, 200);
        p.line(0,p.mouseY, 300, p.mouseY);
        console.log(p.mouseX,p.mouseY)
      }
    }



  }

  changeAngle(e) {
    e.persist();
    this.setState({
      angle: e.target.value
    });
  }

  changeOffset(e) {
    e.preventDefault();
    this.setState({
      offset: Number(e.target.value)
    });
  }

  tileSelect(e) {
    e.preventDefault();
    this.setState({
      tile: e.target.value
    });
  }

  render(){
    return (
      <Layout>

        <Helmet>
         <link href="https://api.mapbox.com/mapbox-assembly/v0.23.2/assembly.min.css" rel="stylesheet"/>
        </Helmet>


        <SEO title="Home" />

      <div className='prose grid grid--gut12'>
      <div className='flex-parent flex-parent--wrap col col--12 col--6-mm col--8-ml mb12 mb0-mm'>
        <div className='flex-parent flex-parent--wrap col col--12 mb12'>
            <div id="sketch_canvas" className='col col--12 px12 py12 flex-parent flex-parent--center-main flex-parent--center-cross'>
              <div className="flex-child">
                <Sketch sketch={this.sketch} />
              </div>

            </div>
        </div>
        <div className='flex-parent col col--12'>
          <div className='col col--6 px12 py12'>
            <h3>Ethnic Origin</h3>
            <Sketch sketch={this.sketch_map} />
          </div>
          <div className='col col--6 px12 py12'>
            <h3>Faith</h3>

            <RangeSelectThree
              handle={this.changeOffset.bind(this)}
              min="1"
              max="3"
              default="1"
              left="Polytheistic"
              middle="Monotheistic"
              right="Other"
              id="null"
            />

            <RangeSelectTwo
              handle={this.changeAngle.bind(this)}
              min="20"
              max="50"
              default="20"
              left="Abrahamic"
              right="Other"
            />

            <RangeSelectThree
              handle={this.changeOffset.bind(this)}
              min="1"
              max="3"
              default="1"
              left="Muslim"
              middle="Jewish"
              right="Christian"
              id = "tiles"
            />

          </div>
        </div>
      </div>
      <div className='flex-parent col col--12 col--6-mm col--4-ml'>
        <div className='bcol col--12 px12 py12'>

          <h3>Spirituality</h3>
          <div style={controls}>

          <RangeSelectTwo
            handle={this.changeAngle.bind(this)}
            min="20"
            max="50"
            default="20"
            left="Religious"
            right="Secular"
          />

          <RangeSelectTwo
            handle={this.changeAngle.bind(this)}
            min="60"
            max="70"
            default="60"
            left="Spirit-focused"
            right="Ritual-focused"
          />

          <RangeSelectTwo
            handle={this.changeAngle.bind(this)}
            min="80"
            max="100"
            default="80"
            left="Communal"
            right="Individual"
          />

          <RangeSelectTwo
            handle={this.changeOffset.bind(this)}
            min="1"
            max="30"
            default="1"
            left="Human-centric"
            right="Eco-centric"
          />

          <RangeSelectTwo
            handle={this.changeOffset.bind(this)}
            min="31"
            max="50"
            default="31"
            left="Non-Traditional"
            right="Traditional"
          />

          <RangeSelectTwo
            handle={this.changeOffset.bind(this)}
            min="51"
            max="70"
            default="51"
            left="Heart/Gut"
            right="Mind/Logic"
          />

          <RangeSelectTwo
            handle={this.changeOffset.bind(this)}
            min="71"
            max="90"
            default="71"
            left="World"
            right="Hereafter"
          />

          <RangeSelectTwo
            handle={this.changeOffset.bind(this)}
            min="91"
            max="100"
            default="91"
            left="Reflection"
            right="Action"
          />

         </div>
        </div>
      </div>
    </div>

    </Layout>
    );
  }

};

export default IndexPage;
