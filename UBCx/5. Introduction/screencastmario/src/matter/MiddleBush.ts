import {Decoration} from './Decoration';
import {Level} from '../engine/Level';
import {
    basepath,
    Direction,
    MarioState,
    SizeState,
    GroundBlocking,
    CollisionType,
    DeathMode,
    MushroomMode,
    images,
    setup
} from '../engine/constants'

export class MiddleBush extends Decoration {
    constructor(x: number, y: number, level: Level) {
        super(x, y, level);
        this.setImage(images.objects, 348, 928);
    }
}