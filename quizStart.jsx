import React from 'react'
import Quiz from "./quiz";

export default function QuizStart() {

  return (
    <div className='startGame'>
        <h3>This is a quiz, <br/> Click on Start to begin Test</h3>
        <div className='startGamein'>
             <a href ="/quiz">Start Quiz</a>
        </div>
    </div>
  )
}
