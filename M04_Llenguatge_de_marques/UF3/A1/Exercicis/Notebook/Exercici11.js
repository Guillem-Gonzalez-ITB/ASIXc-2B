function factorial(n) {
    if (n < 0) {
        return "El factorial no està definit per nombres negatius.";
    } else if (n === 0 || n === 1) {
        return 1; // Cas base
    } else {
        return n * factorial(n - 1); // Crida recursiva
    }
}

// Exemple d'ús
console.log(factorial(5));
console.log(factorial(0));