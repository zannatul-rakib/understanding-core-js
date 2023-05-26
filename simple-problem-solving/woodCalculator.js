// Problems: create a function for count wood to make chair , table , bed
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 12;
  const perBedWood = 45;

  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

const result = woodCalculator(23, 10, 21);
console.log(result);
