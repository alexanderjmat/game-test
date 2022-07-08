class Game {
    constructor(board, coordinates) {
        this.gameBoard = [];
        this.size = board;
        this.table = $('<table id="table"></table>')
        this.coordinates = coordinates;
        this.filledSpots = []

        for (let x = 0; x < board; x++) {
            this.gameBoard.push([]);
            const $tr = $(`<tr id=${x + 1}></tr>`);
            this.table.append($tr);
            for (let y = 0; y < board; y++) {
                this.gameBoard[x].push(0)
                const $td = $(`<td id=${x + 1}-${y + 1}><div class="p${x + 1} ${y + 1}"></div></td>`)
                $tr.append($td);
            }
        }
        const parse = this.table.children().children()
        
        for (let i = 0; i < parse.length; i++) {
            const id = parse[i].id
            const div = parse.children()[i]
            for (let j = 0; j < this.coordinates.length; j++) {
                const coord = `${this.coordinates[j][0]}-${this.coordinates[j][1]}`
                if (id == coord) {
                    div.style.backgroundColor = "black"
                    div.id = `${j}`
                    div.classList.add("on")

                    

                }

            }
        }

        for (let i = 0; i < this.gameBoard.length; i++) {
            const divs = parse.children()[i]
            let y = divs.className[1]
            let x = divs.className[3]
            this.filledSpots.push([]);
            for (let j = 0; j < this.gameBoard.length; j++) {
                if (x - 1 == i) {
                    this.filledSpots[i].push(document.getElementsByClassName(`p${i + 1} ${j + 1}`))

                }

            }
            

        }



        $('body').append(this.table)

    }

}


const test = new Game(8, [[5, 4], [4, 4], [4, 5], [5, 5]]);