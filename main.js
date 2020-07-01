const horizontalWin = () => {
    // Your code here to check for horizontal wins
    if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")){
      return true
    }
    if((board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")){
      return true
    }
    if((board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")){
      return true
    } 
    return false;
  }
  
  
  const verticalWin = () => {
    // Your code here to check for vertical wins
    if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")){
      return true
    }
    if((board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")){
      return true
    }
    if((board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")){
      return true
    }
  }
  
  const diagonalWin = () => {
    // Your code here to check for diagonal wins
    if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")){
      return true
    }
    if((board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")){
      return true
    }
  }
  
  const checkForWin = () => {
    // Your code here call each of the check for types of wins
    if(horizontalWin() || verticalWin() || diagonalWin()) {
      return true;
    } else {
      return false
    }
  }
  let numTurns = 0
  
  const ticTacToe = (row, column) => {
    // check that row and column are valid. (optional)
      // check that row and column are empty. (optional)
      // update the board
    board[row][column] = playerTurn;
    numTurns++; //numTurns = numTurns + 1;
    let winner = checkForWin();
      if(winner === true) {
        console.log("You Win!!")
        //returning true because game is over, player wins
        return true
      } else if (numTurns == 9) { 
        return true
      } else {
        if (playerTurn == "X") {
          playerTurn = "O";
      } else if (playerTurn == "O") {
            playerTurn = "X"
        }
      }
    // set the player turn to be the other player 
    // Your code here to place a marker on the board
    // then check for a win
    // Your code here to place a marker on the board
    // then check for a win
  }
  @@ -58,18 +109,19 @@ const getPrompt = () => {
    console.log("It's Player " + playerTurn + "'s turn.");
    rl.question('row: ', (row) => {
      rl.question('column: ', (column) => {
        ticTacToe(row, column);
        getPrompt();
        let gameOver = ticTacToe(row, column)
          if (gameOver == true) {
            console.log("Game Over!")
          } else { 
            getPrompt();
          }
      });
    });
  }
  
  
  // Unit Tests
  // You use them run the command: npm test main.js
  // to close them ctrl + C
  if (typeof describe === 'function') {
  
    describe('#ticTacToe()', () => {
      it('should place mark on the board', () => {
        ticTacToe(1, 1);
  @@ -96,7 +148,5 @@ if (typeof describe === 'function') {
      });
    });
  } else {
  
    getPrompt();
  
  } 