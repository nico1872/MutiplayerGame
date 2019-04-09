var io = require('socket.io')(process.env.PORT || 6000);

console.log("server started");

var playerCount = 0;
var Randing = 0;
io.on("connection",function(socket){

console.log("client connected");
Randing = Math.floor(Math.random() * 100); 
//socket.broadcast.emit('spawn');
playerCount++;
/*
for(i=0;i<playerCount;i++){
 //   socket.emit("spawn");
    console.log("spawn new player");
}*/
socket.on("Ran",function(num){
 
    data = {
        RanNum:num.RanNum,
        msg:num.msg
    }
   
  if(data.RanNum == Randing){
    sentdata = {
        RanNum:num.RanNum,
        msg:"Win"
    }
    Randing = Math.floor(Math.random() * 100); 
   
  }else if (data.RanNum > Randing){
    sentdata = {
        RanNum:num.RanNum,
        msg:"Lower"
    }
  }else{
    sentdata = {
        RanNum:num.RanNum,
        msg:"Higher"
    }
  }
  console.log (Randing);
     socket.emit("Ran",sentdata);
}); 

socket.on("disconnect",function(){

    console.log("client disconnect");
    playerCount--;
}); 



});
  
  