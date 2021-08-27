console.log("Tic Tac Toe is running.");

const game = (() => {
  const boardState = Array(9).fill("");
  let round = 1;

  const board = document.querySelector("main");
  board.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.tagName === "DIV" && e.target.innerText === "") {
      if (round % 2 !== 0) {
        game.player1.placeMark(e.target.dataset.index);
        round++;
      } else {
        game.player2.placeMark(e.target.dataset.index);
        round++;
      }
    }
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    game.player1 = document.getElementById("player1").value;
    game.player2 = document.getElementById("player2").value;
    form.classList.toggle("hidden");
  });

  function createPlayer(name, mark) {
    const placeMark = (index) => {
      document.querySelector(`[data-index="${index}"]`).innerText = mark;
      boardState[index] = mark;
    };
    return { name, mark, placeMark };
  }

  return {
    get board() {
      return board;
    },
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
  };
})();

const display = (() => {
  const message = document.querySelector(".message");

  const setMessage = (text) => {
    message.innerText = text;
  };

  return { setMessage };
})();
