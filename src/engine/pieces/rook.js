import Piece from './piece';
import Square from '../square';
import Player from '../player';
import Board from '../board';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let myPosition = board.findPiece(this);
        //let nextSquares = new Square(myPosition.row /*??*/, myPosition.col /*??*/);

        let possibleSquares = new Array();

        ///////////////////////
        //FOR MOVING NORTH//
        //////////////////////

        for (let i = 1; i <= 7; i++) { // we want to define a new Square 8 times for a column
            let rookSquare = new Square(myPosition.row, myPosition.col+i)
            if (rookSquare.isOnBoard() && board.isOccupied(rookSquare) === false) { //as long as we don't count our current column
                possibleSquares.push(rookSquare) //add a new object to the array on same row but with +1 in column
            } else {
                break
            }
        }

        ////////////////////
        //FOR MOVING SOUTH//
        ////////////////////

        for (let i = 1; i <= 7; i++) { // we want to define a new Square 8 times for a column
            let rookSquare = new Square(myPosition.row, myPosition.col-i)
            if (rookSquare.isOnBoard() && board.isOccupied(rookSquare) === false) { //as long as we don't count our current column
                possibleSquares.push(rookSquare) //add a new object to the array on same row but with +1 in column
            } else {
                break
            }
        }       


        ////////////////////
        //FOR MOVING EAST//
        ///////////////////

        for (let i = 1; i <= 7; i++) { // we want to define a new Square 8 times for a column
            let rookSquare = new Square(myPosition.row+i, myPosition.col);
            if (rookSquare.isOnBoard() && board.isOccupied(rookSquare) === false) { //as long as we don't count our current column
                possibleSquares.push(rookSquare); //add a new object to the array on same row but with +1 in column
            } else {
                break
            }
        }


        ////////////////////
        //FOR MOVING WEST//
        ///////////////////

        for (let i = 1; i <= 7; i++) { // we want to define a new Square 8 times for a column
            let rookSquare = new Square(myPosition.row-i, myPosition.col)
            if (rookSquare.isOnBoard() && board.isOccupied(rookSquare) === false) { //as long as we don't count our current column
                possibleSquares.push(rookSquare) //add a new object to the array on same row but with +1 in column
            } else {
                break
            }
        }

        return possibleSquares // the array of possible squares 
    }

}