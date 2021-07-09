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

export { factorial, linearSearch, bubbleSort, selectionSort };
