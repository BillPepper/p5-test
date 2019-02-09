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
