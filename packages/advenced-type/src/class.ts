export default '';
type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [
      new King('White', 'E', 1),
      new King('Black', 'E', 8),

      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),

      new Bishop('White', 'C', 1),
      new Bishop('Black', 'F', 8),
      new Bishop('White', 'C', 1),
      new Bishop('Black', 'F', 8)
    ]
  }
}

abstract class Piece {
  protected position : Position
  constructor(private readonly color : Color, file : File, rank : Rank) {
    this.position = new Position(file, rank)
  }

  moveTo(position : Position) {
    this.position = position
  }

  abstract canMoveTo(position : Position) : boolean
}

class Position {
  constructor(private file : File, private rank : Rank) {}

  distanceFrom(position : Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    }
  }
}

class King extends Piece {
  canMoveTo(position : Position) : boolean {
    let distance = this
      .position
      .distanceFrom(position)return distance
      .rank < 2 && distance.file < 2
  }
}

class Queen extends Piece {
  canMoveTo(position : Position) : boolean {
    let distance = this
      .position
      .distanceFrom(position)return distance
      .rank < 2 && distance.file < 2
  }
}
class Bishop extends Piece {
  canMoveTo(position : Position) : boolean {
    let distance = this
      .position
      .distanceFrom(position)return distance
      .rank < 2 && distance.file < 2
  }
}
class Knight extends Piece {
  canMoveTo(position : Position) : boolean {
    let distance = this
      .position
      .distanceFrom(position)return distance
      .rank < 2 && distance.file < 2
  }
}
class Rook extends Piece {
  canMoveTo(position : Position) : boolean {
    let distance = this
      .position
      .distanceFrom(position)return distance
      .rank < 2 && distance.file < 2
  }
}
class Pawn extends Piece {
  canMoveTo(position : Position) : boolean {
    let distance = this
      .position
      .distanceFrom(position);
    return distance.rank < 2 && distance.file < 2
  }
}

let set = new Set
set
  .add(1)
  .add(2)
  .add(3)
set.has(2)
set.has(4)

class Tes {
  has(value : number) : boolean {return true}
add(value : number) : Tes {return this}
}

class MutableTes extends Tes {
delete(value : number) : boolean {return true}
add(value : number) : MutableTes {return this}
}