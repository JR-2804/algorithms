export const iterativeBinarySearch = (element, array) => {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    const pivot = Math.floor((startIndex + endIndex) / 2);

    if (array[pivot] === element) {
      return pivot;
    }

    if (element < array[pivot]) {
      endIndex = pivot - 1;
    } else {
      startIndex = pivot + 1;
    }
  }

  return -1;
};

export const recursiveBinarySearch = (element, array) => {
  const binarySearch = (startIndex, endIndex) => {
    if (startIndex > endIndex) {
      return -1;
    }

    const pivot = Math.min((startIndex + endIndex) / 2);

    if (array[pivot] === element) {
      return pivot;
    }

    return element < array[pivot]
      ? binarySearch(startIndex, pivot - 1)
      : binarySearch(pivot + 1, endIndex);
  };

  return binarySearch(0, array.length - 1);
};
