#! /usr/bin/env node

/**
 * A menor unidade em que conseguimos trabalhar em JS são 2 bytes (8 bits)
 *
 * Duas fubções auxiliare:
 * - bin2dec converte valers binarios(string) para valeris decimais Int
 * - coverte valore decimais (2 bytes/ 255) para valores binários 
 */

export function bin2dec(bin) {
   let integer = 0
   
   for ( let i = 0; i < bin.length; i++ ){
    if (bin[i] !== '1' && bin[i] !== '0') {
        return "Sorry but this is not valid a binary number"
    }
   }

   for ( let i = 0; i < bin.length; i++ ){
    let reversIndex = bin.length-i
    let multiplier =  Math.pow(2, reversIndex - 1)
    integer += bin[i] * multiplier
   }

   return integer
}

export function byteDec2bin(bytDec) {
    
    let bin = ''

    for ( let i = 7; i >= 0; i-- ){
        let multiplier =  Math.pow(2, i)
        console.log(multiplier)
        if (bytDec >= multiplier ) {
            bytDec -= multiplier
            bin += '1'
        } else{
            bin += '0'
        }
        console.log(bytDec)
    }

    return bin
}
