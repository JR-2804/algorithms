const { linearSearch } = require('./sample');

describe('Linear search', () => {
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
