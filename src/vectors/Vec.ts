interface Vec {
  x: number;
  y: number;
  z?: number;
  w?: number;
  add(v: Vec): void;
  sub(v: Vec): void;
  mult(a: number): void;
  div(a: number): void;
  dot(v: Vec): number;
  mag(): number;
  magSq(): number;
  normalize(): void;
  toString(): string;
  isEqual(v: Vec): boolean;
  random(): void;
  lerp?(v: Vec, a: number): void;
  dist(v: Vec): number;
  zero(): void;
  abs(): void;
  one(): void;
  negate(): void;
  up?(): Vec;
  down?(): Vec;
  left?(): Vec;
  right?(): Vec;
}
