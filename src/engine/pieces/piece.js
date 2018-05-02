export default class Piece {
    constructor(player) {
        this.player = player;
        this.hasEverMoved = false; // starts out having never moved
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        // record that we have ever moved?
        this.hasEverMoved = true; //  changes property of piece to say it has moved - this will remain true
        board.movePiece(currentSquare, newSquare);
    }
}
