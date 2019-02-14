class ship extends Entity {
  constructor(x, y, s) {
    super(x, y)
    this.speed = s
  }

  draw() {
    ellipse(shipX, shipY, 10, 10)
  }

  navigateToTarget() {
    if (!menuEnabled) {
      if (shipX < targetX) {
        shipX += this.speed
      }
      if (shipX > targetX) {
        shipX -= this.speed
      }
      if (shipY < targetY) {
        shipY += this.speed
      }
      if (shipY > targetY) {
        shipY -= this.speed
      }
    }
  }

  navigateToTargetNew() {
    fill(255)
    background(0)
    percentage += shipSpeed
    if (percentage < 1.0) {
      shipX = beginX + percentage * distX
      shipY = beginY + pow(percentage, exponent) * distY
    }
    // fill(255);
    ellipse(shipX, shipY, 20, 20)
  }

  update() {
    this.navigateToTargetNew()
    // this.draw()
  }
}
