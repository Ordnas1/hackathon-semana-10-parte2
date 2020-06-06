// ejer 1
let ejer1 = (nombre, apellido, edad) => `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad} años`

// ejer 2
function sumarCubos(num1,num2,num3) {
    return num1 ** 3 + num2 ** 3 + num3 ** 3
}

// ejer 3
function tipoDato(vari) {
    return `Tipo: ${typeof vari}`
}

function ejer3() {
    let tipos = [false, null, undefined, 3, "sandro", Symbol("sym"),{}]
    tipos.forEach(element => {
        console.log(tipoDato(element))
    });
}

// ejer 4
function sumar(...numeros) {
    return numeros.reduce((result,i) => {
        return result + i
    })
}

// ejer 5
function filtrarString(arr) {
    return arr.filter(element => typeof element === "string")
}

// ejer 6
function minMax(arr) {
    let arrSort = arr.sort((a,b) =>  a > b ? 1 : -1 )
    let min = arrSort[0]
    let max = arrSort[arrSort.length - 1]
    return [min, max]
}

// ejer 7
function phoneNumber(arr) {
    let full = arr.join("")
    return `(${full.substring(0,3)}) ${full.substring(3,6)}-${full.substring(6,10)}`
}

// ejer 8

function findLargestNums(arr) {
    let largest = arr.map(array => {
        return array.reduce((max, curr) => max > curr ? max : curr )
    })
    return largest
}

// ejer 9
function charIndex(string, char) {
    let min, max

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == char) {
            min = i;
            break;
        } 
    }

    for (let i = string.length -1; i >= 0 ; i--) {
        if (string.charAt(i) == char) {
            max = i;
            break;
        }
    }
    return [min, max]
}

// ejer 10

function toArray(obj) {
    let arr = []
    
    for (prop in obj) {
        
        arr.push([prop, obj[prop]])
    }

    return arr
}

// ejer 11

function getBudgets(arr) {
    return arr.reduce((totalBudget,person) => {
        return totalBudget + person.budget},0)
}

// ejer 12

function getStudentNames(arr) {
    let arrnames = arr.map(obj => obj.name)
    return arrnames
}

// ejer 13

function objectToArray(obj) {
    let arr = []
    
    for (prop in obj) {
        
        arr.push([prop, obj[prop]])
    }

    return arr
}

// ejer 14

function squaresSum(n) {
    return n * (n + 1) * (2*n + 1 ) / 6 // Suma de los cuadrados de los n primeros naturales
}

// ejer 15 

function multiplyByLength(arr) {
    return arr.map(elem => elem * arr.length)
}

// ejer 16

function countdown(n) {
    let arr = [] 
    for (let i = n; i >= 0; i--) {
        arr.push(i)
    }

    return arr
}

// ejer 17

function diffMaxMin (arr) {
    let minmaxArr = minMax(arr) //funcion ejer 6
    return minmaxArr[1] - minmaxArr[0]
}

// ejer 18

function filterList(arr) {
    return arr.filter(element => typeof element === "number")
}

// ejer 19 

function repeat(elem, time) {
    let arr = []
    for (let i = 0; i < time; i++) {
        arr.push(elem)
    } 
    return arr
}

// ejer 20

function vreplace(char) {
    
    return this.replace(/a|e|i|o|u/gi, char)
}

String.prototype.vreplace = vreplace

// ejer 21 

function findNemo(str) {
    let wordArr = str.split(" ")

    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] == "Nemo" || wordArr[i] == "nemo") {
            return `¡Encontré a Nemo en el ${i+1}!`
        }
    }
}

// ejer 22

function capLast(str) {
    return str.slice(0,str.length - 1) + str.charAt(str.length - 1).toUpperCase()
}