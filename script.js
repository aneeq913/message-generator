const RandomDrink = () => {
    //Drinks Array
    let drinks = ['RedBull', 'Coke', 'Diet Coke', 'Vimto', 'Sprite', 'Dr Pepper'];
    //Numbers array from 1 - 5
    let numbers = [1,2,3,4,5];

    //Randomise the Drinks and Numbers
    let randomDrink = Math.floor(Math.random() * drinks.length);
    let randomNumber = Math.floor(Math.random() * numbers.length);

    //Storing the random drink and number in a new array called output
    let output = [];
    output.push('You will drink ' + numbers[randomNumber] + ' cans of ' + drinks[randomDrink]);
    return output;
};

console.log(RandomDrink());