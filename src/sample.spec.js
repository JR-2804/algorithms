import {
  linearSearch,
  binarySearch,
  iterativeBinarySearch,
  bubbleSort,
  selectionSort,
  factorial,
} from './sample';

describe('Factorial', () => {
  it('Should return the factorial of the number', () => {
    const spec = (number, expectedResult) => {
      const result = factorial(number);
      expect(result).toBe(expectedResult);
    };

    spec(1, 1);
    spec(2, 2);
    spec(3, 6);
    spec(10, 3628800);
  });
});

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

describe('Bubble Sort', () => {
  it('Should sort the array', () => {
    const spec = (array, expectedResult) => {
      const result = bubbleSort(array);

      expect(result).toEqual(expectedResult);
    };

    spec([], []);
    spec([1], [1]);
    spec([1, 1], [1, 1]);
    spec([2, 1, 3], [1, 2, 3]);
    spec([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]);
  });
});

describe('Selection Sort', () => {
  it('Should sort the array', () => {
    const spec = (array, expectedResult) => {
      const result = selectionSort(array);

      expect(result).toEqual(expectedResult);
    };

    spec([], []);
    spec([1], [1]);
    spec([1, 1], [1, 1]);
    spec([2, 1, 3], [1, 2, 3]);
    spec([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]);
  });
});
