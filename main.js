function preload(){
    img = loadImage("https://c.tenor.com/b7c_4SeFbnYAAAAM/google-gif-spin.gif");
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110, 250);
    image=createCapture(image);
    image.hide();
}
