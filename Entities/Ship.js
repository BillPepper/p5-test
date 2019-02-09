class ship extends Entity {
  constructor(x, y, s) {
    super(x, y)
    speed = s
  }

  draw() {
    ellipse(posX, posY, 20, 20)
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

  update() {
    this.navigateToTarget()
    this.draw()
  }
}
