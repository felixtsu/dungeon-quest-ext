//% weight=99 color="#6d5ba5" icon="\uf004"
//%groups='["Skill", "Game", "Dialog"]'
namespace dungeon {

    let playerSprite: Sprite = null
    const SPRITE_KIND_WATER_BALL = SpriteKind.create()
    const SPRITE_KIND_PORTAL = SpriteKind.create()
    const SPRITE_KIND_WATER_FOUNTAIN = SpriteKind.create()
    const SPRITE_KIND_OPEN_DOOR = SpriteKind.create()
    const SPRITE_KIND_TRAP = SpriteKind.create()

    const SPRITE_KIND_PROPHET = SpriteKind.create()
    const SPRITE_KIND_RAT_ROOM_DOOR = SpriteKind.create()

    export enum WaterballDirection {
        UP, DOWN, RIGHT, LEFT
    }

    export enum Recipe {
        TomatoRice, FriedRice, TomatoEgg
    }

    //%block
    //%group="Skill"
    export function cook(recipe: Recipe) {
        if (!playerSprite.tileKindAt(TileDirection.Center, myTiles.tile2)) {
            // playerSprite.say('我要在火堆上才能做饭', 1000)
            playerSprite.say('I can only cook at campfire.', 1000)
            return
        }

        if (ingredientsAcquired != 2 || recipe != correctRecipe) {
            // playerSprite.say("你身上的原料做不出来这个菜，你饿死了", 1000)
            playerSprite.say("I don't have ingredient for that, I'm starving.", 1000)
            pause(1000)
            game.over()
        } else {
            // playerSprite.say("饱餐一顿的勇者第二天就找到了出路", 2000)
            playerSprite.say("Nice meal, I can see a way out.", 2000)
            pause(2000)
            prepareLevel4()
            // game.over(true)
        }
    }

    let ingredientsAcquired = 0


    let moving = false;

    //%block
    //%group="Skill"
    export function throwWaterBall(direction: WaterballDirection) {
        if (controller.up.isPressed() || controller.down.isPressed() || 
            controller.right.isPressed() || controller.left.isPressed() || 
            moving) {
            // playerSprite.say("我要站着不动才能发射水球", 500)
            playerSprite.say("I can't throw a water ball while moving", 500)
            return
        }
        let powerBarSprite = statusbars.getStatusBarAttachedTo(StatusBarKind.Energy, playerSprite)

        if (powerBarSprite === undefined || powerBarSprite.value != powerBarSprite.max) {
            playerSprite.say("Not enough energy.", 1000)
            return;
        }

        powerBarSprite.value = 0

        let waterballSprite: Sprite = null

        switch (direction) {
            case WaterballDirection.DOWN:
                waterballSprite = sprites.createProjectileFromSprite(img`
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
                `, playerSprite, 0, 80);
                break;
            case WaterballDirection.UP: waterballSprite = sprites.createProjectileFromSprite(img`
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
            `, playerSprite, 0, -80); break;
            case WaterballDirection.RIGHT: waterballSprite = sprites.createProjectileFromSprite(img`
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
            `, playerSprite, 80, 0); break;
            case WaterballDirection.LEFT: waterballSprite = sprites.createProjectileFromSprite(img`
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
            `, playerSprite, -80, 0); break;
        }


        waterballSprite.setKind(SPRITE_KIND_WATER_BALL)
    }

    let doorSprite: Sprite = null;

