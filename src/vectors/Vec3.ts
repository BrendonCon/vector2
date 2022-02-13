import Vector from "../Vector";

export default class Vec3 implements Vec {
  private _x: number = 0;

  private _y: number = 0;

  private _z: number = 0;

  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
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

  public add(v: Vec3): void {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
  }

  public sub(v: Vec3): void {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
  }

  public mult(alpha: number): void {
    this.x *= alpha;
    this.y *= alpha;
    this.z *= alpha;
  }

  public div(divisor: number): void {
    this.x /= divisor;
    this.y /= divisor;
    this.z /= divisor;
  }

  public mag(): number {
    return sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  public magSq(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  public dist(v: Vec3): number {
    let dx: number = pow(v.x - this.x, 2);
    let dy: number = pow(v.y - this.y, 2);
    let dz: number = pow(v.z - this.z, 2);
    return sqrt(dx + dy + dz);
  }

  public lerp(v: Vec3, t: number): void {
    this.x += (v.x - this.x) * t;
    this.y += (v.y - this.y) * t;
    this.z += (v.z - this.z) * t;
  }

  public normalize(): void {
    let mag: number = this.mag();
    this.div(mag);
  }

  public dot(v: Vec3): number {
    return (this.x * v.x) + (this.y * v.y) + (this.z * v.z);
  }

  public cross(v: Vec3): Vec3 {
    return new Vec3(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x
    )
  }

  public set(x: number, y: number, z: number): void {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public limit(maxX: number, maxY: number = maxX, maxZ: number = maxX): void {
    this.x = min(this.x, maxX);
    this.y = min(this.y, maxY);
    this.z = min(this.z, maxZ);
  }

  public random(): void {
    this.x = random();
    this.y = random();
    this.z = random();
  }

  public copy(): Vec3 {
    return Object.create(this);
  }

  public toArray(): number[] {
    return [this.x, this.y, this.z];
  }

  public toString(): string {
    return `(x: ${this.x}, y: ${this.y}), z: ${this.z}`;
  }

  public isEqual(v: Vec3): boolean {
    return this.x === v.x && this.y === v.y && this.z === v.z;
  }

  public zero(): void {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }

  public abs(): void {
    this.x = abs(this.x);
    this.y = abs(this.y);
    this.z = abs(this.z);
  }

  public negate(): void {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;
  }

  public one(): void {
    this.x = 1;
    this.y = 1;
    this.z = 1;
  }

  public static left(): Vec3 {
    return new Vec3(-1, 0, 0);
  }

  public static right(): Vec3 {
    return new Vec3(1, 0, 0);
  }

  public static up(): Vec3 {
    return new Vec3(0, -1, 0);
  }

  public static down(): Vec3 {
    return new Vec3(0, 1, 0);
  }
}
