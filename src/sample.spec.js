const {
  linearSearch,
  binarySearch,
  iterativeBinarySearch,
} = require('./sample');

describe('Linear Search', () => {
  it('Should return the index of the element to find in the array', () => {
    const spec = (elementToFind, array, expectedResult) => {
      const result = linearSearch(elementToFind, array);
      expect(result).toBe(expectedResult);
    };

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    spec(1, array, 0);
    spec(3, array, 2);
    spec(10, array, 9);
    spec(11, array, -1);
  });
});

describe('Binary Search', () => {
  it('Should return the index of the element to find in the array', () => {
    const spec = (elementToFind, array, expectedResult) => {
      const result = binarySearch(elementToFind, array);
      expect(result).toBe(expectedResult);
    };

    spec(1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
    spec(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
    spec(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9);
    spec(11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1);
    spec(1, [2], -1);
    spec(1, [1], 0);
    spec(1, [], -1);
  });
});

describe('Iterative Binary Search', () => {
  it('Should return the index of the element to find in the array', () => {
    const spec = (elementToFind, array, expectedResult) => {
      const result = iterativeBinarySearch(elementToFind, array);
      expect(result).toBe(expectedResult);
    };

    spec(1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
    spec(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
    spec(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9);
    spec(11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1);
    spec(1, [2], -1);
    spec(1, [1], 0);
    spec(1, [], -1);
  });
});