    //%block
    //%group="Game"
    export function prepareDungeon() {
        tiles.setTilemap(tiles.createTilemap(
            hex`1000100001060606060200000000000000000000121616191605000000000000000000000716161616050000000000000000000007181616180500000000000000000000030808080804000000000000000000000000000001060606060902000000000000000000101111111a1105000000000000000000121a1a111a11050000000000000000000711111111110500000000000000000012111a111a1a0500000000000000000012111a1111110e000000000000000000030f1308131304000000000000000000000000000000000106171502000000000000000000000012161616140000000000000000000000071616161400000000000000000000000308130804`,
            img`
                2 2 2 2 2 2 . . . . . . . . . .
                2 . . . . 2 . . . . . . . . . .
                2 . . . . 2 . . . . . . . . . .
                2 . . . . 2 . . . . . . . . . .
                2 2 2 2 2 2 . . . . . . . . . .
                . . . . 2 2 2 2 2 2 2 . . . . .
                . . . . 2 . . . 2 . 2 . . . . .
                . . . . 2 2 2 . 2 . 2 . . . . .
                . . . . 2 . . . . . 2 . . . . .
                . . . . 2 . 2 . 2 2 2 . . . . .
                . . . . 2 . 2 . . . 2 . . . . .
                . . . . 2 2 2 2 2 2 2 . . . . .
                . . . . . . . . . . . 2 2 . 2 2
                . . . . . . . . . . . 2 . . . 2
                . . . . . . . . . . . 2 . . . 2
                . . . . . . . . . . . 2 2 2 2 2
            `,
            [myTiles.tile0, sprites.dungeon.greenOuterNorthWest, sprites.dungeon.greenOuterNorthEast, sprites.dungeon.greenOuterSouthEast, sprites.dungeon.greenOuterSouthWest, sprites.dungeon.greenOuterEast0, sprites.dungeon.greenOuterNorth0, sprites.dungeon.greenOuterWest1, sprites.dungeon.greenOuterSouth0, sprites.dungeon.greenOuterNorth2, sprites.dungeon.greenInnerNorthWest, sprites.dungeon.greenInnerNorthEast, sprites.dungeon.greenInnerSouthWest, sprites.dungeon.greenInnerSouthEast, sprites.dungeon.greenOuterEast2, sprites.dungeon.greenOuterSouth2, sprites.dungeon.greenOuterWest2, sprites.dungeon.floorLight2, sprites.dungeon.greenOuterWest0, sprites.dungeon.greenOuterSouth1, sprites.dungeon.greenOuterEast1, sprites.dungeon.greenOuterNorth1, sprites.dungeon.floorDark2, myTiles.tile1, sprites.dungeon.chestClosed, myTiles.tile2, sprites.dungeon.stairLadder, myTiles.tile2, myTiles.openDoorTile, sprites.dungeon.chestOpen],
            TileScale.Sixteen
        ))

        doorSprite = sprites.create(img`
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
        `, SpriteKind.Door)
        tiles.placeOnTile(doorSprite, tiles.getTileLocation(13, 12))

        preparePlayer()
        prepareTrap()

        game.splash("Use your coding skill to explore the dungeon, find a way out.")
    }

    let keyDropped = false;

    //%block 
    //%group="Game"
    export function dropKey() {
        let keySprite = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 1 1 . . . . . . . . . . . .
            . 1 5 5 1 . . . . . . . . . . .
            1 5 5 5 5 1 1 1 1 1 1 1 1 1 . .
            5 5 . . 5 5 5 5 5 5 5 5 5 5 . .
            5 5 1 1 5 5 5 5 . 5 5 5 . 5 . .
            . 5 5 5 5 . . 5 . . 5 . . 5 . .
            . . 5 5 . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Key)
        tiles.placeOnTile(keySprite, tiles.getTileLocation(12, 14))

