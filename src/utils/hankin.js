import p5 from "p5";

class Hankin {

  constructor(p,a,v){
    this.p = p;
    this.a = a;
    this.v = v;
    this.b = p5.Vector.add(a,v);
  }

  show(){
    this.p.stroke(50);
    this.p.strokeWeight(8);
    this.p.line(this.a.x, this.a.y, this.b.x,this.b.y);

  }

}

export default Hankin;
