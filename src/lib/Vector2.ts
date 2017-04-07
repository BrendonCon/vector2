
export default class Vector2 {

  private _x: number;

  private _y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  public get x(): number {
    return this._x;
  }

  public set x(value: number) {
    this._x = value;
  }

  public get y(): number {
    return this._y;
  }

  public set y(value: number) {
    this._y = value;
  }

  public add(v: Vector2): void {
    this.x += v.x;
    this.y += v.y;
  }

  public sub(v: Vector2): void {
    this.x -= v.x;
    this.y -= v.y;
  }

  public mult(scalar: number): void {
    this.x *= scalar;
    this.y *= scalar;
  }

  public div(scalar: number): void {
    this.x /= scalar;
    this.y /= scalar;
  }

  public mag(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public magSq(): number {
    return this.x * this.x + this.y * this.y;
  }

  public dist(v: Vector2): number {
    let distX: number = Math.pow(v.x - this.x, 2);
    let distY: number = Math.pow(v.y - this.y, 2);
    return Math.sqrt(distX + distY);
  }

  public setAngle(angle: number): void {
    let mag: number = this.mag();
    this.x = Math.cos(angle) * mag;
    this.y = Math.sin(angle) * mag;
  }

  public getAngle(): number {
    return Math.atan2(this.y, this.x);
  }

  public normalise(): void {
    let mag: number = this.mag();
    this.div(mag);
  }

  public dot(v: Vector2): number {
    return (this.x * v.x) + (this.y * v.y);
  }

  public cross(v: Vector2): number {
    return (this.x * v.y) - (this.y * v.x);
  }

  public set(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  public limit(limitX: number, limitY: number = limitX): void {
    this.x = Math.min(this.x, limitX);
    this.y = Math.min(this.y, limitY);
  }

  public random(): void {
    this.x = Math.random();
    this.y = Math.random();
  }

  public copy(): Vector2 {
    return Object.create(this);
  }

  public toArray(): number[] {
    return [
      this.x,
      this.y
    ];
  }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public isEqual(v: Vector2): boolean {
    return this.x === v.x && this.y === v.y;
  }

  public zero(): void {
    this.x = 0;
    this.y = 0;
  }

  public abs(): void {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
  }

}