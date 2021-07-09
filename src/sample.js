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
    if (startIndex > endIndex) {
      return -1;
    }

    const pivot = parseInt((endIndex + startIndex) / 2);

    if (array[pivot] === elementToFind) {
      return pivot;
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

const iterativeBinarySearch = (elementToFind, array) => {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    const pivot = parseInt((startIndex + endIndex) / 2);

    if (array[pivot] === elementToFind) {
      return pivot;
    }

    if (elementToFind < array[pivot]) {
      endIndex = pivot - 1;
    } else {
      startIndex = pivot + 1;
    }
  }

  return -1;
};

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }
    }

    const temp = array[i];
    array[i] = array[smallestIndex];
    array[smallestIndex] = temp;
  }

  return array;
};

export {
  factorial,
  linearSearch,
  binarySearch,
  iterativeBinarySearch,
  bubbleSort,
  selectionSort,
};
