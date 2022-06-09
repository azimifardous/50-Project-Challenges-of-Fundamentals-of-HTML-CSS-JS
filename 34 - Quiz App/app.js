// Let's store all our data
const anime = [{
    question: "In the anime series “Full Metal Alchemist”, what do Alchemists consider the greatest taboo?",
    a: "Human Sacrifice",
    b: "Human Chimera",
    c: "Human Transmutaion",
    d: "Human Sould Binding",
    correct: "c"
},
{
    question: "What year was “JoJo's Bizarre Adventure: Phantom Blood” first released?",
    a: "1978",
    b: "1987",
    c: "1999",
    d: "1998",
    correct: "b"
}, {
    question: "What year did “Attack on Titan” Season 2 begin airing?",
    a: "2019",
    b: "2016",
    c: "2017",
    d: "2020",
    correct: "c"
},
{
    question: "What is the last name of Edward and Alphonse in the Fullmetal Alchemist series?",
    a: "Smith",
    b: "Kuchiki",
    c: "Abaray",
    d: "Elric",
    correct: "d"
},
{
    question: "Who has the “Senbonzakura Kageyoshi” Power in its Bankai in Bleach series?",
    a: "Ichigo Kurisaki",
    b: "Byakuya Kuchiki",
    c: "Renji Abaray",
    d: "Toushiru Hitsugaya",
    correct: "b"
},
{
    question: "When was the first episode of Soul Eater released?",
    a: "2009",
    b: "2012",
    c: "2000",
    d: "2008",
    correct: "d"
},
{
    question: "The anime Attack on Titan was directed by Tetsurō Araki, the same person who directed the anime Highschool of the Dead.",
    a: "True",
    b: "False",
    c: "I don't know",
    d: "None of above",
    correct: "a"
},
{
    question: "Who is the main character with yellow hair in the anime Naruto?",
    a: "Minato Namikaze",
    b: "Naruto Uzumaki",
    c: "Yahiko",
    d: "Madara Uchiha",
    correct: "b"
},
{
    question: "What sport is being played in the Anime Eyeshield 21?",
    a: "Basketball",
    b: "American Football",
    c: "Baseball",
    d: "Volley Ball",
    correct: "b"
},
{
    question: "In “One Piece”, what does “the Pirate King” mean to the captain of the Straw Hat Pirates?",
    a: "Freedom",
    b: "Treasure",
    c: "Ruler of the Sea",
    d: "None of above",
    correct: "a"
}
];
const tech = [{
    question: "How many computer languages are in use?",
    a: "2000",
    b: "5000",
    c: "20",
    d: "50",
    correct: "a"
},
{
    question: "Which of these is not an early computer?",
    a: "ENIAC",
    b: "UNIVAC",
    c: "NASA",
    d: "SAGE",
    correct: "c"
}, {
    question: "Who founded Apple Computer?",
    a: "Stephen Fry",
    b: "Bill Gates",
    c: "Steve Jobs",
    d: "Stephen Hawking",
    correct: "c"
},
{
    question: "Which of these is not a peripheral, in computer terms?",
    a: "Keyboard",
    b: "Monitor",
    c: "Mouse",
    d: "Motherboard",
    correct: "d"
},
{
    question: "Which of the following is not one of the early “protocols,” or ways to use the Internet?",
    a: "Blogging",
    b: "Telnet",
    c: "Gopher",
    d: "FTP",
    correct: "a"
},
{
    question: "What does the Internet prefix WWW stand for?",
    a: "Wide Width Wickets",
    b: "World Wide Web",
    c: "World Wide Weather",
    d: "Western Washington World",
    correct: "b"
},
{
    question: "Who is the maker of the iPhone?",
    a: "Microsoft",
    b: "IBM",
    c: "Apple",
    d: "Zenith",
    correct: "c"
},
{
    question: "Which of these is a file format for digital images?",
    a: "CIA",
    b: "JPG",
    c: "ICBM",
    d: "IBM",
    correct: "b"
},
{
    question: "What is the name for a computer pointing device?",
    a: "A Mouse",
    b: "Sound Card",
    c: "Ram",
    d: "Monitor",
    correct: "a"
},
{
    question: "Which of these is not a kind of computer?",
    a: "Apple",
    b: "Lenovo",
    c: "Toshiba",
    d: "Lada",
    correct: "d"
}
];
const movie = [{
    question: "Who was honoured for film and television achievements at the MTV Movie & TV Awards 2022?",
    a: "Jennifer Lopez",
    b: "Tom Cruise",
    c: "Will Smith",
    d: "Angelina Jolie",
    correct: "a"
},
{
    question: "'Mujib - The Making of a Nation' movie is jointly produced by which countries?",
    a: "Bangladesh and Nepal",
    b: "Bangladesh and China",
    c: "Bangladesh and India",
    d: "Bangladesh, Myanmar and India",
    correct: "c"
}, {
    question: "Which telescope is set to be used to produce a movie of black hole movements?",
    a: "Event Horizon Telescope",
    b: "Hubble Telescope",
    c: "South African Large Telescope",
    d: "Gran Telescopio",
    correct: "a"
},
{
    question: "Who played the lead character in the movie “Bandit Queen”?",
    a: "Sonali Saha",
    b: "Rupa Ganguly",
    c: "Seema Biswas",
    d: "Sangeeta Mahapatra",
    correct: "c"
},
{
    question: "Which movie won the Oscar Award 2022 for Best Picture?",
    a: "King Richard",
    b: "The Power of Dog",
    c: "CODA",
    d: "West Side Story",
    correct: "c"
},
{
    question: "Which Tom's first leading role was in the 1983 film ”Risky Business”?",
    a: "Cruise",
    b: "Drift",
    c: "Float",
    d: "Coast",
    correct: "a"
},
{
    question: "How many films have been made in the Harry Potter series?",
    a: "2",
    b: "8",
    c: "20",
    d: "11",
    correct: "b"
},
{
    question: "Who played a professional boxer in a 2004 film?",
    a: "Paris Hilton",
    b: "Julia Roberts",
    c: "Hilary Swank",
    d: "Matt Damon",
    correct: "c"
},
{
    question: "The TV series ”Peaky Blinders”, aired first in 2013, is based on late 19th and early 20th century urban youth gangs in what city?",
    a: "Chicago, USA",
    b: "Manchester, UK",
    c: "Birmingham, UK",
    d: "Marseilles, France",
    correct: "c"
},
{
    question: "In the film Spiderman (2004), which New York newspaper does Peter go go take photographs for?",
    a: "The Daily Blog",
    b: "The Daily Planet",
    c: "The Daily Times",
    d: "The Daily Bugle",
    correct: "d"
}
];

