
export class ChartMatrix {
  xPos = 0;
  yPos = 0;
  xScale = 1;
  yScale = 1;
  rotation = 0;

  translate(x: number, y: number): this {
    this.xPos = x;
    this.yPos = y;
    return this;
  }

  rotate(degrees: number): this {
    this.rotation = degrees;
    return this;
  }

  scale(x: number, y: number): this {
    this.xScale = x;
    this.yScale = y;
    return this;
  }

  xMirror(): this {
    return this.scale(-this.xScale, this.yScale);
  }

  yMirror(): this {
    return this.scale(this.xScale, -this.yScale);
  }

  toTransformString(): string {
    const transform: string[] = [];
    if (this.xPos || this.yPos) {
      transform.push(`translate(${this.xPos}, ${this.yPos})`);
    }
    if (this.rotate) {
      transform.push(`rotate(${this.rotation})`);
    }
    if (this.xScale !== 1 || this.yScale !== 1) {
      transform.push(`scale(${this.xScale}, ${this.yScale})`);
    }
    return transform.join(' ');
  }

}

export function matrix(): ChartMatrix {
  return new ChartMatrix();
}
