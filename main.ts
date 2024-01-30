controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Zero_Two,
    assets.animation`Zero Two Up`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Zero_Two,
    assets.animation`Zero Two Left`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Zero_Two,
    assets.animation`Zero Two Right0`,
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Zero_Two,
    assets.animation`Zero Two Down`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(Cat, sprites.builtin.forestTiles10)
    info.changeScoreBy(1)
})
let Movimiento_Zero_Two = false
let Cat: Sprite = null
let Zero_Two: Sprite = null
scene.setBackgroundColor(15)
Zero_Two = sprites.create(img`
    ..................
    ......444444......
    .....42333a24.....
    ....4a23333234....
    ....43344443a4....
    ....4341dd1434....
    ...434d5dd5d434...
    ...434d6dd6d434...
    ...4334dddd4334...
    ..43348ffff84334..
    ...44d817718d44...
    ...fddf8888fddf...
    ....ff888888ff....
    ....f88888888f....
    ....ffffffffff....
    ......ff..ff......
    ......11..11......
    ..................
    `, SpriteKind.Player)
controller.moveSprite(Zero_Two)
tiles.setCurrentTilemap(tilemap`Map`)
scene.cameraFollowSprite(Zero_Two)
tiles.placeOnRandomTile(Zero_Two, assets.tile`myTile10`)
Cat = sprites.create(assets.image`Cat`, SpriteKind.Food)
tiles.placeOnRandomTile(Cat, sprites.builtin.forestTiles10)
info.setScore(0)
info.startCountdown(120)
game.setGameOverMessage(true, "You Find Some Cats!")
game.setGameOverMessage(false, "You Find Some Cats!")
game.onUpdate(function () {
    Movimiento_Zero_Two = controller.up.isPressed() || (controller.right.isPressed() || (controller.down.isPressed() || controller.left.isPressed()))
    if (!(Movimiento_Zero_Two)) {
        animation.stopAnimation(animation.AnimationTypes.All, Zero_Two)
    }
})
forever(function () {
    music.play(music.createSong(assets.song`Music`), music.PlaybackMode.UntilDone)
})
