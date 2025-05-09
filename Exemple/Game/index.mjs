import typesgine from "typesgine-ascii";

console.clear();

// Game state
let playerX = 12; // Player's x position
let score = 0;
let gameOver = false;
const width = 24;
const height = 16;
let items = []; // Array to store falling items

// Item types: 1 = collectible (point), 2 = obstacle (damage)
function createItem() {
  return {
    x: Math.floor(Math.random() * width),
    y: 0,
    type: Math.random() > 0.3 ? 1 : 2
  };
}

// Initialize some items
for (let i = 0; i < 3; i++) {
  items.push(createItem());
}

const render = () => {
  // Create empty game board
  let board = Array(height)
    .fill()
    .map(() => Array(width).fill(0));

  if (!gameOver) {
    // Update items
    items.forEach(item => {
      item.y += 0.5; // Move items down
      if (item.y >= height) {
        items = items.filter(i => i !== item); // Remove items that reach bottom
        items.push(createItem()); // Add new item
      }
      
      // Check collision with player
      if (Math.floor(item.y) === height - 1 && item.x === playerX) {
        if (item.type === 1) {
          score += 10;
        } else {
          gameOver = true;
        }
      }
      
      // Render items
      if (item.y < height) {
        const y = Math.floor(item.y);
        if (item.type === 1) {
          board[y][item.x] = 3; // Collectible
        } else {
          board[y][item.x] = 4; // Obstacle
        }
      }
    });

    // Render player
    board[height - 1][playerX] = 1;
  }

  // Add score display
  if (gameOver) {
    const gameOverText = "Game Over! Score: " + score;
    for (let i = 0; i < gameOverText.length; i++) {
      board[7][6 + i] = gameOverText.charCodeAt(i);
    }
  } else {
    const scoreText = "Score: " + score;
    for (let i = 0; i < scoreText.length; i++) {
      board[0][1 + i] = scoreText.charCodeAt(i);
    }
  }

  return board;
};

const frameHandler = typesgine.FrameHandler.Handler((engineIo) => {
  engineIo.render(render(), width, height);
});

const inputHandler = typesgine.InputHandler.Handler((keyPress) => {
  if (!gameOver) {
    if (keyPress === "a" && playerX > 0) {
      playerX--; // Move left
    }
    if (keyPress === "d" && playerX < width - 1) {
      playerX++; // Move right
    }
  }
  if (keyPress === "q") {
    process.exit(); // Quit game
  }
});

new typesgine.EngineIo({
  fps: 10,
  frameHandler: frameHandler,
  callBackInput: inputHandler,
});