const fs = require('fs')
const chalk = require('chalk')

const addnotes = (title,body) => {
const notes = loadnotes()
const duplicatenotes = notes.filter((note) =>  note.title===title)
if(duplicatenotes.length===0){
     notes.push({
          title:title,
          body:body
     })
     console.log(chalk.green.inverse('Note is added'))
}else{
     console.log(chalk.red.inverse('Note title is already taken'))
}

savenotes(notes)
}

const savenotes = function(notes){
     const datajson = JSON.stringify(notes)
     fs.writeFileSync('notes.json',datajson)
}
const loadnotes = () => {
  
     try{
          const databuffer = fs.readFileSync('notes.json')
          const data = databuffer.toString()
          return JSON.parse(data)
     }
     catch(e){
return []
     }
  

}

const removenotes = (title) =>{
     const notes = loadnotes()
     const keepnotes = notes.filter((note) => note.title!==title
)
     if(keepnotes.length==notes.length){
          console.log(chalk.red.inverse('No such note exsits!'))
     }else{
          console.log(chalk.green.inverse('Note has been removed successfully!'))
     }
     savenotes(keepnotes)

}

const listnotes = () =>{
     const notes = loadnotes()
     console.log(chalk.blue.inverse('Your notes'))
     
     notes.forEach(note => {
         console.log(note.title) 
     })
}

const readnotes = (title) => {
     const notes = loadnotes()
     const findnote = notes.find((note) => note.title==title)
     if(findnote){
          console.log('Title : '+chalk.blue.inverse(findnote.title)+'   Body : '+findnote.body) 
     }
     else{
          console.log(chalk.red('Note not found!'))
     }
}


module.exports={

 addnotes: addnotes,
 removenotes : removenotes,
 listnotes : listnotes,
 readnotes : readnotes
}