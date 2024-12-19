// Exercici 1
const changeTextButton = document.getElementById('change-text-button');
const textParagraph = document.getElementById('text-paragraph');

changeTextButton.addEventListener('click', function() {
    textParagraph.textContent = "Aquest �s el nou text :)"
});

// Exercici 2
const colorInput = document.getElementById('color-input');
const changeBgButton = document.getElementById('change-bg-button');
const backgroundDiv = document.getElementById('background-div');

changeBgButton.addEventListener('click', function() {
    const color = colorInput.value;
    backgroundDiv.style.backgroundColor = color;
});

// Exercici 3
const alertInput = document.getElementById('alert-input');
const alertButton = document.getElementById('alert-button');

alertButton.addEventListener('click', function() {
    const userInput = alertInput.value;
    alert(userInput);
});

// Exercici 4
const emailInput = document.getElementById('email-input');
const validateEmailButton = document.getElementById('validate-email-button');
const emailError = document.getElementById('email-error');

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

validateEmailButton.addEventListener('click', function() {
    const email = emailInput.value;
    if (validateEmail(email)) {
        emailError.textContent = '';
    } else {
        emailError.textContent = 'El correu electr�nic no �s v�lid';
    }
});

// Exercici 5
const hideMeElement = document.getElementById('hide-me');
const hideButton = document.getElementById('hide-button');
 hideButton.addEventListener('click', function() {
    hideMeElement.style.display = 'none';
});
// Exercici 6
const toggleDiv = document.getElementById('toggle-div');
const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', function() {
    if (toggleDiv.style.display === 'none') {
        toggleDiv.style.display = 'block'
    } else {
        toggleDiv.style.display = 'none'
    }
});

// Exercici 7
const inputItem = document.getElementById('list-item-input');
const addItemButton = document.getElementById('add-item-button');
const itemList = document.getElementById('item-list');

addItemButton.addEventListener('click', function() {
    const newItemText = inputItem.value.trim();

    if (newItemText !== '') {
        const newListItem = document.createElement('li');
        newListItem.textContent = newItemText;

        itemList.appendChild(newListItem);

        inputItem.value = '';
    } else {
        alert('Si us plau, introdueix un element per afegir a la llista.');
    }
});

// Exercici 8
const counter = document.getElementById('counter');
const incrementButton = document.getElementById('increment-button');

let count = 0;

incrementButton.addEventListener('click', function() {
    count++;

    counter.textContent = count;
});

// Exercici 9
const hoverDiv = document.getElementById('hover-div');
const hoverParagraph = document.getElementById('hover-paragraph');

hoverDiv.addEventListener('mouseover', function() {
    hoverParagraph.textContent = "El ratol� est� sobre el div!";
});

hoverDiv.addEventListener('mouseout', function() {
    hoverParagraph.textContent = "Passa el ratol� per sobre del div.";
});

// Exercici 10
const imageUrlInput = document.getElementById('image-url-input');
const changeImageButton = document.getElementById('change-image-button');
const imageElement = document.getElementById('image');

changeImageButton.addEventListener('click', function() {
    const imageUrl = imageUrlInput.value;

    if (imageUrl) {
        imageElement.src = imageUrl;
    } else {
        alert("Si us plau, introdueix una URL v�lida.");
    }
});