// Let's start the game
const categoryPageEl = document.querySelector('[data-category]');
const startPageEl = document.querySelector('[data-start]');
const quizPageEl = document.querySelector('[data-quiz]');
document.getElementById("play-btn").addEventListener("click", () => {
    startPageEl.classList.add("hide");
    categoryPageEl.classList.remove("hide");
});

// Let's choose a category
const categories = document.querySelectorAll(".category");
let typeData;
categories.forEach((category) => {
    // Used pointer event because with focus event there was some issues, which were not working on ipad touch screen devices
    category.addEventListener("pointerdown", () => {
        if (category.value === "movie") {
            typeData = "movie"
        } else if (category.value === "tech") {
            typeData = "tech"

        } else if (category.value === "anime") {
            typeData = "anime"

        }
    })

});


const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
    if (typeData === "movie") {
        renderQuiz(movie)
    } else if (typeData === "tech") {
        renderQuiz(tech)
    } else if (typeData === "anime") {
        renderQuiz(anime)
    }
})

// Let's make the renderQuiz function and grab all the required elements
const questionEl = document.querySelector('[data-question]');
const questionTracker = document.getElementById("question--tracker")
const a_text = document.querySelector(".a");
const b_text = document.querySelector(".b");
const c_text = document.querySelector(".c");
const d_text = document.querySelector(".d");
let currentQuiz = 0;
let currentQuestion = 1;
let currentdataQuiz;

function renderQuiz(dataQuiz) {
    categoryPageEl.classList.add("hide");
    quizPageEl.classList.remove("hide");
    startBtn.classList.add("hide");
    currentdataQuiz = dataQuiz[currentQuiz]
    questionEl.innerHTML = currentdataQuiz.question;
    questionTracker.innerHTML = `${currentQuestion} / ${dataQuiz.length}`
    a_text.innerHTML = currentdataQuiz.a;
    b_text.innerHTML = currentdataQuiz.b;
    c_text.innerHTML = currentdataQuiz.c;
    d_text.innerHTML = currentdataQuiz.d;
}

