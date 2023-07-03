import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website 'Facebook' launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of Harry Potter in the movie?",
      answers: [
        {
          text: "Johnny Depp",
          correct: false,
        },
        {
          text: "Leonardo DiCaprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Radcliffe",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is the capital city of France?",
      answers: [
        {
          text: "Paris",
          correct: true,
        },
        {
          text: "London",
          correct: false,
        },
        {
          text: "Rome",
          correct: false,
        },
        {
          text: "Berlin",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which planet is known as the Red Planet?",
      answers: [
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Saturn",
          correct: false,
        },
        {
          text: "Uranus",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who painted the Mona Lisa?",
      answers: [
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Michelangelo",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which country won the FIFA World Cup in 2018?",
      answers: [
        {
          text: "Brazil",
          correct: false,
        },
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "France",
          correct: true,
        },
        {
          text: "Spain",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who wrote the novel 'Pride and Prejudice'?",
      answers: [
        {
          text: "Jane Austen",
          correct: true,
        },
        {
          text: "Charlotte Bronte",
          correct: false,
        },
        {
          text: "Emily Bronte",
          correct: false,
        },
        {
          text: "Virginia Woolf",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the chemical symbol for the element Gold?",
      answers: [
        {
          text: "Go",
          correct: false,
        },
        {
          text: "Au",
          correct: true,
        },
        {
          text: "Ag",
          correct: false,
        },
        {
          text: "Gd",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who is the author of the 'Harry Potter' book series?",
      answers: [
        {
          text: "J.R.R. Tolkien",
          correct: false,
        },
        {
          text: "J.K. Rowling",
          correct: true,
        },
        {
          text: "C.S. Lewis",
          correct: false,
        },
        {
          text: "Stephenie Meyer",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which continent is the largest by land area?",
      answers: [
        {
          text: "Africa",
          correct: false,
        },
        {
          text: "Asia",
          correct: true,
        },
        {
          text: "North America",
          correct: false,
        },
        {
          text: "Europe",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who invented the telephone?",
      answers: [
        {
          text: "Alexander Graham Bell",
          correct: true,
        },
        {
          text: "Thomas Edison",
          correct: false,
        },
        {
          text: "Nikola Tesla",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which country is known as the 'Land of the Rising Sun'?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "Japan",
          correct: true,
        },
        {
          text: "South Korea",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What is the chemical symbol for the element Oxygen?",
      answers: [
        {
          text: "Ox",
          correct: false,
        },
        {
          text: "O",
          correct: true,
        },
        {
          text: "Om",
          correct: false,
        },
        {
          text: "Oi",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        {
          text: "William Shakespeare",
          correct: true,
        },
        {
          text: "Arthur Miller",
          correct: false,
        },
        {
          text: "Tennessee Williams",
          correct: false,
        },
        {
          text: "Samuel Beckett",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
