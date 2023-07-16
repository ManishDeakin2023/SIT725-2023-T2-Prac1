function changeText(){
    let potentialTexts = ['Computer Networks','Programming', 'Blockchain', 'Cyber-Security', 'IoT'];
    let randomNumber = getRandomNumber(0, potentialTexts.length - 1);
    textToChangeto = potentialTexts[randomNumber];
    document.getElementById('header').innerHTML = textToChangeto;
}

function getRandomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}