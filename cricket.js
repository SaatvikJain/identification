img="";
status="";
objects= [];

function setup()
{
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
    document.getElementById("status").innerHTML = "Status :  Detecting Objects";
}

function preload()
{
    img= loadImage("ball and bat.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 420);
         if(status !="")
         {
             for(i = 0; i <objects.length; i++)
             {
                 document.getElementById("status").innerHTML = "Object Detected";

                 fill("#FF0000");
                 accuracy = floor(objects[i].confidence*100);
                 label = objects[i].label;
                 width = objects[i].width; 
                 height = objects[i].height; 
                 x = objects[i].x;
                 y = objects[i].y;
                 text(label + " " + accuracy + " %",x,y);
                 noFill();
                 stroke("#FF0000");
                 rect(x,y,width,height);
             }
         }
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status= true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
        console.log(results);
        objects= results;
}

function back()
{
    window.location = "index.html";
}