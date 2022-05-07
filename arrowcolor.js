// changing color on hover for the arrows
let toRight = document.querySelector('.toRight');
let toRight2 = document.querySelector('.toRight2');
let toRight3 = document.querySelector('.toRight3');
let toLeft = document.querySelector('.toLeft');
let toLeft2 = document.querySelector('.toLeft2');
let toLeft3 = document.querySelector('.toLeft3');

let rightArrow1 = document.getElementById('rightArrow1');
let rightArrow2 = document.getElementById('rightArrow2');
let leftArrow = document.getElementById('leftArrow');
let rightArrow1Title = document.getElementById('rightArrow1Title');
let rightArrow2Title = document.getElementById('rightArrow2Title');
let leftArrowTitle = document.getElementById('leftArrowTitle');

let leftArrowTwo = document.getElementById('leftArrowTwo');
let leftArrowTitleTwo = document.getElementById('leftArrowTitleTwo');
let leftArrowThree = document.getElementById('leftArrowThree');
let leftArrowTitleThree = document.getElementById('leftArrowTitleThree');

let rightArrow2Two = document.getElementById('rightArrow2Two');
let rightArrow2TitleTwo = document.getElementById('rightArrow2TitleTwo');

// right arrow 1
toRight.addEventListener('mouseover', () => {
    rightArrow1.style.color = 'yellow';
    rightArrow1Title.style.color = 'yellow';
})

toRight.addEventListener('mouseout', () => {
    rightArrow1.style.color = '#E7E5FF';
    rightArrow1Title.style.color = '#E7E5FF';
})

// right arrow 2
toRight2.addEventListener('mouseover', () => {
    rightArrow2.style.color = 'yellow';
    rightArrow2Title.style.color = 'yellow';

})

toRight2.addEventListener('mouseout', () => {
    rightArrow2.style.color = '#E7E5FF';
    rightArrow2Title.style.color = '#E7E5FF';

})


toRight3.addEventListener('mouseover', () => {

    rightArrow2Two.style.color = 'yellow';
    rightArrow2TitleTwo.style.color = 'yellow';
})

toRight3.addEventListener('mouseout', () => {

    rightArrow2Two.style.color = '#E7E5FF';
    rightArrow2TitleTwo.style.color = '#E7E5FF';
})




// left arrow
toLeft.addEventListener('mouseover', () => {
    leftArrow.style.color = 'yellow';
    leftArrowTitle.style.color = 'yellow';
    leftArrowTwo.style.color = 'yellow';
    leftArrowTitleTwo.style.color = 'yellow';
    leftArrowThree.style.color = 'yellow';
    leftArrowTitleThree.style.color = 'yellow';
})

toLeft.addEventListener('mouseout', () => {
    leftArrow.style.color = '#E7E5FF';
    leftArrowTitle.style.color = '#E7E5FF';
    leftArrowTwo.style.color = '#E7E5FF';
    leftArrowTitleTwo.style.color = '#E7E5FF';
    leftArrowThree.style.color = '#E7E5FF';
    leftArrowTitleThree.style.color = '#E7E5FF';
})

toLeft2.addEventListener('mouseover', () => {
    leftArrowTwo.style.color = 'yellow';
    leftArrowTitleTwo.style.color = 'yellow';

})

toLeft2.addEventListener('mouseout', () => {
    leftArrowTwo.style.color = '#E7E5FF';
    leftArrowTitleTwo.style.color = '#E7E5FF';
})





toLeft3.addEventListener('mouseover', () => {

    leftArrowThree.style.color = 'yellow';
    leftArrowTitleThree.style.color = 'yellow';
})

toLeft3.addEventListener('mouseout', () => {

    leftArrowThree.style.color = '#E7E5FF';
    leftArrowTitleThree.style.color = '#E7E5FF';
})

