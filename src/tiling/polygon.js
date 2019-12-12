import Edge from '../utils/edge.js';

class Polygon{

  constructor(p,angle,offset,n) {
     this.p = p;
     this.angle = angle;
     this.offset = offset;
     this.edges = [];
     this.vertices = [];
     this.sides = n;
     this.addVertex = this.addVertex.bind(this);
     this.close = this.close.bind(this);
   }

  addVertex(x,y){
    let a = this.p.createVector(x,y);
    let total = this.vertices.length;

    if(total > 0 ){
      let previous = this.vertices[total-1];
      let edge = new Edge(this.p,previous,a,this.angle,this.offset)
      this.edges.push(edge)
    }
    this.vertices.push(a);
  }

  close(){
    let total = this.vertices.length;
    let last = this.vertices[total-1];
    let first = this.vertices[0];
    let edge = new Edge(this.p,last,first,this.angle,this.offset)
    this.edges.push(edge);

  }

  hankin(){
    for(let i=0;i<this.edges.length;i++){
      this.edges[i].hankin(this.sides);
    }
  }

  show(){
      for(let i=0;i<this.edges.length;i++){
        this.edges[i].show();
      }
    }

}

export default Polygon;
