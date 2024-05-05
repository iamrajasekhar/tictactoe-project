# Tic Tac Toe

Welcome to Tic Tac Toe, a simple web-based game implemented in Java for the backend logic and HTML, CSS, and JavaScript for the frontend interface.

## Overview

Tic Tac Toe is a classic game where two players take turns marking spaces in a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

This project provides a simple implementation of Tic Tac Toe, allowing users to play the game in a web browser.

## Project Structure

The project is structured as follows:

```
tictactoe/
│
├── backend/
│   ├── src/
│   │   └── Game.java
│   └── README.md
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
│
├── README.md
└── .gitignore
```

- **backend/**: Contains the backend Java code for the Tic Tac Toe game logic.
- **frontend/**: Contains the frontend HTML, CSS, and JavaScript code for the game interface.
- **README.md**: Main README file providing instructions and overview.
- **.gitignore**: Gitignore file to exclude unnecessary files from version control.

## Getting Started

To play the Tic Tac Toe game, follow these steps:

1. Clone the repository to your local machine:

    ```
    git clone https://github.com/yourusername/tictactoe.git
    ```

2. Open the `frontend/index.html` file in a web browser to start playing the game.

## How to Play

- The game starts with an empty 3x3 grid.
- Players take turns marking empty cells with their respective symbols ('X' or 'O').
- The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins the game.
- If all cells are filled and no player has won, the game ends in a draw.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
