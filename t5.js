import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

function reverseString(string) {
  let invertedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    invertedString += string[i];
  }
  return invertedString;
}

const originalString = prompt('Digite uma string para inverter: ');
const invertedString = reverseString(originalString);

console.log('String original:', originalString);
console.log('String invertida:', invertedString);
