import Piece from './piece';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let myPosition = board.findPiece(this); //myPosition equals the place on this board where this findPiece places me right now
        let possibleSquares = new Array(); // creating a blank array called possibleSquares to be filled with the possible square objects generated below

        for (let i = 1; i <= 7; i++) { // we want to define a new Square 8 times for a column
            if (myPosition.row+i <= 7 && myPosition.col+i <=7) { //as long as we don't count our current column
                possibleSquares.push(new Square(myPosition.row+i, myPosition.col+i)) //
            }

        }
        for (let i = 1; i <= 7; i++) { // we want to define a new Square 8 times for a row
            if (myPosition.row-i >= 0 && myPosition.col+i <=7) { //as long as we don't count our current row
                possibleSquares.push(new Square(myPosition.row-i, myPosition.col+i)) //??
            }
 
        }
        for (let i = 1; i <= 7; i++) { // we want to define a new Square 8 times for a row
            if (myPosition.row-i >= 0 && myPosition.col-i >=0) { //as long as we don't count our current row
                possibleSquares.push(new Square(myPosition.row-i, myPosition.col-i)) //??
            }
 
        }
        for (let i = 1; i <= 7; i++) { // we want to define a new Square 8 times for a row
            if (myPosition.row+1 <= 7 && myPosition.col-i >=0) { //as long as we don't count our current row
                possibleSquares.push(new Square(myPosition.row+i, myPosition.col-i)) //??
            }
 
        }
        return possibleSquares;
    }
}




//1) define myPosition
//2) define possibleSquares
// 4) return new Array/new Square