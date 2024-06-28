let char = prompt("Enter an alphabet: ");

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || 
  char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
  console.log(`${char} is a vowel.`);
}
else if (char >= 'a' && char <= 'z') {
  console.log(`${char} is a consonant.`);
}
else {
  console.log(`Invalid input. Please enter an alphabet.`);
}