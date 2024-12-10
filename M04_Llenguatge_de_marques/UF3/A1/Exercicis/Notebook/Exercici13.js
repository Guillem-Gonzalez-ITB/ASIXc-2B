function esPalindrom(cadena) {
    let neta = cadena.replace(/[\W_]/g, '').toLowerCase();
    let inversa = neta.split('').reverse().join('');
    return neta === inversa;
}

//console.log(esPalindrom("A la catalana banal: atacala"));
//console.log(esPalindrom("Hola món"));