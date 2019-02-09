resX = 500
resY = 500

posX = 20
posY = 20
speed = 10

targetX = 0
targetY = 0

menuEnabled = false

let img
function preload() {
  img = loadImage('assets/g.png')
}

function setup() {
  createCanvas(resX, resY)
  stat = new station(30, 30, 40)
  ship = new ship(20, 20, 10)
  ui = new ui()
}

function draw() {
  background(0)
  drawBackground()
  renderCursorPos()
  ship.navigateToTarget()
  ellipse(posX, posY, 20, 20)
  stat.update()
  ui.update()
}

function drawBackground() {
  size = 10
  amount = 50

  for (let j = 0; j < amount; j++) {
    for (let i = 0; i < amount; i++) {
      image(img, size * i, j * size, size, size)
    }
  }
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

class Entity {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

class station extends Entity {
  constructor(x, y, s) {
    super(x, y)
    this.size = s
  }

  draw() {
    rect(this.x, this.y, this.size, this.size)
  }

  checkShipContact() {
    if (posY >= this.y && posY < this.y + this.size) {
      if (!menuEnabled) {
        menuEnabled = !menuEnabled
      }
    }
  }

  update() {
    this.checkShipContact()
    this.draw()
  }
}

class ship extends Entity {
  constructor(x, y, s) {
    super(x, y)
    speed = s
  }

  navigateToTarget() {
    if (!menuEnabled) {
      if (posX < targetX) {
        posX += speed
      }
      if (posX > targetX) {
        posX -= speed
      }
      if (posY < targetY) {
        posY += speed
      }
      if (posY > targetY) {
        posY -= speed
      }
    }
  }
}

class ui {
  renderMenu() {
    if (menuEnabled === true) {
      rect(20, 20, resX - 40, resY - 40)
    }
  }

  update() {
    this.renderMenu()
    if (keyIsDown(ESCAPE)) {
      menuEnabled = false
      console.log('esc')
    }
  }
}
