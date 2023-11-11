var plates = new Map([
    [
        "steak.jpg",
        "Indulge in the rich flavors of our perfectly cooked steaks. Savor every bite and experience the true essence of culinary delight."
    ],
    [
        "ingredients.jpg",
        "We take pride in using only the freshest and finest ingredients to create each dish. Quality is our promise, and it's in every bite."
    ],
    [
        "family-meal.jpg",
        "Enjoy a memorable family feast at our restaurant. Our generous portions and warm ambiance make every meal a special occasion."
    ],
    [
        "dessert.jpg",
        "Save room for our delectable desserts that are a sweet ending to your meal. Every bite is a taste of heavenly sweetness."
    ],
    [
        "beverages.jpg",
        "Quench your thirst with our selection of refreshing beverages. From classic cocktails to artisanal concoctions, we have the perfect drink for every mood."
    ]
]);
var platesArray = Array.from(plates.keys());
var next = 0;

function changeItem() {
    var newPlateImage = platesArray[next];
    var newPlateParagraph = plates.get(newPlateImage);
    var plateImageHolder = document.getElementById('plate');
    var plateParagraphHolder = document.getElementById('carousel-text');

    plateImageHolder.style.backgroundImage = `url('Assets/images/${newPlateImage}')`;
    plateParagraphHolder.innerHTML = newPlateParagraph;
}


function showNext() {
    if (next === platesArray.length - 1) {
        next = 0;
    } else {
        next++;
    }
    changeItem();
}

function showPrevious() {
    if (next === 0) {
        next = platesArray.length - 1;
    } else {
        next--;
    }
    changeItem();
}
