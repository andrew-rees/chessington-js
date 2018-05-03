import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let myPosition = board.findPiece(this); //myPosition equals the place on this board where this findPiece places me right now
        let possibleSquares = new Array();
        
        
        //R+1, C+2//
        possibleSquares.push(new Square (myPosition.row+1, myPosition.col+2));

        //R-1, C+2//
        possibleSquares.push(new Square (myPosition.row-1, myPosition.col+2));

        //R-1, C-2//
        possibleSquares.push(new Square (myPosition.row-1, myPosition.col-2));

        //R+1, C-2//
        possibleSquares.push(new Square (myPosition.row+1, myPosition.col-2));

        //R+2, C+1//
        possibleSquares.push(new Square (myPosition.row+2, myPosition.col+1));

        //R+2, C-1//
        possibleSquares.push(new Square (myPosition.row+2, myPosition.col-1));

        //R-2, C+1//
        possibleSquares.push(new Square (myPosition.row-2, myPosition.col+1));

        //R-2, C-1//
        possibleSquares.push(new Square (myPosition.row-2, myPosition.col-1));



        return possibleSquares;
    }
}
