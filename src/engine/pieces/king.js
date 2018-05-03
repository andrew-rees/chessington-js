import Piece from './piece';
import Square from '../square';
import Board from '../board';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let myPosition = board.findPiece(this); //myPosition equals the place on this board where this findPiece places me right now
        let possibleSquares = new Array();

        let kingMoves = [
            //r+1, c+1
            new Square (myPosition.row+1, myPosition.col+1),
            //r+1, c-1
            new Square (myPosition.row+1, myPosition.col-1),
            //r-1, c+1
            new Square (myPosition.row-1, myPosition.col+1),
            //r-1, c-1
            new Square (myPosition.row-1, myPosition.col-1),
            //r = x, c+1
            new Square (myPosition.row, myPosition.col+1),
            //r = x, c-1
            new Square (myPosition.row, myPosition.col-1),
            //r+1, c=x
            new Square (myPosition.row+1, myPosition.col),
            //r-1, c=x
            new Square (myPosition.row-1, myPosition.col)
        ]
        
        kingMoves.forEach(move => {
            if (move.isOnBoard() && !board.isOccupied(move)) {
                possibleSquares.push(move)
            }
        });

        return possibleSquares;
    }
}
