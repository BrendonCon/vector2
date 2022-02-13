export default class Vec2 implements Vec {
  private _x: number = 0;

  private _y: number = 0;

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

  public add(v: Vec2): void {
    this.x += v.x;
    this.y += v.y;
  }

  public sub(v: Vec2): void {
    this.x -= v.x;
    this.y -= v.y;
  }

  public mult(alpha: number): void {
    this.x *= alpha;
    this.y *= alpha;
  }

  public div(divisor: number): void {
    this.x /= divisor;
    this.y /= divisor;
  }

  public mag(): number {
    return sqrt(this.x * this.x + this.y * this.y);
  }

  public magSq(): number {
    return this.x * this.x + this.y * this.y;
  }

  public dist(v: Vec2): number {
    const dx: number = pow(v.x - this.x, 2);
    const dy: number = pow(v.y - this.y, 2);
    return sqrt(dx + dy);
  }

  public setAngle(angle: number): void {
    const mag: number = this.mag();
    this.x = cos(angle) * mag;
    this.y = sin(angle) * mag;
  }

  public getAngle(): number {
    return atan2(this.y, this.x);
  }

  public normalize(): void {
    this.div(this.mag());
  }

  public dot(v: Vec2): number {
    return (this.x * v.x) + (this.y * v.y);
  }

  public cross(v: Vec2): number {
    return (this.x * v.y) - (this.y * v.x);
  }

  public set(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  public limit(maxX: number, maxY: number = maxX): void {
    this.x = min(this.x, maxX);
    this.y = min(this.y, maxY);
  }

  public random(): void {
    this.x = random();
    this.y = random();
  }

  public copy(): Vec2 {
    return Object.create(this);
  }

  public toArray(): number[] {
    return [this.x, this.y];
  }

  public toString(): string {
    return `(x: ${this.x}, y: ${this.y})`;
  }

  public isEqual(v: Vec2): boolean {
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

  public one(): void {
    this.x = 1;
    this.y = 1;
  }

  public negate(): void {
    this.x *= -1;
    this.y *= -1;
  }

  public static left(): Vec2 {
    return new Vec2(-1, 0);
  }

  public static right(): Vec2 {
    return new Vec2(1, 0);
  }

  public static up(): Vec2 {
    return new Vec2(0, -1);
  }

  public static down(): Vec2 {
    return new Vec2(0, 1);
  }

  public static zero(): Vec2 {
    return new Vec2(0, 0);
  }
}
