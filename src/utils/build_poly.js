import Polygon from '../tiling/polygon.js';

function build_poly(p,x,y,r,sides,angle,offset,init_angle) {
    let a = new Polygon(p,angle,offset,sides);
    if(!init_angle)init_angle = 0;
    // rotate 360 degrees around the clock in 60 degree increments
    var inc = 2 * Math.PI / sides;
    for (var index = 0; index < sides; index++) {
      // angular to cartesian
      var θ = (index * inc) - inc / 2+init_angle;
      var vX = x + r * Math.cos(θ);
      var vY = y + r * Math.sin(θ);
      a.addVertex(vX, vY);
    }

    a.close();
    return a;
}

export default build_poly;
