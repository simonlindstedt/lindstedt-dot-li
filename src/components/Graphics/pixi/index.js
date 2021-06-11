import { Application, Container, filters } from "pixi.js";
import Ball from "./Ball";

export default class Pixi {
  constructor(parent) {
    this.parent = parent;
    this.width = this.parent.clientWidth;
    this.height = this.parent.clientHeight;
    this.app = new Application({
      width: this.width,
      height: this.height,
      antialias: true,
      autoDensity: true,
      resolution: window.devicePixelRatio,
      backgroundColor: 0x000000,
    });
    this.circlesArray = [];
    this.circlesContainer = new Container();
    this.setup();
  }

  setup() {
    window.addEventListener("resize", () => {
      this.app.renderer.resize(
        this.parent.clientWidth,
        this.parent.clientHeight
      );
      this.height = this.parent.clientHeight;
      this.width = this.parent.clientWidth;
    });

    let amount = Math.floor(this.width / 100);

    for (let i = 0; i < amount; i++) {
      let position = {
        x: Math.floor(Math.random() * this.width),
        y: Math.floor(Math.random() * this.height),
      };

      let size = Math.floor(Math.random() * (this.height / 4) + 50);
      let color = "0xff7f50";

      switch (i % 3) {
        case 2:
          color = "0xff0000";
          break;
      }

      this.circlesArray.push(new Ball(position, size, color));
      this.circlesContainer.addChild(this.circlesArray[i].graphic);
    }
  }

  update() {
    this.circlesArray.forEach((circle) => {
      if (
        circle.position.x > this.width + circle.radius ||
        circle.position.x < 0 - circle.radius
      ) {
        circle.direction.x *= -1;
      }
      if (
        circle.position.y > this.height + circle.radius ||
        circle.position.y < 0 - circle.radius
      ) {
        circle.direction.y *= -1;
      }

      circle.draw();
    });
  }

  start() {
    this.app.stage.addChild(this.circlesContainer);
    this.app.stage.filters = [new filters.BlurFilter(35, 10)];
    this.parent.appendChild(this.app.view);
    this.app.ticker.add(() => {
      this.update();
    });
  }
}
