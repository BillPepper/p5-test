class ui {
  renderMenu() {
    if (menuEnabled === true) {
      // background
      fill(20)
      noStroke()
      rect(20, 20, resX - 40, resY - 40)

      // border
      stroke(200)
      noFill()
      rect(40, 90, resX - 80, resY - 130)

      // seperator line
      stroke(200)
      line(resX / 2, 120, resX / 2, resY - 70)

      // text
      fill(200)
      noStroke()
      textSize(20)
      text('Trade Menu', 40, 50)

      textSize(15)
      text('Your Items', 40, 80)
      textSize(15)
      text('Station Items', resX / 2, 80)

      this.renderPlayerItems()
      this.renderStationItems()
    }
  }

  renderPlayerItems() {
    const items = shipItems

    items.forEach(item => {
      text(item, 50, 115 + 25 * items.indexOf(item))
    })
  }

  renderStationItems() {
    const items = stationItems

    items.forEach(item => {
      text(item, resX / 2 + 10, 115 + 25 * items.indexOf(item))
    })
  }

  update() {
    this.renderMenu()
    if (keyIsDown(ESCAPE)) {
      menuEnabled = false
    }
  }
}
