//your JS code here. If required.

function manipulateArray() {
  const arr = [1, 2, 3, 4];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
    .then((numbers) => {
      const evenNumbers = numbers.filter(num => num % 2 === 0);

      return new Promise((resolve) => {
        setTimeout(() => {
          document.getElementById("output").textContent =
            evenNumbers.join(",");
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      const doubled = evenNumbers.map(num => num * 2);

      return new Promise((resolve) => {
        setTimeout(() => {
          document.getElementById("output").textContent =
            doubled.join(",");
          resolve(doubled);
        }, 2000);
      });
    });
}

manipulateArray();
