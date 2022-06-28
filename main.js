function preload()
{

}
 
function setup()
{
   canvas = createCanvas(640, 480);
   canvas.position(110, 250);
   video = createCapture(VIDEO);
   video.hide();
}

function draw()
{
    image(video, 100, 100, 440, 280);
    circle(55, 55, 70,);
    circle(585, 55, 70);
    circle(55, 425, 70);
    circle(585, 425, 70);
    rect(90, 28.5, 460, 55);
    rect(90, 400, 460, 55);
    rect(29, 90, 55, 300);
    rect(558, 90, 55, 300);
}

function take_snapshot()
{
    save('Picture.png');
}