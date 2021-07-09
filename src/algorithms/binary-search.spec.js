import { iterativeBinarySearch, recursiveBinarySearch } from './binary-search';

describe('Iterative Binary Search', () => {
  it('should find the index of the element in the array', () => {
    const spec = (element, array, expectedResult) => {
      const result = iterativeBinarySearch(element, array);
      expect(result).toBe(expectedResult);
    };

    spec(1, [], -1);
    spec(1, [1, 2, 3], 0);
    spec(2, [1, 2, 3], 1);
    spec(3, [1, 2, 3], 2);
    spec(4, [1, 2, 3], -1);
  });
});

describe('Recursive Binary Search', () => {
  it('should find the index of the element in the array', () => {
    const spec = (element, array, expectedResult) => {
      const result = recursiveBinarySearch(element, array);
      expect(result).toBe(expectedResult);
    };

    spec(1, [], -1);
    spec(1, [1, 2, 3], 0);
    spec(2, [1, 2, 3], 1);
    spec(3, [1, 2, 3], 2);
    spec(4, [1, 2, 3], -1);
  });
});
