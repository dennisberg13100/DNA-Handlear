#! /usr/bin/env node 

import { writeFile } from 'fs'

function createDNA(size) {
    const nucleotides = ['A', 'G', 'C', 'T']
    var dna = ''

    for (var i = 0; i < size; i++) {
        let randomNumber = Math.floor(Math.random()*4)
        let randomNucleotide = nucleotides[randomNumber]
        dna += randomNucleotide
    }  

    return dna
}

/*
 * 30.000.000 (29 Megabyte) foi 300.000.000 cracheou
 * O DNA humano com 3 bilhões de nucleotiedeos ocyparia 3 GigaBytes
 */ 

let dna = createDNA(50)


writeFile('DNA.txt', dna, (err) => {if (err) return console.log(err)})

//fs.write('dna.txt', dna, (err) => console.log(err))
