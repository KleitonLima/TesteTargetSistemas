import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

const verifyFibonacciNumber = () => {
  const num = parseInt(
    prompt(
      'Digite um número para verificar se pertence à sequência de Fibonacci: '
    )
  );

  if (isNaN(num) || num < 0) {
    console.log('Número inválido!');
    return;
  }

  let a = [0, 1];

  if (a.includes(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
    return;
  }

  while (a[a.length - 1] <= num) {
    if (a[a.length - 1] === num) {
      console.log(`${num} pertence à sequência de Fibonacci.`);
      return;
    }
    a.push(a[a.length - 1] + a[a.length - 2]);
  }

  console.log(`${num} não pertence à sequência de Fibonacci.`);
};

verifyFibonacciNumber();
