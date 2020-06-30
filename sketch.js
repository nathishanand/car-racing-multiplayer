var ball;
var database;
var pos;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    var databaseRef=database.ref("ball/position")
    databaseRef.on("value",readposition,err)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
        x:ball.x+x,
        y:ball.y+y
    })
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readposition(data){
  pos=data.val();
  ball.x=pos.x
  ball.y=pos.y
}
function err(){
    console.log("err")
}
