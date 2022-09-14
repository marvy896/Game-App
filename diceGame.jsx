import React, { useState, useEffect } from "react";
import dice1 from "./diceImages/dice1.png";
import dice2 from "./diceImages/inverted-dice-2.png";
import dice3 from "./diceImages/inverted-dice-3.png";
import dice4 from "./diceImages/inverted-dice-4.png";
import dice5 from "./diceImages/inverted-dice-5.png";
import dice6 from "./diceImages/dice-six-faces-six.png";

export default function DiceGame() {
  let Dice = [dice1, dice2, dice3, dice4, dice5, dice6];
  // let [gameDice,setGameDice] = useState('');
  //let [gamedice2, setGameDice2] =useState("")
  
  let [gameDice, setGameDice] = useState([0, 0, 0,0,0]);
  function randomSelect() {
    let dice = [];

    for (let index = 0; index < gameDice.length; index++) {
      let randomIndex = Math.floor(Math.random() * Dice.length);
      dice.push(randomIndex);
    }
    setGameDice(dice);

    console.log(gameDice);
  }
  useEffect(() => {
    randomSelect();
  }, []);
  return (
    <div>
      <h2>Lets Play the Dice</h2>
      <div>
        {/* <div>{gameDice}</div> */}
        {gameDice.map((img, index) => (
          <img src={Dice[img]} key={index} width="100px" className="DiceImg" />
        ))}

        <button onClick={randomSelect}>Roll</button>
      </div>
    </div>
  );
}
