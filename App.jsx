import React, { Component } from "react";
import About from "./about";
import NavBar from "./NavBar";
import MainGame from "./MainGame";
import Converter from "./converter";
import Todo from "./todo";
import QuizStart from "./quizStart";
import Quiz from "./quiz";
import DiceGame from "./diceGame";

export default function App() {
  let component;
  switch (window.location.pathname) {
    case "/MainGame":
      component = <MainGame />;
      break;
    case "/converter":
      component = <Converter />;
      break;
      case "/todo":
      component = <Todo />;
      break;
      case "/quizStart":
      component = <QuizStart />;
      break;
      case "/quiz":
      component = <Quiz />;
      break;
      case "/diceGame":
        component = <DiceGame />;
        break;
    case "/about":
      component = <About />;
      break;
  }
  return (
    <>
    <div className="AppHeader">
      <h1>My First Game App</h1>
      <NavBar />
    </div>
    {component}
    </>
  );
}
//to build a web page containing games
/**
 * The web page should contain a header
 * The header should be contains Heading, NAVBAR,
 */
// the design layout of the webApp
// the games {TikTac, Hangman, ToDo List}
/**
 * 1. To build a GAME
 *
 *  the design of the game
 *  the logic of the games
 *  the results of the game
 * NOW TO THE TIK TAC TOE GAME
 *  The design should hava a board containing 9 cells with boundaries
 *      each cell will have an id
 *  the game should have a result indicatorfor (LOOSE, WIN and DRAW)
 *  the game will have a score board that outputs the results
 *
 * finally
 * We need a Router to be able to navigate us to the page
 */
