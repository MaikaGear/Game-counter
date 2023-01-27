let homeDisplay = document.getElementById('home-display')
let guestDisplay = document.getElementById('guest-display')
let resetBtn = document.getElementById('reset-btn')
let errorPara = document.getElementById('error-msg')

let homeScore = 0;
let guestScore = 0;

homeDisplay.textContent = homeScore;
guestDisplay.textContent = guestScore;

// function addOneHome(){
//     let newScore = homeScore += 1;
//     homeDisplay.textContent = newScore;
// }

// function addTwoHome(){
//     let newScore = homeScore += 2;
//     homeDisplay.textContent = newScore;
// }

// function addThreeHome(){
//     let newScore = homeScore += 3;
//     homeDisplay.textContent = newScore;
// }

// function addOneGuest(){
//     let newScore = guestScore += 1;
//     guestDisplay.textContent = newScore;
// }
// function addTwoGuest(){
//     let newScore = guestScore += 2;
//     guestDisplay.textContent = newScore;
// }
// function addThreeGuest(){
//     let newScore = guestScore += 3;
//     guestDisplay.textContent = newScore;
// }

function addHome(num){
    homeScore += num
    homeDisplay.textContent = homeScore
    resetBtn.removeAttribute('disabled');
}

function addGuest(num){
    guestScore += num
    guestDisplay.textContent = guestScore
    resetBtn.removeAttribute('disabled');
}

function reset(){ 
    homeScore = 0;
    guestScore = 0;
    homeDisplay.textContent = homeScore;
    guestDisplay.textContent = guestScore;
    resetBtn.setAttribute('disabled', true);
}


