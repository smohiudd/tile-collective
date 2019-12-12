import Polygon from './polygon.js';

function squareTiling(p, polys, angle, offset, sides){
  let inc = 100;
  for (var x = 0; x < p.width; x += inc) {
    for (var y = 0; y < p.height; y += inc) {
      let poly = new Polygon(p,angle,offset,sides);
      poly.addVertex(x, y);
      poly.addVertex(x + inc, y);
      poly.addVertex(x + inc, y + inc);
      poly.addVertex(x, y + inc);
      poly.close();
      polys.push(poly);
    }
  }
  return polys;
}

export default squareTiling;
