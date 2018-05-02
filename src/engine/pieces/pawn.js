import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) { //function to find the possible moves of the Piece(Pawn). Needs info from board.

        //defines operator based on player colour
        let playerOperator
            if (this.player === Player.WHITE) {
                playerOperator = (a, b) => {return a + b}
            } else if (this.player === Player.BLACK) {
                playerOperator = (a, b) => {return a - b}
            }
            else {
                Console.log("Oops, there's been an error.")
            }
        let myPosition = board.findPiece(this); //defines current Position as the findPiece method of the board class, of 'this' piece
        let nextSquare = new Square(playerOperator(myPosition.row, 1), myPosition.col);// defines next square of this piece, as current row + 1, and same column.
        let nextSquareFirst = new Square(playerOperator(myPosition.row, 2), myPosition.col);
        if(this.player === Player.WHITE) { //player.white is a field on player that defines white.
            // this is a white piece
            if (this.hasEverMoved === false) {
                return new Array (nextSquareFirst, nextSquare);//???? allow new Square to be nextSquareAny or nextSquareFirst
            } else if (this.hasEverMoved === true) {
                return new Array (nextSquare); //???? allow new sqaure to be nextSquareAny// has not moved...
            }
                else {
                    console.log ("Oops, there's been an error.")
            }
        } else { //assumes black
            // this is a black piece
            if (this.hasEverMoved === false) {
                return new Array (nextSquareFirst, nextSquare);//???? allow new Square to be nextSquareAny or nextSquareFirst
                } else if (this.hasEverMoved === true) {
                return new Array (nextSquare); //???? allow new sqaure to be nextSquareAny// has not moved...
                }
                else {
                console.log ("Oops, there's been an error.")
                }

        }


        
            

        //return new Array(new Square(1, 0), new Square(6, 7), new Square(4, 4)); //defines new squares that the piece can move to.
    }
}

