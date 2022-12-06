console.log("index.js is linked!")

//pointer pointing to number of exercise selection
const selection = document.querySelector('.dropdown-menu-select');
//pointer pointing to answer section of html
const answer = document.querySelector('.answer-text');

//Type of exercise
const exercise = () => {
    const exercise = Math.floor(Math.random() * 7);
    if (exercise === 0) {
        return '<a href="https://www.hybridcalisthenics.com/pushups/" target="_blank">Pushups</a>';
    } else if (exercise === 1) {
        return '<a href="https://www.hybridcalisthenics.com/legraises" target="_blank">Leg Raises</a>';
    } else if (exercise === 2) {
        return '<a href="https://www.hybridcalisthenics.com/squats" target="_blank">Squats</a>';
    } else if (exercise === 3) {
        return '<a href="https://www.hybridcalisthenics.com/pullups" target="_blank">Pullups</a>';
    } else if (exercise === 4) {
        return '<a href="https://www.hybridcalisthenics.com/bridges" target="_blank">Bridges</a>';
    } else if (exercise === 5) {
        return '<a href="https://www.realsimple.com/health/fitness-exercise/stairs-workout">Stair Steps</a>';
    } else if (exercise === 6) {
        return '<a href="https://www.healthline.com/health/fitness-exercise/jumping-jacks#how-to">Jumping Jacks</a>'
    } else if (exercise === 7) {
        return '<a href="https://us.myprotein.com/thezone/training/hula-hoop-workout-for-killer-abs-exercises-benefits-and-tips/">Jumping Jacks</a>'
    }
};

//random number for the set
const reps = () => {
    let reps = (Math.floor(Math.random() * (25 - 10 + 1) + 10));
    return reps;
};

//function to generate exercise and the set number
const set = (data) => {
    console.log(data);
    console.log(data.target);
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
        newExerciseHTML.setAttribute("class", "rounded-pill");
        newExerciseHTML.innerHTML = `A set of ${number} ${task}`;
        answer.appendChild(newExerciseHTML);
        console.log(number);
        console.log(newExerciseHTML);
    }
    selection.value = 0;
}

//event listener
selection.addEventListener("change", set);