let input = document.getElementById('scale');
let sqr = 600;
let w = parseFloat(sqr);
let h = parseFloat(sqr);
let scl = 10;
let cols = w/scl;
let rows = h/scl;
let terrainZ =[];
let cam;
function setup() {
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
  createCanvas(w, h,WEBGL);
  cam = createCamera();
  cam.setPosition(0,-1200,1000);
  cam.lookAt(0,0,0)
}

function calc() {
  
  for (let y = 0; y < rows+1; y++) {
    terrainZ[y] = new Array(cols);
    ofx= 0;
    for (let x = 0; x < cols+1; x++) {
      terrainZ[y][x] = map(noise(ofy,ofx),0,1,-50,200);
      ofx += .1
    }
    ofy += .1
  }
  
}
function draw() {
 stroke(0);
 background(255);
 rotateX(PI/3)
 frameRate(120);
 translate(-w/4 - cols,-h/4 - cols)
 
 scl = input.value;
 for (let y = 0; y < rows; y++) {
   beginShape(TRIANGLE_STRIP);
   for (let x = 0; x < cols; x++) {
    if(terrainZ[y][x] > 100 && terrainZ[y][x] < 200) fill(200);
    else if(terrainZ[y][x] > 70 && terrainZ[y][x] < 100) fill(150);
    else if(terrainZ[y][x] > 30 && terrainZ[y][x] < 70) fill(100);
    else fill(50);
     vertex(x*scl,y*scl,terrainZ[y][x]);
     vertex(x*scl,(y+1)*scl,terrainZ[y+1][x]);
   }
   endShape();
 }
  orbitControl()
}
