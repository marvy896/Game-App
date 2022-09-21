import React, { useState, useEffect } from "react";
import dice1 from "./diceImages/dice1.png";
import dice2 from "./diceImages/inverted-dice-2.png";
import dice3 from "./diceImages/inverted-dice-3.png";
import dice4 from "./diceImages/inverted-dice-4.png";
import dice5 from "./diceImages/inverted-dice-5.png";
import dice6 from "./diceImages/dice-six-faces-six.png";

export default function DiceGame() {
  let Dice = [
    { img: dice1, face: 1 },
    { img: dice2, face: 2 },
    { img: dice3, face: 3 },
    { img: dice4, face: 4 },
    { img: dice5, face: 5 },
    { img: dice6, face: 6 },
  ];

  let [gameDice, setGameDice] = useState([0, 0, 0, 0, 0]);
  let [selectedDice, setselectedDice] = useState([]);
  let [counter, setCounter] = useState(-1);

  function randomSelect() {
    if (counter == 3) {
      return setGameover(true) + "winner";
    }
    let dice = [];
    for (const _OldDice of gameDice) {
      let randomIndex = Math.floor(Math.random() * Dice.length);
      dice.push(randomIndex);
    }
    setGameDice(dice);
    setCounter(counter + 1);
    DiceCombination();
    console.log(counter);
  }

  useEffect(() => {
    randomSelect();
  }, []);
  let [Total, setTotal] = useState(0);
  function handleClick(clickedIndex) {
    let clicked = gameDice.splice(clickedIndex, 1);
    setselectedDice((prevState) => [...prevState, ...clicked]);
    console.log(clicked);
    let num = parseInt(clicked);
    setTotal(Total + num + 1);
    setGameDice([...gameDice]);
  }
  function DiceCombination(index) {
    Dice.forEach((Dice) => {
      for (let key in Dice) {
        console.log(`${key}: ${Dice[key]}`);
      }
    });
  }

  return (
    <div className="Dice-container">
      <h2>Lets Play the Dice</h2>
      <div>
        {gameDice.map((i, index) => (
          <img
            src={Dice[i]["img"]}
            key={index}
            width="100px"
            onClick={() => handleClick(index)}
          />
        ))}
        <div className="diceOutput">
          {selectedDice.map((i, index) => (
            <img src={Dice[i]["img"]} key={index} width="100px" />
          ))}
        </div>
        <div className="table-container">
          <div>Total Score {Total}</div>
          <button className="buttonDice" onClick={randomSelect}>
            Roll {counter}
          </button>
        </div>
      </div>
    </div>
  );
}
