class Player {
  constructor() {
    this.size = 200;
    this.x = 50;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 0.5;
  }

  show() {
    image(playerImg, this.x, this.y, this.size, this.size);
  }

  jump() {
    if (this.y == height - this.size) {
      this.velocityY = -20;
    }
  }

  move() {
    this.velocityY = this.velocityY + this.gravity;
    this.y = this.y + this.velocityY;
    this.y = constrain(this.y, 0, height - this.size);
  }

  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 60,
      this.size - 60,
      currentObs.x,
      currentObs.y,
      currentObs.size - 20,
      currentObs.size - 20
    );
    return isColliding;
  }
}
