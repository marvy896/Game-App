import React from 'react'

export default function NavBar() {
  return (
    <nav className="Nav">
        <a href="/MainGame" className ="Site-title">Game Hub</a>
        <ul>
          <li>
            <a href="/MainGame">TikTac Game</a>
            </li>
            <li>
              <a href ="/converter">Converter</a>
            </li>
            <li>
              <a href ="/todo">ToDo List</a>
            </li>
            <li>
              <a href ="/quizStart">Quiz</a>
            </li>
            <li>
            <a href="/about">About</a>
            </li>
        </ul>
      </nav>
  )
}
  