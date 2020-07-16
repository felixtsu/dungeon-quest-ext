//% weight=99 color="#6d5ba5" icon="\uf004"
//%groups='["Skill", "Game"]'
namespace dungeon {
    let playerSprite:Sprite = null

    //%block
    //%group="Skill"
    export function throwWaterBallRight() {
        sprites.createProjectileFromSprite(img`
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
    }
    //%block
    //%group="Skill"
    export function throwWaterBallDown() {
        sprites.createProjectileFromSprite(img`
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
    }
    //%block
    //%group="Skill"
    export function throwWaterBallUp() {
        sprites.createProjectileFromSprite(img`
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
    }
    //%block
    //%group="Skill"
    export function throwWaterBallLeft() {
        sprites.createProjectileFromSprite(img`
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
            [myTiles.tile0, sprites.dungeon.greenOuterNorthWest, sprites.dungeon.greenOuterNorthEast, sprites.dungeon.greenOuterSouthEast, sprites.dungeon.greenOuterSouthWest, sprites.dungeon.greenOuterEast0, sprites.dungeon.greenOuterNorth0, sprites.dungeon.greenOuterWest1, sprites.dungeon.greenOuterSouth0, sprites.dungeon.greenOuterNorth2, sprites.dungeon.greenInnerNorthWest, sprites.dungeon.greenInnerNorthEast, sprites.dungeon.greenInnerSouthWest, sprites.dungeon.greenInnerSouthEast, sprites.dungeon.greenOuterEast2, sprites.dungeon.greenOuterSouth2, sprites.dungeon.greenOuterWest2, sprites.dungeon.floorLight2, sprites.dungeon.greenOuterWest0, sprites.dungeon.greenOuterSouth1, sprites.dungeon.greenOuterEast1, sprites.dungeon.greenOuterNorth1, sprites.dungeon.floorDark2, myTiles.tile1, sprites.dungeon.chestClosed],
            TileScale.Sixteen
        ))
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
        `, SpriteKind.Player)
        controller.moveSprite(playerSprite)
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(14, 14))
        scene.cameraFollowSprite(playerSprite)
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
            c 6 c c c c 6 c c 6 c c c c 6 a
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
    }
}
