"use strict";
// Programming TypeScript: Chapter 5 - Classes and Interfaces
Object.defineProperty(exports, "__esModule", { value: true });
// This chess engine was started by the author, but he proposes that:
// "If you're amibitious, see if you can use what we've done so far as a starting
//  point to implement the rest of the game yourself."
// Good idea! I have started upon on this task.
var pieces_1 = require("./pieces");
var Game = /** @class */ (function () {
    function Game() {
        this.pieces = Game.makePieces();
    }
    Game.makePieces = function () {
        return [
            new pieces_1.King('White', 'E', 1),
            new pieces_1.King('Black', 'E', 8),
            new pieces_1.Queen('White', 'D', 1),
            new pieces_1.Queen('Black', 'D', 8),
            new pieces_1.Bishop('White', 'C', 1),
            new pieces_1.Bishop('White', 'F', 1),
            new pieces_1.Bishop('Black', 'C', 8),
            new pieces_1.Bishop('Black', 'F', 8),
            new pieces_1.Knight('White', 'B', 1),
            new pieces_1.Knight('White', 'G', 1),
            new pieces_1.Knight('Black', 'B', 8),
            new pieces_1.Knight('Black', 'G', 8),
            new pieces_1.Rook('White', 'A', 1),
            new pieces_1.Rook('White', 'H', 1),
            new pieces_1.Rook('Black', 'A', 8),
            new pieces_1.Rook('Black', 'H', 8),
            new pieces_1.Pawn('White', 'A', 2),
            new pieces_1.Pawn('White', 'B', 2),
            new pieces_1.Pawn('White', 'C', 2),
            new pieces_1.Pawn('White', 'D', 2),
            new pieces_1.Pawn('White', 'E', 2),
            new pieces_1.Pawn('White', 'F', 2),
            new pieces_1.Pawn('White', 'G', 2),
            new pieces_1.Pawn('White', 'H', 2),
            new pieces_1.Pawn('Black', 'A', 7),
            new pieces_1.Pawn('Black', 'B', 7),
            new pieces_1.Pawn('Black', 'C', 7),
            new pieces_1.Pawn('Black', 'D', 7),
            new pieces_1.Pawn('Black', 'E', 7),
            new pieces_1.Pawn('Black', 'F', 7),
            new pieces_1.Pawn('Black', 'G', 7),
            new pieces_1.Pawn('Black', 'H', 7),
        ];
    };
    return Game;
}());
var game = new Game();
