//~ Letters
const letters = "abcdefghijklmnopqrstuvwxyz#+";
let arrLetters = Array.from(letters);

//~ Array From Letters String
let lettersCont = document.querySelector(".letters");

//? Generate Letters
arrLetters.forEach((letter) => {
  let span = document.createElement("span");
  let letterText = document.createTextNode(letter);
  span.append(letterText);
  span.classList.add("letter-box");
  lettersCont.append(span);
});

//~ Object Of Words + Category
const words = {
  programming: [
    "php",
    "JavaScript",
    "go",
    "scala",
    "fortran",
    "ruby",
    "mysql",
    "python",
    "C++",
    "C#",
    "C",
    "Laravel",
    "Java",
  ],
  movies: [
    "Prstige",
    "Inception",
    "Parasite",
    "Lucie",
    "Whiplash",
    "Memento",
    "Hunter",
    "Legend",
    "nun",
    "It",
    "Ocean threaten",
    "God Father",
    "Batman",
    "Joumanji",
    "Fast And Furious",
  ],
  people: [
    "Elon Mask",
    "Cristiano Ronaldo",
    "Billie Eilish",
    "Albret Einstein",
    "Bell Gattse",
    "Wille Smith",
    "Lienol Messi",
    "Eminem",
    "Boten",
    "Hetlar",
    "Stalen",
    "Prophit Mohammed",
    "Addem",
    "Dua Lipa",
    "Ropel",
    "Youssef AlShrif"
  ],
  countries: [
    "Palastine",
    "Syria",
    "UK",
    "China",
    "South Korea",
    "Russia",
    "Portugal",
    "Turcky",
    "France",
    "Germmany",
    "Lebanon",
    "Mexico",
    "Italy",
    "Spain",
    "Japan",
  ],
};

///////////////////////////////////////////////////////////////////////////////////////////////////////
//~ Get Random Property
let allKeys = Object.keys(words);
console.log(allKeys);
//? Random Number Depend On Keys Length
let randomPropNum = Math.floor(Math.random() * allKeys.length);
console.log(randomPropNum);

//? Category
let randomPropName = allKeys[randomPropNum];
console.log(randomPropName);

//? Category Words (Array)
let randomPropValue = words[randomPropName];
console.log(randomPropValue);

//? Random Number Depend On Words
let randomValueNum = Math.floor(Math.random() * randomPropValue.length);
console.log(randomValueNum);

//? The Choosen Words
let randomWord = randomPropValue[randomValueNum];
console.log(randomWord);
///////////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector(".game-info .category span").innerHTML = randomPropName;

let lettersToGuess = document.querySelector(".letters-guess");

const letters_Space = Array.from(randomWord);

letters_Space.forEach((letter) => {
  let span = document.createElement("span");

  //~ If Letter Is Space
  if (letter === " ") span.classList.add("with-space");
  lettersToGuess.appendChild(span);
});

let guessSpans = document.querySelectorAll(".letters-guess span");
let wrongAttempts = 0;
let correctAttempts = 0;

let theDraw = document.querySelector(".hangman-draw");

//? Handle Clicking On Letters
document.addEventListener("click", (e) => {
  //~ Set Chose Status
  let theSatus = false;

  if (e.target.classList.contains("letter-box")) {
    e.target.classList.add("clicked");
    let clickedLetter = e.target.innerHTML.toLowerCase();
    let ChoosenWord = Array.from(randomWord.toLowerCase());

    ChoosenWord.forEach((wordLetter, wordsIndex) => {
      if (clickedLetter == wordLetter) {
        theSatus = true;

        guessSpans.forEach((spans, spanIndex) => {
          if (wordsIndex == spanIndex) {
            spans.innerHTML = clickedLetter;
            correctAttempts++;
          }
        });
      }
    }); //=> Out The Loop

    if (theSatus == false) {
      wrongAttempts++;
      theDraw.classList.add(`wrong-${wrongAttempts}`);
      //! Play Faild Sound
      document.getElementById("faild").play();
      if (wrongAttempts == 8) {
        endGameF();
        lettersCont.classList.add("finished");
      }
    } else {
      if (correctAttempts == randomWord.split("").length) {
        endGameS();
      }
      document.getElementById("success").play();
    }
  }
});

function endGameF() {
  let popup = document.createElement("div");
  popup.innerHTML = `<h3>Game Over</h3><p>The Word Is <span>${randomWord}</span></p>`;

  popup.classList.add("popup");
  document.body.appendChild(popup);
}

function endGameS() {
  let popup = document.createElement("div");
  popup.innerHTML = `<h3>🎉 You Win 🎉</h3><p>The Word Is <span>${randomWord}</span></p>`;

  popup.classList.add("popup");
  document.body.appendChild(popup);
}
