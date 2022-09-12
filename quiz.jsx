import React, { useState } from "react";

export default function Quiz() {
let questions = [
    {
        questionText: 'What is JavaScript?',
        answerOptions: [
            { answerText: 'A Cascading tool for Html', isCorrect: false },
            { answerText: 'A low Level Language', isCorrect: false },
            { answerText: 'JavaScript is a very powerful client-side scripting language.', isCorrect: true },
            { answerText: 'Just a Machine Language', isCorrect: false },
        ],
    },
    {
        questionText: 'What are JavaScript Data Types Except?',
        answerOptions: [
            { answerText: 'Number', isCorrect: false },
            { answerText: 'Strings', isCorrect: true },
            { answerText: 'Variable', isCorrect: false },
            { answerText: 'Boolean', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the use of isNaN function?',
        answerOptions: [
            { answerText: 'isNan function returns true if the argument is not a number; otherwise, it is false.', isCorrect: true },
            { answerText: ' it iss that which can be derived by dividing negative number by zero.', isCorrect: false },
            { answerText: 'Undeclared variables are those that do not exist in a program and are not declared', isCorrect: false },
            { answerText: 'you change to a new line when not within a string statement', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
];

let [currentQuestion, setCurrentQuestion] = useState(0);
let [showScore, setShowScore] = useState(false);
let [score, setScore] = useState(0);

let handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
        setScore(score + 1);
    }

    let nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
};


return (
    <div className='app'>
        {showScore ? (
            <div className='score-section'>
                You scored {score} out of {questions.length}
            </div>
        ) : (
            <>
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className='question-text'>{questions[currentQuestion].questionText}</div>
                </div>
                <div className='answer-section'>
                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                        <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                    ))}
                </div>
            </>
        )}
    </div>
);
}
// 
//     /** @param {SubmitEvent} e **/
//     function ChooseAnswer(e){
//         e.preventDefault()
//         console.log("hello")
//         console.log(e)
//     }
//     let Answers =[];  
//   return (
//     <div>
//       <h2>Questions on Javascript</h2>
//       <form onSubmit={ChooseAnswer}>
//         <ol>
//           <li>
//             What is JavaScript1
//             <ol>
//               <li type="a"> <input type="radio" id="html" name="question1" value="a"/><label for="html">Its an HLL</label><br/></li>
//               <li type="a"> <input type="radio" id="html2" name="question1" value="b"/><label for="html2">Its an LLL</label><br/></li>
//               <li type="a"> <input type="radio" id="html3" name="question1" value="c"/><label for="html3">Its an Object</label><br/></li>
//               <li type="a"> <input type="radio" id="html4" name="question1" value="d"/><label for="html4">Its an Array</label><br/></li>
//             </ol>
//           </li>
//         </ol>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }
