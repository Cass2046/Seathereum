// splits array into pieces of the given length

const splitArray = (array, spacing) =>
  array.reduce((acc, elem, i) => {
    i % spacing ? acc[acc.length - 1].push(elem) : acc.push([elem]);
    return acc;
  }, []);

// removes any white space in a string

const removeWhiteSpace = (string) => string.replace(/\s+/g, '');

// slow conversion from map to object

const mapToObject = (map) => {
  return [...map.entries()].reduce((prev, [k, v]) => ({...prev, [k]: v}), {});
};

export {splitArray, removeWhiteSpace, mapToObject};
