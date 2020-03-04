function hash(inputString) {
  const inputArray = inputString
    ? inputString.toString().split("")
    : [null, null];
  return inputString + inputArray[0] + inputArray[1];
}

function loopThrough(entry) {
  if (entry instanceof Array) {
    return entry.map(singleEntry => loopThrough(singleEntry));
  } else if (entry instanceof Object) {
    let newObject = {};
    for (let property in entry) {
      newObject[property] = loopThrough(entry[property]);
    }
    return newObject;
  } else {
    return hash(entry);
  }
}

module.exports = loopThrough;
