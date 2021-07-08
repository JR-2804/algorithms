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

module.exports = {
  factorial,
  linearSearch,
};
