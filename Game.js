class Game{
constructor(){

}
getState(){
    var gameRef = database.ref('gameState')
    gameRef.on('value',function(data){
        gameState=data.val()

    })
}
update(state){
    database.ref('/').update({ gameState: state });

}
async start(){
    if (gameState===0){
        player=new Player()
        var playerRef=await database.ref('playerCount').once('value')
        if (playerRef.exists()){
playerCount=playerRef.val()
player.getCount()
        }
        form = new Form()
        form.display()
    }
}
play(){
    form.hide()
        text('gameStart',100,100)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            var pos=150
            for (var plr in allPlayers){
                if (plr==="player"+player.index){
                    fill("red")
                }
                else{
                    fill("black")
                }
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,pos)
                pos+=20
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance+=50
            player.update();
        }

}
}
