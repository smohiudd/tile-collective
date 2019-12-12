import Hankin from './hankin.js';
import p5 from "p5";

class Edge{

  constructor(p,a,b,angle,offset) {
    this.p = p;
    this.a = a;
    this.b = b;
    this.angle= angle;
    this.offset = offset;
    this.h1 = null;
    this.h2 = null;
  }

  show(){
    this.p.stroke(255);
    this.p.strokeWeight(0);

    this.p.line(this.a.x, this.a.y, this.b.x, this.b.y);
    this.h1.show();
    this.h2.show();
  }

  hankin(sides){

    let delta = this.offset;

    let mid = p5.Vector.add(this.a,this.b);
    mid.mult(0.5);

    let v1 =  p5.Vector.sub(this.a,mid);
    let v2 =  p5.Vector.sub(this.b,mid);

    // Edge length
   var elen = v1.mag() + delta;

    let offset1 = mid;
    let offset2 = mid;

    if (delta > 0) {
      v1.setMag(delta);
      v2.setMag(delta);
      offset1 = p5.Vector.add(mid, v2);
      offset2 = p5.Vector.add(mid, v1);
    }

    v1.normalize();
    v2.normalize();

    v1.rotate(this.p.radians(-1*this.angle));
    v2.rotate(this.p.radians(this.angle));

    var interior = (sides - 2) * this.p.PI / sides;

    var alpha = interior * 0.5;
    var beta = this.p.PI - this.p.radians(this.angle) - alpha;
    var hlen = (elen * this.p.sin(alpha)) / this.p.sin(beta);

    v1.setMag(hlen);
    v2.setMag(hlen);

    this.h1 = new Hankin(this.p,offset1,v1);
    this.h2 = new Hankin(this.p,offset2,v2);
  }

}
export default Edge;
