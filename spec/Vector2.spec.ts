
import Vector2 from '../src/lib/Vector2';

describe('Vector2', () => {
  let sut;

  describe('#constructor', () => {
    beforeEach(() => {
      sut = new Vector2(2, 3);
    });

    it('should be defined', () => {
      expect(sut).toBeDefined();
    });

    it('should set x to 2', () => {
      expect(sut.x).toBe(2);
    });

    it('should set y to 3', () => {
      expect(sut.y).toBe(3);
    });
  });

  describe('#add', () => {
    beforeEach(() => {
      sut = new Vector2(0, 0);
    });

    it('should be defined', () => {
      expect(sut.add).toBeDefined();
    });

    it('should add correctly', () => {
      sut.add(new Vector2(3, 3));
      expect(sut.x).toBe(3);
      expect(sut.y).toBe(3);
    });
  });

  describe('#sub', () => {
    beforeEach(() => {
      sut = new Vector2(2, 3);
    });

    it('should be defined and not null', () => {
      expect(sut.sub).toBeDefined();
      expect(sut.sub).not.toBeNull();
    });

    it('should subtract correctly', () => {
      sut.sub(new Vector2(1, 1));
      expect(sut.x).toEqual(1);
      expect(sut.y).toEqual(2);
    });
  });

  describe('#div', () => {
    beforeEach(() => {
      sut = new Vector2(2, 2);
    });

    it('should be defined', () => {
      expect(sut.div).toBeDefined();
    });

    it('it should divide correctly', () => {
      sut.div(2);
      expect(sut.x).toBe(1);
      expect(sut.y).toBe(1);
    });
  });

  describe('#mult', () => {
    beforeEach(() => {
      sut = new Vector2(2, 2);
    });

    it('should be defined', () => {
      expect(sut.mult).toBeDefined();
    });

    it('it should divide correctly', () => {
      sut.mult(2);
      expect(sut.x).toBe(4);
      expect(sut.y).toBe(4);
    });
  });

  describe('#magnitude', () => {
    beforeEach(() => {
      sut = new Vector2(3, 4);
    });

    it('should be defined', () => {
      expect(sut.mag).toBeDefined();
    });

    it('should give the correct magnitude of the vector', () => {
      expect(sut.mag()).toBe(5);
    });
  });

  describe('#set', () => {
    beforeEach(() => {
      sut = new Vector2(2, 2);
    });

    it('should be defined', () => {
      expect(sut.set).toBeDefined();
    });

    it('it should divide correctly', () => {
      sut.set(4, 4);
      expect(sut.x).toEqual(4);
      expect(sut.y).toEqual(4);
    });
  });

  describe('#limit', () => {
    beforeEach(() => {
      sut = new Vector2(20, 30);
    });

    it('should be defined', () => {
      expect(sut.limit).toBeDefined();
    });

    it('should limit both correctly with one param', () => {
      sut.limit(10);
      expect(sut.x).toEqual(10);
      expect(sut.y).toEqual(10);
    });

    it('should set both axis limits', () => {
      sut.limit(5, 15);
      expect(sut.x).toEqual(5);
      expect(sut.y).toEqual(15);
    });
  });

  describe('#copy', () => {
    beforeEach(() => {
      sut = new Vector2(20, 20);
    });

    it('should be defined', () => {
      expect(sut.copy).toBeDefined();
    });

    it('it should return a copy', () => {
      let copy = sut.copy();
      expect(copy.x).toBe(sut.x);
      expect(copy.y).toBe(sut.y);
    });

    it('it should not be the same object', () => {
      let copy = sut.copy();
      expect(copy).not.toBe(sut);
    });
  });

  describe('#toArray', () => {
    beforeEach(() => {
      sut = new Vector2(20, 20);
    });

    it('should be defined', () => {
      expect(sut.toArray).toBeDefined();
    });

    it('it should return an array with the same x and y values', () => {
      let copy = sut.toArray();
      expect(copy[0]).toBe(sut.x);
      expect(copy[1]).toBe(sut.y);
    });
  });

  describe('#dist', () => {
    beforeEach(() => {
      sut = new Vector2(0, 0);
    });

    it('should be defined', () => {
      expect(sut.dist).toBeDefined();
    });

    it('should return the correct distance', () => {
      let actual = sut.dist(new Vector2(3, 4));
      let expected = 5;
      expect(actual).toEqual(expected);
    });
  });

  describe('#dot', () => {
    beforeEach(() => {
      sut = new Vector2(2, 3);
    });

    it('should be defined', () => {
      expect(sut.dot).toBeDefined();
    });

    it('should return the correct dot product', () => {
      let actual = sut.dot(new Vector2(2, 3));
      expect(actual).toBe(13);
    });
  });

  describe('#cross', () => {
    beforeEach(() => {
      sut = new Vector2(5, 3);
    });

    it('should be defined', () => {
      expect(sut.cross).toBeDefined();
    });

    it('should return the correct cross product', () => {
      let actual = sut.cross(new Vector2(2, 3));
      expect(actual).toBe(9);
    });
  });

  describe('#random', () => {
    beforeEach(() => {
      sut = new Vector2(5, 3);
    });

    it('should be defined', () => {
      expect(sut.random).toBeDefined();
    });

    it('should return the correct cross product', () => {
      sut.random();
      expect(sut.x).not.toBe(5);
      expect(sut.y).not.toBe(2);
    });

    it('should return values less than 1 for each component of the vector', () => {
      sut.random();
      expect(sut.x).toBeLessThan(1);
      expect(sut.y).toBeLessThan(1);
    });
  });

  describe('#normalise', () => {
    beforeEach(() => {
      sut = new Vector2(3, 4);
    });

    it('should be defined', () => {
      expect(sut.normalise).toBeDefined();
    });

    it('should update the vectors components', () => {
      sut.normalise();
      expect(sut.x).not.toBe(3);
      expect(sut.y).not.toBe(4);
    });

    it('should return values less than 1 for each component of the vector', () => {
      sut.normalise();
      expect(sut.x).toBeLessThan(1);
      expect(sut.y).toBeLessThan(1);
    });

    it('should set the magnitude to a unit vector', () => {
      sut.normalise();
      let actual = sut.mag();
      expect(actual).toBe(1);
    });
  });

  describe('#setAngle', () => {
    beforeEach(() => {
      sut = new Vector2(2, 2);
    });

    it('should be defined', () => {
      expect(sut.setAngle).toBeDefined();
    });

    it('should set the angle', () => {
      // pending('to be implemented');
    });
  });

  describe('#getAngle', () => {
    beforeEach(() => {
      sut = new Vector2(2, 2);
    });

    it('should be defined', () => {
      expect(sut.getAngle).toBeDefined();
    });

    it('should get the angle', () => {
      // pending('to be implemented');
    });
  });
});