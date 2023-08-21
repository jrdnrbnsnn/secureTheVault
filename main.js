// 1. Create 3 variables - variables must be result of calcualtions
// 2. Variables must equal combination of vault 10, 40, 39 using 3 different operators
// 3. Create a string for "You have received this message because you have been chosen to open an important vault. Here is the secret combination:""
// 4. display combination in pop up.

// 3 variable = 10, 40, 39
const vaultCombination1 = 5 + 5;
const vaultCombination2 = 20 * 2;
const vaultCombination3 = 117 / 3;

const alertPopUpMessage =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// used to verify calculations
// console.log(vaultCombination1);
// console.log(vaultCombination2);
// console.log(vaultCombination3);

alert(
  `${alertPopUpMessage} ${vaultCombination1} - ${vaultCombination2} - ${vaultCombination3}`
);
