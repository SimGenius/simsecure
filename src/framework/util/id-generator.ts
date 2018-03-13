import * as UUID from "uuidjs";

// const m = {
//     "0": 0,
//     "1": 1,
//     "2": 2,
//     "3": 3,
//     "4": 4,
//     "5": 5,
//     "6": 6,
//     "7": 7,
//     "8": 8,
//     "9": 9,
//     "a": 10,
//     "b": 11,
//     "c": 12,
//     "d": 13,
//     "e": 14,
//     "f": 15,
//     "A": 10,
//     "B": 11,
//     "C": 12,
//     "D": 13,
//     "E": 14,
//     "F": 15,
// }

// let getCompressedCode = function (char1: number, char2: number): number {
//     let base = 'a'.charCodeAt(0)

//     return map[char1.charCodeAt(0) -]
// }


let a = 'a'.charCodeAt(0)
let z = 'z'.charCodeAt(0)
let A = 'A'.charCodeAt(0)
let Z = 'Z'.charCodeAt(0)
let _0 = '0'.charCodeAt(0)
let _9 = '_9'.charCodeAt(0)

const reverseMap = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F'
]

let getCharCode = function (char: string): number {
    let c = char.charCodeAt(0)
    if (c > a && c < z) {
        return c - a + 10
    } else if (c > A && c < Z) {
        return c - A + 10
    } else {
        return c - _0
    }
}

let stringCompress = function (str: string): string {
    let base = '0'.charCodeAt(0)
    let result = ''
    for (let i = 0; i < 16; i++) {
        let charCodeL = getCharCode(str.charAt(i * 2))
        let charCodeR = getCharCode(str.charAt(i * 2 + 1))


        // let charCode = str.charCodeAt(i * 2) + str.charCodeAt(i * 2 + 1) - 2 * base
        result += reverseMap[charCodeL+charCodeR]
    }
    return result
}

export function generateId(): string {
    let uuid = UUID.generate().replace(/\-/g, '').toUpperCase()
    return stringCompress(uuid)
}

