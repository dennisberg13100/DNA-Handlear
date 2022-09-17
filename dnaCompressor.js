#! /usr/bin/env node

import * as binFunctions from './binaryFunctions.js';
import { writeFile, readFile, readFileSync } from 'fs'

/* *
 * Importação co modulo foi realixada com sucesso 
 */

/* console.log(binFunctions.byteDec2bin('123'))
console.log(binFunctions.bin2dec('01111011'))
 */
// Abrir o aqrquivo de DNA 

let dna = readFileSync('DNA.txt', 'utf-8')

function sliceInFours(array){
    let slicedArray = []

    for (let i = 0; i< array.length; i += 4) {
        slicedArray.push(array.slice(i,i + 4))
    }
    return slicedArray
}

let slicedDna = sliceInFours(dna)
let remaningNucleotidesOnLatSlice = 0

while (slicedDna.at(-1).length < 4 ){
    remaningNucleotidesOnLatSlice++
    slicedDna[slicedDna.length-1] = slicedDna.at(-1) + "A"
}

let binDna = slicedDna.map((dna) => {
    let bin = ''
    bin = dna.replaceAll('A', "00")
    bin = bin.replaceAll('G', "01")
    bin = bin.replaceAll('C', "10")
    bin = bin.replaceAll('T', "11")
    return bin
})

let decDna = new Uint8Array(binDna.length)

binDna.forEach((bin, index)=> {
    let value = binFunctions.bin2dec(bin)
    decDna[index] = value
}); 

console.log(slicedDna)
console.log(binDna)
console.log(decDna)
console.log(remaningNucleotidesOnLatSlice)
//console.log(sliceInFours(dna))
//console.log(dna)