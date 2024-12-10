const numero = 10;

console.log(numero);

try {
    numero = 20;
} catch (error) {
    console.error(error.message);
}