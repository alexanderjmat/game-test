class Game {
    constructor(board) {
        this.gameBoard = [];
        this.height = board;
        this.width = board;
        for (let x = 0; x < board; x++) {
            this.gameBoard.push([]);
            for (let y = 0; y < board; y++) {
                this.gameBoard[x].push([])
            }
        }



    }

}

const test = new Game(8);