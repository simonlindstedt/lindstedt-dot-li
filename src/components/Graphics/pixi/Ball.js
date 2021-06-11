import { Graphics } from "pixi.js";

export default class Ball {
  constructor(position, radius, color) {
    this.graphic = new Graphics();
    this.position = position;
    this.radius = radius;
    this.color = color;
    this.direction = {
      x: 0.5 ? Math.random() * 1 : Math.random() * -1,
      y: 0.5 ? Math.random() * 1 : Math.random() * -1,
    };
  }

  draw() {
    this.graphic.clear();
    this.graphic.beginFill(this.color, 0.2);
    this.graphic.drawCircle(
      (this.position.x += this.direction.x),
      (this.position.y += this.direction.y),
      this.radius
    );
  }
}
