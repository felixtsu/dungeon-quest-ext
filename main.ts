//% weight=99 color="#6d5ba5" icon="\uf004"
//% groups='["Game", "Skill"]'
namespace cbdungeon {
    let sprite :Sprite = null;

    // %block
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
        `, sprite, 50, 0)
    }
}
