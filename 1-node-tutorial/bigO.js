function square(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.table([{ i, j, k }]);
      }
    }
  }
}

square(4);
