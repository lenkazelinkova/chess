import * as PIXI from "pixi.js"
import Board from "./board"

const el = document.getElementById("app")

const N_FIELDS = 8
const FIELD_SIZE = 60
const BOARD_SIZE = N_FIELDS * FIELD_SIZE

const app = new PIXI.Application()
await app.init({ width: BOARD_SIZE, height: BOARD_SIZE, background: "white" })
el.appendChild(app.canvas)

const board = new Board(N_FIELDS, FIELD_SIZE)
app.stage.addChild(board.render())

