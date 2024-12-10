function printObjectKeysAndValues(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

// Exemple d'ús
const persona = {
    nom: 'Joan',
    edat: 30,
    ciutat: 'Barcelona'
};

printObjectKeysAndValues(persona);