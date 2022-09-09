import React, { useState } from "react";
import { useEffect } from "react";

export default function MainGame() {
  let [TicTac, setTicTac] = useState(["", "", "", "", "", "", "", "", ""]);

  function HandleClick(index) {
    placeMark(index);
    console.log({ index });
    let PlayerWon = checkWinner();
    if (PlayerWon) {
      Win();
      Evaluate(PlayerWon);
    } else if (checkDraw()) {
      Draw();
    }
  }

  let [currentPlayer, setcurrentPlayer] = useState("O");

  function nextPlayer() {
    let retnextPlayer;
    if (currentPlayer == "O") retnextPlayer = "X";
    else retnextPlayer = "O";
    setcurrentPlayer(retnextPlayer);
    return retnextPlayer;
  }
  /** @param Cell {number} */
  function placeMark(index) {
    if (TicTac[index] == "") {
      TicTac[index] = nextPlayer();
      setTicTac([...TicTac]);
    }
    console.log([...TicTac]);
  }

  let Winning_Combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // for (const iterator of object) {

  // }
  function checkWinner() {
    for (let combination of Winning_Combinations) {
      let CheckWinner = combination.map((index) => {
        return TicTac[index];
      });
      if (
        CheckWinner[0] == CheckWinner[1] &&
        CheckWinner[2] == CheckWinner[1]
      ) {
        return CheckWinner[0];
      }
    }
  }

  function checkDraw() {
    for (const element of TicTac) {
      if (element == "") return false;
    }
    return true;
  }

  let [Winnings, setWinnings] = useState("");
  let [Draws, setDraws] = useState("");
  
  let [DisplayO, setDisplayO] = useState(0)
  let [DisplayX, setDisplayX] = useState(0)

  function Win() {
    let selectWinner = nextPlayer() + " WINS";
    setWinnings( selectWinner);
  }

  function Draw() {
    let chooseDraw = "Its a Draw";
    setDraws(chooseDraw);
  }

  let localO = +localStorage.getItem("CountO") || 0;
  let localX = +localStorage.getItem("CountX") || 0;

  function Evaluate(selectWinner) {
    console.log(selectWinner)
    if (selectWinner == "O") {
      setDisplayO(DisplayO += 1)
      localStorage.setItem("localO", DisplayO);
    } else if (selectWinner == "X") {
      setDisplayX(DisplayX +=1);
      localStorage.setItem("localX", DisplayX);
    }
  }

  useEffect(()=>{
    let localO = +localStorage.getItem("localO") || 0;
    let localX = +localStorage.getItem("localX") || 0;
    setDisplayX(localX);
    setDisplayO(localO)
  }, [localO, localX]);

  function reSet() {
    window.localStorage.removeItem('localO');
    window.localStorage.removeItem('localX');
    setDisplayO(0)
    setDisplayX(0)
  }

  function restartGame(){
    setTicTac(["", "", "", "", "", "", "", "", ""]);
    setWinnings('');
    setDraws('');
  }

  return (
    <div>
      <h2>Tik Tak Game</h2>
      <div className="board">
        {TicTac.map((value, index) => (
          <div
            key={index}
            className="gridCell"
            onClick={() => HandleClick(index)}
          >
            {" "}
            {value}
          </div>
        ))}
      </div>
      <div className="display-Result">
        <div className="X-Wins">
          <div className="X">X</div>
          <div id="DispX">{DisplayX}</div>
        </div>
        <div className="O-Wins">
          <div id="DispO">{DisplayO}</div>
          <div className="O">O</div>
        </div>
        <button className="reSet" id="reset" onClick={reSet}>
          Reset Scores
        </button>
      </div>
      <div
        className={`winning-message ${Winnings ? "show" : ""}`}
       
      >
        <div data-winning-message-text>{Winnings}</div>
        <button id="restartButton" onClick={restartGame}>Restart</button>
      </div>
      <div
        className={`winning-message ${Draws ? "draw" : ""}`}
      
      >
        <div data-draw-message-text>{Draws}</div>
        <button onClick={restartGame}>Restart</button>
      </div>
      <footer>
        <small>All Rights Reserved. Marvel's Group of Company</small>
      </footer>
    </div>
  );
}
/**
 * in building this game, first design the layout grids
 * secondly, design the results div
 * make the cells clickable with hover
 * make the cells click once
 * make the cells output X or O
 * design the results
 * design the draw
 * update results
 */

//  let handleClick = (event) => {
//   console.log(event.currentTarget);
// };

// useEffect(() => {
//   let grids = document.querySelectorAll("[data-cell]");
//   grids.forEach((cell) => {
//     cell.addEventListener("click", handleClick, { once: true });
//   });
//   return () => {
//     grids.forEach((cell) => {
//       cell.removeEventListener("click", handleClick, { once: true });
//     });
//   };
// }, []);
