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

  update() {
    this.navigateToTarget()
    this.draw()
  }
}
