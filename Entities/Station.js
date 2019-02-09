class Station extends Entity {
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
