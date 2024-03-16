import { Graphics } from "pixi.js"

class Field {

    constructor(isDark, column, row, size) {
        this.isDark = isDark
        this.column = column
        this.row = row
        this.size = size
    }
    
    
    render() {
        const result = new Graphics()
            .rect(this.column * this.size, this.row * this.size, this.size, this.size)
            .fill(this.isDark ? "black" : "white")
        
        result.interactive = true
        result.on("click", () => console.log("Clicked on " + this.row + " " + this.column))
        return result
    }
}

export default Field