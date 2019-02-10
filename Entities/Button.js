class Button {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.h = h
    this.w = w
  }
  setup() {}

  draw() {
    if (
      mouseX >= this.x &&
      mouseX < this.x + this.w &&
      mouseY >= this.y &&
      mouseY < this.y + this.h
    ) {
      fill(0, 100, 150)
      rect(this.x, this.y, this.w, this.h)
    } else {
      fill(200)
      rect(this.x, this.y, this.w, this.h)
    }
  }
}