// Let's check the selected answer of the user for each question
const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");
const answers = document.querySelectorAll(".response");
const spanValues = document.querySelectorAll(".value");
const answersArr = Array.from(answers);
let isCheck = false;

answersArr.forEach((answer) => {
    answer.addEventListener("click", () => {
        isCheck = true
    })
});
checkBtn.addEventListener("click", () => {
    if (isCheck === true) {
        showResult();
        countCorrectResponses()
        nextBtn.removeAttribute("disabled")
    }
});

function showResult() {
    answersArr.map(element => element.setAttribute("disabled", ""));
    const findCorrect = answersArr
        .find(correct => correct.id === currentdataQuiz.correct);

    if (findCorrect.id === "a") {
        spanValues[0].classList.add("correct")
    } else {
        spanValues[0].classList.add("incorrect")
    };
    if (findCorrect.id === "b") {
        spanValues[1].classList.add("correct")
    } else {
        spanValues[1].classList.add("incorrect")
    };
    if (findCorrect.id === "c") {
        spanValues[2].classList.add("correct")
    } else {
        spanValues[2].classList.add("incorrect")
    };
    if (findCorrect.id === "d") {
        spanValues[3].classList.add("correct")
    } else {
        spanValues[3].classList.add("incorrect")
    };

}

// Let's render out the rest of the questions
nextBtn.addEventListener("click", () => {
    currentQuiz++;
    currentQuestion++;
    if (currentQuiz < 10) {
        if (typeData === "movie") {
            renderQuiz(movie)
        } else if (typeData === "tech") {
            renderQuiz(tech)
        } else if (typeData === "anime") {
            renderQuiz(anime)
        }
    } else {
        showScore()
    }

    if (currentQuestion === 10) nextBtn.innerHTML = "Show Result"
    resetCheck();
})


function resetCheck() {
    isCheck = false
    answersArr.map(element => element.removeAttribute("disabled", ""));
    answersArr.map(element => element.checked = false);
    nextBtn.setAttribute("disabled", "")
    spanValues[0].classList.remove("incorrect")
    spanValues[0].classList.remove("correct")
    spanValues[1].classList.remove("correct")
    spanValues[1].classList.remove("incorrect")
    spanValues[2].classList.remove("correct")
    spanValues[2].classList.remove("incorrect")
    spanValues[3].classList.remove("correct")
    spanValues[3].classList.remove("incorrect")
}

// Let's count how many questions did the user answered correctly
let score = 0;
const correctEl = document.getElementById("score-el");
const scoreEl = document.querySelector('[data-circle]')
const totalEl = document.querySelector('[data-total]')
function countCorrectResponses() {
    answersArr.forEach((answer) => {
        if (answer.checked) {
            if (answer.id === currentdataQuiz.correct) {
                score++;
            }
        }
    });
}

function showScore() {
    document.querySelector(".quiz").classList.add("hide");
    document.querySelector(".buttons").classList.add("hide");
    document.querySelector(".score").classList.remove("hide");
    document.querySelector("#try-again").addEventListener("click", () => {
        location.reload()
    })

    if (score !== 0) {
        correctEl.innerHTML = ` ${score} / 10 Questions.`
        scoreEl.innerHTML = score * 10
    } else {
        totalEl.innerHTML = `You didn't answer anything correctly. oopps...😢`
        scoreEl.innerHTML = 0
    }
}

// About the game info
const aboutBtn = document.getElementById("about-btn");
const aboutPageEl = document.querySelector("[data-about]")
const backbtn = document.createElement("button");
aboutBtn.addEventListener("click", () => {
    startPageEl.classList.add("hide");
    aboutPageEl.classList.remove("hide")
    backbtn.innerHTML = `<i class="fa-solid fa-arrow-left"></i> Back`
    backbtn.classList.add("btn")
    backbtn.classList.add("btn-primary")
    backbtn.style.width = "50%"
    backbtn.style.marginTop = "2rem"
    backbtn.style.marginBottom = "5rem"
    aboutPageEl.appendChild(backbtn)
})

backbtn.addEventListener("click", () => {
    startPageEl.classList.remove("hide");
    aboutPageEl.classList.add("hide")
})