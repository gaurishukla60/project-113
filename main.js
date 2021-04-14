function preload(){

}

function setup() {
     canvas = createCanvas(640 , 480);
     canvas.position(110 , 250);
     video = createCapture(VIDEO);
     video.hide();
     tint_color="";
  }
  
  function draw() {
    image(video,190,150,240,180);
     circle(50,50,60);
    fill(160,0,0);
    circle(320,50,60);
    fill(160,0,0);
    circle(50,430,60);
    fill(160,0,0);
    circle(50,230,60);
    fill(160,0,0);
    circle(590,50,60);
    fill(160,0,0);
    circle(590,230,60);
    fill(160,0,0);
    circle(590,430,60);
    fill(160,0,0);
    circle(320,430,60);
    fill(160,0,0);
  }
 function take_snapshot()
 {
    save('gauri.png');
 }
  