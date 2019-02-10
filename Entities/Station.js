class Station extends Entity {
  constructor(x, y, s, name) {
    super(x, y)
    this.size = s
    this.name = name
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
      this.dockShip()
    } else {
      this.undockShip()
    }
  }

  dockShip() {
    if (!shipWasDocked) {
      shipWasDocked = true
      menuEnabled = true
      shipX = this.x + this.size / 2
      shipY = this.y + this.size / 2
      targetX = shipX
      targetY = shipY
    }

    currentStation = this.name
  }

  undockShip() {
    shipWasDocked = false
    currentStation = 'none'
  }

  update() {
    this.checkShipContact()
    this.draw()
  }
}
