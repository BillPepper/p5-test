resX = 500
resY = 500

shipX = 20
shipY = 20
speed = 10

targetX = 0
targetY = 0

menuEnabled = false
shipWasDocked = false
entities = []

let img
function preload() {
  img = loadImage('assets/s.png')
}

function setup() {
  createCanvas(resX, resY)
  stat = new Station(250, 250, 40)
  entities.push(stat)
  ship = new ship(20, 20, 10)
  entities.push(ship)
  ui = new ui()
  entities.push(ui)
}

function draw() {
  background(0)
  drawBackground()
  renderCursorPos()

  entities.forEach(entity => {
    entity.update()
  })
}

function drawBackground() {
  image(img, 0, 0, 1920, 1080)

  // for tiles
  // size = 10
  // amount = 50

  // for (let j = 0; j < amount; j++) {
  //   for (let i = 0; i < amount; i++) {
  //     image(img, size * i, j * size, size, size)
  //   }
  // }
}

function mouseClicked(e) {
  setTargetPosition(mouseX, mouseY)
}

function setTargetPosition(x, y) {
  targetX = Math.round(x)
  targetY = Math.round(y)
}

function renderCursorPos() {
  sz = 10
  textSize(sz)
  text(Math.round(mouseX), 450, 20)
  fill(255, 255, 255)

  textSize(sz)
  text(Math.round(mouseY), 450, 45)
  fill(255, 255, 255)

  textSize(sz)
  text(targetX, 450, 70)
  fill(255, 255, 255)

  textSize(sz)
  text(targetY, 450, 95)
  fill(255, 255, 255)
}
