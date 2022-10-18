export default class Vector2 {
  private _x: number;
  private _y: number;

  constructor(x: number = 0, y: number = x) {
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

  public div(divisor: number): void {
    this.x /= divisor;
    this.y /= divisor;
  }

  public mag(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public magSq(): number {
    return this.x * this.x + this.y * this.y;
  }

  public dist(v: Vector2): number {
    return Math.sqrt(Math.pow(v.x - this.x, 2) +  Math.pow(v.y - this.y, 2));
  }

  public setAngle(theta: number): void {
    const mag: number = this.mag();
    this.x = Math.cos(theta) * mag;
    this.y = Math.sin(theta) * mag;
  }

  public cross(v: Vector2): number {
    return this.x * v.y - this.y * v.x;
  }

  public getAngle(): number {
    return Math.atan2(this.y, this.x);
  }

  public normalize(): void {
    let mag: number = this.mag();
    this.div(mag);
  }

  public dot(v: Vector2): number {
    return (this.x * v.x) + (this.y * v.y);
  }

  public set(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  public limit(maxX: number, maxY: number = maxX): void {
    this.x = Math.min(this.x, maxX);
    this.y = Math.min(this.y, maxY);
  }

  public random(): void {
    this.x = Math.random();
    this.y = Math.random();
  }

  public copy(): Vector2 {
    return Object.create(this);
  }

  public toArray(): number[] {
    return [ this.x, this.y ];
  }

  public lerp(v: Vector2, t: number): void {
    this.x += t * (v.x - this.x);
    this.y += t * (v.y - this.y);
  }

  public toString(): string {
    return `{ x: ${this.x}, y: ${this.y} }`;
  }

  public isEqual(v: Vector2): boolean {
    return this.x === v.x && this.y === v.y;
  }

  public abs(): void {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
  }

  public negate(): void {
    this.x *= -1;
    this.y *= -1;
  }

  public zero(): void {
    this.x = 0;
    this.y = 0;
  }

  public one(): void {
    this.x = 1;
    this.y = 1;
  }

  public up(): void {
    this.x = 0;
    this.y = 1;
  }

  public down(): void {
    this.x = 0;
    this.y = -1;
  }

  public left(): void {
    this.x = -1;
    this.y = 0;
  }

  public right(): void {
    this.x = 1;
    this.y = 0;
  }

  public static zero(): Vector2 {
    return new Vector2(0);
  }

  public static left(): Vector2 {
    return new Vector2(-1, 0);
  }

  public static right(): Vector2 {
    return new Vector2(1, 0);
  }

  public static up(): Vector2 {
    return new Vector2(0, 1);
  }

  public static down(): Vector2 {
    return new Vector2(0, -1);
  }

  public static random(): Vector2 {
    return new Vector2(Math.random(), Math.random());
  }

  public static distance(u: Vector2, v: Vector2) {
    return Math.sqrt(Math.pow(v.x - u.x, 2) + Math.pow(v.y - u.y, 2));
  }

  public static lerp(u: Vector2, v: Vector2, t: number): Vector2 {
    return new Vector2(u.x + (v.x - u.x) * t, u.y + (v.y - u.y) * t);
  }

  public static normalize(u: Vector2): Vector2 {
    const v = new Vector2(u.x, u.y);
    v.normalize();
    return v;
  }

  public static mag(u: Vector2): number {
    return Math.sqrt(u.x * u.x + u.y * u.y)
  }

  public static max(u: Vector2, v: Vector2) {
    return u.mag() > v.mag() ? u : v;
  }

  public static min(u: Vector2, v: Vector2) {
    return u.mag() < v.mag() ? u : v;
  }

  public static dot(u: Vector2, v: Vector2): number {
    return u.x * v.x + u.y * v.y;
  }

  public static create(x: number = 0, y: number = x): Vector2 {
    return new Vector2(x, y);
  }

  public static add(u: Vector2, v: Vector2): Vector2 {
    return new Vector2(u.x + v.x, u.y + v.y);
  }

  public static sub(u: Vector2, v: Vector2): Vector2 {
    return new Vector2(u.x - v.x, u.y - v.y);
  }

  public static mult(u: Vector2, k: number): Vector2 {
    return new Vector2(u.x * k, u.y * k);
  }

  public static div(u: Vector2, k: number): Vector2 {
    return new Vector2(u.x / k, u.y / k);
  }
}