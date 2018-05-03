import Piece from './piece';
import Square from '../square';
import Board from '../board';

export default class Rook extends Piece {
    constructor(player) {
        super(player); 
    }

    getAvailableMoves(board) {
        let myPosition = board.findPiece(this);
        //let nextSquares = new Square(myPosition.row /*??*/, myPosition.col /*??*/);

        let possibleSquares = new Array();

        for (let i = 0; i <= 7; i++) {// we want to define a new Square 8 times for a column
            if (i !== myPosition.col) {//as long as we don't count our current column
                possibleSquares.push(new Square(myPosition.row, i))//add a new object to the array on same row but with +1 in column
            }
            
        }
        for (let i = 0; i <= 7; i++) {// we want to define a new Square 8 times for a row
            if (i !== myPosition.row) {//as long as we don't count our current row
                possibleSquares.push(new Square(i, myPosition.col))//add a new object to the array on same column but with +1 in row
            }

            
        }
       return possibleSquares // the array of possible squares 
    }
    
}

//1) define myPosition
//2) define possibleSquares
// 4) return new Array/new Square



