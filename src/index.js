const readableNum = require("./readableNum");

module.exports = function toReadable(n) {
    const nArray = Array.from(String(n)).map(Number);
    const aLength = nArray.length;
  
    const result = nArray
      .map((num, i) => {
        const numStr = readableNum[num];
  
        if (aLength === 4) {
          if (nArray[nArray.length - 2] === 1 && i === 3) {
            return num;
          }
          if (i === 2 && num === 1) {
            return readableNum[nArray.join("").slice(-2)];
          }
  
          return i === 0
            ? `${numStr} ${readableNum["xxx"]}`
            : i === 1
            ? `${numStr} ${readableNum["xx"]}`
            : i === 2
            ? readableNum[nArray[aLength - 2] * 10]
            : numStr;
        }
  
        if (aLength === 3) {
          if (nArray[nArray.length - 2] === 1 && i === 2) {
            return num;
          }
  
          if (i === 1 && num === 1) {
            return readableNum[nArray.join("").slice(-2)];
          }
  
          return i === 1 && num > 1
            ? readableNum[nArray[aLength - 2] * 10]
            : i === 0
            ? `${numStr} ${readableNum["xx"]}`
            : numStr;
        }
  
        if (aLength === 2) {
          if (i === 0 && num === 1) {
            return readableNum[nArray.join("")];
          }
  
          return i === 0 && num > 1 ? readableNum[nArray[0] * 10] : numStr;
        } else {
          return numStr;
        }
      })
      .filter((string) => typeof string === "string")
      .join(" ");
  
    return nArray.length === 2 && nArray[0] === 1
      ? result.split(" ").reduce((n) => n)
      : n === 0
      ? readableNum["x"]
      : result;
  };

