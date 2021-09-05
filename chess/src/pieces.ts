type _Color = 'Black' | 'White'
type _File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type _Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

// Each piece will have a position
class Position {

    constructor(
        private file: _File,
        private rank: _Rank
    ) {}

    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}

// Cannot instantiate an abstract class, must be inherited to be instantiated
abstract class Piece {

    // Properties
    protected position: Position

    // Constructor
    constructor(
        private readonly color: _Color,
        file: _File,
        rank: _Rank
    ) {
        this.position = new Position(file, rank)
    }

    // Methods
    moveTo(position: Position){
        this.position = position
    }

    abstract canMoveTo(position: Position): boolean
}

// The pieces are defined here, and are the only classes that need to be 
// exported to the main program driver (index.ts)
export class King extends Piece {

    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}

export class Queen extends Piece {
    
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 8 || distance.file < 8
    }
}

export class Bishop extends Piece {

    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 8 && distance.file < 8
    }
}

export class Knight extends Piece {

    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return (distance.rank < 3 && distance.file < 1) || 
               (distance.rank < 1 && distance.file < 3) 
    }
}

export class Rook extends Piece {

    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return (distance.rank < 8 && distance.file < 1) ||
               (distance.rank < 1 && distance.file < 8)
    }
}

export class Pawn extends Piece {

    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2
    }
}
