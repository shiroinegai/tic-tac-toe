console.log("Tic Tac Toe is running.");

const game = (() => {
  const board = Array(9).fill("");

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    game.player1 = document.getElementById("player1").value;
    game.player2 = document.getElementById("player2").value;
  });

  function createPlayer(name, mark) {
    const placeMark = () => {
      console.log(`${name} placed ${mark}`);
    };
    return { name, placeMark };
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
  };
})();

const display = (() => {
  const message = document.querySelector(".message");

  const setMessage = (text) => {
    message.innerText = text;
  };

  return { setMessage };
})();
