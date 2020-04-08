let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let startButton = document.getElementById('start');
let currentlyPlaying = true;
let currentCounter = document.getElementById('currentStreakCounter');
let currentStreak = 0;
let bestCounter = document.getElementById('bestStreakCounter');


const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
};

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
};

const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win')
        streakCounter('increment')
    } else if (isBot(door)) {
        gameOver()
        streakCounter('reset')
    }
};


const randomChoreDoorGenerator = () => {
let choreDoor = Math.floor(Math.random() * numClosedDoors)
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }   
};

doorImage1.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
    playDoor(doorImage1);
    }
};

doorImage2.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
    playDoor(doorImage2);
    }
};

doorImage3.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
    playDoor(doorImage3);
    }
};

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!'
    currentlyPlaying = true;
    randomChoreDoorGenerator();
    
};

startButton.onclick = () => {
    if (!currentlyPlaying) {
    startRound()
    }
};

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?'
    } else {
        startButton.innerHTML = 'Game over! Play again?'
    }
    currentlyPlaying = false;  
};

const streakCounter = (count) => {
    if (count === 'increment'){
        currentCounter.innerHTML ++
        newRecord();
    } else if (count === 'reset') {
        currentCounter.innerHTML = 0
        newRecord();
    }
};

const newRecord = () => {
    if (currentCounter.innerHTML > bestCounter.innerHTML) {
        return bestCounter.innerHTML = currentCounter.innerHTML
    }
};

startRound();

