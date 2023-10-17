function goodVsEvil(good, evil) {
  //Battle worth for each index. Ex men = [1] = 2 worth points
  const goodWorthTable = [1, 2, 3, 3, 4, 10];
  const evilWorthTable = [1, 2, 2, 2, 3, 5, 10];

  //Valueize  each array using the table
  function valueize(array, table) {
    for (let i = 0; i < array.length; i++) {
      array[i] = Number(array[i]) * table[i];
    }
    return array;
  }

  let goodWorth = valueize(good.split(" "), goodWorthTable).reduce(
    (a, b) => a + b
  );
  let evilWorth = valueize(evil.split(" "), evilWorthTable).reduce(
    (a, b) => a + b
  );

  if (goodWorth > evilWorth) return "Battle Result: Good triumphs over Evil";
  else if (goodWorth < evilWorth)
    return "Battle Result: Evil eradicates all trace of Good";
  else return "Battle Result: No victor on this battle field";
}
