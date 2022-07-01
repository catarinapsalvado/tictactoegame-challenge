import React, { useState, useEffect } from "react";
import "../App.css";
import Squares from "./Squares";

function Board() {
  const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //In the beggining of the game all the squares are empyty, that's why I used the useState with an Array9 (number of squares) and fill them with empty strings
  //Insert the components here with the value and the clickOnSquare function
  // we put the value board[0] because it is the first index (square) on the board, so we put the values with the index of the board in all the squares components
  // a function clickOnSquare is triggered and we use the callback function choosesquare, that will only run wen we click the respective square
  const [board, setBoard] = useState(Array(9).fill(""));

  //We create this so the program will know whiche player is choosing the square
  const [player, setPlayer] = useState("X"); // The first player starts with an X

  //We will call this function and pass as an argument the square the user is clicking
  //We will updated our board. We will pass a map method. We want two things: the current value in the square and the index of that square

  const [result, setResult] = useState({ winner: null, state: null });

  useEffect(() => {
  /*    checkWinner();  */

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state === "won") {
    
    alert(`Congrats! YOU WON!`);}
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((value, i) => {
        //only one element is going to be changed - the element that it is equal to the square. that element needs to be empty to be changed

        if (i === square && value === "") {
          return player;
        } else {
          return value;
        } // the value that was in that square before
      })
    );

    // Now we need to change the players, so when one can play with an X the next one will play an O. For that we need to change the state
    //of the player
  };

  

  //We eill call this function everytime we make a move.
  // It loops through the winCombination array. For each combination that exists in combination array are we need to check
  //if they are filled by the same player
  //if the combination is not completed by the same player, then the foundwinning combination is false- We change winner to the player and the state to won
  /*  const checkWinner = () => {
    winCombination.forEach((line) => {
      const player1 = board[line[0]];
      
      let foundWinningCombination = true;
      winCombination.forEach((i) => {
        if (board[i] !== player1) {
          foundWinningCombination = false;
        }
      });

      if (foundWinningCombination) {
        setResult({ winner: player, state: "won" });
      }
    });
  }; */
 
  //For each index in the presentCombinaion we want to check if the index of the board is not equal to the player1r. if it is not
  // the same player it is not a winning

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Squares
            value={board[0]}
            clickOnSquare={() => {
              chooseSquare(0);
            }}
          />
          <Squares
            value={board[1]}
            clickOnSquare={() => {
              chooseSquare(1);
            }}
          />
          <Squares
            value={board[2]}
            clickOnSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Squares
            value={board[3]}
            clickOnSquare={() => {
              chooseSquare(3);
            }}
          />
          <Squares
            value={board[4]}
            clickOnSquare={() => {
              chooseSquare(4);
            }}
          />
          <Squares
            value={board[5]}
            clickOnSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Squares
            value={board[6]}
            clickOnSquare={() => {
              chooseSquare(6);
            }}
          />
          <Squares
            value={board[7]}
            clickOnSquare={() => {
              chooseSquare(7);
            }}
          />
          <Squares
            value={board[8]}
            clickOnSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Board;
