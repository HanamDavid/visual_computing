float x,y,z, directionXY,directionZ;

void setup() {
   size(640, 360, P3D);
   frameRate(10);
   directionXY=200;
   directionZ=200;
   noStroke();

}

void draw() {
  camera();
  directionalLight(200, 200, 200, directionXY, directionXY, directionZ);
  background(50);
  float translationFactorX = map(sin(frameCount * 0.05), -1, 1, -100, 100); 
  float translationFactorY = map(cos(frameCount * 0.05), -1, 1, -100, 100); 
  translate((width/2)+ translationFactorX, (height/2)+ translationFactorY, 0);
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  float scaleFactor = map(sin(frameCount * 0.05), -1, 1, 0.5, 1); 
  scale(scaleFactor);
  box(160); 
  if (frameCount % 20==0){
    directionXY = -frameCount % 20;
    directionZ = (-frameCount +10)%20;
    fill(color(random(255), random(255), random(255), 80));
    
  }
  sphere(200);
}
