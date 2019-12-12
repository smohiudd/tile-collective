import build_poly from '../utils/build_poly.js';
import p5 from "p5";

function DodecaHexaSquareTiling(p,polys,angle,offset,r) {
  this.polys = [];
  this.buildCell = function(x, y) {
    var sides = 12;
    var a;
    a = build_poly(p,x,y,r,sides,angle,offset);
    this.polys.push(p);
    var h12 = r*Math.cos(Math.PI/sides);
    var side = r*Math.sin(Math.PI/sides);
    var r6 = side/Math.sin(Math.PI/6);
    var r4 = side/Math.sin(Math.PI/4);
    var h6 = r6*Math.cos(Math.PI/6);
    var h4 = r4*Math.cos(Math.PI/4);
    var d4 = h12+h4;
    var d6 = h12+h6;
    var D4A = p5.Vector.fromAngle(2*Math.PI/12);
    var D4B = p5.Vector.fromAngle(-2*Math.PI/12);
    var D6 = p5.Vector.fromAngle(4*Math.PI/12);
    D4A.setMag(d4);
    D4B.setMag(d4);
    D6.setMag(d6);

    a = build_poly(p,x,y+d4,r4,4,null,angle,offset);
    this.polys.push(a);
    a = build_poly(p,x+d6,y,r6,6,null,angle,offset);
    this.polys.push(a);
    a = build_poly(p,x+D6.x,y+D6.y,r6,6,angle,offset,Math.PI/3);
    this.polys.push(a);
    a = build_poly(p,x+D4A.x,y+D4A.y,r4,4,angle,offset,Math.PI/6);
    this.polys.push(a);
    a = build_poly(p,x+D4B.x,y+D4B.y,r4,4,angle,offset,-Math.PI/6);
    this.polys.push(a);

  }

  // http://www.redblobgames.com/grids/hexagons/
  this.buildGrid = function() {
    var sides = 12;
    var h12 = r*Math.cos(Math.PI/sides);
    var side = r*Math.sin(Math.PI/sides);
    var r6 = side/Math.sin(Math.PI/6);
    var r4 = side/Math.sin(Math.PI/4);
    var h6 = r6*Math.cos(Math.PI/6);
    var h4 = r4*Math.cos(Math.PI/4);
    //What I'm trying to do here is this:
    var h = h12+h4;
    var w = 2*h12+4*h6+2*h4;
    var inc = h
    // TODO: get dimensions from somewhere
    var dim =400;
    var row = 0;
    for (var y = -h / 2; y < dim + h/2; y += inc) {
      var startX = ((row % 2) == 0) ? -w : -w / 2;
      for (var x = startX; x < dim; x += w) {
        this.buildCell(x, y);
      }
      row++;
    }

  }
}

export default DodecaHexaSquareTiling;
