resX = 1280
resY = 768

shipX = 20
shipY = 20
speed = 10
shipItems = ['Energy Cells', 'Silicon Wavers', 'Duct Tape']
stationItems = ['Meat', 'Wheat', 'Starch', 'Space Potatoes', 'Salt', 'Wine']

targetX = 0
targetY = 0

menuEnabled = false
shipWasDocked = false
currentStation = ''
entities = []

let img
function preload() {
  img = loadImage('assets/s.png')
  stationImage = loadImage('assets/station.png')
}

function setup() {
  createCanvas(resX, resY)
  ship = new ship(20, 20, 1)
  entities.push(ship)
  stat = new Station(250, 250, 50, 'Nucleos Alpha')
  entities.push(stat)
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
  if (!menuEnabled) {
    setTargetPosition(mouseX, mouseY)
  }
}

function setTargetPosition(x, y) {
  targetX = Math.round(x)
  targetY = Math.round(y)
}

//debug function
function renderCursorPos() {
  sz = 10
  textSize(sz)
  text(Math.round(mouseX), 10, 20)
  fill(255, 255, 255)

  textSize(sz)
  text(Math.round(mouseY), 10, 45)
  fill(255, 255, 255)

  textSize(sz)
  text(targetX, 10, 70)
  fill(255, 255, 255)

  textSize(sz)
  text(targetY, 10, 95)
  fill(255, 255, 255)
}
