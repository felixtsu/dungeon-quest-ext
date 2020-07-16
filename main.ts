//% weight=99 color="#6d5ba5" icon="\uf004"
//%groups='["Skill", "Game"]'
namespace dungeon {
    let playerSprite: Sprite = null
    const SPRITE_KIND_WATER_BALL = SpriteKind.create()
    const SPRITE_KIND_PLAYER = SpriteKind.create()

    //%block
    //%group="Skill"
    export function throwWaterBallRight() {
        let waterballSprite = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . 9 9 . . . . . . .
            . . . . . . 9 9 9 9 . . . . . .
            . . . . . 9 9 1 9 9 9 . . . . .
            . . . . 9 9 1 1 9 9 9 9 . . . .
            . . . 9 9 1 1 9 9 9 9 9 9 . . .
            . . . 9 1 1 9 9 9 9 9 9 9 . . .
            . . . 9 9 9 9 9 9 9 9 9 9 . . .
            . . . 9 9 9 9 9 9 9 9 9 9 . . .
            . . . . 9 9 9 9 9 9 9 9 . . . .
            . . . . . 9 9 9 9 9 9 . . . . .
            . . . . . . 9 9 9 9 . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, playerSprite, 50, 0)
        waterballSprite.setKind(SPRITE_KIND_WATER_BALL)
    }
    //%block
    //%group="Skill"
    export function throwWaterBallDown() {
        let waterballSprite = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . 9 9 . . . . . . .
            . . . . . . 9 9 9 9 . . . . . .
            . . . . . 9 9 1 9 9 9 . . . . .
            . . . . 9 9 1 1 9 9 9 9 . . . .
            . . . 9 9 1 1 9 9 9 9 9 9 . . .
            . . . 9 1 1 9 9 9 9 9 9 9 . . .
            . . . 9 9 9 9 9 9 9 9 9 9 . . .
            . . . 9 9 9 9 9 9 9 9 9 9 . . .
            . . . . 9 9 9 9 9 9 9 9 . . . .
            . . . . . 9 9 9 9 9 9 . . . . .
            . . . . . . 9 9 9 9 . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, playerSprite, 0, -50)
        waterballSprite.setKind(SPRITE_KIND_WATER_BALL)
    }
    //%block
    //%group="Skill"
    export function throwWaterBallUp() {
        let waterballSprite = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . 9 9 . . . . . . .
            . . . . . . 9 9 9 9 . . . . . .
            . . . . . 9 9 1 9 9 9 . . . . .
            . . . . 9 9 1 1 9 9 9 9 . . . .
            . . . 9 9 1 1 9 9 9 9 9 9 . . .
            . . . 9 1 1 9 9 9 9 9 9 9 . . .
            . . . 9 9 9 9 9 9 9 9 9 9 . . .
            . . . 9 9 9 9 9 9 9 9 9 9 . . .
            . . . . 9 9 9 9 9 9 9 9 . . . .
            . . . . . 9 9 9 9 9 9 . . . . .
            . . . . . . 9 9 9 9 . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, playerSprite, 0, -50)
        waterballSprite.setKind(SPRITE_KIND_WATER_BALL)
    }
    //%block
    //%group="Skill"
    export function throwWaterBallLeft() {
        let waterballSprite = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . 9 9 . . . . . . .
            . . . . . . 9 9 9 9 . . . . . .
            . . . . . 9 9 1 9 9 9 . . . . .
            . . . . 9 9 1 1 9 9 9 9 . . . .
            . . . 9 9 1 1 9 9 9 9 9 9 . . .
            . . . 9 1 1 9 9 9 9 9 9 9 . . .
            . . . 9 9 9 9 9 9 9 9 9 9 . . .
            . . . 9 9 9 9 9 9 9 9 9 9 . . .
            . . . . 9 9 9 9 9 9 9 9 . . . .
            . . . . . 9 9 9 9 9 9 . . . . .
            . . . . . . 9 9 9 9 . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, playerSprite, -50, 0)
        waterballSprite.setKind(SPRITE_KIND_WATER_BALL)
    }

    //%block
    //%group="Skill"
    export function prepareDungeon() {

        tiles.setTilemap(tiles.createTilemap(
            hex`10001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001090200000000000000000000000000071105000000000000000000000001060d110c06020000000000000000001011111111110e00000000000000000003080b110a0804000000000000000000000007110500000000000000000000000000030f040000000000000000000000000000000000000106171502000000000000000000000012161616140000000000000000000000071616161400000000000000000000000308130804`,
            img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . 2 2 2 . . . . . . .
                . . . . . . 2 . 2 . . . . . . .
                . . . . 2 2 2 . 2 2 2 . . . . .
                . . . . 2 . . . . . 2 . . . . .
                . . . . 2 2 2 . 2 2 2 . . . . .
                . . . . . . 2 . 2 . . . . . . .
                . . . . . . 2 2 2 . . . . . . .
                . . . . . . . . . . . 2 2 . 2 2
                . . . . . . . . . . . 2 . . . 2
                . . . . . . . . . . . 2 . . . 2
                . . . . . . . . . . . 2 2 2 2 2
            `,
            [myTiles.tile0, sprites.dungeon.greenOuterNorthWest, sprites.dungeon.greenOuterNorthEast, sprites.dungeon.greenOuterSouthEast, sprites.dungeon.greenOuterSouthWest, sprites.dungeon.greenOuterEast0, sprites.dungeon.greenOuterNorth0, sprites.dungeon.greenOuterWest1, sprites.dungeon.greenOuterSouth0, sprites.dungeon.greenOuterNorth2, sprites.dungeon.greenInnerNorthWest, sprites.dungeon.greenInnerNorthEast, sprites.dungeon.greenInnerSouthWest, sprites.dungeon.greenInnerSouthEast, sprites.dungeon.greenOuterEast2, sprites.dungeon.greenOuterSouth2, sprites.dungeon.greenOuterWest2, sprites.dungeon.floorLight2, sprites.dungeon.greenOuterWest0, sprites.dungeon.greenOuterSouth1, sprites.dungeon.greenOuterEast1, sprites.dungeon.greenOuterNorth1, sprites.dungeon.floorDark2, myTiles.tile1, sprites.dungeon.chestClosed, myTiles.tile2],
            TileScale.Sixteen
        ))


        scene.onOverlapTile(SPRITE_KIND_PLAYER, myTiles.tile1, function (sprite: Sprite, location: tiles.Location) {
            sprite.say("The door is locked", 1000)
            sprite.y = sprite.y + 2
        })



        playerSprite = sprites.create(img`
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f f e 2 2 2 2 2 2 e e f . .
            . . f e 2 f f f f f f 2 e f . .
            . . f f f f e e e e f f f f . .
            . f f e f b f 4 4 f b f e f f .
            . f e e 4 1 f d d f 1 4 e e f .
            . . f e e d d d d d d e e f . .
            . . . f e e 4 4 4 4 e e f . . .
            . . e 4 f 2 2 2 2 2 2 f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
        `, SPRITE_KIND_PLAYER)
        controller.moveSprite(playerSprite)
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(14, 14))
        scene.cameraFollowSprite(playerSprite)
    }

    //%block
    //%group="Skill"
    export function openDoor() {
        tiles.setTileAt(tiles.getTileLocation(13, 12), myTiles.tile2)
    }


    function prepareLevel2() {
        scene.onHitWall(SPRITE_KIND_WATER_BALL, function (sprite: Sprite) {
            if (sprite.tileKindAt(TileDirection.Right, sprites.dungeon.greenOuterEast2)) {
                tiles.setTileAt(tiles.getTileLocation(10, 8), sprites.dungeon.greenOuterEast0)
            } else if (sprite.tileKindAt(TileDirection.Left, sprites.dungeon.greenOuterWest2)) {
                tiles.setTileAt(tiles.getTileLocation(4, 8), sprites.dungeon.greenOuterWest1)
            } else if (sprite.tileKindAt(TileDirection.Top, sprites.dungeon.greenOuterNorth2)) {
                tiles.setTileAt(tiles.getTileLocation(7, 5), sprites.dungeon.greenOuterNorth0)
            } else if (sprite.tileKindAt(TileDirection.Bottom, sprites.dungeon.greenOuterSouth2)) {
                tiles.setTileAt(tiles.getTileLocation(7, 11), sprites.dungeon.greenOuterSouth0)
            }
        })
    }

    namespace myTiles {
        //% blockIdentity=images._tile
        export const tile0 = img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `
        //% blockIdentity=images._tile
        export const tile1 = img`
            c c c c c c c c c c c c c c c c
            c 7 7 7 7 7 7 c c 7 7 7 7 7 7 c
            c 6 6 6 6 6 6 c c 6 6 6 6 6 6 c
            c 6 c c c c 6 c c 6 c c c c 6 c
            c 6 c 7 7 7 6 c c 6 7 7 7 c 6 c
            c 6 c 6 6 6 6 c c 6 6 6 6 c 6 c
            c 6 c 6 c c c c c c c c 6 c 6 c
            c 6 c 6 c 6 c c c c 6 c 6 c 6 c
            c 6 c 6 c c c c c c c c 6 c 6 c
            c 6 c 6 6 6 6 c c 6 6 6 6 c 6 c
            c 6 c 6 6 6 6 c c 6 6 6 6 c 6 c
            c 6 c 6 6 6 6 c c 6 6 6 6 c 6 c
            c 6 c c c c 6 c c 6 c c c c 6 c
            c 6 6 6 6 6 6 c c 6 6 6 6 6 6 c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
        `
        //% blockIdentity=images._tile
        export const tile2 = img`
            c c 7 6 c c 7 c c 7 c c 6 7 c c
            c 7 6 c c 7 6 c c 6 7 c c c 6 c
            c 6 c c 7 6 6 c c 6 6 7 c c 6 c
            c 6 c 7 6 c 6 c c 6 c 6 7 c 6 c
            c 6 c 6 c c 6 c c 6 c c 6 c 6 c
            c 6 c 6 c 6 6 c c 6 c c 6 c 6 c
            c 6 c 6 c c 6 c c 6 c c 6 c 6 c
            c 6 c 6 c 6 6 c c 6 6 c 6 c 6 c
            c 6 c 6 6 6 6 c c 6 6 6 6 c 6 c
            c 6 c 6 6 c 6 c c 6 c 6 6 c 6 c
            c 6 c 6 c c 6 c c 6 c c 6 c 6 c
            c 6 c c c 6 6 c c 6 6 c c c 6 c
            c 6 c c 6 6 c c c c 6 6 c c 6 c
            c 6 6 6 6 c c c c c c 6 6 6 6 c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
        `
    }
}
