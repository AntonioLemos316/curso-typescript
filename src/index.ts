// Tipos básicos

let age: number = 5;
const firstName: string = 'Lemos'
const isValid: boolean = true
let idk: any = 5 // evitar usar o any

const ids: number[] = [1, 2, 3, 4, 5]
const booleans: boolean[] = [true, false, false, true]
const firstNames: string[] = ["Lemos", "Oliveira"]

// Tupla
const person: [number, string] = [1, ''] // garantir a orden da lista

// Lista de tuplas
const people: [number, string][] = [
    [1, "teste01"],
    [2, "teste02"],
    [3, "teste03"]
]

// Intersections
const productId: string | number | boolean = 2 // dualidade de tipos, evitar usar pois causa o mesmo problema do any

// Enum usado para atribuir um valor a outro valor
enum Direction {
    Up = 1,
    Down = -1,
    Left = 'Esquerda'
}

const direction = Direction.Left

// Type Assertions mudar tipos de uma variavel
const productName: any = 'Boné'

// let itemId = productName as string
let itemId = <string>productName // forma mais bonita de fazer a mesma coisa da linha 37

console.log(direction);