var canvas=new fabric.Canvas('myCanvas')
blockimgwidth=30
blockimgheight=30
playerx=10
playery=10
var playerobject=""
var blockimgobject=""
function player_update()
{ fabric.Image.fromURL("player.png",function(img){
    playerobject=img
    playerobject.scaleToWidth(150)
    playerobject.scaleToHeight(150)
    playerobject.set(
        {
            top:playery,left:playerx
        }
    )
    canvas.add(playerobject)

})

}
function newimage(getimage)
{ fabric.Image.fromURL(getimage,function(img){
    blockimgobject=img
    blockimgobject.scaleToWidth(150)
    blockimgobject.scaleToHeight(150)
    blockimgobject.set(
        {
            top:playery,left:playerx
        }
    )
    canvas.add(blockimgobject)
        
})

}
window.addEventListener("keydown",my_keydown)
function my_keydown (e) {
    keypressed=e.keyCode
    if (e.shiftKey==true&& keypressed=='80') {
       blockimgwidth=blockimgwidth+10
       blockimgheight=blockimgheight+10
    }
    if (e.shiftKey==true&& keypressed=='77') {
        blockimgwidth=blockimgwidth-10
        blockimgheight=blockimgheight-10
     }
     if (keypressed=='38') {
         up()
     }
     if (keypressed=='40') {
        down()
    }
    if (keypressed=='37') {
        left()
    }
    if (keypressed=='39') {
        right()
    }
    if (keypressed=='87') {
        newimage('wall.jpg')
    }
    if (keypressed=='71') {
        newimage('ground.png')
    }
    if (keypressed=='76') {
        newimage('light_green.png')
    }
    if (keypressed=='84') {
        newimage('trunk.jpg')
    }
    if (keypressed=='82') {
        newimage('roof.jpg')
    }
    if (keypressed=='89') {
        newimage('yellow_wall.jpg')
    }
    if (keypressed=='68') {
        newimage('dark_green.png')
    }
    if (keypressed=='85') {
        newimage('unique.png')
    }
    if (keypressed=='67') {
        newimage('cloud.jpg')
    }
}
function up(){
    if (playery>0) {
        playery=playery-blockimgheight
        canvas.remove(playerobject)
        player_update()
        
    }
}
function down(){
    if (playery<600) {
        playery=playery+blockimgheight
        canvas.remove(playerobject)
        player_update()
        
    }
}
function left(){
    if (playerx>0) {
        playerx=playerx-blockimgwidth
        canvas.remove(playerobject)
        player_update()
        
    }
}
function right(){
    if (playerx<1000) {
        playerx=playerx+blockimgwidth
        canvas.remove(playerobject)
        player_update()
        
    }
}