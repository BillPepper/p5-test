class Station extends Entity {
  constructor(x, y, s) {
    super(x, y)
    this.size = s
  }

  draw() {
    // rect(this.x, this.y, this.size, this.size)
    image(stationImage, this.x, this.y, this.size, this.size)
  }

  checkShipContact() {
    if (
      shipY >= this.y &&
      shipY < this.y + this.size &&
      shipX >= this.x &&
      shipX < this.x + this.size
    ) {
      if (!shipWasDocked) {
        shipWasDocked = true
        menuEnabled = true
      }
    } else {
      shipWasDocked = false
    }
  }

  update() {
    this.checkShipContact()
    this.draw()
  }
}
