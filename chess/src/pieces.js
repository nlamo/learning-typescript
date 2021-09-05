"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = exports.Rook = exports.Knight = exports.Bishop = exports.Queen = exports.King = void 0;
// Each piece will have a position
var Position = /** @class */ (function () {
    function Position(file, rank) {
        this.file = file;
        this.rank = rank;
    }
    Position.prototype.distanceFrom = function (position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        };
    };
    return Position;
}());
// Cannot instantiate an abstract class, must be inherited to be instantiated
var Piece = /** @class */ (function () {
    // Constructor
    function Piece(color, file, rank) {
        this.color = color;
        this.position = new Position(file, rank);
    }
    // Methods
    Piece.prototype.moveTo = function (position) {
        this.position = position;
    };
    return Piece;
}());
// The pieces are defined here, and are the only classes that need to be 
// exported to the main program driver (index.ts)
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    King.prototype.canMoveTo = function (position) {
        var distance = this.position.distanceFrom(position);
        return distance.rank < 2 && distance.file < 2;
    };
    return King;
}(Piece));
exports.King = King;
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Queen.prototype.canMoveTo = function (position) {
        var distance = this.position.distanceFrom(position);
        return distance.rank < 8 || distance.file < 8;
    };
    return Queen;
}(Piece));
exports.Queen = Queen;
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bishop.prototype.canMoveTo = function (position) {
        var distance = this.position.distanceFrom(position);
        return distance.rank < 8 && distance.file < 8;
    };
    return Bishop;
}(Piece));
exports.Bishop = Bishop;
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Knight.prototype.canMoveTo = function (position) {
        var distance = this.position.distanceFrom(position);
        return (distance.rank < 3 && distance.file < 1) ||
            (distance.rank < 1 && distance.file < 3);
    };
    return Knight;
}(Piece));
exports.Knight = Knight;
var Rook = /** @class */ (function (_super) {
    __extends(Rook, _super);
    function Rook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rook.prototype.canMoveTo = function (position) {
        var distance = this.position.distanceFrom(position);
        return (distance.rank < 8 && distance.file < 1) ||
            (distance.rank < 1 && distance.file < 8);
    };
    return Rook;
}(Piece));
exports.Rook = Rook;
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pawn.prototype.canMoveTo = function (position) {
        var distance = this.position.distanceFrom(position);
        return distance.rank < 2;
    };
    return Pawn;
}(Piece));
exports.Pawn = Pawn;
