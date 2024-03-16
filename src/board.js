import { Graphics } from "pixi.js"
import Field from "./field"

class Board {
    fields = []

    constructor(size, fieldSize) {
        this.size = size
        this.fieldSize = fieldSize

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                this.fields.push(new Field((i + j) % 2 === 1, i, j, fieldSize))
            }
        }
    }

    render() {
        const root = new Graphics()
            .rect(0, 0, this.size * this.fieldSize, this.size * this.fieldSize)
            .fill("black")

        for (const field of this.fields) {
            root.addChild(field.render())
        }

        return root
    }
}

export default Board