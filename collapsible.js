// Experience section titles
let expTitle1 = document.getElementById('expTitle1');
let expTitle2 = document.getElementById('expTitle2');
let expTitle3 = document.getElementById('expTitle3');

// Experience section list items/descriptions
let indentedLI1 = document.getElementById('indentedLI1');
let indentedLI2 = document.getElementById('indentedLI2');
let indentedLI3 = document.getElementById('indentedLI3');
let indentedLI4 = document.getElementById('indentedLI4');

//colored arrows
let yellowArrow = document.getElementById('yellowArrow');

const collapse1 = () => {
    if (indentedLI1.style.display === 'none') {
        indentedLI1.style.display = 'list-item';
        expTitle1.innerHTML = 'Freelance Web Developer (Mar. 2022 - ) &#9650;';
        expTitle1.style.color = 'yellow';
    } else {
        indentedLI1.style.display = 'none';
        expTitle1.innerHTML = 'Freelance Web Developer (Mar. 2022 - ) <span id="yellowArrow">&#9660;</span>';
        expTitle1.style.color = '#E7E5FF';
    }
}

const collapse2 = () => {
    if (indentedLI2.style.display === 'none' && indentedLI3.style.display === 'none') {
        indentedLI2.style.display = 'list-item';
        indentedLI3.style.display = 'list-item';
        expTitle2.innerHTML = 'Author (Oct. 2018 - ) &#9650;';
        expTitle2.style.color = 'yellow';
    } else {
        indentedLI2.style.display = 'none';
        indentedLI3.style.display = 'none';
        expTitle2.innerHTML = 'Author (Oct. 2018 - ) <span id="yellowArrow">&#9660;</span>';
        expTitle2.style.color = '#E7E5FF';
    }
}

const collapse3 = () => {
    if (indentedLI4.style.display === 'none') {
        indentedLI4.style.display = 'list-item';
        expTitle3.innerHTML = 'Tutor (Feb. 2020 - Nov. 2021) &#9650;';
        expTitle3.style.color = 'yellow';
    } else {
        indentedLI4.style.display = 'none';
        expTitle3.innerHTML = 'Tutor (Feb. 2020 - Nov. 2021) <span id="yellowArrow">&#9660;</span>'
        expTitle3.style.color = '#E7E5FF';
    }
}