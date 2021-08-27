console.log("Tic Tac Toe is running.");

const game = (() => {
  const boardState = Array(9).fill("");
  let isRunning = false;
  let winner;
  let round = 1;

  const board = document.querySelector("main");
  board.addEventListener("click", handleBoardClick);

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    isRunning = true;
    game.player1 = document.getElementById("player1").value;
    game.player2 = document.getElementById("player2").value;
    form.classList.toggle("hidden");
  });

  function handleBoardClick(e) {
    if (!isRunning) {
      return;
    }
    if (e.target.tagName === "DIV" && e.target.innerText === "") {
      if (round % 2 !== 0) {
        game.player1.placeMark(e.target.dataset.index);
        if (checkWinner(game.player1.mark)) {
          winner = game.player1.name;
          display.setMessage(`${winner} wins!`);
        }
        round++;
      } else {
        game.player2.placeMark(e.target.dataset.index);
        if (checkWinner(game.player2.mark)) {
          winner = game.player2.name;
          display.setMessage(`${winner} wins!`);
        }
        round++;
      }
      if (round > 9 && !winner) {
        display.setMessage(`It's a draw!`);
      }
    }
  }

  function checkWinner(mark) {
    if (
      (boardState[0] === mark &&
        boardState[1] === mark &&
        boardState[2] === mark) ||
      (boardState[3] === mark &&
        boardState[4] === mark &&
        boardState[5] === mark) ||
      (boardState[6] === mark &&
        boardState[7] === mark &&
        boardState[8] === mark) ||
      (boardState[0] === mark &&
        boardState[3] === mark &&
        boardState[6] === mark) ||
      (boardState[1] === mark &&
        boardState[4] === mark &&
        boardState[7] === mark) ||
      (boardState[2] === mark &&
        boardState[5] === mark &&
        boardState[8] === mark) ||
      (boardState[0] === mark &&
        boardState[4] === mark &&
        boardState[8] === mark) ||
      (boardState[2] === mark &&
        boardState[4] === mark &&
        boardState[6] === mark)
    ) {
      board.removeEventListener("click", handleBoardClick);
      return true;
    }
  }

  function createPlayer(name, mark) {
    const placeMark = (index) => {
      document.querySelector(`[data-index="${index}"]`).innerText = mark;
      boardState[index] = mark;
    };
    return { name, mark, placeMark };
  }

  return {
    get player1() {
      return player1;
    },
    set player1(name) {
      player1 = createPlayer(name, "o");
    },
    get player2() {
      return player2;
    },
    set player2(name) {
      player2 = createPlayer(name, "x");
    },
    get winner() {
      return winner;
    },
  };
})();

const display = (() => {
  const message = document.querySelector(".message");

  const setMessage = (text) => {
    message.innerText = text;
    message.classList.toggle("hidden");
  };

  return { setMessage };
})();
