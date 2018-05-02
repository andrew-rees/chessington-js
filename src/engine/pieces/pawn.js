import Piece from './piece';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return new Array(new Square(1, 0), new Square(6, 7), new Square(4, 4)); 
    }
}
