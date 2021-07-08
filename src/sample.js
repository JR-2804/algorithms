const factorial = (number) => {
  if (number <= 0) {
    return 1;
  }

  return number * factorial(number - 1);
};

const linearSearch = (elementToFind, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementToFind) {
      return i;
    }
  }

  return -1;
};

const binarySearch = (elementToFind, array) => {
  const recursiveBinarySearch = (startIndex, endIndex) => {
    const pivot = parseInt((endIndex + startIndex) / 2);

    if (array[pivot] === elementToFind) {
      return pivot;
    }

    if (startIndex === endIndex) {
      return -1;
    }

    return elementToFind < array[pivot]
      ? recursiveBinarySearch(startIndex, pivot - 1)
      : recursiveBinarySearch(pivot + 1, endIndex);
  };

  if (array.length === 0) {
    return -1;
  }

  return recursiveBinarySearch(0, array.length - 1);
};

module.exports = {
  factorial,
  linearSearch,
  binarySearch,
};
