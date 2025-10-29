#!/usr/bin/env node

const {program} = require('commander');
const fs = require('fs');

program
.name('wordcount')
.description('Counts the word from a file.')
.version('1.0.0');

program
.argument('<file>', 'File to count word from')
.action((file)=>{
    try{
        const data = fs.readFileSync(file,'utf8');
        const words = data.trim().split(/\s+/);
        console.log(`Word Count: ${words.length}`);
    } catch(err){
        console.error('Error reading file. Check the file path.');
    }
});

program.parse(process.argv);
