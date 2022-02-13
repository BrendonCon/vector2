export default class Vec4 implements Vec {
  private _x: number = 0;

  private _y: number = 0;

  private _z: number = 0;

  private _w: number = 0;

  constructor(x = 0, y = 0, z = 0, w = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
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

  public get z(): number {
    return this._z;
  }

  public set z(value: number) {
    this._z = value;
  }

  public get w(): number {
    return this._w;
  }

  public set w(value: number) {
    this._w = value;
  }

  public add(v: Vec4): void {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    this.w += v.z;
  }

  public sub(v: Vec4): void {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    this.w -= v.w;
  }

  public mult(alpha: number): void {
    this.x *= alpha;
    this.y *= alpha;
    this.z *= alpha;
    this.w *= alpha;
  }

  public div(divisor: number): void {
    this.x /= divisor;
    this.y /= divisor;
    this.z /= divisor;
    this.w /= divisor;
  }

  public mag(): number {
    return sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }

  public magSq(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }

  public dist(v: Vec4): number {
    const dx: number = pow(v.x - this.x, 2);
    const dy: number = pow(v.y - this.y, 2);
    const dz: number = pow(v.z - this.z, 2);
    const dw: number = pow(v.w - this.w, 2);
    return sqrt(dx + dy + dz + dw);
  }

  public lerp(v: Vec4, t: number): void {
    this.x += (v.x - this.x) * t;
    this.y += (v.y - this.y) * t;
    this.z += (v.z - this.z) * t;
    this.w += (v.w - this.w) * t;
  }

  public normalize(): void {
    this.div(this.mag());
  }

  public dot(v: Vec4): number {
    return (this.x * v.x) + (this.y * v.y) + (this.z * v.z) + (this.w * v.w);
  }

  public cross(v: Vec4): number {
    return (this.x * v.y) - (this.y * v.x); // TODO
  }

  public set(x: number, y: number, z: number, w: number): void {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  public limit(maxX: number, maxY: number = maxX, maxZ: number = maxX, maxW: number = maxX): void {
    this.x = min(this.x, maxX);
    this.y = min(this.y, maxY);
    this.z = min(this.z, maxZ);
    this.w = min(this.w, maxW);
  }

  public random(): void {
    this.x = random();
    this.y = random();
    this.z = random();
    this.w = random();
  }

  public copy(): Vec4 {
    return Object.create(this);
  }

  public toArray(): number[] {
    return [this.x, this.y, this.z, this.w];
  }

  public toString(): string {
    return `(x: ${this.x}, y: ${this.y}), z: ${this.z}, w: ${this.w})`;
  }

  public isEqual(v: Vec4): boolean {
    return this.x === v.x && this.y === v.y && this.z === v.z && this.w === v.w;
  }

  public zero(): void {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.w = 0;
  }

  public abs(): void {
    this.x = abs(this.x);
    this.y = abs(this.y);
    this.z = abs(this.z);
    this.w = abs(this.w);
  }

  public negate(): void {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;
    this.w *= -1;
  }

  public one(): void {
    this.x = 1;
    this.y = 1;
    this.z = 1;
    this.w = 1;
  }

  public static left(): Vec4 {
    return new Vec4(-1, 0, 0, 0);
  }

  public static right(): Vec4 {
    return new Vec4(1, 0, 0, 0);
  }

  public static up(): Vec4 {
    return new Vec4(0, -1, 0, 0);
  }

  public static down(): Vec4 {
    return new Vec4(0, 1, 0, 0);
  }

  public static zero(): Vec4 {
    return new Vec4(0, 0, 0, 0);
  }
}
