import React, { useState, useEffect } from "react";
import dice1 from "./diceImages/dice1.png"
import dice2 from "./diceImages/inverted-dice-2.png"
import dice3 from "./diceImages/inverted-dice-3.png"
import dice4 from "./diceImages/inverted-dice-4.png"
import dice5 from "./diceImages/inverted-dice-5.png"
import dice6 from "./diceImages/dice-six-faces-six.png"


export default function DiceGame() {
    let Dice = [dice1,dice2,dice3,dice4,dice5,dice6];
    let [gameDice,setGameDice] = useState('');
    let [gamedice2, setGameDice2] =useState("")
        
        function randomSelect(){
        let randomIndex = Math.floor(Math.random() * Dice.length);
        let randomIndex2 = Math.floor(Math.random() * Dice.length);
        setGameDice(randomIndex)
        setGameDice2(randomIndex2)
    }

  return (
    <div>
      <h2>Lets Play the Dice</h2>
      <div>
        {/* <div>{gameDice}</div> */}
        <img src={Dice[gameDice]} alt='' width="300px" className="DiceImg"/>
        <img src={Dice[gamedice2]} alt='' width="300px" className="DiceImg"/>
        <button onClick={randomSelect}>Roll</button>
      </div>
    </div>
  );
}
