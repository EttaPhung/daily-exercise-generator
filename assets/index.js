console.log("index.js is linked!")

//pointer pointing to number of exercise selection
const selection = document.querySelector('.dropdown-menu');
//pointer pointing to answer section of html
const answer = document.querySelector('.answer-text');

//Type of exercise
const exercise = () => {
    const exercise = Math.floor(Math.random() * 7);
    if (exercise === 0) {
        return 'Pushups';
    } else if (exercise === 1) {
        return 'Leg Raises';
    } else if (exercise === 2) {
        return 'Squats';
    } else if (exercise === 3) {
        return 'Pullups';
    } else if (exercise === 4) {
        return 'Bridges';
    } else if (exercise === 5) {
        return 'Stairs Steps'
    } else if (exercise === 6) {
        return 'Jumping Jacks'
    } else if (exercise === 7) {
        return 'Hula Hoops'
    }
};

//random number for the set
const reps = () => {
    let reps = Math.ceil(Math.random() * 25);
    return reps;
};

//function to generate exercise and the set number
const set = (data) => {
    let number = data.target.value;
    if (number === 0) {
        return;
    } else {
        result(number);
    }
}

//change html to show exercise
const result = (number) => {
    answer.innerHTML = `<p>Your exercise for the day will be: </p>`;
    for (i = 0; i < number; i++) {
        let task = exercise();
        let number = reps();
        let newExerciseHTML = document.createElement("p");
        newExerciseHTML.innerHTML = `A set of ${number} ${task}`;
        answer.appendChild(newExerciseHTML);
        console.log(number);
        console.log(newExerciseHTML);
    }
}

//event listener
selection.addEventListener("change", set);