        keyDropped = true;
    }

    let trapSprite: Sprite = null
    function prepareTrap() {
        trapSprite = sprites.create(img`
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
        `, SPRITE_KIND_TRAP)
        tiles.placeOnTile(trapSprite, tiles.getTileLocation(13, 11))

        sprites.onOverlap(SpriteKind.Player, SPRITE_KIND_TRAP, function (sprite: Sprite, otherSprite: Sprite) {
            // game.splash("你作弊破门被发现，即死")
            game.splash("You cheat breaking the door, the dungeon master cast instant death on you.")
            game.over()
        })
    }

    function preparePlayer() {
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
        playerSprite.z = 100
        controller.moveSprite(playerSprite)
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(14, 14))
        scene.cameraFollowSprite(playerSprite)

        game.onPaint(function () {
            if (playerSprite.vy < 0) {
                playerSprite.setImage(img`
                    . . . . . . f f f f . . . . . .
                    . . . . f f e e e e f f . . . .
                    . . . f e e e f f e e e f . . .
                    . . f f f f f 2 2 f f f f f . .
                    . . f f e 2 e 2 2 e 2 e f f . .
                    . . f e 2 f 2 f f 2 f 2 e f . .
                    . . f f f 2 2 e e 2 2 f f f . .
                    . f f e f 2 f e e f 2 f e f f .
                    . f e e f f e e e e f e e e f .
                    . . f e e e e e e e e e e f . .
                    . . . f e e e e e e e e f . . .
                    . . e 4 f f f f f f f f 4 e . .
                    . . 4 d f 2 2 2 2 2 2 f d 4 . .
                    . . 4 4 f 4 4 4 4 4 4 f 4 4 . .
                    . . . . . f f f f f f . . . . .
                    . . . . . f f . . f f . . . . .
                `)
            } else if (playerSprite.vy > 0) {
                playerSprite.setImage(img`
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
                `)
            } else if (playerSprite.vx < 0) {
                playerSprite.setImage(img`
                    . . . . . . . . . . . . . . . .
                    . . . . f f f f f f . . . . . .
                    . . . f 2 f e e e e f f . . . .
                    . . f 2 2 2 f e e e e f f . . .
                    . . f e e e e f f e e e f . . .
                    . f e 2 2 2 2 e e f f f f . . .
                    . f 2 e f f f f 2 2 2 e f . . .
                    . f f f e e e f f f f f f f . .
                    . f e e 4 4 f b e 4 4 e f f . .
                    . . f e d d f 1 4 d 4 e e f . .
                    . . . f d d d e e e e e f . . .
                    . . . f e 4 e d d 4 f . . . . .
                    . . . f 2 2 e d d e f . . . . .
                    . . f f 5 5 f e e f f f . . . .
                    . . f f f f f f f f f f . . . .
                    . . . f f f . . . f f . . . . .
                `)
            } else if (playerSprite.vx > 0) {
                playerSprite.setImage(img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . f f f f f f . . . .
                    . . . . f f e e e e f 2 f . . .
                    . . . f f e e e e f 2 2 2 f . .
                    . . . f e e e f f e e e e f . .
                    . . . f f f f e e 2 2 2 2 e f .
                    . . . f e 2 2 2 f f f f e 2 f .
                    . . f f f f f f f e e e f f f .
                    . . f f e 4 4 e b f 4 4 e e f .
                    . . f e e 4 d 4 1 f d d e f . .
                    . . . f e e e e e d d d f . . .
                    . . . . . f 4 d d e 4 e f . . .
                    . . . . . f e d d e 2 2 f . . .
                    . . . . f f f e e f 5 5 f f . .
                    . . . . f f f f f f f f f f . .
                    . . . . . f f . . . f f f . . .
                `)
            }
        })
    }

    //%block
    //%group="Skill"
    export function openDoor() {
        if (!playerSprite.overlapsWith(doorSprite)) {
            playerSprite.say("There's no door around.")
            // playerSprite.say("我要走到门旁边才能开门")
            return;
        }

        if (sprites.allOfKind(SpriteKind.Key).length != 0 || !keyDropped) {
            game.splash("Pushing the door by brutal force, it collapsed and killed you. ")
            // game.splash("想要暴力推门，结果被门砸死了")
            game.over()
        }

        doorSprite.destroy()
        trapSprite.destroy()

        tiles.setTileAt(tiles.getTileLocation(13, 12), myTiles.openDoorTile)

        let portalSprite = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . 1 1 . . . . . . .
            . . . . . . 1 7 7 1 . . . . . .
            . . . . . 1 7 6 6 7 1 . . . . .
            . . . . 1 7 6 6 6 6 7 1 . . . .
            . . . 6 6 6 6 f f 6 6 7 6 . . .
            . . . . 7 6 f f f f 6 7 . . . .
            . . . 6 6 6 f f f f 6 6 . . . .
            . . . 6 7 6 f f f f 6 6 . . . .
            . . . . 6 6 f f f f 6 6 . . . .
            . . . 6 6 6 6 f f 6 6 7 6 . . .
            . . 6 . 7 7 6 6 6 6 6 6 . . . .
            . . . . . 6 7 6 6 7 7 . . . . .
            . . . . . . 6 6 7 6 . . . . . .
            . . . . . . 6 7 7 6 6 . . . . .
            . . . . . . . . . . . . . . . .
        `, SPRITE_KIND_PORTAL)
        tiles.placeOnTile(portalSprite, tiles.getTileLocation(13, 11))

        sprites.onOverlap(SpriteKind.Player, SPRITE_KIND_PORTAL, (sprite, otherSprite) => {
            tiles.placeOnTile(sprite, tiles.getTileLocation(7, 8))
            otherSprite.destroy()
            prepareLevel2()
        })
    }

    let candidate: number[]
    let correctRecipe: Recipe

    function prepareRandomIngredients() {
        candidate = [0, 1, 2]
        let outIngredient = Math.pickRandom([0, 1, 2])

        if (outIngredient == 0) {
            correctRecipe = Recipe.TomatoRice
        } else if (outIngredient == 1) {
            correctRecipe = Recipe.TomatoEgg
        } else {
            correctRecipe = Recipe.FriedRice
        }

        candidate.removeAt(outIngredient)


        if (Math.percentChance(50)) {
            candidate = [candidate[1], candidate[0]]
        }
    }
    
    // extract method
    function dropTomato() {
        let tomatoSprite = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . 6 6 . . . . .
            . . . . . . . . 6 6 6 . . . . .
            . . . . . . . . 6 6 . . . . . .
            . . . . . 2 2 2 6 7 2 2 . . . .
            . . . 2 2 1 2 6 6 6 2 2 2 2 . .
            . . 2 1 1 2 2 2 2 2 2 2 2 2 2 .
            . . 2 2 2 2 2 2 2 2 2 2 2 2 2 .
            . . 2 2 2 2 2 2 2 2 2 2 2 2 2 .
            . . 2 2 2 2 2 2 2 2 2 2 2 2 2 .
            . . 2 2 2 2 2 2 2 2 2 f f 2 2 .
            . . . 2 2 2 2 2 2 2 f f 2 2 . .
            . . . . . 2 2 2 2 2 2 2 . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Tomato)
        tomatoSprite.x = playerSprite.x
        tomatoSprite.y = playerSprite.y - 20

        tomatoSprite.onDestroyed(function () {
            ingredientsAcquired += 1
        })
    }

    function dropEgg() {
        let eggSprite = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 1 1 1 1 1 1 1 . . . .
            . . . . 1 1 d d 1 1 1 1 1 . . .
            . . . 1 1 d d 1 1 1 1 1 1 1 . .
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
            . . . 1 1 1 1 1 1 1 1 1 1 1 . .
            . . . . 1 1 1 1 1 1 1 1 1 . . .
            . . . . . 1 1 1 1 1 1 1 . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Egg)
        eggSprite.x = playerSprite.x
        eggSprite.y = playerSprite.y - 20

        eggSprite.onDestroyed(function () {
            ingredientsAcquired += 1
        })
    }

    function dropRice() {
        let riceSprite = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . b 1 b 1 b 1 1 1 b 1 b 1 1 1 .
            . d b 1 1 1 1 1 1 1 1 1 1 1 d .
            . d d d d d d d d d d d d d d .
            . d d d d d d d d d d d d d d .
            . d d d d d d d d d d d d d d .
            . d d d d d d d d d d d d d d .
            . d d d d d d d d d d d d d d .
            . d b b b d b d b b d b b d d .
            . d b d b d b d b d d b d d d .
            . d b b d d b d b d d b b d d .
            . d b d b d b d b d d b d d d .
            . d b d b d b d b b d b b d d .
            . d d d d d d d d d d d d d d .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Rice)
        riceSprite.x = playerSprite.x
        riceSprite.y = playerSprite.y - 20

        riceSprite.onDestroyed(function () {
            ingredientsAcquired += 1
        })
    }

    //%block
    //%group="Skill"
    export function openChest() {
        if (!playerSprite.tileKindAt(TileDirection.Center, sprites.dungeon.chestClosed)) {
            playerSprite.say("There's no chest nearby.", 1000)
            // playerSprite.say('我要在宝箱附近才能开箱', 1000)
            return
        }

        if (playerSprite.x < 50) {
            tiles.setTileAt(tiles.getTileLocation(1, 3), sprites.dungeon.chestOpen)
        } else {
            tiles.setTileAt(tiles.getTileLocation(4, 3), sprites.dungeon.chestOpen)
        }
        let ingredientIndex = candidate[0]
        candidate.removeAt(0)
        if (ingredientIndex == 0) {
            dropEgg()
        } else if (ingredientIndex == 1) {
            dropRice()
        } else {
            dropTomato()
        }
    }

    function prepareLevel3() {
        waterPowerFountainSprite.destroy()

        prepareRandomIngredients()

        tiles.placeOnTile(playerSprite, tiles.getTileLocation(3, 2))
        playerSprite.say("There's campfire for cooking, let me find some ingredients.", 2000)
        // playerSprite.say('这里有火堆，可以做饭, 找找看附近有没有材料', 2000)

    }


    function prepareLevel2() {
        let glowingTorches = 4
        scene.onHitWall(SPRITE_KIND_WATER_BALL, function (sprite: Sprite) {
            if (sprite.isHittingTile(CollisionDirection.Right)
                && sprite.tileKindAt(TileDirection.Right, sprites.dungeon.greenOuterEast2)) {
                tiles.setTileAt(tiles.getTileLocation(10, 10), sprites.dungeon.greenOuterEast0)
                glowingTorches -= 1
            } else if (sprite.isHittingTile(CollisionDirection.Left)
                && sprite.tileKindAt(TileDirection.Left, sprites.dungeon.greenOuterWest2)) {
                tiles.setTileAt(tiles.getTileLocation(4, 6), sprites.dungeon.greenOuterWest1)
                glowingTorches -= 1
            } else if (sprite.isHittingTile(CollisionDirection.Top)
                && sprite.tileKindAt(TileDirection.Top, sprites.dungeon.greenOuterNorth2)) {
                tiles.setTileAt(tiles.getTileLocation(9, 5), sprites.dungeon.greenOuterNorth0)
                glowingTorches -= 1
            } else if (sprite.isHittingTile(CollisionDirection.Bottom)
                && sprite.tileKindAt(TileDirection.Bottom, sprites.dungeon.greenOuterSouth2)) {
                tiles.setTileAt(tiles.getTileLocation(5, 11), sprites.dungeon.greenOuterSouth0)
                glowingTorches -= 1
            }
        })

        prepareWaterEnergy()
        prepareWaterFountain()

        game.onUpdate(function () {
            if (glowingTorches == 0) {
                prepareLevel3()
                // 暴力的去掉这个重复执行的事件
                glowingTorches = -1
            }
        })

        let lastMovingTimeStamp = game.runtime()
        game.onUpdate(function () {
            if (playerSprite.vx != 0 || playerSprite.vy != 0) {
                moving = true;
                lastMovingTimeStamp = game.runtime()
            } else if (game.runtime() - lastMovingTimeStamp > 500) {
                moving = false
            }
        })
    }

    function prepareWaterEnergy() {
        let statusBarSprite = statusbars.create(4, 20, StatusBarKind.Energy)
        statusBarSprite.max = 3

        statusBarSprite.attachToSprite(playerSprite)
    }

    let waterPowerFountainSprite :Sprite = null
    function prepareWaterFountain() {
        waterPowerFountainSprite = sprites.create(img`
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b
            1 d d d 8 8 8 8 8 8 8 8 d d d b
            1 d d 8 8 9 9 9 9 9 9 8 8 d d b
            1 d 8 8 9 1 1 9 9 9 9 9 8 8 d b
            1 8 8 9 1 1 9 9 9 9 9 9 9 8 8 b
            1 8 9 1 1 9 9 9 9 9 1 9 9 9 8 b
            1 8 9 1 9 9 9 9 9 9 9 9 9 9 8 b
            1 8 9 9 9 9 9 9 9 9 9 9 9 9 8 b
            1 8 9 9 9 9 9 9 9 9 9 9 9 9 8 b
            1 8 9 9 9 1 9 9 9 9 1 9 9 9 8 b
            1 8 9 9 9 9 9 9 1 9 9 9 9 9 8 b
            1 8 8 9 9 9 9 9 9 9 9 9 9 8 8 b
            1 d 8 8 9 9 1 9 9 1 9 9 8 8 d b
            1 d d 8 8 9 9 9 9 9 9 8 8 d d b
            1 d d d 8 8 8 8 8 8 8 8 d d d b
            b b b b b b b b b b b b b b b b
        `, SPRITE_KIND_WATER_FOUNTAIN)
        tiles.placeOnTile(waterPowerFountainSprite, tiles.getTileLocation(7, 8))

        sprites.onOverlap(SpriteKind.Player, SPRITE_KIND_WATER_FOUNTAIN, function (sprite: Sprite, otherSprite: Sprite) {
            let statusBarSprite = statusbars.getStatusBarAttachedTo(StatusBarKind.Energy, sprite)
            statusBarSprite.value += 1
            if (statusBarSprite.value > 3) {
                statusBarSprite.value = 3
            }
            pause(1000)
        })
    }

    let goddessSprite :Sprite =null

    function prepareLevel4() {
        tiles.setTilemap(tilemap`level`)
        let prophetSprite = sprites.create(img`
            . . . . f f f f . . . .
            . . f f e e e e f f . .
            . f f e e e e e e f f .
            f f f f 4 e e e f f f f
            f f f 4 4 4 e e f f f f
            f f f 4 4 4 4 e e f f f
            f 4 e 4 4 4 4 4 4 e 4 f
            f 4 4 f f 4 4 f f 4 4 f
            f e 4 d d d d d d 4 e f
            . f e d d b b d d e f .
            . f f e 4 4 4 4 e f f .
            e 4 f b 1 1 1 1 b f 4 e
            4 d f 1 1 1 1 1 1 f d 4
            4 4 f 6 6 6 6 6 6 f 4 4
            . . . f f f f f f . . .
            . . . f f . . f f . . .
        `, SPRITE_KIND_PROPHET)

        tiles.placeOnTile(prophetSprite, tiles.getTileLocation(6, 13))
        sprites.onOverlap(SpriteKind.Player, SPRITE_KIND_PROPHET, function(sprite: Sprite, otherSprite: Sprite) {
            game.splash('All mighty player')
            game.splash('Give your answer to the alter')
            game.splash('How many rats are there')
            game.splash('The magic rats absorb life from nearby living creature,')
            game.splash('Even the mighty hero in ghost mode can not stand a sec.')
            otherSprite.setFlag(SpriteFlag.Ghost, true)
        })

        goddessSprite = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . 1 1 1 . . . . . .
            . . . . . . 1 3 3 3 . . . . . .
            . . . . . . 1 3 1 1 . . . . . .
            . . . . . . 3 1 1 1 . . . . . .
            . . . . . . 3 b 1 3 1 . . . . .
            . . . . . . b 3 b 3 1 1 . . . .
            . . . . . . 3 1 3 1 3 1 . . . .
            . . . . . b 3 1 3 1 b 1 . . . .
            . . . . . b 3 3 3 1 1 3 . . . .
            . . . . . b c 3 1 3 1 1 . . . .
            . . . . 3 b c 3 1 1 3 1 . . . .
            . . . . 3 b c 1 1 1 1 . . . . .
            . . . . 3 c 3 1 1 1 1 . . . . .
            . . . 3 3 c 1 1 1 1 1 3 . . . .
            . . . 1 b 3 1 1 1 1 1 1 . . . .
            . . . . . 3 1 1 1 1 1 1 . . . .
            . . . . . 3 1 1 3 1 1 1 . . . .
            . . . . . 3 1 1 3 1 1 1 3 . . .
            . b b b b 3 1 1 3 1 1 1 1 b b .
            b 1 1 1 3 3 1 3 3 1 1 1 1 3 1 b
            3 1 1 3 1 3 1 3 3 1 1 3 1 3 1 3
            3 1 1 3 1 1 1 3 3 1 1 3 3 3 1 3
            3 1 1 1 3 1 1 3 3 1 1 3 3 1 1 3
            3 1 1 1 1 3 3 3 3 3 3 3 3 1 1 3
            3 1 1 1 1 1 3 3 3 3 3 1 1 1 1 3
            b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b
            3 b b 1 1 1 1 1 1 1 1 1 1 b b 3
            1 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1
            1 3 3 3 3 b b b b b b 3 3 3 3 1
            b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b
            c b b b b b b b b b b b b b b c
        `, SpriteKind.Goddess)        
        tiles.placeOnTile(goddessSprite, tiles.getTileLocation(9, 13))
        goddessSprite.y -= 8

        let level4LeftDoorSprite = sprites.create(img`
            c c c c c c c c c c c c c c c c
            c a a a a a a a a a a a a a c c
            c a c c c c c c c c c c c c c c
            c a c c c c c c c c c c c c c c
            c a c c c c c c c c c c c c c c
            c a c c c a a a a a a a a a c c
            c a c c c a c c c c a c c c c c
            c a c c c a c a a c a c a a a a
            c a c c c a c a a c a c a a a a
            c a c c c a c a a c a c a a a a
            c a c c c a c c c c a c c c c c
            c a c c c a a a a a a a a a c c
            c a c c c c c c c c c c c c c c
            c a c c c c c c c c c c c c c c
            c a c c c c c c c c c c c c c c
            c a a a a a a a a a a a a a c c
        `, SPRITE_KIND_RAT_ROOM_DOOR)
        tiles.placeOnTile(level4LeftDoorSprite, tiles.getTileLocation(7, 12))
        let level4RightDoorSprite = sprites.create(img`
            c c c c c c c c c c c c c c c c
            c a a a a a a a a a a a a a a c
            c c c c c c c c c c c c c c a c
            c c c c c c c c c c c c c c a c
            c c c c c c c c c c c c c c a c
            c a a a a a a a a a a c c c a c
            c c c c c a c c c c a c c c a c
            a a a a c a c a a c a c c c a c
            a a a a c a c a a c a c c c a c
            a a a a c a c a a c a c c c a c
            c c c c c a c c c c a c c c a c
            c a a a a a a a a a a c c c a c
            c c c c c c c c c c c c c c a c
            c c c c c c c c c c c c c c a c
            c c c c c c c c c c c c c c a c
            c a a a a a a a a a a a a a a c
        `, SPRITE_KIND_RAT_ROOM_DOOR)
        tiles.placeOnTile(level4RightDoorSprite, tiles.getTileLocation(8, 12))

        sprites.onOverlap(SpriteKind.Player, SPRITE_KIND_RAT_ROOM_DOOR, function(sprite: Sprite, otherSprite: Sprite) {
            if (!ratNumberAnswer) {
                game.splash("Give your answer to the goddess,")
                game.splash("Before you can face the challenge,")
                game.splash("The correct answer give you nothing,")
                game.splash("The incorrect answer give you death.")
                sprite.y += 2
            } else {
                let doors = sprites.allOfKind(SPRITE_KIND_RAT_ROOM_DOOR)
                for (let doorSprite of doors) {
                    doorSprite.destroy()
                }
                checkAnswer()
            }
        })

        prepareRandomNumberRats()

        tiles.placeOnTile(playerSprite, tiles.getTileLocation(8, 15))
    }

    function revealRatRoom() {
        for (let location of tiles.getTilesByType(myTiles.allBlack)) {
            tiles.setTileAt(location, sprites.dungeon.floorDark2)
        }
        for (let ratSprite of sprites.allOfKind(SpriteKind.Rat)) {
            ratSprite.setImage(spriteImages.ratImage)
        }
        for (let ratSprite of sprites.allOfKind(SpriteKind.Rat)) {
            scene.cameraFollowSprite(ratSprite)
            pause(500)
        }
    }


    //%block
    //%group="Dialog"
    export function giveAnswer(numberOfRat:number) {
        ratNumberAnswer = numberOfRat
        game.splash("The goddess writes down your answer, " + numberOfRat)
        goddessSprite.destroy()
    }

    function createMagicRat(speed:number) {
         let ratSprite = sprites.create(spriteImages.ratImage, SpriteKind.Rat);
                        tiles.placeOnRandomTile(ratSprite, sprites.dungeon.floorDark2)
                        ratSprite.follow(playerSprite, speed)
    }

    function startRatFight(speed:number) {
        let inRatFight = true;
        let reviveCounter = 0;
        game.onUpdate(function(){ 
            if(!inRatFight) return;

            let allRatSprites = sprites.allOfKind(SpriteKind.Rat)
            if (allRatSprites.length == 0) {
                inRatFight = false;
                
                if (speed == 50) {
                    game.splash("The magic rats sense great power inside you, becoming frenzied.")
                    for (let i  = 0; i <ratNumber; i++) {
                        createMagicRat(100)
                    }
                    startRatFight(100)
                } else {
                    game.over(true)
                }

            } else  
                if (ratNumber > allRatSprites.length) {
                    reviveCounter += 1
                    if (reviveCounter % 5 == 0) {
                        game.splash('These magic rats are reviving their fallen companion(s).')
                    }
                
                    for (let i = ratNumberAnswer - allRatSprites.length; i > 0; i--) {
                        createMagicRat(speed)
                    }
            }


            for (let ratSprite of sprites.allOfKind(SpriteKind.Rat)) {
                if (Math.pow(ratSprite.x - playerSprite.x, 2) + Math.pow(ratSprite.y - playerSprite.y, 2) < 64) {
                    info.changeLifeBy(-1)
                }
            }
        })

        for (let ratSprite of sprites.allOfKind(SpriteKind.Rat)) {
            ratSprite.follow(playerSprite, speed)
        }
    }

    function checkAnswer() {

        controller.moveSprite(playerSprite, 0, 0)
        revealRatRoom()

        if(ratNumberAnswer == ratNumber) {
            game.splash('You have proved your inner power in sensing,')
            game.splash('Now once again use your inner power to fight them.')
            controller.moveSprite(playerSprite)
            scene.cameraFollowSprite(playerSprite)

            startRatFight(50)
        } else {
            game.splash("There's " + ratNumber + " rats,")
            game.splash("The journey afterwards is too dangerous for someone without inner power." )
            game.over()
        }
    }

    let ratNumber : number = NaN
    let ratNumberAnswer : number = NaN

    function prepareRandomNumberRats() {
        ratNumber = randint(5, 10)
        for (let i = 0; i < ratNumber; i++) {
            let ratSprite = sprites.create(spriteImages.ratImageHidden, SpriteKind.Rat)
           
        tiles.placeOnRandomTile(ratSprite, myTiles.allBlack)
        }
    }

    namespace spriteImages {
        export const ratImage = img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . f f . . . . . . . . .
                . . . . . f f . . . . . . . f .
                . . . . f f . . . . . . . f f .
                . . . f f f f . . . . . f f . .
                . . . f 5 f f f . . f f f . . .
                . . f f f f f f f f f f f . . .
                . . . . f f f f f f f f . . . .
                . . . . . f 1 f f f 1 1 1 . . .
                . . . . 1 1 . 1 . 1 1 . 1 . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
            `

        export const ratImageHidden = img`
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
        `
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
        export const openDoorTile = img`
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
        //% blockIdentity=images._tile
        export const tile2 = img`
            b d d d d d d d d d d d d d d c
            d b b b b b b b b b b b b b b c
            d b b b b e 5 5 b 5 b b b b b c
            d b b 5 b b e 5 5 2 2 b b b b c
            d b b b 5 b e 5 2 2 b b b b b c
            d b b b b 5 b 2 2 b b 5 b b b c
            d b b b b e 2 2 5 b 5 b b b b c
            d b b b b 2 e 2 2 2 b b b b b c
            d b b b b b 2 e e 5 b b b b b c
            d b b b 2 2 2 e e e e b b b b c
            d b b d 2 e e e f e e e d b b c
            d b d f f e f e f e f e f d b c
            d b d d e f f e f f e f d d b c
            d b b d d d f f f f d d d b b c
            d b b b b d d d d d d b b b b c
            b c c c c c c c c c c c c c c a
        `

        export const allBlack = img`
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
            f f f f f f f f f f f f f f f f
        `
    }
}

namespace SpriteKind {
    //% isKind
    export const Key = SpriteKind.create();
    //% isKind
    export const Door = SpriteKind.create();
    //% isKind
    export const Egg = SpriteKind.create();
    //% isKind
    export const Rice = SpriteKind.create();
    //% isKind
    export const Tomato = SpriteKind.create();
    //% isKind
    export const Rat = SpriteKind.create();
    //% isKind
    export const Goddess = SpriteKind.create();
}