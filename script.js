// button element is declared here
const button = document.getElementById("button");


// Click the butoon & get a random number each time
button.addEventListener('click', () => {
    // console.log("hello");
    // Number Randomiser
    const ranNum = getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    };

    let num = getRandomInt(1, 7)

    // Takes random number and outputs image
    let img = document.getElementById("die");
    switch (num) {
        case 1:
            console.log("1");
            img.src = '/img/dice1.png';
            break;
        case 2:
            console.log("2");
            img.src = '/img/dice2.png';
            break;
        case 3:
            console.log("3");
            img.src = '/img/dice3.png';
            break;
        case 4:
            console.log("4");
            img.src = '/img/dice4.png';
            break;
        case 5:
            console.log("5");
            img.src = '/img/dice5.png';
            break;
        case 6:
            console.log("6");
            img.src = '/img/dice6.png';
            break;
    };
});






// 

// switch (num) {
// case 1:
//     dieText.innerText = "⚀";
//     break;
// case 2:
//     dieText.innerText = "⚀";
//     break;
// case 3:
//     dieText.innerText = "⚀";
//     break;
// case 4:
//     dieText.innerText = "⚀";
//     break;
// case 5:
//     dieText.innerText = "⚀";
//     break;
// case 6:
//     dieText.innerText = "⚀";
//     break;
// };

// ordan Crompton
// 11:25 AM
// return 1 + math.random

// Jo
// Jordan Crompton
// 11:32 AM
// let list = document.getElementsByTagName('ul')[0];