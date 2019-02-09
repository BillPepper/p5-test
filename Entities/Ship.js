class ship extends Entity {
  constructor(x, y, s) {
    super(x, y)
    speed = s
  }

  draw() {
    ellipse(shipX, shipY, 20, 20)
  }

  navigateToTarget() {
    if (!menuEnabled) {
      if (shipX < targetX) {
        shipX += speed
      }
      if (shipX > targetX) {
        shipX -= speed
      }
      if (shipY < targetY) {
        shipY += speed
      }
      if (shipY > targetY) {
        shipY -= speed
      }
    }
  }

  update() {
    this.navigateToTarget()
    this.draw()
  }
}
