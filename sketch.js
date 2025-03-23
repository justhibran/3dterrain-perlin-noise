let sqr = 600;
let w = parseFloat(sqr);
let h = parseFloat(sqr);
let scl = 15;
let cols = w/scl;
let rows = h/scl;
let terrainZ =[];
let cam;
function setup() {
  
  createCanvas(w, h,WEBGL);
  cam = createCamera();
  cam.setPosition(0,-1200,1000);
  cam.lookAt(0,0,0)
}
function draw() {
  ofy= 0;
  for (let y = 0; y < rows+1; y++) {
    terrainZ[y] = new Array(cols);
    ofx= 0;
    for (let x = 0; x < cols+1; x++) {
      terrainZ[y][x] = map(noise(ofy,ofx),0,1,-50,200);
      ofx += .1
    }
    ofy += .1
  }
 stroke(0);
 background(0);
 rotateX(PI/3)
 frameRate(120);
 translate(-w/2,-h/2)
 for (let y = 0; y < rows; y++) {
   beginShape(TRIANGLE_STRIP);
   for (let x = 0; x < cols; x++) {
    if(terrainZ[y][x] > 100 && terrainZ[y][x] < 200) fill(0);
    else if(terrainZ[y][x] > 70 && terrainZ[y][x] < 100) fill(50);
    else if(terrainZ[y][x] > 30 && terrainZ[y][x] < 70) fill(100);
    else fill(150);
     vertex(x*scl,y*scl ,terrainZ[y][x]);
     vertex(x*scl,(y+1)*scl ,terrainZ[y+1][x]);
   }
   endShape();
 }
  orbitControl()
}
