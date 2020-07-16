//% weight=100 color=#6699CC icon="\uf140" block="Cubicbird-Dungeon"
//% groups='["Game", "Skill"]'
namespace cbdungeon {
    let sprite :Sprite = null;

    // %blocka
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
