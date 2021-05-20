


// let dieText = document.getElementsByClassName("die").textContent;
const button = document.getElementById("button");
const dieImg = document.getElementById("die");




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
    switch (num) {
        case 1:
            console.log("1");
            // document.getElementById("die").innerHTML ="<img src="img/dice1.jpg" alt="Dice image" id="die"></img>";
            // dieImg.innerHTML =  "<img src="img/dice1.jpg" alt="Dice image" id="die"></img>"
            break;
        case 2:
            console.log("2");
            // dieImg.innerHTML =  "<img src="img/dice2.jpg" alt="Dice image" id="die"></img>""
            break;
        case 3:
            console.log("3");
            // dieImg.innerHTML = "<img src="img/dice3.jpg" alt="Dice image" id="die"></img>"
            break;
        case 4:
            console.log("4");
            // dieImg.innerHTML =  "<img src="img/dice4.jpg" alt="Dice image" id="die"></img>"
            break;
        case 5:
            console.log("5");
            // dieImg.innerHTML =  "<img src="img/dice5.jpg" alt="Dice image" id="die"></img>"
            break;
        case 6:
            console.log("6");
            // dieImg.innerHTML = "<img src="img/dice6" alt="Dice image" id="die"></img>"
            break;
    };
});


    // let num = 2;

    //     switch (num) {
    // case 1:
    //     console.log("1");
    //     break;
    // case 2:
    //     console.log("2");
    //     break;
    // case 3:
    //     console.log("3");
    //     break;
    // case 4:
    //     console.log("4");
    //     break;
    // case 5:
    //     console.log("5");
    //     break;
    // case 6:
    //     console.log("6");
    //     break;
    // };




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