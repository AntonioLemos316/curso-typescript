"use strict";
// Tipos básicos
let age = 5;
const firstName = 'Lemos';
const isValid = true;
let idk = 5; // evitar usar o any
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, false, true];
const firstNames = ["Lemos", "Oliveira"];
// Tupla
const person = [1, '']; // garantir a orden da lista
// Lista de tuplas
const people = [
    [1, "teste01"],
    [2, "teste02"],
    [3, "teste03"]
];
// Intersections
const productId = 2; // dualidade de tipos, evitar usar pois causa o mesmo problema do any
// Enum usado para atribuir um valor a outro valor
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = -1] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Left;
console.log(direction);
