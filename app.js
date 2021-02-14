const yargs= require('yargs')
const chalk=require('chalk')
const string = require('./notes.js')
const { argv } = require('yargs')
const { addnotes } = require('./notes.js')
const notes = require('./notes.js')
 yargs.version('1.1.0')
 yargs.command({
command:'add',
describe:'Adding a note',
builder:{
  title:{
    describe:'Note Title',
    demandOption:true,
    type:'string'
  },
  body:{ 
    describe:'Note Body',
    demandOption:true,
    type:'string'

  }
},
handler(){
 notes.addnotes(argv.title,argv.body)
}
 })

 yargs.command({
   command:'remove',
   describe:'Removing a note',
   builder:{
    title:{
      describe:'Note Title',
      demandOption:true,
      type:'string'
    }
  },
   handler(argv){
     notes.removenotes(argv.title)
   }
 })

 yargs.command({
   command:'list',
   describe:'Listing a note',
   handler(){
    notes.listnotes()
   }
 })

 yargs.command({
   command:'read',
   describe:'Reading a list',
   builder: {
     title: {describe:'Note Title',
     demandOption:true,
     type:'string'}
   },
   handler(argv){
     notes.readnotes(argv.title)
   }
 })
yargs.parse()
